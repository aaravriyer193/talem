import Footer from '../Components/common/Footer';
import { Helmet } from 'react-helmet';
import LandingHero from '../../components/talem/landing/LandingHero';
import FeatureBento from '../../components/talem/landing/FeatureBento';
import FolderTeaser from '../../components/talem/landing/FolderTeaser';
import FilterMarquee from '../../components/talem/landing/FilterMarquee';
import Community from '../../components/talem/landing/Community';
import Testimonials from '../../components/talem/landing/Testimonials';
import FinalCta from '../../components/talem/landing/FinalCta';


export default function Homepage() {
  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>Talem - #1 Resource for Highschool Extracurriculars & Internships</title>
        <meta charSet='utf-8'/>
        <meta name="description" content="Find hundreds of high-quality extracurriculars, internships, college-programs, resources, and more easily using our massive, free, and open-source databases."/>
        <link rel="canonical" href="https://talem.org" />
      </Helmet>

      <LandingHero />
      <FeatureBento />
      <FolderTeaser />
      <FilterMarquee />
      <Community />
      <Testimonials />
      <FinalCta />
      <Footer />
    </>
  );
}
