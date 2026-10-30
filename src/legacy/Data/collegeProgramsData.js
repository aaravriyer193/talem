const collegeProgramsData = {
  harvard: {
    title: 'Harvard University',
    finaid: 'https://college.harvard.edu/financial-aid',
    programs: [
      {
        title: 'Harvard Small Business Academy',
        link: 'https://www.academies.hsa.net/on-campus-business',
        description:
          'Immerse yourself in a week-long day camp that lays the foundation of business fundamentals and equips you with skills essential to kickstart your own ventures. The week culminates with a thrilling business pitch competition. Tailoring to diverse expertise levels, SBA offers both SBA Level I and SBA Level II programs.',
        tags: [
          'Grades 9-11',
          '$800',
          'Priority Application Deadline: Early March',
        ],
      },
      {
        title: 'Harvard Summer Coding Academy',
        link: 'https://summer.harvard.edu/high-school-programs/secondary-school-program/secondary-school-program-courses-and-subjects/computer-science-and-engineering/',
        description:
          'Dive into the world of coding through an intensive week-long day camp. Develop the knowledge and resources to craft your own programs. An extended option delves deeper, focusing on dynamic websites and abstracting code concepts.',
        tags: [
          'Grades 9-11',
          '$800',
          'Priority Application Deadline: Early March',
        ],
      },
      {
        title: 'Harvard Summer Politics Academy',
        link: 'https://www.academies.hsa.net/virtual-government',
        description:
          'Experience a dynamic week-long day program at Harvard, immersing yourself in key concepts related to politics, government, and international relations. Classes, workshops, and hands-on projects lead to the SPA Summit, exploring politics in depth.',
        tags: [
          'Grades 9-11',
          '$800',
          'Priority Application Deadline: Early March',
        ],
      },
      {
        title: 'Summer Institutes in Global Leadership',
        link: 'https://unagb.org/model-un/vacation-institutes/',
        description:
          'Engage in a captivating Model UN camp at Harvard University and Belmont Day School. Tackle global issues critically, employing diplomacy and compromise, while formulating impactful policy proposals. Diverse weekly themes invite students to participate in multiple sessions.',
        tags: [
          'Grades 9-11',
          '$700',
          'Varies; Registration usually opens in the beginning of the calendar year',
        ],
      },
      {
        title: 'Harvard University Pre-College Programs (Full List)',
        link: 'https://summer.harvard.edu/high-school-programs/pre-college-program/',
        description:
          'Indulge in the essence of college life at Harvard. Live on campus, explore stimulating co-curriculars, and enroll in challenging courses spanning physics, law, writing, philosophy, and more. Each two-week session provides a comprehensive glimpse of college academics.',
        tags: [
          'Grades 10-11',
          '$4775',
          'Priority Application Deadline: Early February',
        ],
      },
      {
        title: 'Harvard University Secondary School Program',
        link: 'https://summer.harvard.edu/high-school-programs/secondary-school-program/',
        description:
          'Customize your learning by choosing from a diverse range of over 200 summer courses. Earn college credits while gaining insights into college life and academics. Engage with peers worldwide through workshops, counseling sessions, and a unique college fair.',
        tags: [
          'Grades 10-11',
          'Residential: $12,730, Online/Commuter: $3,340–$6,680',
          'Deadline: Early May',
        ],
      },
    ],
  },
  'university-of-virginia': {
    title: 'University of Virginia',
    finaid: 'https://sfs.virginia.edu/',
    programs: [
      {
        title: 'UVA Advance',
        link: 'https://summer.virginia.edu/uva-advance',
        description:
          'UVA Advance is a four-week residential, credit-granting pre-college program for highly motivated rising high school juniors and seniors. Participants take two undergraduate courses, earn six transferable credits, live on campus, and join organized residential and extracurricular activities.',
        tags: ['Rising Juniors and Seniors', 'Ages 15-18', 'Residential', 'Six College Credits'],
      },
      {
        title: 'UVA Advance: AAS 2760: Empowered Women of Africa',
        link: 'https://summer.virginia.edu/aas-2760-empowered-women-africa',
        description:
          'Explore the diverse narratives and achievements of empowered women in Africa through this captivating course. Taught by Assistant Professor of African-American and African Studies Anne Rotich, participants will gain insights into the historical and contemporary contributions of women across the African continent.',
        tags: [
          'Undergraduate Course',
          'Cultural Studies',
          'Summer Residential Program',
        ],
      },
      {
        title: 'UVA Advance: EVSC 2050: Introduction to Oceanography',
        link: 'https://summer.virginia.edu/evsc-2050-introduction-oceanography',
        description:
          "Embark on a fascinating journey through the oceans with Professor of Environmental Sciences Stephen Macko. This course delves into the intricate ecosystems and processes that shape Earth's oceans. Participants will explore the marine world and gain a deeper understanding of its significance.",
        tags: [
          'Undergraduate Course',
          'Environmental Sciences',
          'Oceanography',
        ],
      },
      {
        title: 'UVA Advance: HIST 2559: Genocide',
        link: 'https://summer.virginia.edu/hist-2559-genocide',
        description:
          'Delve into the profound exploration of historical and contemporary genocides under the guidance of Associate Professor of History Jeffrey Rossman. Through critical analysis and discussion, participants will grapple with complex questions surrounding genocide, its causes, and implications.',
        tags: ['Undergraduate Course', 'History', 'Genocide Studies'],
      },
      {
        title: 'UVA Advance: PLAP 2500: Campaign and Election Politics',
        link: 'https://summer.virginia.edu/plap-2500-campaign-and-election-politics',
        description:
          'Uncover the intricacies of campaign and election politics in this engaging course led by Lecturer with the Center for Politics Carah Ong Whaley. Participants will gain insights into the strategies, dynamics, and impact of political campaigns, offering a deeper understanding of the democratic process.',
        tags: [
          'Undergraduate Course',
          'Political Science',
          'Campaign Politics',
        ],
      },
    ],
  },
  yale: {
    title: 'Yale University',
    finaid:
      'https://summer.yale.edu/dates-costs/financial-assistance#:~:text=YSS%20financial%20assistance%20automatically%20provides,of%20%244%2C850%20for%20Summer%202023).',
    programs: [
      {
        title: 'Yale Young Global Scholars',
        link: 'https://globalscholars.yale.edu/',
        description:
          'Yale Young Global Scholars is a two-week residential academic enrichment program for high school students from around the world. Students choose an interdisciplinary track in science and technology, law and economics, or global challenges while attending lectures, seminars, and collaborative projects on Yale’s campus.',
        tags: ['Ages 16-18', 'Two Weeks', 'Residential', 'Need-Based Aid Available'],
      },
      {
        title: 'Yale Pre-College Summer Session',
        link: 'https://summer.yale.edu/apply/pre-college-students',
        description:
          'Experience the vitality of college life by immersing yourself in a for-credit course during this summer session. High school juniors will reside on campus and attend classes with college students, gaining a head start on their education. Engage in an enriching academic environment that nurtures curiosity, critical thinking, and personal growth.',
        tags: ['Grade 11', '$3,550', 'Rolling Application', 'General Academic'],
      },
      {
        title: 'Yale Young Global Scholars | Applied Science & Engineering',
        link: 'https://globalscholars.yale.edu/applied-science-engineering',
        description:
          'Embark on a journey through the realms of physics, chemistry, astronomy, and earth science during this comprehensive program. Delve into the principles of science and discover their real-world applications. Collaborate with peers to solve complex challenges and cultivate critical thinking, all while gaining insights into the exciting field of engineering.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Engineering',
        ],
      },
      {
        title:
          'Yale Young Global Scholars | International Affairs & Globalization',
        link: 'https://globalscholars.yale.edu/international-affairs-globalization',
        description:
          'Uncover the intricate landscape of international affairs and explore contemporary and historical global issues. Through immersive classes and hands-on projects, develop a nuanced understanding of the dynamics shaping our interconnected world. Engage in thought-provoking discussions and broaden your perspective on global governance and diplomacy.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Government/International Relations',
        ],
      },
      {
        title:
          'Yale Young Global Scholars | Sustainable Development & Social Entrepreneurship',
        link: 'https://globalscholars.yale.edu/sustainable-development-social-entrepreneurship',
        description:
          "Embark on a transformative journey into the realm of sustainable development and social entrepreneurship. Discover innovative solutions to global challenges while exploring emerging fields such as global health and international development. Through interdisciplinary exploration, gain insights into United Nations' Sustainable Development Goals and contribute to shaping a more equitable future.",
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Economics',
        ],
      },
      {
        title: 'Yale Young Global Scholars | Frontiers of Science & Technology',
        link: 'https://globalscholars.yale.edu/frontiers-science-technology',
        description:
          'Unveil the frontiers of science and technology as you delve into cutting-edge research in artificial intelligence, gene editing, and cyber security. Explore the ethical implications and societal impacts of these groundbreaking advancements. Develop a deep understanding of the complexities and potential of modern scientific innovation.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'General Science',
        ],
      },
      {
        title: 'Yale Young Global Scholars | Literature, Philosophy, & Culture',
        link: 'https://globalscholars.yale.edu/literature-philosophy-culture',
        description:
          'Journey through a diverse array of global literature, philosophy, music, and cultural theory to develop a comprehensive understanding of human expression. Engage with culturally significant texts and explore their relevance to contemporary issues. Enhance your critical thinking, oral communication, and written expression skills while connecting with fellow scholars from around the world.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'General Humanities',
        ],
      },
      {
        title: 'Yale Young Global Scholars | Biological & Biomedical Science',
        link: 'https://globalscholars.yale.edu/biological-biomedical-science',
        description:
          'Embark on a fascinating exploration of biological and biomedical sciences, unraveling the mysteries of immunology, biochemistry, neuroscience, and more. Examine the practical applications of these fields in improving human lives and well-being. Collaborate with peers to unravel complex scientific challenges and gain insights into the frontiers of life sciences.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Life Sciences/Biology',
        ],
      },
      {
        title: 'Yale Young Global Scholars | Creative Arts & Media',
        link: 'https://globalscholars.yale.edu/creative-arts-media',
        description:
          'Ignite your creative spark as you delve into the realms of theater, film, music, architecture, and visual arts. Explore how the arts can address social issues and spark change. Engage with critical theory and analysis to understand the power of artistic expression. Discover career paths in the arts and humanities while honing your creative and analytical skills.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Studio Art',
        ],
      },
      {
        title: 'Yale Young Global Scholars | Politics, Law, & Economics',
        link: 'https://globalscholars.yale.edu/politics-law-economics',
        description:
          'Explore the intricate interplay of politics, law, and economics as you delve into public policy, human rights, governance, and international law. Examine contemporary social systems through the lenses of economic, legal, and political theory. Build your critical thinking and analytical skills while engaging with pressing global issues.',
        tags: [
          'Grades 10-11',
          '$6,250',
          'Early February Application',
          'Government/International Relations',
        ],
      },
      {
        title: 'EXPLO at Yale',
        link: 'https://explo.org/pre-college-program',
        description:
          'Embark on a multifaceted learning experience that transcends traditional boundaries. Participate in a diverse range of courses and workshops spanning business, law, world affairs, arts, and more. Engage with speakers, collaborate on group activities, and extend your learning through enriching weekend trips that will expand your horizons.',
        tags: [
          'Grades 10-12',
          '$6,595',
          'Late December Application',
          'General Academic',
        ],
      },
      // Add more programs...
    ],
  },
  upenn: {
    title: 'University of Pennsylvania',
    finaid: 'https://srfs.upenn.edu/financial-aid/summer',
    programs: [
      {
        title: 'Glassman Penn Scholars',
        link: 'https://outreach.engineering.upenn.edu/glassman-penn-scholars/',
        description:
          'Glassman Penn Scholars is a five-week summer pre-college initiative for academically accomplished rising seniors from Philadelphia schools. Penn Engineering faculty and educators provide advanced STEM preparation alongside college application, communication, networking, and leadership support.',
        tags: ['Rising Seniors', 'Philadelphia Students', 'Five Weeks', 'STEM'],
      },
      {
        title: 'Provost’s Summer Mentorship Program',
        link: 'https://vpse.upenn.edu/smp/',
        description:
          'Penn’s Provost’s Summer Mentorship Program is a four-week, campus-based college and career preparation experience for Philadelphia students entering grades 10 or 11. Students explore STEM or law careers through a Penn graduate-school partner and receive support in financial literacy, study skills, test preparation, and college applications.',
        tags: ['Entering Grades 10-11', 'Philadelphia Students', 'Four Weeks', 'Career Exploration'],
      },
      {
        title: 'Penn Summer Prep Program',
        link: 'https://hs.sas.upenn.edu/summer-programs/summer-prep',
        description:
          'Introduce yourself to college life and explore diverse academic modules in psychology, philosophy, computer science, life sciences, and general college preparation. Designed for students seeking a taste of higher education, this program also offers the opportunity to request a letter of recommendation from UPenn faculty for college applications.',
        tags: ['Grades 9-11', '$4,429', 'May Application', 'General Academic'],
      },
      {
        title: 'Penn Summer Academies | Social Justice Research Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/social-justice',
        description:
          'Immerse yourself in a three-week journey of social justice exploration. Investigate historical and contemporary movements while enhancing research and leadership skills. Blend classroom lectures with Philadelphia site visits, and cap off the experience with a research project that synthesizes newfound insights.',
        tags: ['Grades 9-11', '$8,449', 'May Application', 'Social Justice'],
      },
      {
        title: 'Penn Summer Academies | Biomedical Research Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/biomedical',
        description:
          'Combine classroom lectures and hands-on experiments in this captivating academy. Delve into the cellular, molecular, and genetic aspects of biology, working in teams to research and present findings. Gain insights into the world of scientific research with the guidance of UPenn instructors.',
        tags: [
          'Grades 9-11',
          '$8,449',
          'May Application',
          'Biomedical Research',
        ],
      },
      {
        title: 'Penn Summer Academies | Chemistry Research Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/chemistry',
        description:
          "Embark on an immersive chemistry experience that involves recreating experiments and conducting original research. Gain firsthand exposure to advanced lab techniques, while exploring the nation's premier chemistry research labs on UPenn's campus.",
        tags: [
          'Grades 9-11',
          '$8,449',
          'May Application',
          'Chemistry Research',
        ],
      },
      {
        title: 'Penn Summer Academies | Experimental Physics Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/experimental-physics',
        description:
          'Experience advanced physics concepts through a blend of learning and application. Specialize in topics such as non-Newtonian fluids, radio astronomy, and quantum phenomena. Immerse yourself in scientific exploration and connect theory with real-world experiences.',
        tags: ['Grades 9-11', '$8,449', 'May Application', 'Physics'],
      },
      {
        title: 'Penn Summer Academies | Mathematics Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/mathematics',
        description:
          'Dive into advanced mathematical topics not typically covered in high school classes. Explore discrete math, algebra, number theory, and geometry in interactive sessions. Gain insights into the applications of mathematics through engaging demonstrations and visits to math museums.',
        tags: ['Grades 9-11', '$8,449', 'May Application', 'Mathematics'],
      },
      {
        title: 'Penn Summer Academies | Neuroscience Research Academy',
        link: 'https://hs.sas.upenn.edu/summer-programs/academies/neuroscience',
        description:
          'Embark on a comprehensive journey into the world of neuroscience. From the biological foundation of the brain to higher-order cognitive functions, explore hands-on experiments and tours of active research facilities at UPenn.',
        tags: ['Grades 9-11', '$8,449', 'May Application', 'Neuroscience'],
      },
      {
        title: 'Penn Young Scholars Program',
        link: 'https://hs.sas.upenn.edu/academic-year-program',
        description:
          'Experience true college-level learning by enrolling in summer courses alongside Penn undergraduates. Immerse yourself in rigorous coursework, take one or two courses, and potentially earn college credit while refining your academic and personal growth.',
        tags: [
          'Grades 10-11',
          '$4,392/c.u.',
          'May Application',
          'College-level Learning',
        ],
      },
      {
        title: 'Summer at Penn | Architecture',
        link: 'https://www.studyarchitecture.com/blog/architecture-news/architecture-summer-programs-at-penn/',
        description:
          "Develop your portfolio and refine design skills under the guidance of UPenn's esteemed faculty. Immerse yourself in architectural concepts, visit Philadelphia's inspiring architectural sites, create models, and showcase your work in a fine arts gallery on-campus.",
        tags: ['Grades 9-11', '$6,875', 'Rolling', 'Architecture'],
      },
      {
        title: 'Summer at Penn | Art',
        link: 'https://hs.sas.upenn.edu/',
        description:
          "Choose from two sets of studios to enhance your artistic skills and create an admissions-worthy portfolio. Explore Animation Production, Drawing and Painting, New Media, and more. Your work will be professionally photographed and exhibited in UPenn's fine arts gallery.",
        tags: ['Grades 9-11', '$6,550', 'Rolling', 'Art'],
      },
      {
        title: 'KWHS Global Young Leaders Academy',
        link: 'https://globalyouth.wharton.upenn.edu/competitions/global-young-leaders-academy/',
        description:
          'Unlock your entrepreneurial spirit through this two-week academy. Dive into accounting, management, and marketing, develop a business plan, meet local startups, and gain insights into college admissions. Choose from five sessions and experience business in action.',
        tags: ['Grades 9-11', '$5,115', 'Rolling', 'Entrepreneurship'],
      },
      {
        title: 'Leadership in the Business World',
        link: 'https://globalyouth.wharton.upenn.edu/programs-courses/leadership-in-the-business-world/',
        description:
          'Join this selective business program designed for rising seniors passionate about making a societal impact through business. Attend Penn faculty lectures, visit local enterprises, and collaborate on a business plan evaluated by venture capitalists and professionals.',
        tags: ['Grade 11', '$7,995', 'February Application', 'Leadership'],
      },
      {
        title: 'Management & Technology Summer Institute',
        link: 'https://fisher.wharton.upenn.edu/management-technology-summer-institute//',
        description:
          'Blend business and engineering in this program that offers college credit upon completion. Explore technological entrepreneurship, attend lectures, and design a prototype and market plan. Elevate your technical and business creativity in this innovative program.',
        tags: [
          'Grades 10-11',
          '$7,000',
          'February Application',
          'Business & Engineering',
        ],
      },
      {
        title: 'Penn Law Pre-College Summer Academy',
        link: 'https://www.law.upenn.edu/academics/legaleducationprograms/pre-college-summer.php',
        description:
          'Experience the world of law in this three-week program. Explore basic legal concepts, specialize in Business and Entrepreneurship Law or Human Rights and Legal Advocacy, and gain insights into potential career paths in the legal field.',
        tags: ['Grades 10-11', '$7,999', 'Rolling', 'Law'],
      },
      {
        title: 'Penn Medicine Summer Program for High School Students',
        link: 'https://hs.sas.upenn.edu/',
        description:
          'Aspiring doctors can explore medical procedures through this immersive summer program. Gain hands-on experience in suturing, drawing blood, IVs, dissections, and surgeries. Observe live surgeries and immerse yourself in the medical field.',
        tags: ['Grades 10-11', '$7,995', 'March Application', 'Medicine'],
      },
    ],
  },
  mit: {
    title: 'MIT',
    finaid:
      'http://catalog.mit.edu/summer/tuition-financial-aid/#:~:text=For%20undergraduate%20students%2C%20MIT%20does,edu%20to%20discuss%20their%20options.',
    programs: [
      {
        title:
          'MIT Summer High School Launch Entrepreneurship Program (launchX)',
        link: 'https://launchx.com/',
        description:
          "Embark on a transformative journey with the four-week MIT Summer High School Launch Entrepreneurship Program. This immersive, residential camp equips students in grades 9-11 with entrepreneurial skills through dynamic workshops and classes. By building real products and tackling authentic business challenges, participants gain invaluable insights into the world of entrepreneurship. Program cost varies based on income, with a total tuition of $8,000. Don't miss the opportunity to apply by the early decision deadline in late December or the regular decision deadline in late February.",
        tags: [
          'Entrepreneurship',
          'High School',
          'Business',
          'Grades 9-11',
          'Late December',
          'Late February',
        ],
      },
      {
        title: 'Minority Introduction to Engineering and Science (MITES)',
        link: 'https://mites.mit.edu/',
        description:
          "Elevate your academic journey through the six-week MIT Minority Introduction to Engineering and Science (MITES) program. Specifically designed for underrepresented rising seniors, MITES provides a transformative residential experience. Engage in rigorous math, life sciences, physics, humanities, and elective courses that empower you for a successful STEM career. Admissions are exceptionally competitive, reflecting the program's reputation for excellence. Apply by the early February deadline to embark on this exceptional educational endeavor.",
        tags: [
          'STEM',
          'Minorities',
          'High School',
          'Grades 12',
          'Early February',
        ],
      },
      {
        title: 'Research Science Institute',
        link: 'https://www.cee.org/programs/research-science-institute',
        description:
          'Unlock the realm of scientific exploration through the seven-week MIT Research Science Institute. This immersive on-campus experience empowers rising 12th graders with a unique blend of academic coursework and hands-on scientific endeavors. Embrace the opportunity to delve into diverse research fields, guided by your passion and curiosity. Discover the art of presenting conference-style oral and written reports on your findings. Submit your application by the mid-January deadline to embark on this journey of discovery and knowledge.',
        tags: ['Research', 'STEM', 'High School', 'Grades 12', 'Mid January'],
      },
      {
        title: 'MIT Women’s Technology Program',
        link: 'https://web.mit.edu/wtp/',
        description:
          'Ignite your engineering prowess with the four-week MIT Women’s Technology Program. Delve into a captivating residential experience that blends hands-on classes, labs, and team-based projects. Designed for rising 12th graders, this program provides a deep dive into the world of engineering. With a program cost of $3500, this opportunity promises a transformative experience that equips you with invaluable skills and insights. Be sure to apply by the mid-January deadline to secure your spot in this empowering program.',
        tags: [
          'Engineering',
          'Women',
          'High School',
          'Grades 12',
          'Mid January',
        ],
      },
      {
        title: 'Beaver Works Summer Institute',
        link: 'https://beaverworks.ll.mit.edu/CMS/bw/BWSI',
        description:
          'Immerse yourself in the world of STEM through the dynamic Beaver Works Summer Institute. Over the course of four weeks, engage in project-based, workshop-style courses that challenge and inspire. Tailored for highly talented rising 12th graders, this residential program provides a platform for you to showcase your skills and creativity. While admissions are highly competitive, the program offers a free opportunity to unlock your full potential. Start your journey by registering for online classes in December, and submit your application by the April deadline.',
        tags: ['STEM', 'High School', 'Grades 12', 'December', 'April'],
      },
      {
        title:
          'Lincoln Laboratory Radar Introduction for Student Engineers (LLRISE)',
        link: 'https://www.ll.mit.edu/outreach/llrise',
        description:
          'Embark on a two-week odyssey into radar technology with the MIT Lincoln Laboratory Radar Introduction for Student Engineers (LLRISE) program. Crafted for rising 12th graders, this enriching experience empowers you to build small radar systems, explore Doppler and range radar, and acquire hands-on skills. With a focus on experiential learning, LLRISE offers a transformative platform to delve into engineering and technology. Seize this opportunity to innovate and learn by submitting your application by the late March deadline.',
        tags: [
          'Engineering',
          'Radar',
          'High School',
          'Grades 12',
          'Late March',
        ],
      },
      {
        title: 'Engineering and Robotics at MIT',
        link: 'https://natgeostudenttravel.org/programs/mitcampus-robotics-technology/',
        description:
          'Discover the intersection of engineering, computer science, and robotics through the two-week Engineering and Robotics program at MIT. Curated for students in grades 9-11, this residential experience is a partnership with National Geographic. Engage in seminars, workshops, and fieldwork led by National Geographic experts, all while immersing yourself in MIT campus life. With a program cost of $5390, this opportunity offers a blend of education and adventure. As admissions are rolling, seize this chance to be part of a transformative learning journey.',
        tags: [
          'Engineering',
          'Robotics',
          'High School',
          'Grades 9-11',
          'Rolling',
        ],
      },
    ],
  },
  brown: {
    title: 'Brown University',
    finaid:
      'https://finaid.brown.edu/aid-types/other/summer-financial-aid#:~:text=If%20you%20are%20taking%20summer,summer%20courses%20you%20are%20taking.',
    programs: [
      {
        title: 'Summer@Brown',
        link: 'https://precollege.brown.edu/programs/summerbrown',
        description:
          "Choose from more than 300 non-credit courses reflecting the wide range of Brown University’s Open Curriculum that challenge you with new perspectives on how you work, learn and live. With a diverse community of students from around the world, you'll engage in workshops, activities, and events that inform, engage, and entertain, fostering independence and preparedness for college life and beyond.",
        tags: ['Summer Program', 'Non-Credit Courses', 'Diverse Community'],
      },
      {
        title: 'Brown Environmental Leadership Labs (BELL)',
        link: 'https://precollege.brown.edu/programs/bell-program',
        description:
          'The Brown Environmental Leadership Lab (BELL) combines concepts in environmental studies, ecology, and leadership to develop socially responsible leaders. Through immersive learning and reflection, students build a sense of community while addressing environmental challenges.',
        tags: ['Environmental Studies', 'Leadership', 'Immersive Learning'],
      },
      {
        title: 'Brown Experiential Education (BEE)',
        link: 'https://precollege.brown.edu/programs/brown-experiential-education-bee',
        description:
          'Brown Experiential Education (BEE) programs offer immersive and rigorous academic experiences that connect coursework with program locations to enhance learning. These interdisciplinary programs prepare students to understand complex global challenges by exploring new places and perspectives.',
        tags: [
          'Experiential Education',
          'Interdisciplinary',
          'Global Challenges',
        ],
      },
      {
        title: 'Summer@Brown Online',
        link: 'https://precollege.brown.edu/programs/summerbrown-online',
        description:
          'Enroll in Summer@Brown Online and choose from more than 80 courses offering active learning experiences, reflecting the breadth of Brown’s Open Curriculum. Engage with peers from around the world and learn through asynchronous, mostly asynchronous, or blended online courses.',
        tags: ['Online Learning', 'Active Learning', 'Open Curriculum'],
      },
      {
        title: 'Leadership Institute',
        link: 'https://precollege.brown.edu/programs/leadership-institute',
        description:
          'The Leadership Institute offers 2-week on-campus sessions or 4-week online sessions for rising 11th and 12th graders. Engage in courses on social issues and develop collaborative leadership skills through active learning and problem-solving. Create an Action Plan to make an impact in your community.',
        tags: ['Leadership Skills', 'Social Issues', 'Collaboration'],
      },
      {
        title: 'STEM for Rising 9th and 10th Graders',
        link: 'https://precollege.brown.edu/stem-rising',
        description:
          'Immerse yourself in STEM fields with hands-on research projects, experiments, and design-build challenges. Choose from a range of STEM courses and collaborate with peers in a 2-week program to advance your knowledge while experiencing the satisfaction of advanced academics.',
        tags: ['STEM', 'Hands-on Projects', 'Collaboration'],
      },
      {
        title: 'Pre-Baccalaureate',
        link: 'https://precollege.brown.edu/programs/pre-baccalaureate',
        description:
          'The Pre-Baccalaureate Program offers high school seniors the opportunity to undertake credit-bearing, undergraduate-level study during Brown University’s Summer Session. Enroll in rigorous courses alongside Brown and visiting undergraduates in various disciplines, both on-campus and online.',
        tags: [
          'Pre-College Program',
          'Undergraduate-Level Study',
          'Credit-Bearing Courses',
        ],
      },
    ],
  },
  ucla: {
    title: 'UCLA',
    finaid: 'https://summer.ucla.edu/fees-payment-and-financial-aid/',
    programs: [
      {
        title: 'UCLA Summer College Immersion Program',
        description:
          'The Summer College Immersion Program allows academically advanced students in grades 10 and 11 to take one or two UCLA courses for credit alongside undergraduates. The on-campus experience also includes college-readiness workshops, social activities, and an introduction to university life.',
        tags: ['Grades 10-11', 'Minimum 3.8 GPA', 'College Credit', 'On Campus'],
        link: 'https://summer.ucla.edu/summer-programs/summer-college-immersion-program/scip/',
      },
      {
        title: 'UCLA Approved Summer Courses for High School Students',
        description:
          'Students age 15 and older can enroll in one or two approved UCLA Summer Sessions courses, up to ten units, and study alongside university students. Courses may be offered in person or online and award UCLA credit upon successful completion.',
        tags: ['Age 15+', 'Up to 10 Units', 'College Credit', 'In Person or Online'],
        link: 'https://summer.ucla.edu/courses/approved-summer-courses-for-high-school-students/',
      },
      {
        title: 'UCLA Computer Science Summer Institute',
        description:
          'UCLA’s Computer Science Summer Institute is a rigorous three-week pre-college program for high school students interested in computer science. UCLA faculty and doctoral students lead intensive coursework, hands-on coding, mentorship, and a collaborative capstone project across specialized computing tracks.',
        tags: ['High School Students', 'Three Weeks', 'Computer Science', 'Certificate or College Credit'],
        link: 'https://cssi.cs.ucla.edu/',
      },
      {
        title: 'Acting and Performance Summer Institute',
        description:
          'Immerse yourself in the world of performance with this 3-week program. Participate in performance training classes, learn movement-based techniques, and star in a final performance project. Engage in field trips and guest workshops to enhance your skills. This program is open to 9th, 10th, and 11th graders and aims to foster creativity and storytelling through the art of acting.',
        tags: ['9th-11th Grades', '$6,700 Cost', 'Video Monologue Required'],
        link: 'https://summer.ucla.edu/program/acting-and-performance-summer-institute/',
      },
      {
        title: 'Applications of Nanoscience Summer Institute',
        description:
          'For students with a strong chemistry background, this 2-week program offers hands-on experiments and rigorous scientific methodology. Learn the basics of pursuing a scientific research project in the field of nanoscience. Open to 9th, 10th, and 11th graders, this program equips participants with practical skills for scientific exploration.',
        tags: ['9th-11th Grades', '$2,500 Cost', 'Science Interest Required'],
        link: 'https://summer.ucla.edu/program/applications-of-nanoscience-summer-institute/',
      },
      {
        title: 'Art Summer Institute',
        description:
          'Refine your artistic talents in this 2- or 4-week program. Choose a specialization in drawing, painting, photography, or sculpture. Engage in focused studio work, interact with artist lectures, and enjoy field trips. This program welcomes 9th, 10th, and 11th graders interested in exploring their creativity through various artistic mediums.',
        tags: ['9th-11th Grades', '$4,000 Cost', 'Art Portfolio Required'],
        link: 'https://summer.ucla.edu/program/art-summer-institute/',
      },
      {
        title: 'Camera Acting Summer Institute',
        description:
          'Delve into the world of on-camera acting in this 2- or 4-week program. Learn techniques for film appearances, audition preparation, and gain insight from field trips and guest lectures. This program is open to 9th, 10th, and 11th graders who are passionate about honing their acting skills for the screen.',
        tags: ['9th-11th Grades', '$4,366 Cost', 'Video Monologue Required'],
        link: 'https://summer.ucla.edu/program/camera-acting-summer-institute/',
      },
      {
        title: 'Dance/Performing Arts Summer Institute',
        description:
          'Embark on a 9-day residential journey into the world of dance and performing arts. Explore diverse dance styles and cultures while training intensively to create a self-directed performance. This program is perfect for 9th, 10th, and 11th graders with a passion for dance and performance.',
        tags: [
          '9th-11th Grades',
          '$150+ Cost',
          'Deadline: 4/1/19',
          'Dance Experience Preferred',
        ],
        link: 'https://summer.ucla.edu/program/hip-hop-street-dance-summer-institute/',
      },
      {
        title: 'Design Media Arts Summer Institute',
        description:
          'Unleash your creativity in the digital arts during this 2-week program. Create a design media arts portfolio and develop skills in print, web, video, and game design. This program is exclusively available for 10th and 11th graders interested in exploring the world of digital visual communication.',
        tags: ['10th & 11th Only', '$3,701 Cost'],
        link: 'https://summer.ucla.edu/program/design-media-arts-summer-institute/',
      },
      {
        title: 'Digital Filmmaking Summer Institute',
        description:
          'Dive into the world of cinematic storytelling in this 2-week intensive program. Produce a short film using the latest technology and camera equipment, attend film screenings, and experience a Hollywood studio visit. Open to 10th and 11th graders who are eager to explore the art of digital filmmaking.',
        tags: [
          '10th & 11th Only',
          '$150+ Cost',
          'Filmmaking Interest Required',
        ],
        link: 'https://summer.ucla.edu/program/digital-filmmaking-summer-institute/',
      },
      {
        title: 'Economics Summer Institute',
        description:
          'Explore career opportunities in economics through this 3-week program. Learn about factors affecting the world while earning UCLA college credit. Engage with economic theories and real-world scenarios. This program is designed for 9th, 10th, and 11th graders with an interest in economic analysis.',
        tags: ['9th-11th Grades', '$4,881 Cost'],
        link: 'https://summer.ucla.edu/program/economics-summer-institute/',
      },
      {
        title: 'Engineering Design Summer Institute',
        description:
          'Discover the world of engineering in this 3-week program. Choose from aerospace, mechanical, electrical, or chemical engineering disciplines to focus on. Dive into hands-on projects and learn from experienced faculty. This program is open to 9th, 10th, and 11th graders passionate about engineering.',
        tags: ['9th-11th Grades', '$5,181 Cost'],
        link: 'https://summer.ucla.edu/program/engineering-design-summer-institute/',
      },
      {
        title: 'Game Lab Summer Institute',
        description:
          'Unleash your creativity in game development during this 2-week program. Master the fundamentals of game design, create compelling characters, and build immersive game worlds. Open to 9th, 10th, and 11th graders interested in exploring the world of video game creation.',
        tags: ['9th-11th Grades', '$2,461 Cost'],
        link: 'https://summer.ucla.edu/program/game-lab-summer-institute/',
      },
      {
        title: 'Immersive International Studies Summer Institute',
        description:
          'Embark on a 1-week journey into international history. Choose between exploring the French Revolution or Indian Independence through interactive games, roleplay, and research. Open to 9th, 10th, and 11th graders, this program offers a unique opportunity to engage with global historical events in an immersive and hands-on manner.',
        tags: ['9th-11th Grades', '$981 Cost'],
        link: 'https://summer.ucla.edu/program/immersive-international-studies-summer-institute/',
      },
      {
        title: 'Mock Trial Summer Institute',
        description:
          'Boost your persuasion skills in this 1-week program. Enhance your public speaking confidence and gain insights into the legal profession. Designed for 9th, 10th, and 11th graders interested in law and communication, this program provides a valuable experience in building compelling arguments.',
        tags: ['9th-11th Grades', '$2,131 Cost'],
        link: 'https://summer.ucla.edu/program/mock-trial-summer-institute/',
      },
      {
        title: 'Model UN Summer Institute',
        description:
          "Elevate your public speaking abilities in this 1-week program. Ideal for students interested in law, international relations, public policy, government, and diplomacy, you'll enhance your communication and negotiation skills. Open to 9th, 10th, and 11th graders, this program offers a dynamic experience in global affairs.",
        tags: ['9th-11th Grades', '$2,081 Cost'],
        link: 'https://summer.ucla.edu/program/model-united-nations-summer-institute/',
      },
      {
        title: 'Musical Theatre Summer Institute',
        description:
          'Bring stories to life in this 3-week musical theatre intensive. Engage in conservatory-style training encompassing acting, singing, dancing, workshops, and backstage operations. Open to 9th, 10th, and 11th graders with a passion for musical theatre, this program encourages you to express your storytelling through song and dance.',
        tags: ['9th-11th Grades', '$7,771 Cost', 'Audition Required'],
        link: 'https://summer.ucla.edu/program/musical-theater-summer-institute/',
      },
      {
        title: 'Nanoscale Microscopy Lab Summer Institute',
        description:
          'Dive into nanoscience with hands-on experience in this 1-week program. Master fluorescence, scanning probe, and electron microscopy skills. Perfect for 9th, 10th, and 11th graders with a curiosity for the nanoscale world, this program equips you with essential techniques for advanced scientific exploration.',
        tags: [
          '9th-11th Grades',
          '$2,021 Cost',
          'Microscopy Interest Required',
        ],
        link: 'https://summer.ucla.edu/program/nanoscale-microscopy-lab-summer-institute/',
      },
      {
        title: 'Nanoscience Lab Summer Institute',
        description:
          'Survey diverse nanoscience topics in this 5-day program. Ideal for students with a chemistry background, explore bio-toxicity, supercapacitors, and more. Open to 9th, 10th, and 11th graders, this program provides insights into cutting-edge nanotechnology and its applications.',
        tags: ['9th-11th Grades', '$2,221 Cost', 'Science Interest Required'],
        link: 'https://summer.ucla.edu/program/nanoscience-lab-summer-institute/',
      },
      {
        title: 'Sci/Art Lab + Studio Summer Institute',
        description:
          'Merge science and fine arts in this 2-week program. Challenge traditional perspectives by connecting scientific research with contemporary arts and culture. Exclusively for 10th and 11th graders, this program invites you to explore the intersections between creativity and scientific inquiry.',
        tags: ['10th & 11th Only', '$4,021 Cost', 'Sci-Art Interest Required'],
        link: 'https://summer.ucla.edu/program/sciart-lab-studio-summer-institute/',
      },
      {
        title: 'Teen ArchStudio Summer Institute',
        description:
          'Hone your architecture skills in this 2- or 3-week program. Gain insight into the design studio experience from UCLA Architecture students, faculty, and alumni mentors. Open to 9th, 10th, and 11th graders, this program offers an immersive glimpse into the world of architectural design.',
        tags: ['9th-11th Grades', '$3,851 Cost'],
        link: 'https://summer.ucla.edu/program/teen-archstudio-summer-institute/',
      },
      {
        title: 'Writing Summer Institute',
        description:
          'Refine your writing skills in this 3-week program. Learn effective written communication, master the timed essay, and gain insights into college admissions essays. Designed for 10th and 11th graders, this program equips you with valuable writing techniques for academic and personal growth.',
        tags: ['10th & 11th Only', '$1,046 Cost'],
        link: 'https://summer.ucla.edu/program/writing-summer-institute-introduction-to-college-writing/',
      },
    ],
  },
  rutgers: {
    title: 'Rutgers University',
    finaid: 'https://scarlethub.rutgers.edu/financial-services/apply-for-aid/how-to-apply/financial-aid-for-summer-courses/',
    programs: [
      {
        title: 'Rutgers Pre-College Summer Academies',
        description:
          'Rutgers Pre-College Summer Academies are one-week residential programs for students completing grades 10 or 11. Participants live on the New Brunswick campus and explore an academic or career field through workshops, lectures, tours, activities, and instruction from Rutgers faculty and practitioners.',
        tags: ['Ages 16-18', 'Sophomores and Juniors', 'One Week', 'Residential'],
        link: 'https://precollegesummer.rutgers.edu/academies',
      },
      {
        title: 'Rutgers Pre-College Summer Scholars',
        description:
          'The Summer Scholars program lets eligible high school students take up to two introductory Rutgers–New Brunswick courses for college credit. Students learn alongside undergraduates in online, hybrid, or in-person classes taught by Rutgers faculty members and doctoral students.',
        tags: ['Age 16+', 'Up to Two Courses', 'College Credit', 'Online, Hybrid, or In Person'],
        link: 'https://precollegesummer.rutgers.edu/scholars',
      },
      {
        title: 'Rutgers College Readiness Summer Academy',
        description:
          'This one-week residential academy helps students completing grades 10 or 11 prepare for college admissions and campus life. The program covers application strategy, financial aid literacy, and readiness skills, and concludes with a personalized College Readiness Plan.',
        tags: ['Ages 16-18', 'Sophomores and Juniors', 'One Week', 'College Readiness'],
        link: 'https://precollegesummer.rutgers.edu/academies/collegereadiness',
      },
      {
        title: 'ALI Youth Media Symposium',
        description: 'The ALI Youth Media Symposium is a transformative 6-week program designed for high school students (grades 9-12). It focuses on media advocacy, teaching essential skills such as public speaking and videography. Participants delve into the intricacies of media technology and its role in effecting change. This program equips students with the tools to amplify their voices in educational advocacy.',
        tags: ['Grades 9-12', 'Advocacy Skills', 'Media Technology'],
        link: ['https://em.rutgers.edu/ncp/search/ProgramDetails.aspx?id=405&awesomeBar=']
      },
      {
        title: 'Aim High Academy – Rutgers Newark',
        description: 'Aim High Academy, a 3-week residential program at Rutgers University, offers a unique opportunity for rising seniors. It emphasizes STEM education, research, career awareness, and leadership development. Participants, primarily from low-income backgrounds, gain hands-on experience in conducting fieldwork and analyzing laboratory data. This program empowers students to excel in STEM fields and nurtures future leaders in the scientific community.',
        tags: ['Rising Seniors', 'Fieldwork Experience', 'Low-Income'],
        link: ['https://em.rutgers.edu/ncp/search/ProgramDetails.aspx?id=407&awesomeBar=']
      },
      {
        title: 'BOLD (BioCONECT Oncology Leadership Development) Initiative',
        description: 'The BOLD Initiative is a week-long intensive workshop tailored for high school students (grades 10-12). Focused on cancer genetics, particularly in the context of breast cancer, this program delves deep into risk reduction strategies and explores diverse careers in oncology. With a nominal fee of $300 and a deadline of March 31, 2019, this workshop offers a unique platform for young minds to engage with cutting-edge concepts in cancer research.',
        tags: ['Grades 10-12', '$300 Cost', 'Deadline: Mar 31, 2019'],
        link: ['https://em.rutgers.edu/ncp/search/ProgramDetails.aspx?id=408&awesomeBar=']
      },
      {
        title: 'CREHST (Clinical Research Experience for High School Students)',
        description: 'CREHST is an immersive program aimed at 10th and 11th-grade students, especially those underrepresented in the sciences. Focusing on biomedical research, it promotes clinical research methods and offers relevant courses, lectures, and workshops. Participants, hailing from various New Jersey high schools, commit to a year-long engagement, dedicating a minimum of 4 hours per week during the academic year and 40 hours per week during the summer to research and program activities.',
        tags: ['Grades 10-11', 'Biomedical Research', 'Underrepresented Students'],
        link: ['https://www.cinj.org/education/clinical-research-experience-high-school-students-crehst-program']
      },
      {
        title: 'CURE (Continuing Umbrella for Research Experience)',
        description: "CURE is a comprehensive research training program for motivated 10th and 11th-grade students. Designed to foster academic and professional growth, participants work on research projects under the guidance of faculty mentor advisors. The program emphasizes both practical research skills and theoretical knowledge, offering a unique blend of hands-on experience and classroom learning. It's a stepping stone for aspiring biomedical and health-related research careers.",
        tags: ['Grades 10-11', 'Biomedical Research', 'Faculty Mentor Guidance'],
        link: ['https://www.cinj.org/education/cure-program']
      },
      {
        title: 'Cooperman College Scholars',
        description: 'The Cooperman College Scholars program is a 3-week scholarship initiative offering early exposure to college life at Rutgers University. Aimed at rising juniors from Essex County, it provides participants with a glimpse into the rigors of higher education. Beyond academic challenges, students are encouraged to reflect on personal challenges through essays. This program nurtures resilience, adaptability, and academic excellence, preparing students for future success in the college environment.',
        tags: ['Rising Juniors', 'Essex County', 'Essay Requirement'],
        link: ['https://coopermanscholars.org/apply/']
      },
      {
        title: 'Hugh N. Boyd Journalism Diversity Workshop',
        description: 'The Hugh N. Boyd Journalism Diversity Workshop is a 10-day immersive experience at Rutgers University. Tailored for diverse high school students (grades 9-11), this workshop offers hands-on training in writing, editing, and digital media skills. Emphasizing the importance of diverse perspectives in journalism, it equips students with the tools to tell impactful stories. The program is fully funded, offering a pathway for underprivileged youth to explore the world of journalism.',
        tags: ['Grades 9-11', 'Full Scholarship', 'Deadline: Apr 15, 2019'],
        link: ['https://comminfo.rutgers.edu/undergraduate-programs/journalism-and-media-studies-major']
      },
      {
        title: 'Music Theory and Ear Training Bootcamp',
        description: 'The Music Theory and Ear Training Bootcamp is a comprehensive program tailored for high school students in grades 9-12 with a passion for music. This intensive training delves into foundational concepts of written music theory and aural skills. Ideal for students planning to continue their musical studies in college, the bootcamp enhances proficiency, nurturing a deep understanding of music and its intricate elements.',
        tags: ['Grades 9-12', '$500 Cost', 'Intermediate Proficiency'],
        link: ['https://em.rutgers.edu/ncp/search/ProgramDetails.aspx?id=476&awesomeBar=']
      },
      {
        title: 'Rutgers Early College Humanities Program (REaCH)',
        description: 'The REaCH program offers high school students in grades 9-11 from underserved communities a unique opportunity to engage in college-level humanities courses. This early college experience takes place on-site, helping students prepare for the challenges of higher education. By immersing themselves in college-level coursework, participants develop critical thinking, analytical, and communication skills essential for future academic endeavors.',
        tags: ['Grades 9-11', '$0 Cost', 'Underserved Communities'],
        link: ['https://reach.rutgers.edu/']
      },
      {
        title: 'Rutgers Summer Dance Conservatory',
        description: 'The Rutgers Summer Dance Conservatory is an enriching program designed for intermediate to advanced dancers, providing a platform to refine their techniques. Tailored for students entering grade 9 through the first year of college, the conservatory offers a diverse curriculum of master classes and lectures. Participants explore various dance styles, strengthening their skills while exploring potential career paths in the world of dance.',
        tags: ['Grade 9 to First Year College', '$1,300 Cost', 'Deadline: 3/31/19'],
        link: ['https://em.rutgers.edu/ncp/search/ProgramDetails.aspx?id=431&awesomeBar=']
      }      
    ]
  }
};

export default collegeProgramsData;
