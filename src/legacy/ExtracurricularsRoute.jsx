import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { TAGS } from './Data/tags.js';
import { KLYRA_EXTRACURRICULARS } from './Data/klyraExtracurriculars.js';
import { withVerifiedLogo } from './Data/logoOverrides.js';
import { OCTOBER_EXTRACURRICULARS } from './Data/octoberExtracurriculars.js';
import { appendUniqueOpportunities } from './Data/mergeOpportunities.js';
import Extracurriculars from './Pages/Extracurriculars.jsx';
import ecs130 from './Images/ecs130.json';
import React from 'react';

// Merge partner (Klyra) opportunities with the existing database, skipping any
// activity that already exists by name or destination link.
function withPartnerECs(existing) {
  const verifiedExisting = existing.map(withVerifiedLogo);
  const seenNames = new Set(
    verifiedExisting.map((ec) => (ec.name || '').toLowerCase().replace(/[^a-z0-9]/g, '')),
  );
  const seenLinks = new Set(
    verifiedExisting.map((ec) => (ec.link || '').toLowerCase().replace(/\/+$/, '')),
  );
  const additions = KLYRA_EXTRACURRICULARS.filter(
    (ec) =>
      !seenNames.has(ec.name.toLowerCase().replace(/[^a-z0-9]/g, '')) &&
      !seenLinks.has(ec.link.toLowerCase().replace(/\/+$/, '')),
  ).map(withVerifiedLogo);
  return appendUniqueOpportunities([...verifiedExisting, ...additions], OCTOBER_EXTRACURRICULARS);
}

// State and handlers ported 1:1 from the original App.jsx so both
// /extracurriculars and /ecs behave exactly like the original app.
function ExtracurricularsRoute() {
  const [filterConfig, setFilterConfig] = useState(TAGS);
  const [extracurricularsArray, setExtracurricularsArray] = useState([]);
  const [burnerArray, setBurnerArray] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [loading, setLoading] = useState(true);

  // Search Bar Functionality
  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = extracurricularsArray.filter(
      (extracurricular) =>
        extracurricular.description.toLowerCase().includes(searchTerm) ||
        extracurricular.name.toLowerCase().includes(searchTerm),
    );
    setBurnerArray(filteredData);
  }

  const toggleValueByName = (arr, name) => {
    return arr.map((obj) => {
      if (obj.name === name) {
        return {
          ...obj,
          value: !obj.value,
        };
      }
      return obj;
    });
  };

  const handleFilterChange = (name) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: !prevValues[name],
    }));

    setFilterConfig(toggleValueByName(filterConfig, name));
  };

  // RESET FILTER VALUES
  function resetFilterValues() {
    setFilterValues({});
    handleFilterChange(null); // Activate the check filter function to clear the filters

    setFilterConfig((prevConfig) =>
      prevConfig.map((filter) => {
        return {
          ...filter,
          value: false,
        };
      }),
    );

    console.log(filterConfig);
  }

  // Take data from firebase firestore on page load - done asynchronously
  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        // Sandboxed builds (the claude.ai artifact) can't reach Firebase.
        if (import.meta.env.VITE_SANDBOX) throw new Error('Using bundled data');
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const merged = withPartnerECs(data);
        setExtracurricularsArray(merged);
        setBurnerArray(merged);
        setLoading(false);
      } catch (error) {
        const merged = withPartnerECs(ecs130);
        setExtracurricularsArray(merged);
        setBurnerArray(merged);
        setLoading(false);
      }
    };

    fetchExtracurriculars();
  }, []);

  // Filtering functionality, runs everytime "EXTARCURRICULARSARRAY" and "FIILTER_VALUES" are changed
  useEffect(() => {
    const filteredData = extracurricularsArray.filter((ec) => {
      const ecTags = [
        ec.commitment,
        ec.environment,
        ...ec.location,
        ...ec.skill,
        ec.soloTeam,
        ec.type,
        ...ec.category,
        ...ec.grade,
        ...ec.subjects,
      ];

      return filterConfig.every(
        ({ name, tag }) => !filterValues[name] || ecTags.includes(tag),
      );
    });

    setBurnerArray(filteredData);
  }, [extracurricularsArray, filterValues]);

  function removeTag(tag) {
    const realtag = tag;
    const foundItem = filterConfig.find((item) => item.tag === realtag);
    let correspondingName;

    if (foundItem) {
      correspondingName = foundItem.name;
      console.log(correspondingName);
    } else {
      console.log('Tag not found');
    }

    handleFilterChange(correspondingName);
  }

  return (
    <Extracurriculars
      ecArray={burnerArray}
      resetValues={resetFilterValues}
      filterChange={handleFilterChange}
      checkVal={filterValues}
      searchChange={handleSearchChange}
      allFilters={filterConfig}
      removeTag={removeTag}
      loadingVal={loading}
    />
  );
}

export default ExtracurricularsRoute;
