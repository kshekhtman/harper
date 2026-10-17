// Course data, loosely based on the College Catalog and simplified (see README).
// To add a major, add its courses, a few aliases, and a 12-quarter plan.
window.CATALOG = {
  courses: [
    // Core
    { id: "HUMA 11000", title: "Readings in World Literature I", category: "HUM", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "HUMA 11100", title: "Readings in World Literature II", category: "HUM", offered: ["Winter"], prereqs: ["HUMA 11000"], abroad_eligible: false, hours_per_week: 8 },
    { id: "HUMA 11200", title: "Readings in World Literature III", category: "HUM", offered: ["Spring"], prereqs: ["HUMA 11100"], abroad_eligible: false, hours_per_week: 8 },
    { id: "SOSC 12400", title: "Self, Culture, and Society I", category: "SOSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "SOSC 12500", title: "Self, Culture, and Society II", category: "SOSC", offered: ["Winter"], prereqs: ["SOSC 12400"], abroad_eligible: false, hours_per_week: 9 },
    { id: "SOSC 12600", title: "Self, Culture, and Society III", category: "SOSC", offered: ["Spring"], prereqs: ["SOSC 12500"], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 13001", title: "History of European Civilization I", category: "CIV", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 7 },
    { id: "HIST 13002", title: "History of European Civilization II", category: "CIV", offered: ["Autumn","Winter","Spring"], prereqs: ["HIST 13001"], abroad_eligible: true, hours_per_week: 7 },
    { id: "ARTV 10100", title: "Visual Language: On Images", category: "ARTS", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 6 },
    { id: "BIOS 10130", title: "Principles of Biology", category: "BIO", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 7 },
    { id: "BIOS 12117", title: "Your Inner Fish", category: "BIO", offered: ["Autumn","Winter","Spring"], prereqs: ["BIOS 10130"], abroad_eligible: false, hours_per_week: 7 },
    { id: "ASTR 12700", title: "Stars", category: "PHYS", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ASTR 12710", title: "Galaxies", category: "PHYS", offered: ["Winter","Spring"], prereqs: ["ASTR 12700"], abroad_eligible: false, hours_per_week: 8 },
    { id: "ELECTIVE 1", title: "General Elective I", category: "ELECTIVE", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 7 },
    { id: "ELECTIVE 2", title: "General Elective II", category: "ELECTIVE", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 7 },
    // Math and stats
    { id: "MATH 15100", title: "Calculus I", category: "MATH", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 15200", title: "Calculus II", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 15300", title: "Calculus III", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 19520", title: "Math Methods for Social Sciences", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300"], abroad_eligible: false, hours_per_week: 11 },
    { id: "MATH 16300", title: "Inquiry-Based Learning in Mathematics", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "MATH 20250", title: "Abstract Linear Algebra", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 16300"], abroad_eligible: false, hours_per_week: 13 },
    { id: "MATH 20300", title: "Analysis in Rn I", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 20250"], abroad_eligible: false, hours_per_week: 15 },
    { id: "MATH 20400", title: "Analysis in Rn II", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 20300"], abroad_eligible: false, hours_per_week: 15 },
    { id: "MATH 20500", title: "Analysis in Rn III", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 20400"], abroad_eligible: false, hours_per_week: 15 },
    { id: "MATH 25400", title: "Basic Algebra I", category: "MATH", offered: ["Autumn","Winter"], prereqs: ["MATH 20250"], abroad_eligible: true, hours_per_week: 14 },
    { id: "MATH 25500", title: "Basic Algebra II", category: "MATH", offered: ["Winter","Spring"], prereqs: ["MATH 25400"], abroad_eligible: false, hours_per_week: 14 },
    { id: "MATH 27000", title: "Basic Complex Variables", category: "MATH", offered: ["Autumn","Spring"], prereqs: ["MATH 20500"], abroad_eligible: true, hours_per_week: 13 },
    { id: "MATH 27300", title: "Basic Theory of Ordinary Differential Equations", category: "MATH", offered: ["Autumn","Winter"], prereqs: ["MATH 20400"], abroad_eligible: true, hours_per_week: 13 },
    { id: "STAT 23400", title: "Statistical Models and Methods", category: "STAT", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24300", title: "Numerical Linear Algebra", category: "STAT", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 11 },
    // Computer Science
    { id: "CMSC 14100", title: "Intro to Computer Science I", category: "CS", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMSC 14200", title: "Intro to Computer Science II", category: "CS", offered: ["Autumn","Winter","Spring"], prereqs: ["CMSC 14100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CMSC 14300", title: "Systems Programming I", category: "CS", offered: ["Autumn","Winter","Spring"], prereqs: ["CMSC 14200"], abroad_eligible: false, hours_per_week: 15 },
    { id: "CMSC 14400", title: "Systems Programming II", category: "CS", offered: ["Winter","Spring"], prereqs: ["CMSC 14300"], abroad_eligible: false, hours_per_week: 16 },
    { id: "CMSC 27100", title: "Discrete Mathematics", category: "CS", offered: ["Autumn","Winter"], prereqs: ["CMSC 14200","MATH 15200"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CMSC 27200", title: "Theory of Algorithms", category: "CS", offered: ["Winter","Spring"], prereqs: ["CMSC 27100","CMSC 14200"], abroad_eligible: false, hours_per_week: 15 },
    { id: "CMSC 25300", title: "Math Foundations of ML", category: "CS", offered: ["Autumn","Spring"], prereqs: ["CMSC 14200","STAT 24300"], abroad_eligible: false, hours_per_week: 13 },
    { id: "CMSC 23300", title: "Networks & Distributed Systems", category: "CS", offered: ["Winter","Spring"], prereqs: ["CMSC 14300"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CMSC 23500", title: "Intro to Database Systems", category: "CS", offered: ["Autumn","Spring"], prereqs: ["CMSC 14300"], abroad_eligible: false, hours_per_week: 13 },
    { id: "CMSC 25400", title: "Machine Learning", category: "CS", offered: ["Autumn","Winter","Spring"], prereqs: ["CMSC 25300"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CMSC 23200", title: "Intro to Computer Security", category: "CS", offered: ["Autumn","Winter","Spring"], prereqs: ["CMSC 14300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMSC 22240", title: "Computer Architecture for Scientists", category: "CS", offered: ["Winter"], prereqs: ["CMSC 14300"], abroad_eligible: false, hours_per_week: 12 },
    // Data Science
    { id: "DATA 11800", title: "Introduction to Data Science I", category: "DATA", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "DATA 11900", title: "Introduction to Data Science II", category: "DATA", offered: ["Winter","Spring"], prereqs: ["DATA 11800"], abroad_eligible: false, hours_per_week: 11 },
    { id: "DATA 12000", title: "Computer Science for Data Science", category: "DATA", offered: ["Autumn","Spring"], prereqs: ["DATA 11900"], abroad_eligible: false, hours_per_week: 12 },
    { id: "DATA 21100", title: "Mathematical Methods for Data Science I", category: "DATA", offered: ["Autumn","Winter"], prereqs: ["MATH 15200","DATA 11900"], abroad_eligible: false, hours_per_week: 12 },
    { id: "DATA 21200", title: "Mathematical Methods for Data Science II", category: "DATA", offered: ["Winter","Spring"], prereqs: ["DATA 21100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "DATA 21300", title: "Models in Data Science", category: "DATA", offered: ["Autumn","Spring"], prereqs: ["DATA 12000","DATA 21200"], abroad_eligible: true, hours_per_week: 13 },
    { id: "DATA 22100", title: "Introduction to Machine Learning for Data Science", category: "DATA", offered: ["Autumn","Winter"], prereqs: ["DATA 21200"], abroad_eligible: true, hours_per_week: 13 },
    { id: "DATA 23700", title: "Data Visualization", category: "DATA", offered: ["Winter","Spring"], prereqs: ["DATA 11900"], abroad_eligible: true, hours_per_week: 10 },
    { id: "DATA 25900", title: "Ethics, Fairness, Responsibility, and Privacy in Data Science", category: "DATA", offered: ["Autumn","Spring"], prereqs: ["DATA 11900"], abroad_eligible: true, hours_per_week: 9 },
    // Economics
    { id: "ECON 10000", title: "Principles of Microeconomics", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 8 },
    { id: "ECON 10200", title: "Principles of Macroeconomics", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 10000"], abroad_eligible: true, hours_per_week: 8 },
    { id: "ECON 20000", title: "Elements of Economic Analysis I", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300"], abroad_eligible: false, hours_per_week: 14 },
    { id: "ECON 20100", title: "Elements of Economic Analysis II", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20000","MATH 19520"], abroad_eligible: false, hours_per_week: 14 },
    { id: "ECON 20200", title: "Elements of Economic Analysis III", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "ECON 20300", title: "Elements of Economic Analysis IV", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20200"], abroad_eligible: false, hours_per_week: 14 },
    { id: "ECON 21020", title: "Econometrics", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20000","STAT 23400","MATH 19520"], abroad_eligible: false, hours_per_week: 15 },
    { id: "ECON 20700", title: "Game Theory & Economic Applications", category: "ECON", offered: ["Autumn","Spring"], prereqs: ["ECON 20100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ECON 25000", title: "Introduction to Finance", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20200","ECON 21020"], abroad_eligible: false, hours_per_week: 12 },
    { id: "ECON 24000", title: "Labor Economics", category: "ECON", offered: ["Winter","Spring"], prereqs: ["ECON 20100","ECON 21020"], abroad_eligible: true, hours_per_week: 10 },
    { id: "ECON 26010", title: "Public Finance", category: "ECON", offered: ["Autumn","Spring"], prereqs: ["ECON 20100"], abroad_eligible: true, hours_per_week: 10 },
    { id: "ECON 28000", title: "Industrial Organization", category: "ECON", offered: ["Autumn","Winter"], prereqs: ["ECON 20100"], abroad_eligible: true, hours_per_week: 11 },
    { id: "ECON 23950", title: "Economic Policy Analysis", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 20100"], abroad_eligible: true, hours_per_week: 10 },
    // Public Policy
    { id: "PBPL 20000", title: "Economics for Public Policy", category: "PBPL", offered: ["Autumn","Winter"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "PBPL 22100", title: "Politics and Policy", category: "PBPL", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "PBPL 22200", title: "Public Policy Analysis", category: "PBPL", offered: ["Winter","Spring"], prereqs: ["PBPL 20000"], abroad_eligible: false, hours_per_week: 11 },
    { id: "PBPL 22300", title: "Policy Implementation", category: "PBPL", offered: ["Autumn","Winter","Spring"], prereqs: ["PBPL 22100"], abroad_eligible: true, hours_per_week: 9 },
    { id: "PBPL 26400", title: "Quantitative Methods in Public Policy", category: "PBPL", offered: ["Autumn","Winter","Spring"], prereqs: ["STAT 23400","PBPL 20000"], abroad_eligible: false, hours_per_week: 12 },
    { id: "PBPL 24701", title: "U.S. Environmental Policy", category: "PBPL", offered: ["Autumn","Spring"], prereqs: ["PBPL 22100"], abroad_eligible: true, hours_per_week: 9 },
    { id: "PBPL 25550", title: "Economic Development and Policy", category: "PBPL", offered: ["Autumn","Winter"], prereqs: ["PBPL 22200"], abroad_eligible: true, hours_per_week: 10 },
    { id: "PBPL 28550", title: "Inequality, Household Finance, and Tax Policy", category: "PBPL", offered: ["Winter","Spring"], prereqs: ["PBPL 22200"], abroad_eligible: true, hours_per_week: 10 },
    // Political Science
    { id: "PLSC 28701", title: "Introduction to Political Theory", category: "PLSC", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "PLSC 28801", title: "Introduction to American Politics", category: "PLSC", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PLSC 28901", title: "Introduction to Comparative Politics", category: "PLSC", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "PLSC 29000", title: "Introduction to International Relations", category: "PLSC", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "PLSC 22913", title: "Political Science Research Methods", category: "PLSC", offered: ["Autumn","Winter","Spring"], prereqs: ["PLSC 28801"], abroad_eligible: false, hours_per_week: 10 },
    { id: "PLSC 23501", title: "International Political Economy", category: "PLSC", offered: ["Autumn","Spring"], prereqs: ["PLSC 29000"], abroad_eligible: true, hours_per_week: 10 },
    { id: "PLSC 25457", title: "Constitutional Law I: Institutional Powers", category: "PLSC", offered: ["Autumn","Winter"], prereqs: ["PLSC 28801"], abroad_eligible: false, hours_per_week: 11 },
    { id: "PLSC 26100", title: "Civil War and Political Violence", category: "PLSC", offered: ["Autumn","Spring"], prereqs: ["PLSC 28901"], abroad_eligible: true, hours_per_week: 10 },
    { id: "PLSC 27654", title: "The American Presidency", category: "PLSC", offered: ["Winter","Spring"], prereqs: ["PLSC 28801"], abroad_eligible: false, hours_per_week: 9 },
    // Biological Sciences
    { id: "BIOS 20151", title: "Introduction to Quantitative Modeling in Biology", category: "BIOS", offered: ["Autumn","Winter"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "BIOS 20186", title: "Fundamentals of Cell and Molecular Biology", category: "BIOS", offered: ["Winter","Spring"], prereqs: ["BIOS 20151"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20187", title: "Fundamentals of Genetics", category: "BIOS", offered: ["Autumn","Spring"], prereqs: ["BIOS 20186"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20188", title: "Fundamentals of Physiology", category: "BIOS", offered: ["Autumn","Winter"], prereqs: ["BIOS 20187"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20189", title: "Fundamentals of Developmental Biology", category: "BIOS", offered: ["Winter","Spring"], prereqs: ["BIOS 20188"], abroad_eligible: false, hours_per_week: 13 },
    { id: "BIOS 20200", title: "Introduction to Biochemistry", category: "BIOS", offered: ["Autumn","Winter","Spring"], prereqs: ["BIOS 20187"], abroad_eligible: true, hours_per_week: 14 },
    { id: "BIOS 20198", title: "Biodiversity", category: "BIOS", offered: ["Autumn","Spring"], prereqs: ["BIOS 20187"], abroad_eligible: true, hours_per_week: 11 },
    { id: "BIOS 21216", title: "Introduction to Statistical Genetics", category: "BIOS", offered: ["Autumn","Winter"], prereqs: ["BIOS 20187","STAT 23400"], abroad_eligible: true, hours_per_week: 12 },
    { id: "BIOS 23232", title: "Ecology and Evolution in the Southwest", category: "BIOS", offered: ["Spring"], prereqs: ["BIOS 20187"], abroad_eligible: true, hours_per_week: 12 }
  ],
  // which course categories count as "the major" (used for colors and double majors)
  major_categories: {
    "CS": ["CS", "MATH", "STAT"], "Econ": ["ECON", "MATH", "STAT"], "Math": ["MATH", "STAT"],
    "Data Science": ["DATA", "STAT", "MATH", "CS"], "Public Policy": ["PBPL", "ECON", "STAT", "MATH"],
    "Political Science": ["PLSC"], "Biology": ["BIOS", "MATH", "STAT"]
  },
  // a Core pick that pairs well with each major (Harper suggests these first)
  core_suggestions: {
    "CS": { HUM: "Philosophical Perspectives", SOSC: "Mind", CIV: "European Civilization in Paris", PHYS: "Stars and Galaxies", ARTS: "Visual Language: On Images" },
    "Econ": { HUM: "Human Being and Citizen", SOSC: "Classics of Social and Political Thought", CIV: "European Civilization in Paris", PHYS: "Stars and Galaxies", ARTS: "Introduction to Art" },
    "Math": { HUM: "Philosophical Perspectives", SOSC: "Mind", CIV: "Mediterranean Civilization in Rome", PHYS: "Stars and Galaxies", ARTS: "Introduction to Western Art Music" },
    "Data Science": { HUM: "Media Aesthetics", SOSC: "Social Science Inquiry", CIV: "European Civilization in Paris", PHYS: "Stars and Galaxies", ARTS: "Visual Language: On Images" },
    "Public Policy": { HUM: "Human Being and Citizen", SOSC: "Power, Identity, and Resistance", CIV: "America in World Civilization", PHYS: "Stars and Galaxies", ARTS: "Drama: Embodiment and Transformation" },
    "Political Science": { HUM: "Human Being and Citizen", SOSC: "Classics of Social and Political Thought", CIV: "History of Western Civilization", PHYS: "Stars and Galaxies", ARTS: "Drama: Embodiment and Transformation" },
    "Biology": { HUM: "Readings in World Literature", SOSC: "Mind", CIV: "Mediterranean Civilization in Rome", PHYS: "Introductory General Chemistry", ARTS: "Introduction to Art" }
  },
  aliases: {
    "CS": ["computer science", "comp sci", "cs", "cmsc"],
    "Econ": ["economics", "econ"],
    "Math": ["mathematics", "math"],
    "Data Science": ["data science", "data sci", "dsi"],
    "Public Policy": ["public policy", "pbpl", "policy"],
    "Political Science": ["political science", "poli sci", "polisci", "plsc"],
    "Biology": ["biological sciences", "biology", "bio", "bios"]
  },
  plans: {
    "CS": {
      "Y1-Autumn": ["CMSC 14100", "MATH 15100", "HUMA 11000"],
      "Y1-Winter": ["CMSC 14200", "MATH 15200", "HUMA 11100"],
      "Y1-Spring": ["CMSC 14300", "MATH 15300", "HUMA 11200"],
      "Y2-Autumn": ["CMSC 27100", "STAT 24300", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["CMSC 14400", "CMSC 27200", "SOSC 12500"],
      "Y2-Spring": ["CMSC 25300", "SOSC 12600", "ASTR 12710", "BIOS 10130"],
      "Y3-Autumn": ["CMSC 23500", "CMSC 25400", "ARTV 10100"],
      "Y3-Winter": ["CMSC 23300", "HIST 13001", "BIOS 12117"],
      "Y3-Spring": ["HIST 13002", "ECON 10000", "ELECTIVE 1"],
      "Y4-Autumn": ["CMSC 23200", "ECON 10200", "STAT 23400"],
      "Y4-Winter": ["CMSC 22240", "MATH 19520", "ECON 20000"],
      "Y4-Spring": ["ECON 20100", "ELECTIVE 2"]
    },
    "Econ": {
      "Y1-Autumn": ["MATH 15100", "ECON 10000", "HUMA 11000"],
      "Y1-Winter": ["MATH 15200", "ECON 10200", "HUMA 11100"],
      "Y1-Spring": ["MATH 15300", "BIOS 10130", "HUMA 11200"],
      "Y2-Autumn": ["ECON 20000", "MATH 19520", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["ECON 20100", "STAT 23400", "SOSC 12500", "ASTR 12710"],
      "Y2-Spring": ["ECON 20200", "ECON 21020", "SOSC 12600"],
      "Y3-Autumn": ["ECON 20300", "ECON 28000", "ARTV 10100"],
      "Y3-Winter": ["ECON 25000", "HIST 13001", "BIOS 12117"],
      "Y3-Spring": ["ECON 24000", "ECON 20700", "HIST 13002"],
      "Y4-Autumn": ["ECON 26010", "CMSC 14100", "ELECTIVE 1"],
      "Y4-Winter": ["ECON 23950", "STAT 24300", "CMSC 14200"],
      "Y4-Spring": ["CMSC 14300", "CMSC 25300", "ELECTIVE 2"]
    },
    "Math": {
      "Y1-Autumn": ["MATH 15100", "CMSC 14100", "HUMA 11000"],
      "Y1-Winter": ["MATH 15200", "CMSC 14200", "HUMA 11100"],
      "Y1-Spring": ["MATH 15300", "BIOS 10130", "HUMA 11200"],
      "Y2-Autumn": ["MATH 16300", "STAT 24300", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["MATH 20250", "CMSC 27100", "SOSC 12500"],
      "Y2-Spring": ["MATH 20300", "STAT 23400", "SOSC 12600", "ASTR 12710"],
      "Y3-Autumn": ["MATH 20400", "MATH 25400", "BIOS 12117"],
      "Y3-Winter": ["MATH 20500", "MATH 25500", "HIST 13001"],
      "Y3-Spring": ["MATH 27000", "HIST 13002", "ECON 20000"],
      "Y4-Autumn": ["MATH 27300", "MATH 19520", "ARTV 10100"],
      "Y4-Winter": ["ECON 20100", "CMSC 27200", "ELECTIVE 1"],
      "Y4-Spring": ["CMSC 25300", "ECON 20700", "ELECTIVE 2"]
    },
    "Data Science": {
      "Y1-Autumn": ["DATA 11800", "MATH 15100", "HUMA 11000"],
      "Y1-Winter": ["DATA 11900", "MATH 15200", "HUMA 11100"],
      "Y1-Spring": ["DATA 12000", "MATH 15300", "HUMA 11200"],
      "Y2-Autumn": ["DATA 21100", "CMSC 14100", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["DATA 21200", "CMSC 14200", "SOSC 12500"],
      "Y2-Spring": ["DATA 23700", "STAT 24300", "SOSC 12600", "ASTR 12710"],
      "Y3-Autumn": ["DATA 21300", "DATA 22100", "DATA 25900"],
      "Y3-Winter": ["STAT 23400", "CMSC 14300", "HIST 13001"],
      "Y3-Spring": ["CMSC 23500", "HIST 13002", "BIOS 10130"],
      "Y4-Autumn": ["CMSC 25300", "BIOS 12117", "ARTV 10100"],
      "Y4-Winter": ["CMSC 25400", "ECON 10000", "ELECTIVE 1"],
      "Y4-Spring": ["ECON 10200", "MATH 19520", "ELECTIVE 2"]
    },
    "Public Policy": {
      "Y1-Autumn": ["MATH 15100", "ECON 10000", "HUMA 11000"],
      "Y1-Winter": ["MATH 15200", "ECON 10200", "HUMA 11100"],
      "Y1-Spring": ["MATH 15300", "BIOS 10130", "HUMA 11200"],
      "Y2-Autumn": ["PBPL 20000", "PBPL 22100", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["PBPL 22200", "STAT 23400", "SOSC 12500", "ASTR 12710"],
      "Y2-Spring": ["PBPL 26400", "BIOS 12117", "SOSC 12600"],
      "Y3-Autumn": ["PBPL 22300", "PBPL 24701", "PBPL 25550"],
      "Y3-Winter": ["PBPL 28550", "MATH 19520", "HIST 13001"],
      "Y3-Spring": ["ECON 20000", "HIST 13002", "ARTV 10100"],
      "Y4-Autumn": ["ECON 20100", "DATA 11800", "ELECTIVE 2"],
      "Y4-Winter": ["ECON 21020", "DATA 11900", "ELECTIVE 1"],
      "Y4-Spring": ["ECON 23950", "ECON 24000", "ECON 26010"]
    },
    "Political Science": {
      "Y1-Autumn": ["PLSC 28701", "MATH 15100", "HUMA 11000"],
      "Y1-Winter": ["PLSC 28901", "MATH 15200", "HUMA 11100"],
      "Y1-Spring": ["PLSC 28801", "MATH 15300", "HUMA 11200"],
      "Y2-Autumn": ["PLSC 29000", "PLSC 22913", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["PLSC 25457", "STAT 23400", "SOSC 12500", "ASTR 12710"],
      "Y2-Spring": ["PLSC 27654", "BIOS 10130", "SOSC 12600"],
      "Y3-Autumn": ["PLSC 23501", "PLSC 26100", "PBPL 22100"],
      "Y3-Winter": ["ECON 10000", "BIOS 12117", "HIST 13001"],
      "Y3-Spring": ["ECON 10200", "HIST 13002", "ARTV 10100"],
      "Y4-Autumn": ["PBPL 20000", "PBPL 24701", "DATA 11800"],
      "Y4-Winter": ["PBPL 22200", "DATA 11900", "ELECTIVE 1"],
      "Y4-Spring": ["PBPL 22300", "PBPL 28550", "ELECTIVE 2"]
    },
    "Biology": {
      "Y1-Autumn": ["MATH 15100", "BIOS 10130", "HUMA 11000"],
      "Y1-Winter": ["MATH 15200", "BIOS 12117", "HUMA 11100"],
      "Y1-Spring": ["MATH 15300", "ARTV 10100", "HUMA 11200"],
      "Y2-Autumn": ["BIOS 20151", "STAT 23400", "SOSC 12400", "ASTR 12700"],
      "Y2-Winter": ["BIOS 20186", "DATA 11800", "SOSC 12500", "ASTR 12710"],
      "Y2-Spring": ["BIOS 20187", "DATA 11900", "SOSC 12600"],
      "Y3-Autumn": ["BIOS 20188", "BIOS 20200", "BIOS 20198"],
      "Y3-Winter": ["BIOS 20189", "BIOS 21216", "HIST 13001"],
      "Y3-Spring": ["BIOS 23232", "HIST 13002", "ECON 10000"],
      "Y4-Autumn": ["CMSC 14100", "ECON 10200", "STAT 24300"],
      "Y4-Winter": ["CMSC 14200", "MATH 19520", "ELECTIVE 1"],
      "Y4-Spring": ["CMSC 14300", "DATA 23700", "ELECTIVE 2"]
    }
  },
  // Core sequences a student can switch to (Paris and Rome course numbers are placeholders)
  core_options: {
    HUM: [
      { name: "Readings in World Literature", abroad: null, courses: [
        { id: "HUMA 11000", title: "Readings in World Literature I", offered: ["Autumn"] },
        { id: "HUMA 11100", title: "Readings in World Literature II", offered: ["Winter"] },
        { id: "HUMA 11200", title: "Readings in World Literature III", offered: ["Spring"] }
      ] },
      { name: "Human Being and Citizen", abroad: null, courses: [
        { id: "HUMA 12300", title: "Human Being and Citizen I", offered: ["Autumn"] },
        { id: "HUMA 12400", title: "Human Being and Citizen II", offered: ["Winter"] },
        { id: "HUMA 12500", title: "Human Being and Citizen III", offered: ["Spring"] }
      ] },
      { name: "Media Aesthetics", abroad: null, courses: [
        { id: "HUMA 16000", title: "Media Aesthetics I", offered: ["Autumn"] },
        { id: "HUMA 16100", title: "Media Aesthetics II", offered: ["Winter"] },
        { id: "HUMA 16200", title: "Media Aesthetics III", offered: ["Spring"] }
      ] },
      { name: "Philosophical Perspectives", abroad: null, courses: [
        { id: "HUMA 11500", title: "Philosophical Perspectives I", offered: ["Autumn"] },
        { id: "HUMA 11600", title: "Philosophical Perspectives II", offered: ["Winter"] },
        { id: "HUMA 11700", title: "Philosophical Perspectives III", offered: ["Spring"] }
      ] }
    ],
    SOSC: [
      { name: "Self, Culture, and Society", abroad: null, courses: [
        { id: "SOSC 12400", title: "Self, Culture, and Society I", offered: ["Autumn"] },
        { id: "SOSC 12500", title: "Self, Culture, and Society II", offered: ["Winter"] },
        { id: "SOSC 12600", title: "Self, Culture, and Society III", offered: ["Spring"] }
      ] },
      { name: "Power, Identity, and Resistance", abroad: null, courses: [
        { id: "SOSC 11400", title: "Power, Identity, Resistance I", offered: ["Autumn"] },
        { id: "SOSC 11500", title: "Power, Identity, Resistance II", offered: ["Winter"] },
        { id: "SOSC 11600", title: "Power, Identity, Resistance III", offered: ["Spring"] }
      ] },
      { name: "Mind", abroad: null, courses: [
        { id: "SOSC 14100", title: "Mind I", offered: ["Autumn"] },
        { id: "SOSC 14200", title: "Mind II", offered: ["Winter"] },
        { id: "SOSC 14300", title: "Mind III", offered: ["Spring"] }
      ] },
      { name: "Classics of Social and Political Thought", abroad: null, courses: [
        { id: "SOSC 15100", title: "Classics of Soc. and Pol. Thought I", offered: ["Autumn"] },
        { id: "SOSC 15200", title: "Classics of Soc. and Pol. Thought II", offered: ["Winter"] },
        { id: "SOSC 15300", title: "Classics of Soc. and Pol. Thought III", offered: ["Spring"] }
      ] },
      { name: "Social Science Inquiry", abroad: null, courses: [
        { id: "SOSC 13100", title: "Social Science Inquiry I", offered: ["Autumn"] },
        { id: "SOSC 13200", title: "Social Science Inquiry II", offered: ["Winter"] },
        { id: "SOSC 13300", title: "Social Science Inquiry III", offered: ["Spring"] }
      ] }
    ],
    CIV: [
      { name: "History of European Civilization", abroad: null, courses: [
        { id: "HIST 13001", title: "History of European Civilization I", offered: ["Autumn","Winter","Spring"] },
        { id: "HIST 13002", title: "History of European Civilization II", offered: ["Autumn","Winter","Spring"] }
      ] },
      { name: "History of Western Civilization", abroad: null, courses: [
        { id: "HIST 13100", title: "History of Western Civilization I", offered: ["Autumn","Winter"] },
        { id: "HIST 13200", title: "History of Western Civilization II", offered: ["Winter","Spring"] }
      ] },
      { name: "America in World Civilization", abroad: null, courses: [
        { id: "HIST 13500", title: "America in World Civilization I", offered: ["Autumn","Winter"] },
        { id: "HIST 13600", title: "America in World Civilization II", offered: ["Winter","Spring"] }
      ] },
      { name: "European Civilization in Paris", abroad: "Paris", courses: [
        { id: "HIST 24001", title: "European Civilization in Paris I", offered: ["Autumn","Winter"] },
        { id: "HIST 24002", title: "European Civilization in Paris II", offered: ["Autumn","Winter"] }
      ] },
      { name: "Mediterranean Civilization in Rome", abroad: "Rome", courses: [
        { id: "HIST 24201", title: "Mediterranean Civ in Rome I", offered: ["Autumn","Winter"] },
        { id: "HIST 24202", title: "Mediterranean Civ in Rome II", offered: ["Autumn","Winter"] }
      ] }
    ],
    PHYS: [
      { name: "Stars and Galaxies", abroad: null, courses: [
        { id: "ASTR 12700", title: "Stars", offered: ["Autumn","Winter"] },
        { id: "ASTR 12710", title: "Galaxies", offered: ["Winter","Spring"] }
      ] },
      { name: "Introductory General Chemistry", abroad: null, courses: [
        { id: "CHEM 10100", title: "Introductory General Chemistry I", offered: ["Autumn","Winter"] },
        { id: "CHEM 10200", title: "Introductory General Chemistry II", offered: ["Winter","Spring"] }
      ] }
    ],
    BIO: [
      { name: "Principles of Biology and Your Inner Fish", abroad: null, courses: [
        { id: "BIOS 10130", title: "Principles of Biology", offered: ["Autumn","Winter","Spring"] },
        { id: "BIOS 12117", title: "Your Inner Fish", offered: ["Autumn","Winter","Spring"] }
      ] }
    ],
    ARTS: [
      { name: "Visual Language: On Images", abroad: null, courses: [
        { id: "ARTV 10100", title: "Visual Language: On Images", offered: ["Autumn","Winter","Spring"] }
      ] },
      { name: "Introduction to Western Art Music", abroad: null, courses: [
        { id: "MUSI 10100", title: "Intro to Western Art Music", offered: ["Autumn","Winter","Spring"] }
      ] },
      { name: "Drama: Embodiment and Transformation", abroad: null, courses: [
        { id: "TAPS 10100", title: "Drama: Embodiment and Transformation", offered: ["Autumn","Winter","Spring"] }
      ] },
      { name: "Introduction to Art", abroad: null, courses: [
        { id: "ARTH 10100", title: "Introduction to Art", offered: ["Autumn","Winter","Spring"] }
      ] }
    ]
  }
};
