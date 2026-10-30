// applications.js

const applications = [
    {
      seo: 'MIT',
      schooltype: "ivy",
      applicationNumber: 0,
      title: 'CS Major Admitted to MIT & Multiple Ivies',
      demographics: {
        gender: "Male",
        raceEthnicity: "Asian",
        residence: "California",
        incomeBracket: 80000,
        typeOfSchool: "Public",
        hooks: "None",
        intendedMajor: "Computer Science",
      },
      academics: {
        gpa: 4.78,
        rank: 1,
        honorsAPCollegeClasses: 20,
        seniorYearCourseLoad: [
          "Linear Algebra (at local college)",
          "Differential Equations",
          "AP Physics C",
          "AP English 4",
          "AP Gov ",
          "AP Micro",
          "AP Biology",
          "AP Environmental Science",
          "AP Statistics",
        ],
      },
      standardizedTesting: {
        satScore: 1590,
        apScores: [
          { subject: "Human Geography", score: 5 },
          { subject: "Psychology", score: 5 },
          { subject: "Physics 1", score: 5 },
          { subject: "Physics 2", score: 5 },
          { subject: "Calculus BC", score: 5 },
          { subject: "World History", score: 5 },
          { subject: "US History", score: 5 },
          { subject: "Computer Science A", score: 5 },
          { subject: "Computer Science Principles", score: 5 },
          { subject: "English 3", score: 4 },
        ],
      },
      extracurriculars: [
        "Cofounder of an AI startup (12)",
        "AI research at a T5 over the summer (11)",
        "AI research at another T5 (10)",
        "CS research at my local college (9)",
        "President of my school's peer-tutoring program (Member 9, President 10-12)",
        "President of my school's CS club (Member 9, President 10-12)",
        "Physics club vice president (member 9-11, President 12)",
        "Volunteer at my local Buddhist temple (9-11)",
      ],
      awardsHonors: [
        "3x USACO plat (9,10,11)",
        "Winner of a prestigious national coding comp (11)",
        "Finalist in another prestigious tech comp (10)",
        "National Merit Semifinalist (11)",
      ],
      lettersOfRecommendation: [
        { subject: "Math Teacher", rating: 9, relationship: "Close, worked together for peer-tutoring program" },
        { subject: "English Teacher", rating: 7, relationship: "Active in class, less known than math teacher" },
        { subject: "Professor at T5", rating: 7, relationship: "Worked together on technical matters" },
      ],
      decisions: {
        'Early Action': {
          MIT: "Deferred",
          GeorgiaTech: "Accepted OOS",
          UTAustin: "Accepted OOS",
          UCBerkeley: "Accepted InState",
        },
        'Regular Decision': {
          Caltech: "Rejected",
          MIT: "Accepted",
          Cornell: "Accepted",
          Columbia: "Accepted",
          Princeton: "Accepted",
          Harvard: "Accepted",
          Stanford: "Rejected",
          CMU: "Waitlisted",
        },
      },
      "acceptedColleges": [
        "Harvard",
        "Princeton",
        "Columbia",
        "Cornell",
        "MIT",
        "Georgia Tech",
        "UTAustin",
        "UCBerkeley"
      ]
    },
    {
      seo: 'Georgia Tech',
      schooltype: "top-public", 
      applicationNumber: 1,
      title: 'Physics Major Admitted to UChicago ED2',
      demographics: {
        gender: "Male",
        raceEthnicity: "Asian",
        residence: "Midwest",
        incomeBracket: 175000,
        typeOfSchool: "Large public",
        hooks: "None",
        intendedMajor: "Physics",
      },
      academics: {
        gpa: 3.91,
        rank: null, 
        honorsAPCollegeClasses: 9,
        seniorYearCourseLoad: [
          "DE Multivariable Calc",
          "DE Linear Algebra",
          "DE Intro to Proofs",
          "DE Classical Physics (Mechanics)",
          "DE Classical Physics (E&M)",
          "DE Cultural Expressions in the French World",
          "DE French Cinema",
          "AP Chem",
          "AP Lit",
          "AP Gov",
          "Health",
          "Graphic Design",
        ],
      },
      standardizedTesting: {
        satScore: 1560,
        apScores: [
          { subject: "Physics 1", score: 5 },
          { subject: "Calc AB (subscore)", score: 5 },
          { subject: "Biology", score: 5 },
          { subject: "Lang", score: 5 },
          { subject: "Human Geo", score: 5 },
          { subject: "Psych", score: 5 },
          { subject: "Calc BC", score: 4 },
        ],
      },
      extracurriculars: [
        "Princeton summer research internship (MechE) - coauthor on publication",
        "Science Fair Project (engineering)",
        "Research Assistant at T100 state school (ChemE) - coauthor on patent",
        "Math Club Founder + President",
        "Science Olympiad Captain",
        "Club Soccer Captain",
        "Varsity Soccer",
        "Gymming Hobby",
        "Volunteer reading tutor with local nonprofit",
        "Weeklong STEM summer camp",
      ],
      awardsHonors: [
        "New York Times Student Editorial Contest Finalist (top 152 out of 12,500+ entries)",
        "Science Olympiad National Tournament event placements (ranging from 5th-20th)",
        "3rd in category at regional science fair",
        "National Merit Semifinalist",
        "Science Olympiad State Tournament event placements (multiple 1st places + more podiums)",
      ],
      lettersOfRecommendation: [
        { subject: "AP Physics Teacher", rating: 9, relationship: " specifically addresses why I want to major in physics and how I’ve explored it through enrichment opportunities in her class, took initiative to find physics competitions and helped her host them at our school" },
        { subject: "AP Lang Teacher", rating: 9, relationship: "included anecdotes about diligence/teamwork/kindness, my number one award came from an essay I wrote in this class so he was able to give more details about it" },
        { subject: "Counselor", rating: 8.5, relationship: "we talk a lot, added more substance to my activities by including anecdotes from my volunteer coordinator + soccer coach + Math Club sponsor" },
        { subject: "Princeton Prof.", rating: 8, relationship: "incorporated anecdotes from the postdoc I worked under, hope it was good as he said I did a good job after hearing my end-of-internship presentation and offered me coauthorship" },
      ],
      decisions: {
        'Early Action': {
          'University of Minnesota': "Accepted with 40k merit scholarship (OOS)",
          'University of Michigan': "Accepted (OOS)",
          'Georgia Tech': "Accepted with 80k merit scholarship (OOS)",
        },
        'Deferrals': {
          'Princeton': "Deferred",
        },
        'Rejections': {
          'None': "No rejections",
        },
      },
      withdrawn: [
        'Princeton',
        'Stanford',
        'Columbia',
        'University of Pennsylvania',
        'Johns Hopkins',
        'Cornell',
        'University of Southern California',
        'University of California schools',
        'Carnegie Mellon',
        'Boston University',
        'University of Washington, Seattle',
        'Case Western Reserve University',
      ],
      "acceptedColleges": [
        "Georgia Tech",
        "University of Michigan",
        "University of Minnesota"
      ]
    },
    {
      schooltype: "top-public",
      seo: 'Georgia Tech',
      applicationNumber: 2,
      title: 'Communications Major gets Georgia Tech Acceptance',
      demographics: {
        gender: "Nonbinary",
        raceEthnicity: "Asian + Latino",
        residence: "Maryland",
        incomeBracket: 150000,
        typeOfSchool: "Large public",
        hooks: "None",
        intendedMajor: "Communications",
      },
      academics: {
        gpa: 3.45,
        rank: null,
        honorsAPCollegeClasses: 12,
        seniorYearCourseLoad: [
          "AP Lit",
          "Quant Lit",
          "HON Forensic Science",
          "AP Human Geo",
          "Audio/Visual Internship",
          "TA for AP Lit teacher",
        ],
      },
      standardizedTesting: {
        satScore: 1340,
        actScore: 29,
        apScores: [
          { subject: "Gov", score: 5 },
          { subject: "U.S.", score: 5 },
          { subject: "Computer Science Principles", score: 3 },
          { subject: "Psych", score: 5 },
          { subject: "Lang", score: 4 },
          { subject: "Stat", score: 3 },
          { subject: "EnvSci", score: 4 },
          { subject: "World", score: 4 },
        ],
      },
      extracurriculars: [
        "Audio/Visual Club President",
        "Stage Manager",
        "Student Technical Director",
        "Quizbowl Head Captain",
        "Science Olympiad Secretary",
        "Audio/Visual Technician Intern at Church",
        "Student Advisory Board Committee Lead & Founding Member",
        "Student Co-Facilitator of Schoolwide Staff & Student Equity Retreat Program",
        "Volunteer",
        "Scout Troop Member",
      ],
      awardsHonors: [
        "National Hispanic Recognition Award",
        "Scouts Silver Award",
        "Scouts Bronze Award",
        "AP Scholar with Distinction",
        "AP Scholar with Honor",
      ],
      lettersOfRecommendation: [
        { subject: "Counselor", rating: 9, relationship: "Extensive interactions, witnessed growth" },
        { subject: "AP Stat Teacher", rating: 7.4, relationship: "Struggled but tried hard" },
        { subject: "Media Services Technician", rating: 8, relationship: "Close mentor, A/V club involvement" },
      ],
      essays: {
        supplementals: "Explored the difference between groups and teams, desire to create teams everywhere.",
        personalStatement: "Explored linguistic accuracy and specificity in describing personal identity, parallels between self and Percy Jackson, the chase of perfection, love for ancient Greek history, and the impact of mom's rejection of multiethnicity.",
      },
      decisions: {
        'Early Action': {
          'University of Minnesota': "Accepted with 40k merit scholarship (OOS)",
          'University of Michigan': "Accepted (OOS)",
          'Georgia Tech': "Accepted with 80k merit scholarship (OOS)",
        },
        'Deferrals': {
          'Princeton': "Deferred",
        },
        'Rejections': {
          'None': "No rejections",
        },
      },
      "acceptedColleges": [
        "Georgia Tech",
        "University of Michigan",
        "University of Minnesota"
      ]
    },
    {
      "schooltype": "ivy",
      "applicationNumber": 3,
      "seo": "Harvard",
      "title": "International Student gets Harvard Full Ride",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Indian International",
        "residence": "India",
        "incomeBracket": "25-30k/yr",
        "typeOfSchool": "N/A",
        "hooks": "N/A",
        "intendedMajor": "Computer Science"
      },
      "academics": {
        "gpa": 3.8,
        "rank": null,
        "honorsAPCollegeClasses": false,
        "seniorYearCourseLoad": [
          "CBSE curriculum",
          "CBSE Physics",
          "CBSE Chemistry",
          "CBSE Math",
          "CBSE Computer Science",
          "CBSE English"
        ]
      },
      "standardizedTesting": {
        "satScore": 1520,
        "actScore": 29,
        "apScores": [
          { "subject": "Chem", "score": 5 },
          { "subject": "Physics C Mech", "score": 5 },
          { "subject": "Computer Science A", "score": 5 },
          { "subject": "Physics C E&M", "score": "5" },
          { "subject": "Calc BC", "score": "5" },
          { "subject": "Psych", "score": "5" }
        ]
      },
      "extracurriculars": [
        "Lead Developer, app: Built productivity website with global reach.",
        "Founder, We Will Listen Initiative: Mental health non-profit with international podcast.",
        "High School President: Introduced mental health initiatives and new clubs.",
        "Founder and President, Debate Club: Led debate team to three best delegation awards in one year.",
        "MUNs and Debate: Multiple awards including international recognition.",
        "Volunteering: Taught mathematics and English to the underprivileged, organized mental health webinars.",
        "Web Development: Built personal portfolio, tic-tac-toe game, quiz app, and various projects.",
        "School Representative, Round Square International Conference: Attended by 1,400+ delegates from 36 countries.",
        "Internships: Web development intern at US-based tech firm and mobile app dev intern in India.",
        "Squash: Played for over 4 years."
      ],
      "awardsHonors": [
        "State Topper 10th Board exams (#1/~50,000).",
        "Qualifier for national olympiad (top 0.4%).",
        "MUN best delegate (international) and debate competition winner (state level).",
        "Principal’s all-rounder award.",
        "AP Scholar Award with Distinction.",
        "Zonal Bronze Medal at an English olympiad (intl rank 32)."
      ],
      "lettersOfRecommendation": [
        { "subject": "CS Teacher", "rating": 8, "relationship": "Known for more than 5 years." },
        { "subject": "Math Teacher", "rating": 7, "relationship": "Generic but decent." },
        { "subject": "School Counsellor", "rating": 9, "relationship": "Witnessed public speaking events and leadership roles." }
      ],
      "essays": {
        "supplementals": "Explored background and growing up in a terrorism-prone environment.",
        "personalStatement": "Discussed linguistic accuracy in personal identity, parallels with Percy Jackson, and the impact of living in a terrorism-prone environment."
      },
      "decisions": {
        "Early Action": {
          "Stanford": "Rejected",
          "UIUC": "Rejected",
          "UMich": "Deferred"
        },
        "Regular Decision": {
          "UW Madison": "Accepted",
          "ASU, PSU, MSU": "Accepted",
          "UChicago": "Rejected",
          "JHU": "Rejected",
          "Purdue": "Waitlisted",
          "Northeastern": "Waitlisted",
          "Northwestern": "Rejected",
          "Vanderbilt": "Rejected",
          "Dartmouth": "Rejected",
          "Duke": "Waitlisted",
          "Cornell": "Rejected",
          "UPenn": "Waitlisted",
          "Princeton": "Rejected",
          "Yale": "Rejected",
          "Harvard": "Accepted with Full Aid (Committed)"
        }
      },
      "acceptedColleges": [
          "Harvard",
          "UW Madison",
          "ASU",
          "PSU",
          "MSU"
        ]
    },
    {
      "schooltype": "top-public",
      "seo": "UT Austin",
      "applicationNumber": 4,
      "title": "International - Accepted to UT Austin for CS",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Asian",
        "residence": "Japan",
        "incomeBracket": "200k~",
        "typeOfSchool": "Private School",
        "hooks": "Single-Parent Household",
        "intendedMajor": "Computer Science",
      },
      "academics": {
        "gpa": 3.92,
        "rank": "7/126",
        "honorsAPCollegeClasses": "2 Honors, 8 APs",
        "seniorYearCourseLoad": [
          "Multivariable Calculus",
          "AP Chemistry",
          "AP Environmental Science",
          "Senior Capstone Computer Science",
          "AP English Literature & Composition"
        ]
      },
      "standardizedTesting": {
        "satScore": 1480,
        "apScores": [
          { "subject": "Computer Science A", "score": 4 },
          { "subject": "Calculus BC", "score": 5 }
        ],
      },
      "essays": {
        "commonAppEssay": "Discussed family support, personal struggles, and growth through activities (8/10)",
        "supplementalEssays": [
          "Mostly above average, highlighted how Battlefield 4 inspired me to learn CS.",
          "Best supplemental essay on leadership: Discussed transitioning from leading to collaborating with my team (7.5~8.5/10)"
        ]
      },
      "extracurriculars": [
        "Certifications in Linux, C++, Java: Self-studied and acquired certifications.",
        "Co-Founder and Executive Leader of a non-profit: Designed an online counseling website.",
        "Founder and President of Computer Programming Club: Organized group for students to learn programming.",
        "Founder and President of Research Club: Led STEM students in learning Linear Algebra and assisted in research.",
        "Software Engineering Internship: Implemented a new feature for a large-scale website.",
        "Research at Local Computer Company: Analyzed proficiency test data with Python and R.",
        "Leader of Robotics Team: Participated in a national robotics competition.",
        "Library Internship: Organized projects to attract students to read books.",
        "Student Adviser at Local Counseling Company: Hosted zoom information sessions about my boarding school.",
        "Taking care of Grandmother: Assisted with housework and emergencies."
      ],
      "awardsHonors": [
        "Congressional App Challenge Winner",
        "Japan Physics Olympiad Top 200 in Theoretical Problem Contest",
        "Cum Laude Society for Class of 2023 (Top 10% in Junior year)",
        "Distinguished Scholar"
      ],
      "lettersOfRecommendation": [
        { "subject": "AP Physics C E&M Teacher", "rating": 8.5, "relationship": "Hardworking student interested in physics." },
        { "subject": "History Teacher", "rating": 9, "relationship": "Diligent student leading class discussions." }
      ],
      "decisions": {
        "Early Action": {
          "UMD": "Accepted",
          "Virginia Tech": "Accepted",
          "UT Austin": "Accepted (Currently attending)"
        },
        "Regular Decision": {
          "UW Madison": "Rejected",
          "UW Seattle": "Rejected",
          "JHU": "Rejected",
          "UCSB": "Rejected",
          "UCSD": "Rejected",
          "UCLA": "Rejected",
          "Northwestern": "Rejected",
          "Rice": "Rejected",
          "CMU SCS": "Rejected",
          "Cornell": "Rejected",
          "Brown": "Rejected",
          "Princeton": "Rejected",
          "Yale": "Rejected",
          "UPenn": "Rejected",
          "UC Berkeley": "Rejected",
          "Duke": "Rejected",
          "Stanford": "Rejected",
          "Purdue": "Rejected",
          "UMich": "Rejected",
          "Rose-Hulman Institute of Technology": "Accepted - Offered $26,000 scholarship per year",
          "Rensselaer Polytechnic Institute": "Accepted",
          "Case Western Reserve University": "Accepted"
        }
      },
      "acceptedColleges": [
          "UT Austin",
          "UMD",
          "Virginia Tech",
          "Case Western Reserve University",
          "Rensselaer Polytechnic Institute",
          "Rose-Hulman Institute of Technology"
        ]
    },
    {
      "schooltype": "ivy",
      "seo": "MIT",
      "applicationNumber": 5,
      "title": "Computer Science Major gets MIT & Stanford Acceptance",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Asian",
        "residence": "SoCal",
        "incomeBracket": "200k",
        "typeOfSchool": "Private",
        "hooks": "None",
        "intendedMajor": "Computer Science"
      },
      "academics": {
        "gpa": 4.0,
        "rank": null,
        "honorsAPCollegeClasses": 18,
        "seniorYearCourseLoad": [
          "AP Spanish",
          "AP Stats",
          "AP Physics C Mech",
          "AP Art History",
          "Honors English IV"
        ]
      },
      "standardizedTesting": {
        "satScore": 1580,
        "actScore": 35,
        "apScores": [
          {"subject": "English Literature", "score": 5},
          {"subject": "Macro", "score": 5},
          {"subject": "APUSH", "score": 5},
          {"subject": "Calc AB", "score": 5},
          {"subject": "Calc BC", "score": 5},
          {"subject": "CS A", "score": 5},
          {"subject": "Statistics", "score": 5},
          {"subject": "Biology", "score": 5},
          {"subject": "Chemistry", "score": 5},
          {"subject": "Physics 1", "score": 5},
          {"subject": "Physics 2", "score": 5},
          {"subject": "Physics C Mech", "score": 5},
          {"subject": "Physics C E&M", "score": 5},
        ]
      },
      "extracurriculars": [
        "Ran math classes to 1000+ students via math camps, math clubs, virtual learning labs. Raised ~$10000 to underprivileged kids.",
        "Created problems for large competition platform website, with over 30k participants monthly.",
        "Researched about linear algebra with UCLA prof (didn't end up publishing before college apps...)",
        "Created online web game teaching math with over 10,000 views; ended up on largest math games website",
        "Self-published math book for students on Amazon, donated revenue to students in need.",
        "Attended weekly math classes at UCLA for 10+ years, taught some classes myself.",
        "Participated in two Wolfram programs, published research on various CS/math topics.",
        "Self-published board game about math.",
        "President of school wide math club, led various outings to local contests.",
        "Eagle Scout, Assistant Senior Patrol Leader for Troop of ~60 Scouts."
      ],
      "awardsHonors": [
        "Member of the USA Team for one of the first ten International Science Olympiads",
        "USAMO Qualifier, AIME 5x Qualifier",
        "USACO Gold",
        "National Merit Scholar",
        "Math Kangaroo 1st place nationally for several years"
      ],
      "lettersOfRecommendation": [
        { "subject": "Math Teacher", "rating": 9, "relationship": "Close, worked together for peer-tutoring program" },
        { "subject": "English Teacher", "rating": 6, "relationship": "Active in class, less known than math teacher" },
        { "subject": "Math Mentor", "rating": 10, "relationship": "He supported me throughout middle school and he wrote some of my additional recommendations, and he is one of the most inspiring people I've met who inspired me to do a lot of the stuff I did." },
        { "subject": "Research Mentor", "rating": 5, "relationship": "We didn't really talk much outside of research, and it was math research, so we didn't really talk too much." }
      ],
      "essays": {
        "personalStatement": "I had a hard time coming up with a topic, but eventually settled on an animated show I watched and how it inspired me to be more artistic, even though a lot of my interested are math and STEM-related, just to show a different side of me.",
        "strength": "I think most of my essays are quite okay; I don't recall any standouts, except for my Why Us essays, those were kinda bangers."
      },
      "decisions": {
        "Early Action": {
          "MIT": "Deferred -> Waitlisted -> Accepted -> Committed!",
          "GeorgiaTech": "Accepted OOS",
          "UTAustin": "Accepted OOS",
          "UCBerkeley": "Accepted InState"
        },
        "Regular Decision": {
          "UCIrvine": "Rejected",
          "Columbia": "Rejected",
          "Caltech": "Rejected",
          "USC": "Rejected",
          "Harvard": "Rejected",
          "Yale": "Rejected",
          "Cornell": "Rejected",
          "UPenn": "Rejected",
          "Princeton": "Rejected",
          "CMU": "Rejected",
          "UChicago": "Rejected",
          "UCSanDiego": "Rejected",
          "UCLA": "Rejected",
          "WashU": "Rejected",
          "Rice": "Rejected",
          "MIT": "Accepted",
          "Stanford": "Accepted",
          "Brown": "Accepted",
          "UCBerkeley": "Accepted",
          "UIUC": "Accepted",
          "Purdue": "Accepted",
          "Rose-Hulman Institute of Technology": "Accepted"
        }
      },
      "acceptedColleges": [
          "MIT",
          "Stanford",
          "Brown",
          "UC Berkeley",
          "GeorgiaTech",
          "UTAustin",
          "UIUC",
          "Purdue",
          "Rose-Hulman Institute of Technology"
        ]
    },
    {
      "schooltype": "ivy",
      "seo": "MIT",
      "applicationNumber": 6,
      "title": "Business Major secures over $300,000 in scholarships with a 24 ACT",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Caucasian",
        "residence": "South USA",
        "incomeBracket": "0-200k",
        "typeOfSchool": "Rural Public",
        "hooks": "None",
        "intendedMajor": "Business"
      },
      "academics": {
        "gpa": 4.0,
        "rank": null,
        "honorsAPCollegeClasses": 6,
        "seniorYearCourseLoad": [
          "Student Aide",
          "CO-OP",
          "Engineering 102",
          "AP Government",
          "AP Statistics",
          "Varsity Tennis"
        ]
      },
      "standardizedTesting": {
        "actScore": 24,
        "apScores": [
          {"subject": "U.S History", "score": 2},
          {"subject": "Computer Science Principles", "score": 3},
          {"subject": "Computer Science A", "score": 2},
          {"subject": "Lang", "score": 3},
        ]
      },
      "extracurriculars": [
        "National Honors Society President",
        "MCHS Student Ambassador",
        "FCA Club Leader",
        "FCCLA Vice President of Programs",
        "President of the Technology Student Association",
        "Executive Entrepreneur for School Store, Student Council Member",
        "Superintendent Student Advisory Board",
        "National Society of High School Scholars Member",
        "Varsity Tennis Captain",
      ],
      "awardsHonors": [
        "Ronald Reagan Foundation & Institute Leadership Medal",
        "Congress of Medical Leaders Award of Excellence",
        "CARE Center's Presidential Service Award",
        "DAR Good Citizen",
        "Michigan DECA District Champion: Hospitality & Tourism Professional Selling",
        "Student of the Year of Communications 2021",
        "Varsity Tennis Sportsmanship + Scholar Award",
      ],
      "lettersOfRecommendation": [
        { "subject": "Guidance Counselor", "rating": 6, "relationship": "My counselor's recommendation was requested for many local scholarships, and although we knew each other quite well, I believe she couldn't attest to any personal story that could click with the reader, just general information about me" },
        { "subject": "Qualified Adult", "rating": 10, "relationship": "The adult was very qualified in their field and has had many experiences that showed my character and leadership. He was willing to collaborate with me and create the best recommendation letter that correlated with his perspective on me and my qualifications"},
        { "subject": "Computer Science Teacher", "rating": 9, "relationship": "I had a great relationship with my computer science teacher, and his writing skills provided a unique and great recommendation letter that stood out from a typical teacher recommendation. I worked with him regarding insight on my business, website design, and business law as he was a lawyer" },
      ],
      "essays": {
        "personalStatement": "I had a hard time coming up with a topic, but eventually settled on an animated show I watched and how it inspired me to be more artistic, even though a lot of my interested are math and STEM-related, just to show a different side of me.",
        "strength": "I think most of my essays are quite okay; I don't recall any standouts, except for my Why Us essays, those were kinda bangers."
      },
      "decisions": {
        "Regular Decision": {
          "University of Alabama": "Accepted",
          "Auburn University": "Accepted",
          "University of Alabama in Huntsville": "Accepted",
          "University of North Alabama": "Accepted",
          "Troy University": "Accepted",
        }
      },
      "acceptedColleges": [
          "University of Alabama",
          "Auburn University",
          "University of Alabama in Huntsville",
          "University of North Alabama",
          "Troy University"
        ]
    },
    {
      seo: 'Harvard',
      schooltype: "ivy",
      applicationNumber: 7,
      title: 'Aspiring public defender swings big and gets in',
      demographics: {
        gender: "Male",
        raceEthnicity: "White",
        residence: "California",
        incomeBracket: "0 - 200k",
        typeOfSchool: "Private",
        hooks: "None",
        intendedMajor: "Political Science",
      },
      academics: {
        gpa: 4.43,
        rank: null,
        honorsAPCollegeClasses: null,
        seniorYearCourseLoad: [
          "Advanced Rhetoric",
          "Advanced Plant Microbe Interactions",
          "Advanced Research 2",
          "Advanced Integral Calculus, Series & Analytic Geometry",
          "Advanced Journalism & Communication",
          "Intermediate Video & Animation"
        ],
      },
      standardizedTesting: {
        satScore: 1570,
        apScores: null,
      },
      extracurriculars: [
        "Senator, Nationalist Party Platform Comm. Chair, American Legion Boys Nation (12)",
        "Co-Founder and Co-Executive Director, Teens at the Door (10, 11, 12)",
        "Editor-in-Chief, Geffen Academy Reader (11, 12)",
        "Grade Representative and Chair, Student Council Policy Committee (9, 10, 11, 12)",
        "Democracy Summer Scholar, Democracy Summer (11)",
        "Volunteer Coordinator, Angélica Dueñas for Congress, CA Congressional District 29 (11)",
        "Campaign Fellow, Jimmy Biblarz for Los Angeles City Council, District 5 (10)",
        "Researcher, UCLA Department of Political Science (11, 12)",
        "Actor and Co-Director, Geffen Academy Players (9, 10, 11, 12)",
        "Filmmaker, Screenwriter, Actor, Editor (9, 11, 12)"
      ],
      awardsHonors: [
        "National Merit Semifinalist (later Finalist)",
        "UC Eligibility in Local Context Selection (top 9% of graduating class)",
        "Research Selected for Presentation and Archival at UCLA Undergraduate Research Week",
        "National Honor Society Member",
        "2023 California Boys & Girls State Fr. Gary Gummersheimer Oratorical Competition Finalist",
        "Certificate of Special Congressional Recognition for invaluable service to my community",
        "Outstanding Citizen Award at American Legion California Boys & Girls State 2023 (one of seven recipients out of 1,000+)",
        "Published in Los Angeles Times High School Insider twice",
        "CIF SS Division 7 Men's Soccer Champions 2022"
      ],
      lettersOfRecommendation: [
        { subject: "History Teacher", rating: 10, relationship: "I've known him since I was in seventh grade, and throughout the year I would spend time talking to him outside of class about how to improve my writing and my participation in class, and he shared that one piece of work that I had written had been one of his favorites that he'd ever read, so I picked him for a recommendation letter." },
        { subject: "Math Teacher (head of dept.)", rating: 10, relationship: "I've had this math teacher three times now, including senior year, and I always make sure to talk with him about how I can improve in his class, as well as about life outside of the classroom; he's seen my growth as a math student over the years, so I chose him for a recommendation letter." }
      ],
      decisions: {
        'Early Action': {
          "University of Chicago": "Rejected",
          "MIT": "Rejected",
          "Georgetown": "Accepted",
          "University of Richmond": "Accepted, Richmond Scholar",
          "USC": "Accepted",
          "Bard College": "Accepted, Presidential Scholar"
        },
        'Regular Decision': {
          "Davidson College": "Accepted, Belk Scholar",
          "Emory University": "Accepted",
          "Wake Forest University": "Accepted, Stamps Scholar",
          "Duke University": "Waitlisted",
          "Vanderbilt University": "Accepted, Chancellor's Scholar",
          "Boston University": "Accepted, Presidential Scholar, Kilachand Honors College acceptance",
          "UCLA": "Accepted",
          "UC Berkeley": "Accepted",
          "UCSD": "Accepted",
          "UC Irvine": "Accepted, Honors College acceptance",
          "UC Davis": "Accepted, Fulmor Scholarship, Honors College acceptance",
          "Rice": "Accepted, Barbara Jordan Scholarship",
          "Washington University in St. Louis": "Accepted",
          "Northwestern": "Waitlisted",
          "Pomona College": "Waitlisted",
          "Colgate University": "Accepted, Alumni Memorial Scholar",
          "University of Pennsylvania": "Accepted",
          "Dartmouth": "Accepted",
          "Princeton": "Accepted",
          "Harvard": "Accepted"
        }
      },
      "acceptedColleges": [
        "Harvard University",
        "Princeton University",
        "Dartmouth College",
        "University of Pennsylvania",
        "Rice University (Barbara Jordan Scholarship)",
        "Vanderbilt University (Chancellor's Scholar)",
        "Washington University in St. Louis",
        "University of Chicago",
        "Duke University",
        "Georgetown University",
        "Emory University",
        "Davidson College (Belk Scholar)",
        "Wake Forest University (Stamps Scholar)",
        "Boston University (Presidential Scholar, Kilachand Honors College)",
        "USC",
        "University of California, Berkeley",
        "University of California, Los Angeles (UCLA)",
        "University of California, San Diego (UCSD)",
        "University of California, Irvine (Honors College)",
        "University of California, Davis (Fulmor Scholarship, Honors College)",
        "Colgate University (Alumni Memorial Scholar)",
        "Pomona College",
        "Bard College (Presidential Scholar)",
        "University of Richmond (Richmond Scholar)"
      ]
    },
    {
      "seo": "Michigan State University",
      "schooltype": "top-public",
      "applicationNumber": 8,
      "title": "Business Major gets into Michigan State University",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "White",
        "residence": "Midwest",
        "incomeBracket": "0 - 200k",
        "typeOfSchool": "Competitive Public",
        "hooks": "None",
        "intendedMajor": "Business"
      },
      "academics": {
        "gpa": 3.87,
        "rank": null,
        "honorsAPCollegeClasses": "2",
        "seniorYearCourseLoad": [
          "Accounting",
          "Advanced Marketing",
          "DECA leadership",
          "AP Language and Composition",
          "Weight Training",
          "AP Government",
          "AP Macroeconomics",
          "WWII online",
          "Theater Arts",
          "Personal Finance"
        ]
      },
      "standardizedTesting": {
        "satScore": 1110,
        "apScores": null
      },
      "extracurriculars": [
        "National Honors Society Member",
        "Friends Forever President (Special Education Club)",
        "Freshman-Junior class treasurer",
        "Senior Year Class President",
        "DECA President",
        "10-time Varsity Letter Athlete",
        "Captain of XC, Wrestling, and Golf teams"
      ],
      "awardsHonors": [
        "2x DECA state champion",
        "3x ICDC DECA qualifier",
        "1x top 20 ICDC DECA",
        "10-time Varsity Letter Athlete",
        "3x All-State Wrestler",
        "All-time Wins leader in school history",
        "All-time Team Points Leader in school history",
        "2nd in Career Takedowns in school history",
        "2nd in Career Pins in school history",
        "4th/5th/7th in Season Team Points",
        "2 time All City Golfer",
        "Member of Division One State Runner-up golf team",
        "Homecoming Court"
      ],
      "lettersOfRecommendation": [
        {
          "subject": "Wrestling Coach",
          "rating": 8,
          "relationship": "My wrestling coach and I gained a deep bond that still lasts to this day so I chose him for a recommendation letter to multiple colleges I was interested in for wrestling and schooling."
        }
      ],
      "decisions": {
        "Early Action": {
          "Wyoming University": "Accepted",
          "Michigan State University": "Accepted",
          "Western Michigan University": "Accepted",
          "Grand Valley University": "Accepted",
          "Olivet College": "Accepted",
          "Kellogg Community College": "Accepted"
        },
      },
      "acceptedColleges": [
        "Michigan State University",
        "Wyoming University",
        "Western Michigan University",
        "Grand Valley University",
        "Olivet College",
        "Kellogg Community College"
      ]
    },
    {
      "seo": "Northeastern",
      "schooltype": "top-public",
      "applicationNumber": 9,
      "title": "Biology Major gets into Northeastern",
      "demographics": {
        "gender": "Female",
        "raceEthnicity": "White",
        "residence": "Midwest",
        "incomeBracket": "120k",
        "typeOfSchool": "Private",
        "hooks": "None",
        "intendedMajor": "Biology"
      },
      "academics": {
        "gpa": 4.2,
        "rank": null,
        "honorsAPCollegeClasses": "11",
        "seniorYearCourseLoad": [
          "AP Biology",
          "AP Chemistry",
          "AP Calculus AB",
          "Honors English IV",
          "AP Psychology",
          "Honors Spanish IV",
          "Environmental Science (Elective)",
          "Health Science Internship (Elective)"
        ]
      },
      "standardizedTesting": {
        "satScore": 1440,
        "apScores": [
          { "subject": "Biology", "score": 4 },
          { "subject": "Chemistry", "score": 4 },
          { "subject": "Calculus AB", "score": 5 },
          { "subject": "Psychology", "score": 5 },
          { "subject": "Spanish Language and Culture", "score": 4 }
        ]
      },
      "extracurriculars": [
        "President - Health and Science Club (Grades 10-12)",
        "Research Assistant - University Medical Research Lab (Summer between Grades 11-12)",
        "Lead Volunteer - Local Hospital (Grades 10-12)",
        "Shadowing Experience (Grades 11-12)",
        "Science Olympiad Team - Captain (Grades 9-12)",
        "Intern - Bioethics Research Institute (Summer between Grades 10-11)",
        "Varsity Cross Country (Grades 9-12)",
        "National Honor Society - Vice President (Grades 11-12)",
        "Certified EMT (Grade 12)",
        "Research Publication - Medical Journal (Grade 12)",
        "Peer Tutor in AP Sciences (Grades 10-12)",
        "Health Science Internship (Grade 12)"
      ],
      "awardsHonors": [
        "1st Place - Science Olympiad (Anatomy & Physiology)",
        "Volunteer of the Year - Local Hospital",
        "Published Co-Author - University Medical Journal",
        "Excellence in Science Award - School (Grade 11)",
        "National Honor Society Leadership Award",
        "Top EMT Certification Graduate",
        "Cross Country All-Conference Honorable Mention",
        "Bioethics Research Excellence Award"
      ],
      "lettersOfRecommendation": [
        { "subject": "AP Biology Teacher", "rating": 10, "relationship": "My AP Biology teacher saw my growth over two years in class and as captain of Science Olympiad." },
        { "subject": "AP Chemistry Teacher", "rating": 8, "relationship": "While I did well, I was not as close with this teacher as others." },
        { "subject": "University Research Mentor", "rating": 10, "relationship": "My mentor can speak to my research skills and collaborative work." }
      ],
      "decisions": {
        "Early Decision": {
          "UPenn": "Rejected"
        },
        "Early Action": {
          "Harvard": "Rejected",
          "Cornell": "Rejected",
          "Northeastern": "Accepted"
        },
        "Regular Decision": {
          "Princeton": "Rejected",
          "University of Virginia": "Accepted",
          "University of Michigan": "Rejected",
          "University of North Carolina": "Rejected",
          "University of Illinois (Urbana-Champaign)": "Accepted",
          "Northwestern University": "Rejected",
          "University of Wisconsin-Madison": "Rejected",
          "Purdue University": "Accepted",
          "Virginia Tech": "Rejected",
          "Loyola University Chicago": "Accepted",
          "DePaul University": "Accepted"
        }
      },
      "acceptedColleges": [
        "University of Virginia",
        "Northeastern",
        "University of Illinois (Urbana-Champaign)",
        "Purdue University",
        "Loyola University Chicago",
        "DePaul University"
      ]
    },
    {
      "seo": "University of Washington",
      "schooltype": "top-public",
      "applicationNumber": 10,
      "title": "Environmental Science major gets into University of Washington",
      "demographics": {
        "gender": "Female",
        "raceEthnicity": "Asian",
        "residence": "Midwest, USA",
        "incomeBracket": "120k",
        "typeOfSchool": "Competitive Public",
        "hooks": "First-generation college student",
        "intendedMajor": "Environmental Science"
      },
      "academics": {
        "gpa": 4.3,
        "rank": null,
        "honorsAPCollegeClasses": 8,
        "seniorYearCourseLoad": [
          "AP Environmental Science",
          "AP Calculus AB",
          "AP English Literature",
          "Honors Chemistry",
          "Honors Spanish IV",
          "Senior Seminar (Leadership and Community Service)"
        ]
      },
      "standardizedTesting": {
        "satScore": 1350,
        "apScores": [
          { "subject": "Environmental Science", "score": 4 },
          { "subject": "Calculus AB", "score": 3 },
          { "subject": "English Literature", "score": 4 }
        ]
      },
      "extracurriculars": [
        "Environmental Club (President)",
        "Science Fair Participant",
        "Volunteering at Local Community Garden",
        "Debate Team Member",
        "Student Government (Class Representative)",
        "After-School Tutoring Program"
      ],
      "awardsHonors": [
        "2nd Place at Regional Science Fair",
        "Outstanding Leader Award (Environmental Club)",
        "Honor Roll (all four years)",
        "Community Service Award"
      ],
      "lettersOfRecommendation": [
        { "subject": "Science Teacher", "rating": 9, "relationship": "My science teacher and I collaborated on several projects." },
        { "subject": "Environmental Science Teacher", "rating": 8, "relationship": "She recognized my passion for environmental issues." },
        { "subject": "School Counselor", "rating": 7, "relationship": "The recommendation felt more general compared to the others." }
      ],
      "decisions": {
        "Early Action": {
          "University of Michigan": "Rejected",
          "Boston University": "Rejected",
          "Northeastern University": "Rejected",
          "University of Virginia": "Rejected"
        },
        "Regular Decision": {
          "University of California, Berkeley": "Rejected",
          "University of Washington": "Accepted",
          "University of Wisconsin-Madison": "Accepted",
          "Yale University": "Rejected",
          "University of Southern California": "Rejected",
          "University of North Carolina at Chapel Hill": "Rejected",
          "Emory University": "Rejected",
          "Indiana University Bloomington": "Accepted",
          "University of Miami": "Rejected",
          "Colorado State University": "Accepted"
        }
      },
      "acceptedColleges": [
        "Colorado State University",
        "Indiana University Bloomington",
        "University of Washington",
        "University of Wisconsin-Madison"
      ]
    },
    {
      "seo": "Harvard University",
      "schooltype": "ivy",
      "applicationNumber": 11,
      "title": "Aspiring Biology major gets into multiple Ivy Leagues",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Asian",
        "residence": "East Coast",
        "incomeBracket": "0-200k",
        "typeOfSchool": "Competitive Public",
        "hooks": "None",
        "intendedMajor": "Pre-med"
      },
      "academics": {
        "gpa": 4.85,
        "rank": "N/A",
        "honorsAPCollegeClasses": "AP, Honors",
        "seniorYearCourseLoad": [
          "Multivariable Calculus",
          "AP Literature",
          "AP Government",
          "AP Macro",
          "AP Physics C",
          "IB Sports",
          "AP Spanish",
          "PLTW Biomedical Innovations"
        ]
      },
      "standardizedTesting": {
        "satScore": 1580,
        "actScore": 36,
        "apScores": [
          { "subject": "World History", "score": 4 },
          { "subject": "European History", "score": 5 },
          { "subject": "Seminar", "score": 5 },
          { "subject": "Physics 1", "score": 4 },
          { "subject": "Research", "score": 5 },
          { "subject": "Calculus BC", "score": 4 },
          { "subject": "US History", "score": 4 },
          { "subject": "Biology", "score": 5 },
          { "subject": "Chemistry", "score": 5 },
          { "subject": "Physics C", "score": 4 },
          { "subject": "Spanish", "score": 5 },
          { "subject": "English Literature", "score": 5 },
          { "subject": "Government", "score": 5 },
          { "subject": "Macroeconomics", "score": 5 }
        ]
      },
      "extracurriculars": [
        "President of HOSA",
        "President of Science Olympiad",
        "Varsity Tennis",
        "Varsity Track & Field",
        "Student Body President (for Senate)",
        "500+ volunteer hours"
      ],
      "awardsHonors": [
        "PVSA Award",
        "National Merit Finalist",
        "AP Scholar with Distinction",
        "Distinguished Grad (Top 3%)",
        "National Honor Society"
      ],
      "lettersOfRecommendation": [
        { "subject": "Science Teacher", "rating": 9, "relationship": "Started going for extra help and digging in deep since it was my intended major and study, and got to know me really well." },
        { "subject": "Math Teacher", "rating": 8, "relationship": "Started out rough, but took extra help and came in afterschool often." }
      ],
      "decisions": {
        "Early Decision": {
          "Harvard University": "Accepted",
          "Stanford University": "Rejected",
          "Yale University": "Accepted",
          "Columbia University": "Accepted",
          "Brown University": "Rejected",
          "Johns Hopkins University": "Rejected",
          "Washington University in St. Louis": "Accepted",
          "University of Pennsylvania": "Accepted"
        },
        "Regular Decision": {
          "University of Michigan": "Rejected",
          "Baylor University": "Accepted",
          "Duke University": "Accepted",
          "New York University": "Accepted",
          "Northwestern University": "Accepted"
        }
      },
      "acceptedColleges": [
        "Harvard University",
        "Yale University",
        "Columbia University",
        "Washington University in St. Louis",
        "University of Pennsylvania",
        "Baylor University",
        "Duke University",
        "New York University",
        "Northwestern University"
      ]
    },
    {
      "seo": "University of Virginia",
      "schooltype": "top-public",
      "applicationNumber": 12,
      "title": "Aspiring Business Major gets into UVA",
      "demographics": {
        "gender": "Female",
        "raceEthnicity": "White",
        "residence": "Northeast, USA",
        "incomeBracket": "90k",
        "typeOfSchool": "Competitive Public",
        "hooks": "None",
        "intendedMajor": "Business"
      },
      "academics": {
        "gpa": 3.83,
        "rank": "Top 15%",
        "honorsAPCollegeClasses": "AP, Honors",
        "seniorYearCourseLoad": [
          "AP Economics",
          "AP Statistics",
          "AP English Language and Composition",
          "Honors Accounting",
          "AP Psychology",
          "Business Leadership Seminar"
        ]
      },
      "standardizedTesting": {
        "satScore": 1480,
        "apScores": [
          { "subject": "Economics", "score": 4 },
          { "subject": "Statistics", "score": 4 },
          { "subject": "English Language", "score": 5 },
          { "subject": "Psychology", "score": 4 }
        ]
      },
      "extracurriculars": [
        "President of Future Business Leaders of America (FBLA)",
        "Founder of Local Financial Literacy Initiative",
        "Varsity Soccer (Captain Senior Year)",
        "National Honor Society",
        "Internship at Local Marketing Firm (Summer)",
        "Volunteering at Local Food Bank",
        "Member of DECA (Business Competition Club)"
      ],
      "awardsHonors": [
        "1st Place in Regional Business Plan Competition (FBLA)",
        "DECA State Finalist",
        "Varsity Soccer MVP (Senior Year)",
        "National AP Scholar",
        "Honor Roll (all four years)"
      ],
      "lettersOfRecommendation": [
        {
          "subject": "Economics Teacher",
          "rating": 9,
          "relationship": "My economics teacher consistently praised my initiative and leadership skills, particularly when I led a class-wide project on financial literacy."
        },
        {
          "subject": "Business Teacher",
          "rating": 8,
          "relationship": "My business teacher has known me since my sophomore year and wrote about my growth as a leader and passion for entrepreneurship."
        },
        {
          "subject": "Soccer Coach",
          "rating": 7,
          "relationship": "The letter highlighted my teamwork and leadership qualities, as well as my dedication to balancing academics with athletics."
        }
      ],
      "decisions": {
        "Early Action": {
          "University of Virginia": "Accepted",
          "University of North Carolina at Chapel Hill": "Accepted",
          "University of Michigan": "Waitlisted",
          "Indiana University Bloomington (Kelley School of Business)": "Accepted",
          "Boston University": "Accepted",
          "University of Miami": "Accepted"
        },
        "Regular Decision": {
          "University of Southern California (Marshall School of Business)": "Rejected",
          "University of Wisconsin-Madison": "Accepted",
          "University of Florida (Warrington College of Business)": "Accepted",
          "Penn State (Smeal College of Business)": "Accepted",
          "Northeastern University": "Waitlisted"
        }
      },
      "acceptedColleges": [
        "University of Virginia",
        "University of North Carolina at Chapel Hill",
        "Indiana University Bloomington (Kelley School of Business)",
        "Boston University",
        "University of Miami",
        "University of Wisconsin-Madison",
        "University of Florida (Warrington College of Business)",
        "Penn State (Smeal College of Business)"
      ]
    },
    {
      "seo": "Georgetown University",
      "schooltype": "top-private",
      "applicationNumber": 13,
      "title": "Aspiring Polisci major gets into Dream School (Georgetown)",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Hispanic",
        "residence": "Southwest, USA",
        "incomeBracket": "80k",
        "typeOfSchool": "Competitive Public",
        "hooks": "First-generation college student",
        "intendedMajor": "Political Science"
      },
      "academics": {
        "gpa": 3.92,
        "rank": "Top 10%",
        "honorsAPCollegeClasses": "AP, Honors",
        "seniorYearCourseLoad": [
          "AP Government and Politics",
          "AP Comparative Government",
          "AP English Literature",
          "AP US History",
          "AP Macroeconomics",
          "AP Spanish Language",
          "Honors Philosophy"
        ]
      },
      "standardizedTesting": {
        "satScore": 1510,
        "apScores": [
          { "subject": "Government and Politics", "score": 5 },
          { "subject": "US History", "score": 4 },
          { "subject": "Comparative Government", "score": 4 },
          { "subject": "English Literature", "score": 4 },
          { "subject": "Macroeconomics", "score": 4 },
          { "subject": "Spanish Language", "score": 5 }
        ]
      },
      "extracurriculars": [
        "Debate Team (Captain)",
        "Model United Nations (Co-President)",
        "Internship at Local Congressman’s Office",
        "Volunteering with Local Voter Registration Drives",
        "Editor-in-Chief of School Newspaper",
        "Varsity Soccer (Starting Defender)",
        "Community Service Club Member"
      ],
      "awardsHonors": [
        "1st Place in State Debate Championship",
        "Best Delegate Award at Model UN Regional Conference",
        "National Hispanic Recognition Scholar",
        "AP Scholar with Distinction",
        "Honor Roll (all four years)"
      ],
      "lettersOfRecommendation": [
        {
          "subject": "History Teacher",
          "rating": 9,
          "relationship": "My history teacher praised my analytical thinking and leadership in class discussions, especially in political debates."
        },
        {
          "subject": "Debate Coach",
          "rating": 8,
          "relationship": "My debate coach focused on my role as team captain, highlighting my ability to mentor younger students and lead the team to success."
        },
        {
          "subject": "Congressman’s Office Supervisor",
          "rating": 9,
          "relationship": "My supervisor from the congressional internship wrote about my dedication to public service and ability to handle real-world political tasks."
        }
      ],
      "decisions": {
        "Early Action": {
          "Georgetown University": "Accepted",
          "University of Virginia": "Accepted",
          "George Washington University": "Accepted",
          "American University": "Accepted"
        },
        "Regular Decision": {
          "University of North Carolina at Chapel Hill": "Waitlisted",
          "University of Southern California": "Rejected",
          "New York University": "Waitlisted",
          "Boston College": "Accepted",
          "University of California, Berkeley": "Rejected",
          "University of Michigan": "Accepted"
        }
      },
      "acceptedColleges": [
        "Georgetown University",
        "University of Virginia",
        "George Washington University",
        "American University",
        "Boston College",
        "University of Michigan"
      ]

    },
    {
      "seo": "Harvard",
      "schooltype": "ivy",
      "applicationNumber": 14,
      "title": "Computer Science Major gets into Harvard",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Asian",
        "residence": "California",
        "incomeBracket": 80000,
        "typeOfSchool": "Public",
        "hooks": "None",
        "intendedMajor": "Computer Science"
      },
      "academics": {
        "gpa": 4.7,
        "rank": 1,
        "honorsAPCollegeClasses": 20,
        "seniorYearCourseLoad": [
          "AP Computer Science A",
          "AP Calculus BC",
          "AP Physics C",
          "AP English Literature",
          "AP Government",
          "AP Biology",
          "AP Statistics",
          "AP Environmental Science",
          "Linear Algebra (at local college)"
        ]
      },
      "standardizedTesting": {
        "satScore": 1580,
        "apScores": [
          { "subject": "Computer Science A", "score": 5 },
          { "subject": "Calculus BC", "score": 5 },
          { "subject": "Physics C", "score": 5 },
          { "subject": "Biology", "score": 5 },
          { "subject": "US History", "score": 5 },
          { "subject": "English Literature", "score": 5 },
          { "subject": "Environmental Science", "score": 4 },
          { "subject": "Statistics", "score": 5 }
        ]
      },
      "extracurriculars": [
        "Cofounder of an AI startup (12)",
        "AI research intern at a top university (11)",
        "Robotics team lead (10-12)",
        "President of Computer Science Club (10-12)",
        "Peer tutor program president (11-12)",
        "Volunteer at local community center (9-12)"
      ],
      "awardsHonors": [
        "3x USACO Platinum (9, 10, 11)",
        "Winner of national coding competition (11)",
        "Finalist in prestigious tech competition (10)",
        "National Merit Scholar Semifinalist (11)"
      ],
      "lettersOfRecommendation": [
        { "subject": "Math Teacher", "rating": 9, "relationship": "Close, collaborated on peer tutoring program" },
        { "subject": "Computer Science Teacher", "rating": 8, "relationship": "Engaged and innovative student" },
        { "subject": "Professor from AI internship", "rating": 8, "relationship": "Worked closely on research projects" }
      ],
      "decisions": {
        "Early Action": {
          "Harvard": "Accepted",
          "Princeton": "Rejected",
          "Columbia": "Accepted",
          "MIT": "Deferred"
        },
        "Regular Decision": {
          "Stanford": "Rejected",
          "Caltech": "Rejected",
          "University of California, Berkeley": "Accepted",
          "University of Michigan": "Accepted",
          "University of Massachusetts Amherst": "Accepted",  // Safety
          "University of Arizona": "Accepted",               // Safety
          "Florida International University": "Accepted",    // Safety
          "University of North Texas": "Accepted"            // Safety
        }
      },
      "acceptedColleges": [
        "Harvard",
        "Columbia",
        "University of California, Berkeley",
        "University of Michigan",
        "University of Massachusetts Amherst",
        "University of Arizona",
        "Florida International University",
        "University of North Texas"
      ]
    },
    {
      "seo": "Georgia Tech",
      "schooltype": "top-public",
      "applicationNumber": 15,
      "title": "Computer Science major gets into Georgia Tech Instate",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Black",
        "residence": "Georgia",
        "incomeBracket": 65000,
        "typeOfSchool": "Public",
        "hooks": "None",
        "intendedMajor": "Computer Science"
      },
      "academics": {
        "gpa": 3.74,
        "rank": "35/461",
        "honorsAPCollegeClasses": 10,
        "seniorYearCourseLoad": [
          "AP Computer Science A",
          "AP Calculus AB",
          "AP English Literature",
          "AP Statistics",
          "Physics",
          "Economics"
        ]
      },
      "standardizedTesting": {
        "satScore": 1450,
        "apScores": [
          { "subject": "Computer Science A", "score": 4 },
          { "subject": "Calculus AB", "score": 4 },
          { "subject": "English Language", "score": 3 },
          { "subject": "US History", "score": 4 },
          { "subject": "Physics 1", "score": 3 }
        ]
      },
      "extracurriculars": [
        "President of Coding Club (12)",
        "Volunteer coding instructor at local community center (10-12)",
        "Robotics Club member (9-12)",
        "Track and Field team (9-12)",
        "Peer tutor for math and computer science (10-12)",
        "Part-time job at local grocery store (9-12)"
      ],
      "awardsHonors": [
        "National Society of Black Engineers (NSBE) regional coding competition finalist (11)",
        "Hackathon winner at school event (11)",
        "Honor Roll (9-12)",
        "AP Scholar with Distinction (11)"
      ],
      "lettersOfRecommendation": [
        { "subject": "Math Teacher", "rating": 8, "relationship": "Strong performer, showed leadership in tutoring others" },
        { "subject": "Computer Science Teacher", "rating": 9, "relationship": "Top student in class, ran Coding Club" },
        { "subject": "Startup Supervisor", "rating": 7, "relationship": "Completed internship with strong results in project work" }
      ],
      "decisions": {
        "Early Action": {
          "University of Georgia": "Accepted",
          "Georgia Tech": "Deferred",
          "University of Florida": "Accepted",
          "University of Maryland": "Accepted"
        },
        "Regular Decision": {
          "Georgia Tech": "Accepted",
          "University of California, Irvine": "Accepted",
          "University of North Carolina at Chapel Hill": "Rejected",
          "University of Michigan": "Rejected",
          "Northeastern University": "Accepted",
          "Rochester Institute of Technology (RIT)": "Accepted with scholarship",
          "University of Alabama": "Accepted with full ride",
          "Florida International University": "Accepted",
          "Morehouse College": "Accepted",
          "Stanford": "Rejected"
        }
      },
      "acceptedColleges": [
        "Georgia Tech",
        "University of Georgia",
        "University of Florida",
        "University of Maryland",
        "University of California, Irvine",
        "Northeastern University",
        "Rochester Institute of Technology (RIT)",
        "University of Alabama",
        "Morehouse College",
        "Florida International University"
      ]
    },
    {
      "seo": "UPenn Wharton",
      "schooltype": "ivy",
      "applicationNumber": 16,
      "title": "Business Major gets into UPenn Wharton",
      "demographics": {
        "gender": "Male",
        "raceEthnicity": "Indian",
        "residence": "New Jersey",
        "incomeBracket": 250000,
        "typeOfSchool": "Public",
        "hooks": "None",
        "intendedMajor": "Business"
      },
      "academics": {
        "gpa": 4.85,
        "rank": 1,
        "honorsAPCollegeClasses": 18,
        "seniorYearCourseLoad": [
          "AP Calculus BC",
          "AP Economics (Micro & Macro)",
          "AP Statistics",
          "AP English Literature",
          "AP Government",
          "AP Physics C: Mechanics",
          "Entrepreneurship (at local college)",
          "International Business Law"
        ]
      },
      "standardizedTesting": {
        "satScore": 1570,
        "apScores": [
          { "subject": "Calculus AB", "score": 5 },
          { "subject": "Calculus BC", "score": 5 },
          { "subject": "Economics (Micro)", "score": 5 },
          { "subject": "Economics (Macro)", "score": 5 },
          { "subject": "Statistics", "score": 5 },
          { "subject": "Physics C: Mechanics", "score": 5 },
          { "subject": "English Language", "score": 5 },
          { "subject": "US History", "score": 5 },
          { "subject": "World History", "score": 5 },
          { "subject": "Computer Science A", "score": 5 }
        ]
      },
      "extracurriculars": [
        "Co-founder and CEO of a clothing reselling brand with $10k annual revenue (9-12)",
        "Interned at local financial investment agency (11)",
        "Founder and President of the Investment Club at school (9-12)",
        "Research assistant with Wharton students, worked on market analysis (11-12)",
        "National Economics Challenge finalist (11)",
        "Vice President of DECA, state-level champion (10-12)",
        "Volunteer tutor for financial literacy at local community center (11-12)",
        "Varsity Tennis Captain (10-12)",
        "Managed a personal stock portfolio, with 20% annual returns (11-12)"
      ],
      "awardsHonors": [
        "International DECA Finalist (11)",
        "National Merit Semifinalist (11)",
        "President's Volunteer Service Award (Gold) (12)",
        "2nd place in state-level Economics Challenge (11)",
        "AP Scholar with Distinction"
      ],
      "lettersOfRecommendation": [
        { "subject": "Economics Teacher", "rating": 10, "relationship": "Mentored through Investment Club, strong leadership and economic insight" },
        { "subject": "Math Teacher", "rating": 9, "relationship": "Excelled in AP Calculus and statistics, strong analytical thinker" },
        { "subject": "Wharton Student (Senior)", "rating": 8, "relationship": "Worked together on market analysis research" }
      ],
      "decisions": {
        "Early Decision": {
          "University of Pennsylvania (Wharton)": "Deferred"
        },
        "Regular Decision": {
          "University of Pennsylvania (Wharton)": "Accepted",
          "Harvard": "Waitlisted",
          "Stanford": "Rejected",
          "University of Chicago": "Accepted",
          "Columbia": "Waitlisted",
          "New York University (Stern)": "Accepted",
          "University of Michigan (Ross)": "Accepted",
          "Rutgers University": "Accepted",
          "Penn State": "Accepted",
          "University of Delaware": "Accepted"
        }
      },
      "acceptedColleges": [
        "University of Pennsylvania (Wharton)",
        "Harvard",
        "University of Chicago",
        "New York University (Stern)",
        "University of Michigan (Ross)",
        "Rutgers University",
        "Penn State",
        "University of Delaware"
      ]
    }
    
    
    
    
    
    


];
  


export default applications;
  