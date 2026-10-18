// Course data, loosely based on the College Catalog and simplified (see README).
// To add a major, add its courses, a few aliases, its categories, and a 12-quarter plan.
window.CATALOG = {
  courses: [
    { id: "ANTH 10100", title: "Introduction to Anthropology", category: "ANTH", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 21107", title: "Anthropological Theory", category: "ANTH", offered: ["Autumn","Winter"], prereqs: ["ANTH 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ANTH 21420", title: "Ethnographic Methods", category: "ANTH", offered: ["Winter","Spring"], prereqs: ["ANTH 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ANTH 20007", title: "People's Garbage: Intro to Archaeology", category: "ANTH", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 20014", title: "Animal Magnetism: Human-Animal History", category: "ANTH", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 20100", title: "The Inca And Aztec States", category: "ANTH", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 20200", title: "Research Practicum for Undergraduates", category: "ANTH", offered: ["Winter"], prereqs: ["ANTH 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ANTH 21265", title: "The Celts: Ancient, Modern, Postmodern", category: "ANTH", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 21270", title: "Material Worlds Premodern East Asia", category: "ANTH", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 26100", title: "Ancient Celtic Societies", category: "ANTH", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 26330", title: "Making the Maya World", category: "ANTH", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ANTH 26825", title: "Heritage, Memory, and Affective Turn", category: "ANTH", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ANTH 26900", title: "Archaeological Data Sets", category: "ANTH", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "ANTH 28400", title: "Bioarchaeology & Forensic Anthropology", category: "ANTH", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "ANTH 29500", title: "Archaeology Laboratory Practicum", category: "ANTH", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "NEAA 20100", title: "Introduction to Archaeology", category: "NEAA", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "NEAA 20330", title: "Archaeological Theory", category: "NEAA", offered: ["Autumn"], prereqs: ["NEAA 20100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARKE 20200", title: "World Archaeology", category: "ARKE", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "NEAA 20035", title: "Introduction to Zooarchaeology", category: "NEAA", offered: ["Winter"], prereqs: ["NEAA 20100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "NEAA 20061", title: "Ancient Landscapes I", category: "NEAA", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "NEAA 20062", title: "Ancient Landscapes II", category: "NEAA", offered: ["Winter"], prereqs: ["NEAA 20061"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ARKE 20002", title: "Archaeology of Ancient Near East II", category: "ARKE", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARKE 20030", title: "Rise of State in Ancient Near East", category: "ARKE", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARKE 20121", title: "Ancient Israel in Bible & Archaeology", category: "ARKE", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARKE 20322", title: "Ancient Levant-II: Iron Age & Persian", category: "ARKE", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARKE 20511", title: "The Archaeology of Egypt I", category: "ARKE", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARTH 10100", title: "Introduction to Art", category: "ARTH", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: true, hours_per_week: 8 },
    { id: "ARTH 14107", title: "Greek Art and Archaeology", category: "ARTH", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARTH 16100", title: "Art of the East: China", category: "ARTH", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "ARTH 20603", title: "Image & Text in Mesoamerican Codices", category: "ARTH", offered: ["Autumn"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 23010", title: "Visual Culture of Ancient Near East", category: "ARTH", offered: ["Winter"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 24602", title: "Chinese Pictorial Art", category: "ARTH", offered: ["Spring"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 25105", title: "Chichen Itza", category: "ARTH", offered: ["Autumn"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 25106", title: "Art & Urbanism at Teotihuacan", category: "ARTH", offered: ["Winter"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 25300", title: "Art & Pilgrimage Antiquity to Christ.", category: "ARTH", offered: ["Spring"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 28330", title: "Art & Religion Roman to Christian", category: "ARTH", offered: ["Autumn"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "ARTH 29600", title: "Doing Art History", category: "ARTH", offered: ["Winter","Spring"], prereqs: ["ARTH 10100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 13300", title: "Introduction to Astrophysics", category: "ASTR", offered: ["Spring"], prereqs: ["PHYS 13200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ASTR 20500", title: "Intro to Python in Astrophysics", category: "ASTR", offered: ["Autumn"], prereqs: ["ASTR 13300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ASTR 21000", title: "Statistical Techniques in Astrophysics", category: "ASTR", offered: ["Autumn"], prereqs: ["ASTR 20500"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 21100", title: "Computational Tech in Astrophysics", category: "ASTR", offered: ["Winter"], prereqs: ["ASTR 20500"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 21200", title: "Observational Tech in Astrophysics", category: "ASTR", offered: ["Spring"], prereqs: ["ASTR 13300"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 25400", title: "Radiation Processes in Astrophysics", category: "ASTR", offered: ["Autumn"], prereqs: ["PHYS 22500"], abroad_eligible: false, hours_per_week: 12 },
    { id: "ASTR 24100", title: "The Physics of Stars", category: "ASTR", offered: ["Winter"], prereqs: ["ASTR 25400"], abroad_eligible: false, hours_per_week: 12 },
    { id: "ASTR 23900", title: "Physics of Galaxies", category: "ASTR", offered: ["Spring"], prereqs: ["ASTR 24100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 25800", title: "Astrophysics of Exoplanets", category: "ASTR", offered: ["Spring"], prereqs: ["ASTR 24100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "ASTR 24300", title: "Cosmological Physics", category: "ASTR", offered: ["Winter"], prereqs: ["ASTR 24100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMST 10100", title: "Introduction to Film Analysis", category: "CMST", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CMST 28500", title: "History of Intl Cinema I: Silent Era", category: "CMST", offered: ["Autumn"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CMST 28600", title: "History of Intl Cinema II: Sound-1960", category: "CMST", offered: ["Winter"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CMST 28700", title: "History of Intl Cinema III: 1960-Now", category: "CMST", offered: ["Spring"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CMST 29201", title: "Advanced Seminar: Autumn", category: "CMST", offered: ["Autumn"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CMST 29202", title: "Advanced Seminar: Spring", category: "CMST", offered: ["Spring"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CMST 23930", title: "Documentary Production I", category: "CMST", offered: ["Autumn"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMST 23931", title: "Documentary Production II", category: "CMST", offered: ["Winter"], prereqs: ["CMST 23930"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMST 28921", title: "Narrative Production I", category: "CMST", offered: ["Autumn","Winter"], prereqs: ["CMST 10100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMST 28922", title: "Narrative Production II", category: "CMST", offered: ["Winter","Spring"], prereqs: ["CMST 28921"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CMST 27299", title: "Intensive Track: Written Thesis Wkshp", category: "CMST", offered: ["Autumn"], prereqs: ["CMST 28500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CMST 28999", title: "Intensive Track: Prod Thesis Wkshp", category: "CMST", offered: ["Autumn"], prereqs: ["CMST 28500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 10100", title: "Elementary Latin I", category: "LATN", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 10200", title: "Elementary Latin II", category: "LATN", offered: ["Winter"], prereqs: ["LATN 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 10300", title: "Elementary Latin III", category: "LATN", offered: ["Spring"], prereqs: ["LATN 10200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 20100", title: "Intermediate Latin I", category: "LATN", offered: ["Autumn"], prereqs: ["LATN 10300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 20200", title: "Intermediate Latin II", category: "LATN", offered: ["Winter"], prereqs: ["LATN 20100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LATN 20300", title: "Intermediate Latin III", category: "LATN", offered: ["Spring"], prereqs: ["LATN 20200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CLCV 20100", title: "This is Sparta (or Is It?)", category: "CLCV", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 20407", title: "Roman Civil War: History & Memory", category: "CLCV", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 20700", title: "Ancient Mediterranean World I: Greece", category: "CLCV", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 21700", title: "Archaeology for Ancient Historians", category: "CLCV", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 23024", title: "Gender Archaeology", category: "CLCV", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 24622", title: "Death and Burial", category: "CLCV", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CLCV 29500", title: "Senior Seminar", category: "CLCV", offered: ["Autumn"], prereqs: ["LATN 20300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CCSG 19000", title: "The Climate and Growth Challenge", category: "CCSG", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 20100", title: "The Science of Climate Change", category: "CCSG", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 20300", title: "Economics of Climate Change & Energy", category: "CCSG", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 20500", title: "Energy: Science, Tech, and Human Usage", category: "CCSG", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 20700", title: "Climate Change: Law and Ethics", category: "CCSG", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 20900", title: "Politics & Law of Climate & Energy", category: "CCSG", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 21100", title: "Climate Change: Impacts and Adaptation", category: "CCSG", offered: ["Autumn"], prereqs: ["CCSG 20100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "CCSG 25000", title: "Climate, Energy, and Development", category: "CCSG", offered: ["Autumn","Spring"], prereqs: ["CCSG 19000"], abroad_eligible: true, hours_per_week: 10 },
    { id: "CCSG 29001", title: "Capstone Seminar", category: "CCSG", offered: ["Autumn"], prereqs: ["CCSG 20100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CCSG 29002", title: "Capstone Project", category: "CCSG", offered: ["Winter"], prereqs: ["CCSG 29001"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 22060", title: "What Makes a Planet Habitable?", category: "GEOS", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 24800", title: "Climate Systems Engineering", category: "GEOS", offered: ["Spring"], prereqs: ["CCSG 20100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 23600", title: "Chemical Oceanography", category: "ENSC", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "COGS 20001", title: "Mind, Brain and Meaning", category: "COGS", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "COGS 20002", title: "Cognitive Models", category: "COGS", offered: ["Winter"], prereqs: ["COGS 20001"], abroad_eligible: false, hours_per_week: 9 },
    { id: "COGS 20003", title: "Exp & Comp Methods in Linguistics", category: "COGS", offered: ["Spring"], prereqs: ["COGS 20002"], abroad_eligible: false, hours_per_week: 10 },
    { id: "COGS 25001", title: "Foundations of Neurolinguistics", category: "COGS", offered: ["Autumn","Winter"], prereqs: ["COGS 20001"], abroad_eligible: false, hours_per_week: 10 },
    { id: "LING 20001", title: "Introduction to Linguistics", category: "LING", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "NSCI 21620", title: "Structure & Circuits of the Forebrain", category: "NSCI", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "NSCI 21625", title: "Cognitive Neuroscience", category: "NSCI", offered: ["Winter","Spring"], prereqs: ["NSCI 21620"], abroad_eligible: false, hours_per_week: 10 },
    { id: "NSCI 22600", title: "Cognition and Overcoming its Limits", category: "NSCI", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CHDV 17050", title: "Health and Society in Chicago", category: "CHDV", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "CHDV 20000", title: "Introduction to Human Development", category: "CHDV", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CHDV 20100", title: "Human Development Research Design", category: "CHDV", offered: ["Winter"], prereqs: ["CHDV 20000"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CMLT 20030", title: "Short Russian Novels", category: "CMLT", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CMLT 20109", title: "Introduction to Literary Theory", category: "CMLT", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "CAAM 21450", title: "Applied Partial Differential Equations", category: "CAAM", offered: ["Autumn","Winter"], prereqs: ["MATH 27300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CAAM 21460", title: "Applied Fourier Analysis", category: "CAAM", offered: ["Spring"], prereqs: ["MATH 20300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CAAM 21470", title: "Applied Complex Analysis", category: "CAAM", offered: ["Spring"], prereqs: ["MATH 20300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CAAM 28200", title: "Dynamical Systems with Applications", category: "CAAM", offered: ["Winter"], prereqs: ["MATH 27300"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CRWR 10206", title: "Fiction Workshop I", category: "CRWR", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CRWR 10306", title: "Poetry Workshop I", category: "CRWR", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CRWR 10406", title: "Literary Nonfiction Workshop I", category: "CRWR", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CHIN 10100", title: "Elementary Modern Chinese I", category: "CHIN", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "CHIN 10200", title: "Elementary Modern Chinese II", category: "CHIN", offered: ["Winter"], prereqs: ["CHIN 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CHIN 10300", title: "Elementary Modern Chinese III", category: "CHIN", offered: ["Spring"], prereqs: ["CHIN 10200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CHIN 20100", title: "Intermediate Modern Chinese I", category: "CHIN", offered: ["Autumn"], prereqs: ["CHIN 10300"], abroad_eligible: true, hours_per_week: 10 },
    { id: "CHIN 20200", title: "Intermediate Modern Chinese II", category: "CHIN", offered: ["Winter"], prereqs: ["CHIN 20100"], abroad_eligible: true, hours_per_week: 10 },
    { id: "CHIN 20300", title: "Intermediate Modern Chinese III", category: "CHIN", offered: ["Spring"], prereqs: ["CHIN 20200"], abroad_eligible: true, hours_per_week: 10 },
    { id: "EALC 28010", title: "Archaeology of Anyang: Bronzes", category: "EALC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "EALC 28015", title: "Archaeology of Bronze Age China", category: "EALC", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "EALC 28901", title: "Discovering Ancient East Asia", category: "EALC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CEGU 20001", title: "Climate Change, Environment, & Society", category: "CEGU", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CEGU 20002", title: "Politics of Environmental Knowledge", category: "CEGU", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CEGU 20003", title: "Global Environmental Change", category: "CEGU", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CEGU 24776", title: "International Environmental Policy", category: "CEGU", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "CEGU 29801", title: "BA/MA Colloquium I", category: "CEGU", offered: ["Autumn"], prereqs: ["CEGU 20001"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CEGU 29802", title: "BA/MA Colloquium II", category: "CEGU", offered: ["Winter"], prereqs: ["CEGU 29801"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CEGU 29901", title: "CEGU in the Community I", category: "CEGU", offered: ["Autumn"], prereqs: ["CEGU 20001"], abroad_eligible: false, hours_per_week: 10 },
    { id: "CEGU 29902", title: "CEGU in the Community II", category: "CEGU", offered: ["Winter"], prereqs: ["CEGU 29901"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 21100", title: "Energy: Science, Tech, and Human Usage", category: "ENSC", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENSC 24000", title: "Geobiology", category: "ENSC", offered: ["Winter","Spring"], prereqs: ["CHEM 11200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 24400", title: "Ecology and Conservation", category: "ENSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 24500", title: "Environmental Microbiology", category: "ENSC", offered: ["Autumn","Spring"], prereqs: ["CHEM 11200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 24550", title: "Global Change Microbiology", category: "ENSC", offered: ["Winter"], prereqs: ["ENSC 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 24800", title: "Climate Systems Engineering", category: "ENSC", offered: ["Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ENSC 25000", title: "Biological Oceanography", category: "ENSC", offered: ["Spring"], prereqs: ["ENSC 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 13100", title: "Physical Geology", category: "GEOS", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 11 },
    { id: "GEOS 13200", title: "Earth History", category: "GEOS", offered: ["Winter"], prereqs: ["GEOS 13100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "GEOS 13300", title: "The Atmosphere", category: "GEOS", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 21000", title: "Mineralogy", category: "GEOS", offered: ["Autumn"], prereqs: ["CHEM 11200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "GEOS 21400", title: "Thermodynamics and Phase Change", category: "GEOS", offered: ["Winter"], prereqs: ["CHEM 11200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "GEOS 23205", title: "The Cryosphere: Glaciers and Ice Sheets", category: "GEOS", offered: ["Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 24220", title: "Climate Foundations", category: "GEOS", offered: ["Autumn"], prereqs: ["GEOS 13300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 24230", title: "Geophysical Fluid Dynamics: Foundations", category: "GEOS", offered: ["Winter"], prereqs: ["MATH 18400"], abroad_eligible: false, hours_per_week: 11 },
    { id: "GEOS 24300", title: "Paleoclimatology", category: "GEOS", offered: ["Spring"], prereqs: ["GEOS 13200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 27300", title: "Biological Evolution-Advanced", category: "GEOS", offered: ["Winter"], prereqs: ["ENSC 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GEOS 28600", title: "Earth and Planetary Surface Processes", category: "GEOS", offered: ["Spring"], prereqs: ["GEOS 13100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "FNDL 21800", title: "Kafka's Castle: Social Fiction", category: "FNDL", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "FNDL 20211", title: "Intro to Critical Theory: Frankfurt", category: "FNDL", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "FNDL 23419", title: "Opera and Film", category: "FNDL", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "FNDL 29900", title: "Reading Courses: Fundamentals", category: "FNDL", offered: ["Autumn","Winter","Spring"], prereqs: ["FNDL 21800"], abroad_eligible: false, hours_per_week: 10 },
    { id: "FNDL 29901", title: "Fundamentals Junior Paper Colloquium", category: "FNDL", offered: ["Winter"], prereqs: ["FNDL 21800"], abroad_eligible: false, hours_per_week: 10 },
    { id: "FNDL 29902", title: "Fundamentals Senior Examination", category: "FNDL", offered: ["Autumn","Winter","Spring"], prereqs: ["FNDL 29901"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GNSE 13000", title: "9 Weeks, 9 Conversations: Gender & Sex", category: "GNSE", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "GNSE 15002", title: "Gender & Sexuality in World Civ I", category: "GNSE", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "GNSE 15003", title: "Gender & Sexuality in World Civ II", category: "GNSE", offered: ["Winter","Spring"], prereqs: ["GNSE 15002"], abroad_eligible: true, hours_per_week: 9 },
    { id: "GNSE 15014", title: "Gender & Sexuality Civ III: AIDS", category: "GNSE", offered: ["Spring"], prereqs: ["GNSE 15003"], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 19501", title: "Thinking Sex", category: "GNSE", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 12148", title: "Black Queer & Trans Feminisms", category: "GNSE", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 12149", title: "Prostitution & Sex Work in Asia Pacific", category: "GNSE", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 12151", title: "Queerness and the Left", category: "GNSE", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 12159", title: "Reading as a Writer: Bad Girls Club", category: "GNSE", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 20112", title: "Gender & Sexuality in Mod Middle East", category: "GNSE", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 20136", title: "Gender & Genre in Korean Fiction & TV", category: "GNSE", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GNSE 29501", title: "Capstone Seminar in Gender & Sexuality", category: "GNSE", offered: ["Autumn","Winter"], prereqs: ["GNSE 19501"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GRMN 10100", title: "Elementary German for Beginners I", category: "GRMN", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "GRMN 10200", title: "Elementary German for Beginners II", category: "GRMN", offered: ["Winter"], prereqs: ["GRMN 10100"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GRMN 10300", title: "Elementary German for Beginners III", category: "GRMN", offered: ["Spring"], prereqs: ["GRMN 10200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GRMN 20100", title: "Deutsche Maerchen", category: "GRMN", offered: ["Autumn","Winter","Spring"], prereqs: ["GRMN 10300"], abroad_eligible: true, hours_per_week: 9 },
    { id: "GRMN 20201", title: "Gruenes Deutschland", category: "GRMN", offered: ["Winter"], prereqs: ["GRMN 20100"], abroad_eligible: true, hours_per_week: 9 },
    { id: "GRMN 20301", title: "Kunst und Kultur", category: "GRMN", offered: ["Spring"], prereqs: ["GRMN 20201"], abroad_eligible: true, hours_per_week: 9 },
    { id: "GRMN 22124", title: "Cultural History of Postwar Germany", category: "GRMN", offered: ["Autumn","Winter"], prereqs: ["GRMN 20100"], abroad_eligible: false, hours_per_week: 9 },
    { id: "GRMN 22312", title: "Reforming Religious Media: Luther", category: "GRMN", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GRMN 23333", title: "Reading German for Research Purposes", category: "GRMN", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "GLST 23101", title: "Global Studies I", category: "GLST", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 23102", title: "Global Studies II", category: "GLST", offered: ["Winter"], prereqs: ["GLST 23101"], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 23111", title: "Black Theology: Hopkins Versus Cone", category: "GLST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 25830", title: "Piracy, Global Capital and the State", category: "GLST", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 25850", title: "No Justice, No Speech! Free Speech", category: "GLST", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 26382", title: "Indigenous Health and Environment", category: "GLST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "GLST 29800", title: "BA Thesis Seminar I", category: "GLST", offered: ["Autumn"], prereqs: ["GLST 23102"], abroad_eligible: false, hours_per_week: 10 },
    { id: "GLST 29801", title: "BA Thesis Seminar II", category: "GLST", offered: ["Winter"], prereqs: ["GLST 29800"], abroad_eligible: false, hours_per_week: 10 },
    { id: "HIPS 11800", title: "Intro to Field of Science Communication", category: "HIPS", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 8 },
    { id: "HIPS 18303", title: "Science, Culture & Society I: Ancient", category: "HIPS", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 18304", title: "Science, Culture & Society I: Egypt", category: "HIPS", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 18401", title: "Science, Culture & Society II: Med", category: "HIPS", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 18502", title: "Science, Culture & Society III: Modern", category: "HIPS", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 18509", title: "Science & Technology in Russia", category: "HIPS", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 20608", title: "Remaking the Prairie: Restoration", category: "HIPS", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIPS 29700", title: "Readings and Research in HIPS", category: "HIPS", offered: ["Autumn","Winter","Spring"], prereqs: ["HIPS 29800"], abroad_eligible: false, hours_per_week: 10 },
    { id: "HIPS 29800", title: "Junior Seminar: History of Science", category: "HIPS", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "HIPS 29810", title: "Bachelor's Thesis Workshop I", category: "HIPS", offered: ["Autumn"], prereqs: ["HIPS 29800"], abroad_eligible: false, hours_per_week: 10 },
    { id: "HIPS 29900", title: "Bachelor's Thesis", category: "HIPS", offered: ["Winter","Spring"], prereqs: ["HIPS 29810"], abroad_eligible: false, hours_per_week: 11 },
    { id: "HMRT 10100", title: "Human Rights in World Civilizations I", category: "HMRT", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: true, hours_per_week: 9 },
    { id: "HMRT 10200", title: "Human Rights in World Civilizations II", category: "HMRT", offered: ["Winter","Spring"], prereqs: ["HMRT 10100"], abroad_eligible: true, hours_per_week: 9 },
    { id: "HMRT 20200", title: "Human Rights: History and Theory", category: "HMRT", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 21002", title: "Human Rights: Philosophical Foundations", category: "HMRT", offered: ["Autumn","Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 21201", title: "Policing, Citizenship, and Inequality", category: "HMRT", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 21400", title: "Health and Human Rights", category: "HMRT", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 23472", title: "Human Rights BA Thesis & Capstone Wkshp", category: "HMRT", offered: ["Autumn","Winter"], prereqs: ["HMRT 23921"], abroad_eligible: false, hours_per_week: 10 },
    { id: "HMRT 23921", title: "Human Rights Field Work", category: "HMRT", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "HMRT 24638", title: "Global Challenges to Human Rights", category: "HMRT", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 24823", title: "Intl Human Rights Law and Practice", category: "HMRT", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 25003", title: "Immigration, Law and Society", category: "HMRT", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 25004", title: "Punishment and Social Theory", category: "HMRT", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HMRT 26200", title: "Human Rights: Anthropological View", category: "HMRT", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "IRHU 20009", title: "Symbiosis: Science Meets Humanities", category: "IRHU", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "IRHU 20100", title: "Intro to Humanistic Inquiry & Research", category: "IRHU", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "IRHU 27002", title: "Compiling & Mediating Env History", category: "IRHU", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "IRHU 27003", title: "Violence and the State", category: "IRHU", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HEBR 10501", title: "Introductory Modern Hebrew I", category: "HEBR", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "HEBR 10502", title: "Introductory Modern Hebrew II", category: "HEBR", offered: ["Winter"], prereqs: ["HEBR 10501"], abroad_eligible: false, hours_per_week: 10 },
    { id: "HEBR 10503", title: "Introductory Modern Hebrew III", category: "HEBR", offered: ["Spring"], prereqs: ["HEBR 10502"], abroad_eligible: false, hours_per_week: 10 },
    { id: "JWSC 12000", title: "Jewish Civilization I: Ancient-Medieval", category: "JWSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 12001", title: "Jewish Civilization II: Early Mod-Now", category: "JWSC", offered: ["Winter"], prereqs: ["JWSC 12000"], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 12004", title: "Jewish Civ III: Mothers and Motherhood", category: "JWSC", offered: ["Spring"], prereqs: ["JWSC 12001"], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 12007", title: "Jewish Civ III: Chicago Jewish History", category: "JWSC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 12012", title: "Jewish Civ III: The Holocaust", category: "JWSC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 20122", title: "Introduction to the New Testament", category: "JWSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 20201", title: "Ancient Medit Religions I: Israel", category: "JWSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 20203", title: "Ancient Medit Religions III: Roman", category: "JWSC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 20923", title: "Magic, Miracles, and Medicine", category: "JWSC", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 20924", title: "The Bible Throughout History", category: "JWSC", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 23413", title: "Emergence of Modern Jewish Self", category: "JWSC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "JWSC 23480", title: "Law, Rights, and Democracy in Crisis", category: "JWSC", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
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
    { id: "MATH 19620", title: "Linear Algebra", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 18400", title: "Mathematical Methods: Physical Sci II", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300","MATH 19620"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 18500", title: "Mathematical Methods: Physical Sci III", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300","MATH 19620"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 18600", title: "Mathematics of Quantum Mechanics", category: "MATH", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 18400","MATH 18500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 23500", title: "Markov Chains and Brownian Motion", category: "MATH", offered: ["Autumn","Spring"], prereqs: ["STAT 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 18300", title: "Math Methods in Physical Sciences I", category: "MATH", offered: ["Autumn","Winter"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "MATH 21100", title: "Basic Numerical Analysis", category: "MATH", offered: ["Autumn","Winter"], prereqs: ["MATH 20300"], abroad_eligible: false, hours_per_week: 11 },
    { id: "MATH 21200", title: "Advanced Numerical Analysis", category: "MATH", offered: ["Winter","Spring"], prereqs: ["MATH 21100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "STAT 23400", title: "Statistical Models and Methods", category: "STAT", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24300", title: "Numerical Linear Algebra", category: "STAT", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "STAT 22400", title: "Applied Regression Analysis", category: "STAT", offered: ["Autumn","Spring"], prereqs: ["STAT 23400","MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 22600", title: "Analysis of Categorical Data", category: "STAT", offered: ["Winter"], prereqs: ["STAT 23400","MATH 15200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24310", title: "Numerical Linear Algebra: Computation", category: "STAT", offered: ["Spring"], prereqs: ["STAT 24300"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24400", title: "Statistical Theory and Methods I", category: "STAT", offered: ["Autumn","Winter"], prereqs: ["MATH 18400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24500", title: "Statistical Theory and Methods II", category: "STAT", offered: ["Winter","Spring"], prereqs: ["STAT 24300","STAT 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 24620", title: "Multivariate Statistical Analysis", category: "STAT", offered: ["Spring"], prereqs: ["STAT 24300","STAT 24500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 25300", title: "Introduction to Probability Models", category: "STAT", offered: ["Winter"], prereqs: ["STAT 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 26100", title: "Time Dependent Data", category: "STAT", offered: ["Autumn"], prereqs: ["STAT 24500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 26300", title: "Introduction to Statistical Genetics", category: "STAT", offered: ["Spring"], prereqs: ["STAT 24500"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 27400", title: "Nonparametric Inference", category: "STAT", offered: ["Winter"], prereqs: ["STAT 24400"], abroad_eligible: false, hours_per_week: 10 },
    { id: "STAT 25100", title: "Intro to Mathematical Probability", category: "STAT", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 20300"], abroad_eligible: false, hours_per_week: 11 },
    { id: "STAT 28000", title: "Optimization", category: "STAT", offered: ["Winter","Spring"], prereqs: ["STAT 24300"], abroad_eligible: false, hours_per_week: 11 },
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
    // Economics and business
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
    { id: "ECON 10700", title: "Introduction to Game Theory", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 10000"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ECON 11010", title: "Intro Statistical Methods in Economics", category: "ECON", offered: ["Autumn","Spring"], prereqs: ["ECON 10000","ECON 10200"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ECON 11020", title: "Introduction to Econometrics", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 10000","ECON 10200","ECON 11010"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ECON 11600", title: "Experimental Design", category: "ECON", offered: ["Spring"], prereqs: ["ECON 10000","ECON 11010"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ECON 15010", title: "Investments: Economics and Finance", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: ["ECON 10000","ECON 11010"], abroad_eligible: false, hours_per_week: 10 },
    { id: "ECON 19100", title: "Economics for Everyone: Macro", category: "ECON", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "BUSN 20100", title: "Financial Accounting", category: "ECON", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "BUSN 20400", title: "Investments", category: "ECON", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "BUSN 20500", title: "Operations Management", category: "ECON", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "BUSN 20600", title: "Marketing Management", category: "ECON", offered: ["Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
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
    { id: "BIOS 20151", title: "Introduction to Quantitative Modeling in Biology", category: "BIOS", offered: ["Autumn","Winter","Spring"], prereqs: ["MATH 15200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "BIOS 20186", title: "Fundamentals of Cell and Molecular Biology", category: "BIOS", offered: ["Winter","Spring"], prereqs: ["BIOS 20151"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20187", title: "Fundamentals of Genetics", category: "BIOS", offered: ["Autumn","Spring"], prereqs: ["BIOS 20186"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20188", title: "Fundamentals of Physiology", category: "BIOS", offered: ["Autumn","Winter"], prereqs: ["BIOS 20187"], abroad_eligible: false, hours_per_week: 14 },
    { id: "BIOS 20189", title: "Fundamentals of Developmental Biology", category: "BIOS", offered: ["Winter","Spring"], prereqs: ["BIOS 20188"], abroad_eligible: false, hours_per_week: 13 },
    { id: "BIOS 20200", title: "Introduction to Biochemistry", category: "BIOS", offered: ["Autumn","Winter","Spring"], prereqs: ["BIOS 20187"], abroad_eligible: true, hours_per_week: 14 },
    { id: "BIOS 20198", title: "Biodiversity", category: "BIOS", offered: ["Autumn","Spring"], prereqs: ["BIOS 20187"], abroad_eligible: true, hours_per_week: 11 },
    { id: "BIOS 21216", title: "Introduction to Statistical Genetics", category: "BIOS", offered: ["Autumn","Winter"], prereqs: ["BIOS 20187","STAT 23400"], abroad_eligible: true, hours_per_week: 12 },
    { id: "BIOS 23232", title: "Ecology and Evolution in the Southwest", category: "BIOS", offered: ["Spring"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 20153", title: "Fundamentals of Ecology and Evolution", category: "BIOS", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 10 },
    { id: "BIOS 20196", title: "Ecology and Conservation", category: "BIOS", offered: ["Autumn","Spring"], prereqs: ["BIOS 20151"], abroad_eligible: false, hours_per_week: 10 },
    { id: "BIOS 25206", title: "Fundamentals of Bacteriology", category: "BIOS", offered: ["Autumn"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 25207", title: "Human Microbiota", category: "BIOS", offered: ["Winter"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 25216", title: "Molecular Basis of Bacterial Disease", category: "BIOS", offered: ["Winter"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 25256", title: "Immunobiology", category: "BIOS", offered: ["Autumn"], prereqs: ["BIOS 20187","BIOS 20188","BIOS 20189"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 25287", title: "Introduction to Virology", category: "BIOS", offered: ["Spring"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 23249", title: "Animal Behavior", category: "BIOS", offered: ["Winter"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 23262", title: "Mammalian Evolutionary Biology", category: "BIOS", offered: ["Autumn"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 23266", title: "Evolutionary Adaptation", category: "BIOS", offered: ["Autumn"], prereqs: ["BIOS 20153","BIOS 20186","BIOS 20187"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 23414", title: "Theoretical Ecology", category: "BIOS", offered: ["Autumn"], prereqs: ["BIOS 20186","BIOS 20187","BIOS 20188","MATH 15100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "BIOS 21317", title: "Topics in Biological Chemistry", category: "BIOS", offered: ["Spring"], prereqs: ["BIOS 20200"], abroad_eligible: false, hours_per_week: 11 },
    { id: "BIOS 21328", title: "Biophysics of Biomolecules", category: "BIOS", offered: ["Winter","Spring"], prereqs: ["BIOS 20200"], abroad_eligible: false, hours_per_week: 11 },
    // Chemistry
    { id: "CHEM 11100", title: "Comprehensive General Chemistry I", category: "CHEM", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 11200", title: "Comprehensive General Chemistry II", category: "CHEM", offered: ["Winter"], prereqs: ["CHEM 11100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 11300", title: "Comprehensive General Chemistry III", category: "CHEM", offered: ["Spring"], prereqs: ["CHEM 11200"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 22000", title: "Organic Chemistry I", category: "CHEM", offered: ["Autumn"], prereqs: ["CHEM 11100","CHEM 11200","CHEM 11300"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 22100", title: "Organic Chemistry II", category: "CHEM", offered: ["Winter"], prereqs: ["CHEM 11100","CHEM 11200","CHEM 11300","CHEM 22000"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 20100", title: "Inorganic Chemistry", category: "CHEM", offered: ["Autumn"], prereqs: ["CHEM 11300"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CHEM 20200", title: "Organometallic Chemistry", category: "CHEM", offered: ["Winter"], prereqs: ["CHEM 20100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CHEM 20300", title: "Chemistry of Materials", category: "CHEM", offered: ["Spring"], prereqs: ["CHEM 20100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CHEM 22200", title: "Organic Chemistry III", category: "CHEM", offered: ["Spring"], prereqs: ["CHEM 22100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 23300", title: "Introduction to Chemical Biology", category: "CHEM", offered: ["Autumn","Spring"], prereqs: ["CHEM 22100"], abroad_eligible: false, hours_per_week: 11 },
    { id: "CHEM 26100", title: "Introductory Quantum Mechanics", category: "CHEM", offered: ["Autumn"], prereqs: ["MATH 18500"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CHEM 26200", title: "Thermodynamics", category: "CHEM", offered: ["Winter"], prereqs: ["CHEM 26100"], abroad_eligible: false, hours_per_week: 12 },
    { id: "CHEM 26700", title: "Experimental Physical Chemistry", category: "CHEM", offered: ["Winter","Spring"], prereqs: ["CHEM 26100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "CHEM 32100", title: "Physical Organic Chemistry I", category: "CHEM", offered: ["Autumn"], prereqs: ["CHEM 22200"], abroad_eligible: false, hours_per_week: 14 },
    // Psychology
    { id: "PSYC 20200", title: "Psychological Research Methods", category: "PSYC", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 20300", title: "Biological Psychology", category: "PSYC", offered: ["Winter"], prereqs: ["BIOS 10130","PSYC 20200"], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 20400", title: "Cognitive Psychology", category: "PSYC", offered: ["Autumn","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 20500", title: "Developmental Psychology", category: "PSYC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 20600", title: "Social Psychology", category: "PSYC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 20700", title: "Sensation and Perception", category: "PSYC", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 21109", title: "Concepts and Categories", category: "PSYC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 21150", title: "Psychology of Racism", category: "PSYC", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 21260", title: "Psychology Research Incubator", category: "PSYC", offered: ["Winter"], prereqs: ["PSYC 20200"], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 21750", title: "Biological Clocks and Behavior", category: "PSYC", offered: ["Spring"], prereqs: ["PSYC 20300"], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 22580", title: "Child Development in the Classroom", category: "PSYC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 23000", title: "Cultural Psychology", category: "PSYC", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "PSYC 23200", title: "Introduction to Language Acquisition", category: "PSYC", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    // History
    { id: "HIST 12706", title: "Diaspora(s)", category: "HIST", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 14601", title: "Twentieth-Century China: Great Trials", category: "HIST", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 15006", title: "Histories of the Bomb", category: "HIST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 15007", title: "History of Biotech", category: "HIST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 15604", title: "Ancient Empires III: Egypt", category: "HIST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 16604", title: "Ancient Conceptions of the World", category: "HIST", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 17002", title: "Ancient Sicily", category: "HIST", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 17809", title: "The United States Since 1920", category: "HIST", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 17906", title: "Haunted Histories: Slavery and Memory", category: "HIST", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 17908", title: "African-American History to 1865", category: "HIST", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 18003", title: "Civil War and Reconstruction", category: "HIST", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "HIST 18405", title: "Histories of Native America", category: "HIST", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    // English
    { id: "ENGL 10144", title: "Jane Austen and Literary Style", category: "ENGL", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10404", title: "Poetry", category: "ENGL", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10432", title: "Literature and the Law", category: "ENGL", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10434", title: "Moby-Dick", category: "ENGL", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10455", title: "Madwomen", category: "ENGL", offered: ["Winter"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10709", title: "Fiction", category: "ENGL", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 10800", title: "Introduction to Film Analysis", category: "ENGL", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 11004", title: "History of the Novel", category: "ENGL", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 11200", title: "Literary Criticism", category: "ENGL", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 12143", title: "Trans Literature in the United States", category: "ENGL", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 16500", title: "Shakespeare: Histories and Comedies", category: "ENGL", offered: ["Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 16600", title: "Shakespeare: Tragedies and Romances", category: "ENGL", offered: ["Autumn"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    { id: "ENGL 13000", title: "Academic and Professional Writing", category: "ENGL", offered: ["Autumn","Winter","Spring"], prereqs: [], abroad_eligible: false, hours_per_week: 9 },
    // Physics
    { id: "PHYS 13100", title: "Mechanics", category: "PHYSICS", offered: ["Autumn"], prereqs: ["MATH 15100"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 13200", title: "Electricity and Magnetism", category: "PHYSICS", offered: ["Winter"], prereqs: ["PHYS 13100","MATH 15200"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 13300", title: "Waves, Optics, and Heat", category: "PHYSICS", offered: ["Spring"], prereqs: ["PHYS 13200","MATH 15300"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 18500", title: "Intermediate Mechanics", category: "PHYSICS", offered: ["Autumn"], prereqs: ["PHYS 13100","MATH 18400"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 22500", title: "Intermediate Electricity & Magnetism I", category: "PHYSICS", offered: ["Winter"], prereqs: ["PHYS 13200","MATH 18500"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 22700", title: "Intermediate Electricity & Magnetism II", category: "PHYSICS", offered: ["Spring"], prereqs: ["PHYS 22500"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 23410", title: "Quantum Mechanics I", category: "PHYSICS", offered: ["Winter"], prereqs: ["PHYS 13300","MATH 18600"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 23510", title: "Quantum Mechanics II", category: "PHYSICS", offered: ["Spring"], prereqs: ["PHYS 23410"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 21101", title: "Experimental Physics I", category: "PHYSICS", offered: ["Autumn"], prereqs: ["PHYS 23510"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 21102", title: "Experimental Physics II", category: "PHYSICS", offered: ["Winter"], prereqs: ["PHYS 21101"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 21103", title: "Experimental Physics III", category: "PHYSICS", offered: ["Spring"], prereqs: ["PHYS 21102"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 24310", title: "Advanced Quantum Mechanics", category: "PHYSICS", offered: ["Autumn"], prereqs: ["PHYS 23510"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 23700", title: "Nuclei and Elementary Particles", category: "PHYSICS", offered: ["Winter"], prereqs: ["PHYS 23510"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 22600", title: "Electronics", category: "PHYSICS", offered: ["Spring"], prereqs: ["PHYS 13200"], abroad_eligible: false, hours_per_week: 14 },
    { id: "PHYS 27900", title: "Statistical and Thermal Physics", category: "PHYSICS", offered: ["Autumn"], prereqs: ["PHYS 23510"], abroad_eligible: false, hours_per_week: 14 }
  ],
  // which course categories count as "the major" (used for colors and double majors)
  major_categories: {
    "CS": [
      "CS",
      "MATH",
      "STAT"
    ],
    "Econ": [
      "ECON",
      "MATH",
      "STAT"
    ],
    "Math": [
      "MATH",
      "STAT"
    ],
    "Data Science": [
      "DATA",
      "STAT",
      "MATH",
      "CS"
    ],
    "Public Policy": [
      "PBPL",
      "ECON",
      "STAT",
      "MATH"
    ],
    "Political Science": [
      "PLSC"
    ],
    "Biology": [
      "BIOS",
      "MATH",
      "STAT"
    ],
    "Econ - Business Economics": [
      "ECON",
      "MATH",
      "STAT"
    ],
    "Biology - Microbiology": [
      "BIOS",
      "CHEM",
      "MATH",
      "STAT"
    ],
    "Biology - Ecology and Evolution": [
      "BIOS",
      "CHEM",
      "MATH",
      "STAT",
      "PHYSICS"
    ],
    "Psychology": [
      "PSYC",
      "STAT"
    ],
    "Statistics": [
      "STAT",
      "MATH"
    ],
    "History": [
      "HIST"
    ],
    "English": [
      "ENGL"
    ],
    "Physics": [
      "PHYSICS",
      "MATH"
    ],
    "Anthropology": [
      "ANTH"
    ],
    "Archaeology": [
      "ARKE",
      "NEAA",
      "ANTH",
      "ARTH",
      "CLCV"
    ],
    "Art History": [
      "ARTH"
    ],
    "Biological Chemistry": [
      "CHEM",
      "BIOS",
      "MATH",
      "PHYSICS"
    ],
    "Chemistry": [
      "CHEM",
      "MATH",
      "PHYSICS"
    ],
    "Cinema and Media Studies": [
      "CMST"
    ],
    "Classical Studies": [
      "CLCV",
      "LATN"
    ],
    "Climate and Sustainable Growth": [
      "CCSG",
      "GEOS",
      "ENSC",
      "PBPL",
      "ECON"
    ],
    "Comparative Literature": [
      "CMLT",
      "ENGL",
      "LATN",
      "CLCV"
    ],
    "Computational and Applied Mathematics": [
      "CAAM",
      "MATH",
      "STAT",
      "CS"
    ],
    "Creative Writing": [
      "CRWR",
      "ENGL"
    ],
    "East Asian Languages and Civilizations": [
      "EALC",
      "CHIN",
      "ARTH",
      "ANTH"
    ],
    "Environmental Science": [
      "ENSC",
      "GEOS",
      "CHEM",
      "BIOS",
      "MATH",
      "STAT"
    ],
    "Fundamentals: Issues and Texts": [
      "FNDL",
      "LATN",
      "CLCV",
      "ENGL"
    ],
    "Gender and Sexuality Studies": [
      "GNSE"
    ],
    "Geophysical Sciences": [
      "GEOS",
      "CHEM",
      "MATH",
      "STAT",
      "PHYSICS"
    ],
    "Germanic Studies": [
      "GRMN",
      "FNDL"
    ],
    "Global Studies": [
      "GLST",
      "CHIN",
      "ANTH",
      "PBPL"
    ],
    "Human Rights": [
      "HMRT"
    ],
    "Inquiry and Research in the Humanities": [
      "IRHU",
      "ENGL",
      "GRMN",
      "ARTH"
    ],
    "Jewish Studies": [
      "JWSC",
      "HEBR"
    ]
  },
  // a Core pick that pairs well with each major (Harper suggests these first)
  core_suggestions: {
    "CS": {
      "HUM": "Philosophical Perspectives",
      "SOSC": "Mind",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "Econ": {
      "HUM": "Human Being and Citizen",
      "SOSC": "Classics of Social and Political Thought",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "Math": {
      "HUM": "Philosophical Perspectives",
      "SOSC": "Mind",
      "CIV": "Rome: Antiquity to the Baroque",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Introduction to Western Art Music"
    },
    "Data Science": {
      "HUM": "Media Aesthetics",
      "SOSC": "Social Science Inquiry",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "Public Policy": {
      "HUM": "Human Being and Citizen",
      "SOSC": "Power, Identity, and Resistance",
      "CIV": "America in World Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Drama: Embodiment and Transformation"
    },
    "Political Science": {
      "HUM": "Human Being and Citizen",
      "SOSC": "Classics of Social and Political Thought",
      "CIV": "History of Western Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Drama: Embodiment and Transformation"
    },
    "Biology": {
      "HUM": "Readings in World Literature",
      "SOSC": "Mind",
      "CIV": "Rome: Antiquity to the Baroque",
      "PHYS": "Introductory General Chemistry",
      "ARTS": "Visual Language: On Images"
    },
    "Econ - Business Economics": {
      "HUM": "Human Being and Citizen",
      "SOSC": "Classics of Social and Political Thought",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "Biology - Microbiology": {
      "HUM": "Readings in World Literature",
      "SOSC": "Mind",
      "CIV": "Rome: Antiquity to the Baroque",
      "PHYS": "Introductory General Chemistry",
      "ARTS": "Visual Language: On Images"
    },
    "Biology - Ecology and Evolution": {
      "HUM": "Readings in World Literature",
      "SOSC": "Mind",
      "CIV": "Rome: Antiquity to the Baroque",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "Psychology": {
      "HUM": "Philosophical Perspectives",
      "SOSC": "Mind",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Introduction to Western Art Music"
    },
    "Statistics": {
      "HUM": "Philosophical Perspectives",
      "SOSC": "Social Science Inquiry",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "History": {
      "HUM": "Human Being and Citizen",
      "SOSC": "Classics of Social and Political Thought",
      "CIV": "Rome: Antiquity to the Baroque",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Visual Language: On Images"
    },
    "English": {
      "HUM": "Readings in World Literature",
      "SOSC": "Power, Identity, and Resistance",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Drama: Embodiment and Transformation"
    },
    "Physics": {
      "HUM": "Philosophical Perspectives",
      "SOSC": "Mind",
      "CIV": "Paris: European Civilization",
      "PHYS": "Stars and Galaxies",
      "ARTS": "Introduction to Western Art Music"
    }
  },
  aliases: {
    "CS": [
      "computer science",
      "comp sci",
      "cs",
      "cmsc"
    ],
    "Econ": [
      "economics",
      "econ"
    ],
    "Math": [
      "mathematics",
      "math"
    ],
    "Data Science": [
      "data science",
      "data sci",
      "dsi"
    ],
    "Public Policy": [
      "public policy",
      "pbpl",
      "policy"
    ],
    "Political Science": [
      "political science",
      "poli sci",
      "polisci",
      "plsc"
    ],
    "Biology": [
      "biological sciences",
      "biology",
      "bio",
      "bios"
    ],
    "Econ - Business Economics": [
      "business economics",
      "business econ"
    ],
    "Biology - Microbiology": [
      "microbiology",
      "biology microbiology",
      "micro bio"
    ],
    "Biology - Ecology and Evolution": [
      "ecology and evolution",
      "ecology",
      "evolutionary biology"
    ],
    "Psychology": [
      "psychology",
      "psych"
    ],
    "Statistics": [
      "statistics",
      "stats"
    ],
    "History": [
      "history"
    ],
    "English": [
      "english",
      "english literature"
    ],
    "Physics": [
      "physics"
    ],
    "Anthropology": [
      "anthropology",
      "anth",
      "anthro"
    ],
    "Archaeology": [
      "archaeology",
      "arke",
      "archeology"
    ],
    "Art History": [
      "art history",
      "arth"
    ],
    "Biological Chemistry": [
      "biological chemistry",
      "biochem",
      "biochemistry"
    ],
    "Chemistry": [
      "chemistry",
      "chem"
    ],
    "Cinema and Media Studies": [
      "cinema and media studies",
      "cmst",
      "cms",
      "film"
    ],
    "Classical Studies": [
      "classical studies",
      "classics",
      "clcv"
    ],
    "Climate and Sustainable Growth": [
      "climate and sustainable growth",
      "ccsg",
      "climate"
    ],
    "Comparative Literature": [
      "comparative literature",
      "cmlt",
      "complit"
    ],
    "Computational and Applied Mathematics": [
      "computational and applied mathematics",
      "caam",
      "applied math"
    ],
    "Creative Writing": [
      "creative writing",
      "crwr"
    ],
    "East Asian Languages and Civilizations": [
      "east asian languages and civilizations",
      "ealc",
      "east asian studies",
      "east asian"
    ],
    "Environmental Science": [
      "environmental science",
      "ensc",
      "envsci"
    ],
    "Fundamentals: Issues and Texts": [
      "fundamentals: issues and texts",
      "fundamentals",
      "fndl"
    ],
    "Gender and Sexuality Studies": [
      "gender and sexuality studies",
      "gnse",
      "gender studies"
    ],
    "Geophysical Sciences": [
      "geophysical sciences",
      "geos",
      "geophysics",
      "earth science"
    ],
    "Germanic Studies": [
      "germanic studies",
      "grmn",
      "german"
    ],
    "Global Studies": [
      "global studies",
      "glst"
    ],
    "Human Rights": [
      "human rights",
      "hmrt"
    ],
    "Inquiry and Research in the Humanities": [
      "inquiry and research in the humanities",
      "irhu",
      "irhum"
    ],
    "Jewish Studies": [
      "jewish studies",
      "jwsc"
    ]
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
    },
    "Econ - Business Economics": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "ECON 10000"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "ECON 10200"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "BIOS 10130"],
      "Y2-Autumn": ["SOSC 12400", "ECON 11010", "BUSN 20100"],
      "Y2-Winter": ["SOSC 12500", "ECON 10700", "ECON 19100"],
      "Y2-Spring": ["SOSC 12600", "BIOS 12117", "ECON 11020"],
      "Y3-Autumn": ["ASTR 12700", "PSYC 20600", "ECON 15010"],
      "Y3-Winter": ["ASTR 12710", "HIST 13001", "BUSN 20500"],
      "Y3-Spring": ["HIST 13002", "ECON 11600", "BUSN 20600"],
      "Y4-Autumn": ["ARTV 10100", "ENGL 10432", "PSYC 20400"],
      "Y4-Winter": ["ELECTIVE 1", "BUSN 20400", "ENGL 10404"],
      "Y4-Spring": ["ELECTIVE 2", "PSYC 20500", "ENGL 10800"]
    },
    "Biology - Microbiology": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200", "BIOS 20153"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "CHEM 11300", "BIOS 20151"],
      "Y2-Autumn": ["SOSC 12400", "CHEM 22000", "BIOS 10130"],
      "Y2-Winter": ["SOSC 12500", "CHEM 22100", "HIST 13001"],
      "Y2-Spring": ["SOSC 12600", "BIOS 20186", "BIOS 12117"],
      "Y3-Autumn": ["ASTR 12700", "BIOS 20187", "STAT 23400"],
      "Y3-Winter": ["ASTR 12710", "BIOS 20188", "ARTV 10100"],
      "Y3-Spring": ["HIST 13002", "BIOS 20198", "BIOS 20196", "BIOS 20189"],
      "Y4-Autumn": ["BIOS 25206", "BIOS 25256", "BIOS 20200"],
      "Y4-Winter": ["ELECTIVE 1", "BIOS 25207", "BIOS 25216"],
      "Y4-Spring": ["ELECTIVE 2", "BIOS 25287", "ENGL 10800"]
    },
    "Biology - Ecology and Evolution": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200", "BIOS 20153"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "CHEM 11300", "BIOS 20151"],
      "Y2-Autumn": ["SOSC 12400", "PHYS 13100", "BIOS 10130", "BIOS 20196"],
      "Y2-Winter": ["SOSC 12500", "PHYS 13200", "HIST 13001"],
      "Y2-Spring": ["SOSC 12600", "BIOS 20186", "BIOS 12117"],
      "Y3-Autumn": ["ASTR 12700", "BIOS 20187", "STAT 23400"],
      "Y3-Winter": ["ASTR 12710", "BIOS 20188", "ARTV 10100"],
      "Y3-Spring": ["HIST 13002", "BIOS 20198", "MATH 19620", "BIOS 20189"],
      "Y4-Autumn": ["BIOS 23266", "BIOS 23262", "BIOS 23414"],
      "Y4-Winter": ["ELECTIVE 1", "BIOS 23249", "ENGL 10404"],
      "Y4-Spring": ["ELECTIVE 2", "BIOS 23232", "ENGL 10800"]
    },
    "Psychology": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "ECON 10000"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "ECON 10200"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "BIOS 10130"],
      "Y2-Autumn": ["SOSC 12400", "ASTR 12700", "PSYC 20200"],
      "Y2-Winter": ["SOSC 12500", "ASTR 12710", "PSYC 20300"],
      "Y2-Spring": ["SOSC 12600", "BIOS 12117", "PSYC 20500"],
      "Y3-Autumn": ["STAT 23400", "PSYC 20400", "PSYC 20600"],
      "Y3-Winter": ["HIST 13001", "PSYC 20700", "PSYC 21260"],
      "Y3-Spring": ["HIST 13002", "PSYC 21109", "PSYC 21750"],
      "Y4-Autumn": ["ARTV 10100", "PSYC 22580", "PSYC 23000"],
      "Y4-Winter": ["ELECTIVE 1", "PSYC 23200", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "PSYC 21150", "ENGL 10800"]
    },
    "Statistics": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "ECON 10000"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "ECON 10200"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "MATH 19620"],
      "Y2-Autumn": ["SOSC 12400", "MATH 18400", "STAT 23400"],
      "Y2-Winter": ["SOSC 12500", "STAT 24300", "STAT 24400"],
      "Y2-Spring": ["SOSC 12600", "STAT 24500", "STAT 24310"],
      "Y3-Autumn": ["ASTR 12700", "STAT 22400", "BIOS 10130"],
      "Y3-Winter": ["ASTR 12710", "HIST 13001", "STAT 22600"],
      "Y3-Spring": ["HIST 13002", "BIOS 12117", "STAT 24620"],
      "Y4-Autumn": ["ARTV 10100", "STAT 26100", "MATH 23500", "PSYC 20600"],
      "Y4-Winter": ["ELECTIVE 1", "STAT 25300", "STAT 27400"],
      "Y4-Spring": ["ELECTIVE 2", "STAT 26300", "ENGL 10800"]
    },
    "History": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "ECON 10000"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "ECON 10200"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "BIOS 10130"],
      "Y2-Autumn": ["SOSC 12400", "ASTR 12700", "HIST 17809"],
      "Y2-Winter": ["SOSC 12500", "ASTR 12710", "HIST 12706"],
      "Y2-Spring": ["SOSC 12600", "BIOS 12117", "HIST 15006"],
      "Y3-Autumn": ["STAT 23400", "HIST 14601", "HIST 17908"],
      "Y3-Winter": ["HIST 13001", "HIST 16604", "HIST 17002"],
      "Y3-Spring": ["HIST 13002", "HIST 15007", "HIST 15604"],
      "Y4-Autumn": ["ARTV 10100", "HIST 18003", "ENGL 10432"],
      "Y4-Winter": ["ELECTIVE 1", "HIST 17906", "ENGL 10404"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 18405", "ENGL 10800"]
    },
    "English": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "ECON 10000"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "ECON 10200"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "BIOS 10130"],
      "Y2-Autumn": ["SOSC 12400", "ASTR 12700", "ENGL 11200"],
      "Y2-Winter": ["SOSC 12500", "ASTR 12710", "ENGL 10404"],
      "Y2-Spring": ["SOSC 12600", "BIOS 12117", "ENGL 10709"],
      "Y3-Autumn": ["STAT 23400", "ENGL 16600", "ENGL 10432"],
      "Y3-Winter": ["HIST 13001", "ENGL 10144", "ENGL 10455"],
      "Y3-Spring": ["HIST 13002", "ENGL 16500", "ENGL 10434"],
      "Y4-Autumn": ["ARTV 10100", "ENGL 12143", "PSYC 20600"],
      "Y4-Winter": ["ELECTIVE 1", "ENGL 10800", "PSYC 20700"],
      "Y4-Spring": ["ELECTIVE 2", "ENGL 11004", "PSYC 20500"]
    },
    "Physics": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "BIOS 10130"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "HIST 13001"],
      "Y1-Spring": ["HUMA 11200", "MATH 15300", "BIOS 12117"],
      "Y2-Autumn": ["SOSC 12400", "PHYS 13100", "MATH 19620"],
      "Y2-Winter": ["SOSC 12500", "PHYS 13200", "MATH 18400"],
      "Y2-Spring": ["SOSC 12600", "PHYS 13300", "MATH 18500"],
      "Y3-Autumn": ["ASTR 12700", "PHYS 18500", "MATH 18600"],
      "Y3-Winter": ["ASTR 12710", "PHYS 22500", "PHYS 23410"],
      "Y3-Spring": ["HIST 13002", "PHYS 22700", "PHYS 23510"],
      "Y4-Autumn": ["ARTV 10100", "PHYS 21101", "PHYS 24310", "PHYS 27900"],
      "Y4-Winter": ["ELECTIVE 1", "PHYS 21102", "PHYS 23700"],
      "Y4-Spring": ["ELECTIVE 2", "PHYS 21103", "PHYS 22600"]
    },
    "Anthropology": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["ASTR 12700", "BIOS 10130", "ANTH 10100"],
      "Y2-Winter": ["ASTR 12710", "BIOS 12117", "ANTH 21107"],
      "Y2-Spring": ["HIST 13001", "ANTH 21420", "ANTH 20100"],
      "Y3-Autumn": ["ANTH 20007", "ANTH 21265", "ANTH 26330"],
      "Y3-Winter": ["HIST 13002", "ANTH 20014", "ANTH 21270"],
      "Y3-Spring": ["ANTH 26100", "ANTH 26825", "ANTH 29500"],
      "Y4-Autumn": ["ELECTIVE 1", "PLSC 28701", "HIST 14601"],
      "Y4-Winter": ["ANTH 26900", "ANTH 28400", "ANTH 20200", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28801"]
    },
    "Archaeology": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["ASTR 12700", "BIOS 10130", "NEAA 20100"],
      "Y2-Winter": ["ASTR 12710", "BIOS 12117", "ANTH 26900"],
      "Y2-Spring": ["HIST 13001", "ARKE 20200", "ANTH 29500"],
      "Y3-Autumn": ["NEAA 20330", "NEAA 20061", "ARKE 20511"],
      "Y3-Winter": ["HIST 13002", "NEAA 20062", "ARKE 20002"],
      "Y3-Spring": ["ARKE 20121", "ARKE 20322", "ANTH 20100"],
      "Y4-Autumn": ["ELECTIVE 1", "ARTH 14107", "HIST 14601"],
      "Y4-Winter": ["ARKE 20030", "NEAA 20035", "HIST 12706", "PLSC 28701"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28801"]
    },
    "Art History": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["ASTR 12700", "BIOS 10130", "ARTH 10100"],
      "Y2-Winter": ["ASTR 12710", "BIOS 12117", "ARTH 16100"],
      "Y2-Spring": ["HIST 13001", "ARTH 29600", "ARTH 24602"],
      "Y3-Autumn": ["ARTH 14107", "ARTH 20603", "ARTH 25105"],
      "Y3-Winter": ["HIST 13002", "ARTH 23010", "ARTH 25106", "ENGL 10144"],
      "Y3-Spring": ["ARTH 25300", "HIST 15006"],
      "Y4-Autumn": ["ARTH 28330", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["ENGL 10404", "PLSC 28701", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28801", "HIST 15007"]
    },
    "Biological Chemistry": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200"],
      "Y1-Spring": ["HUMA 11200", "CHEM 11300", "ARTV 10100", "BIOS 20151"],
      "Y2-Autumn": ["SOSC 12400", "CHEM 22000", "MATH 18300", "PHYS 13100"],
      "Y2-Winter": ["SOSC 12500", "CHEM 22100", "PHYS 13200", "MATH 15300"],
      "Y2-Spring": ["SOSC 12600", "CHEM 22200", "MATH 19620", "BIOS 20186"],
      "Y3-Autumn": ["CHEM 20100", "MATH 18500", "BIOS 20187"],
      "Y3-Winter": ["HIST 13001", "BIOS 20200"],
      "Y3-Spring": ["CHEM 20300", "HIST 13002", "MATH 18400", "BIOS 21317"],
      "Y4-Autumn": ["CHEM 32100", "ASTR 12700", "BIOS 10130", "CHEM 26100"],
      "Y4-Winter": ["ASTR 12710", "BIOS 12117", "CHEM 26200", "CHEM 26700"],
      "Y4-Spring": ["ELECTIVE 1", "ELECTIVE 2", "PHYS 13300", "BIOS 21328"]
    },
    "Chemistry": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200"],
      "Y1-Spring": ["HUMA 11200", "CHEM 11300", "ARTV 10100", "MATH 15300"],
      "Y2-Autumn": ["SOSC 12400", "CHEM 22000", "MATH 18300", "PHYS 13100"],
      "Y2-Winter": ["SOSC 12500", "CHEM 22100", "PHYS 13200"],
      "Y2-Spring": ["SOSC 12600", "CHEM 22200", "MATH 19620", "PHYS 13300"],
      "Y3-Autumn": ["CHEM 20100", "ASTR 12700", "MATH 18400"],
      "Y3-Winter": ["ASTR 12710"],
      "Y3-Spring": ["CHEM 20300", "BIOS 10130", "HIST 13001", "MATH 18500"],
      "Y4-Autumn": ["CHEM 23300", "CHEM 32100", "HIST 13002", "CHEM 26100"],
      "Y4-Winter": ["CHEM 20200", "BIOS 12117", "ELECTIVE 1", "CHEM 26200"],
      "Y4-Spring": ["ELECTIVE 2", "CHEM 26700"]
    },
    "Cinema and Media Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "CMST 10100"],
      "Y2-Autumn": ["CMST 28500", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["CMST 28600", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["CMST 28700", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["CMST 29201", "CMST 23930", "CMST 28921"],
      "Y3-Winter": ["CMST 23931", "CMST 28922", "HIST 13002", "HIST 12706"],
      "Y3-Spring": ["CMST 29202"],
      "Y4-Autumn": ["CMST 27299", "CMST 28999", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["ENGL 10404", "PLSC 28701", "ENGL 10144"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28801", "HIST 15006"]
    },
    "Classical Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "LATN 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "LATN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "LATN 10300"],
      "Y2-Autumn": ["LATN 20100", "ASTR 12700", "BIOS 10130", "MATH 15100"],
      "Y2-Winter": ["LATN 20200", "ASTR 12710", "BIOS 12117", "MATH 15200"],
      "Y2-Spring": ["LATN 20300", "ARTV 10100", "HIST 13001", "CLCV 23024"],
      "Y3-Autumn": ["CLCV 20100", "CLCV 20407", "CLCV 20700"],
      "Y3-Winter": ["CLCV 21700", "CLCV 24622", "HIST 13002"],
      "Y3-Spring": ["PLSC 28801", "HIST 15006"],
      "Y4-Autumn": ["CLCV 29500", "ELECTIVE 1", "HIST 14601", "PLSC 28701"],
      "Y4-Winter": ["ENGL 10404", "ENGL 10144", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15007", "PLSC 28901"]
    },
    "Climate and Sustainable Growth": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "CCSG 19000"],
      "Y2-Autumn": ["CCSG 20300", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["CCSG 20100", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["CCSG 20900", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["CCSG 20500", "CCSG 21100", "GEOS 22060"],
      "Y3-Winter": ["CCSG 20700", "ENSC 23600", "HIST 13002", "PBPL 20000"],
      "Y3-Spring": ["CCSG 25000", "GEOS 24800"],
      "Y4-Autumn": ["CCSG 29001", "ECON 10000", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["CCSG 29002", "PBPL 22100", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "PBPL 22200"]
    },
    "Comparative Literature": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "LATN 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "LATN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "LATN 10300"],
      "Y2-Autumn": ["LATN 20100", "CMLT 20109", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["LATN 20200", "CMLT 20030", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["LATN 20300", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["ENGL 10432", "MATH 15100"],
      "Y3-Winter": ["HIST 13002", "MATH 15200", "ENGL 10144", "ENGL 10404"],
      "Y3-Spring": ["ENGL 10709", "CLCV 23024", "ENGL 10434"],
      "Y4-Autumn": ["CLCV 20100", "CLCV 20407", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["CLCV 21700", "ENGL 10800", "HIST 12706", "ENGL 10455"],
      "Y4-Spring": ["ELECTIVE 2", "ENGL 11004"]
    },
    "Computational and Applied Mathematics": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CMSC 14100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CMSC 14200"],
      "Y1-Spring": ["HUMA 11200", "ARTV 10100", "MATH 19620", "MATH 15300"],
      "Y2-Autumn": ["SOSC 12400", "STAT 24300", "CMSC 27100", "MATH 16300"],
      "Y2-Winter": ["SOSC 12500", "CMSC 27200", "MATH 20250"],
      "Y2-Spring": ["SOSC 12600", "HIST 13001", "MATH 20300"],
      "Y3-Autumn": ["MATH 18400", "MATH 20400"],
      "Y3-Winter": ["STAT 28000", "HIST 13002", "STAT 24400", "MATH 27300"],
      "Y3-Spring": ["MATH 23500", "STAT 25100", "CAAM 21460", "CAAM 21470"],
      "Y4-Autumn": ["ASTR 12700", "BIOS 10130", "MATH 20500", "MATH 21100"],
      "Y4-Winter": ["ASTR 12710", "BIOS 12117", "MATH 21200", "CAAM 21450", "CAAM 28200"],
      "Y4-Spring": ["ELECTIVE 1", "ELECTIVE 2", "STAT 24500"]
    },
    "Creative Writing": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["CRWR 10206", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["CRWR 10306", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["CRWR 10406", "HIST 13001", "ENGL 10434"],
      "Y3-Autumn": ["ENGL 10432", "ENGL 16600"],
      "Y3-Winter": ["ENGL 10455", "HIST 13002", "ENGL 10144", "ENGL 10404"],
      "Y3-Spring": ["ENGL 10800", "ENGL 11004", "ENGL 10709"],
      "Y4-Autumn": ["ENGL 12143", "ELECTIVE 1", "ENGL 11200", "HIST 14601"],
      "Y4-Winter": ["PLSC 28701", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28801", "ENGL 16500"]
    },
    "East Asian Languages and Civilizations": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "CHIN 10100", "ARTH 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "CHIN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "CHIN 10300"],
      "Y2-Autumn": ["CHIN 20100", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["CHIN 20200", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["CHIN 20300", "ARTV 10100", "HIST 13001", "EALC 28901"],
      "Y3-Autumn": ["EALC 28010", "ARTH 20603"],
      "Y3-Winter": ["EALC 28015", "ARTH 16100", "HIST 13002"],
      "Y3-Spring": ["HIST 15604", "HIST 15006", "PLSC 28801", "ARTH 24602"],
      "Y4-Autumn": ["ANTH 26330", "HIST 14601", "ELECTIVE 1"],
      "Y4-Winter": ["ANTH 21270", "HIST 12706", "PLSC 28701"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15007", "PLSC 28901"]
    },
    "Environmental Science": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100", "ENSC 24400"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200", "GEOS 27300"],
      "Y1-Spring": ["HUMA 11200", "ARTV 10100", "MATH 15300", "BIOS 20151"],
      "Y2-Autumn": ["SOSC 12400", "GEOS 13100", "ASTR 12700"],
      "Y2-Winter": ["SOSC 12500", "GEOS 13200", "ENSC 23600", "ASTR 12710"],
      "Y2-Spring": ["SOSC 12600", "GEOS 13300", "ENSC 24800", "HIST 13001"],
      "Y3-Autumn": ["ENSC 21100", "ENSC 24500", "STAT 23400"],
      "Y3-Winter": ["ENSC 24000", "ENSC 24550", "HIST 13002"],
      "Y3-Spring": ["ENSC 25000", "STAT 24300", "BIOS 20186"],
      "Y4-Autumn": ["GEOS 22060", "BIOS 10130", "BIOS 20187"],
      "Y4-Winter": ["GEOS 23205", "BIOS 12117", "ELECTIVE 1", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "BIOS 20198"]
    },
    "Fundamentals: Issues and Texts": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "LATN 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "LATN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "LATN 10300"],
      "Y2-Autumn": ["LATN 20100", "FNDL 21800", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["LATN 20200", "FNDL 23419", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["LATN 20300", "FNDL 20211", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["FNDL 29900", "CLCV 20100", "MATH 15100"],
      "Y3-Winter": ["FNDL 29901", "CLCV 21700", "MATH 15200", "ENGL 10404"],
      "Y3-Spring": ["CLCV 23024"],
      "Y4-Autumn": ["ENGL 10432", "HIST 13002", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["FNDL 29902", "HIST 12706", "ENGL 10144", "ENGL 10455"],
      "Y4-Spring": ["ELECTIVE 2", "ENGL 10434"]
    },
    "Gender and Sexuality Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "GNSE 13000"],
      "Y2-Autumn": ["GNSE 19501", "GNSE 15002", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["GNSE 15003", "GNSE 12149", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["GNSE 15014", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["GNSE 12148", "GNSE 12159", "ENGL 10432"],
      "Y3-Winter": ["GNSE 20112", "HIST 13002", "ENGL 10144", "HIST 12706"],
      "Y3-Spring": ["GNSE 12151", "GNSE 20136", "PLSC 28801"],
      "Y4-Autumn": ["GNSE 29501", "ELECTIVE 1", "PLSC 28701", "HIST 14601"],
      "Y4-Winter": ["ENGL 10404"],
      "Y4-Spring": ["ELECTIVE 2", "PLSC 28901", "HIST 15006"]
    },
    "Geophysical Sciences": {
      "Y1-Autumn": ["HUMA 11000", "MATH 15100", "CHEM 11100", "GEOS 13100"],
      "Y1-Winter": ["HUMA 11100", "MATH 15200", "CHEM 11200", "GEOS 13200"],
      "Y1-Spring": ["HUMA 11200", "CHEM 11300", "GEOS 13300", "ARTV 10100"],
      "Y2-Autumn": ["SOSC 12400", "PHYS 13100", "MATH 18300", "GEOS 21000"],
      "Y2-Winter": ["SOSC 12500", "PHYS 13200", "GEOS 21400", "CCSG 20100"],
      "Y2-Spring": ["SOSC 12600", "HIST 13001", "MATH 15300"],
      "Y3-Autumn": ["GEOS 22060", "GEOS 24220", "MATH 19620", "STAT 23400"],
      "Y3-Winter": ["GEOS 23205", "HIST 13002", "MATH 18400"],
      "Y3-Spring": ["GEOS 24300", "GEOS 28600", "GEOS 24800"],
      "Y4-Autumn": ["ASTR 12700", "BIOS 10130", "MATH 18500"],
      "Y4-Winter": ["ASTR 12710", "BIOS 12117", "ELECTIVE 1", "GEOS 24230"],
      "Y4-Spring": ["ELECTIVE 2", "PHYS 13300"]
    },
    "Germanic Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "GRMN 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "GRMN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "GRMN 10300"],
      "Y2-Autumn": ["GRMN 20100", "ASTR 12700", "BIOS 10130", "MATH 15100"],
      "Y2-Winter": ["GRMN 20201", "ASTR 12710", "BIOS 12117", "MATH 15200"],
      "Y2-Spring": ["GRMN 20301", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["GRMN 22124", "GRMN 23333", "FNDL 21800"],
      "Y3-Winter": ["GRMN 22312", "FNDL 23419", "HIST 13002"],
      "Y3-Spring": ["FNDL 20211", "HIST 15006", "PLSC 28801"],
      "Y4-Autumn": ["HIST 14601", "PLSC 28701", "ELECTIVE 1"],
      "Y4-Winter": ["ENGL 10404", "HIST 12706", "ENGL 10144"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15007", "PLSC 28901"]
    },
    "Global Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "CHIN 10100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "CHIN 10200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "CHIN 10300"],
      "Y2-Autumn": ["CHIN 20100", "GLST 23101", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["CHIN 20200", "ANTH 10100", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["CHIN 20300", "ANTH 21420", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["GLST 25830", "ECON 10000", "MATH 15100"],
      "Y3-Winter": ["GLST 23102", "GLST 25850", "MATH 15200"],
      "Y3-Spring": ["GLST 23111", "GLST 26382"],
      "Y4-Autumn": ["GLST 29800", "ELECTIVE 1", "HIST 13002", "HIST 14601"],
      "Y4-Winter": ["GLST 29801", "PBPL 22100", "HIST 12706", "PBPL 20000"],
      "Y4-Spring": ["ELECTIVE 2", "PBPL 22200"]
    },
    "Human Rights": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["HMRT 10100", "HMRT 24823", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["HMRT 10200", "HMRT 20200", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["HMRT 23921", "HMRT 26200", "HIST 13001"],
      "Y3-Autumn": ["HMRT 21002", "HMRT 24638", "PLSC 28701"],
      "Y3-Winter": ["HMRT 21201", "HMRT 25003", "HIST 13002"],
      "Y3-Spring": ["HMRT 21400", "HMRT 25004", "PLSC 28801"],
      "Y4-Autumn": ["HMRT 23472", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["PLSC 28901", "ECON 10000", "HIST 12706", "PBPL 20000"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15006"]
    },
    "Inquiry and Research in the Humanities": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "MATH 15100"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "MATH 15200"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "ARTV 10100"],
      "Y2-Autumn": ["ENGL 13000", "ASTR 12700", "BIOS 10130"],
      "Y2-Winter": ["IRHU 20100", "ASTR 12710", "BIOS 12117"],
      "Y2-Spring": ["IRHU 27002", "HIST 13001"],
      "Y3-Autumn": ["IRHU 20009", "GRMN 23333", "ENGL 10432"],
      "Y3-Winter": ["GRMN 22312", "HIST 13002", "ENGL 10144", "ENGL 10404"],
      "Y3-Spring": ["IRHU 27003", "ENGL 10434", "ENGL 10709"],
      "Y4-Autumn": ["HIST 14601", "ELECTIVE 1"],
      "Y4-Winter": ["ARTH 10100", "HIST 12706", "ENGL 10455"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15007", "ARTH 29600", "HIST 15006"]
    },
    "Jewish Studies": {
      "Y1-Autumn": ["HUMA 11000", "SOSC 12400", "HEBR 10501"],
      "Y1-Winter": ["HUMA 11100", "SOSC 12500", "HEBR 10502"],
      "Y1-Spring": ["HUMA 11200", "SOSC 12600", "HEBR 10503"],
      "Y2-Autumn": ["JWSC 12000", "ASTR 12700", "BIOS 10130", "MATH 15100"],
      "Y2-Winter": ["JWSC 12001", "ASTR 12710", "BIOS 12117", "MATH 15200"],
      "Y2-Spring": ["JWSC 12004", "ARTV 10100", "HIST 13001"],
      "Y3-Autumn": ["JWSC 20122", "JWSC 20201", "JWSC 23413"],
      "Y3-Winter": ["JWSC 20923", "JWSC 20924", "HIST 13002"],
      "Y3-Spring": ["JWSC 12007", "JWSC 12012", "JWSC 20203"],
      "Y4-Autumn": ["PLSC 28701", "ELECTIVE 1", "HIST 14601"],
      "Y4-Winter": ["JWSC 23480", "HIST 12706"],
      "Y4-Spring": ["ELECTIVE 2", "HIST 15006", "PLSC 28901", "PLSC 28801"]
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
      { name: "Athens: Greek Antiquity and Its Legacy", abroad: "Athens", quarter: "Spring", courses: [
        { id: "Athens Civ I", title: "Greek Antiquity and Its Legacy I", offered: ["Spring"] },
        { id: "Athens Civ II", title: "Greek Antiquity and Its Legacy II", offered: ["Spring"] },
        { id: "Athens Civ III", title: "Greek Antiquity and Its Legacy III", offered: ["Spring"] },
        { id: "Athens Language", title: "Modern Greek", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Barcelona: Civilization in the Western Mediterranean", abroad: "Barcelona", quarter: "Autumn", courses: [
        { id: "Barcelona Civ I", title: "Western Mediterranean Civilization I", offered: ["Autumn"] },
        { id: "Barcelona Civ II", title: "Western Mediterranean Civilization II", offered: ["Autumn"] },
        { id: "Barcelona Civ III", title: "Western Mediterranean Civilization III", offered: ["Autumn"] },
        { id: "Barcelona Language", title: "Spanish or Catalan", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Barcelona: Western Mediterranean (in Spanish)", abroad: "Barcelona", quarter: "Spring", courses: [
        { id: "Barcelona Civ I (Western)", title: "Western Mediterranean Civ I (Spanish)", offered: ["Spring"] },
        { id: "Barcelona Civ II (Western)", title: "Western Mediterranean Civ II (Spanish)", offered: ["Spring"] },
        { id: "Barcelona Civ III (Western)", title: "Western Mediterranean Civ III (Spanish)", offered: ["Spring"] },
        { id: "Barcelona Language (Western)", title: "Spanish and Catalan Culture", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Beijing: East Asia, Then and Now", abroad: "Beijing", quarter: "Autumn", courses: [
        { id: "Beijing Civ I", title: "East Asia, Then and Now I", offered: ["Autumn"] },
        { id: "Beijing Civ II", title: "East Asia, Then and Now II", offered: ["Autumn"] },
        { id: "Beijing Civ III", title: "East Asia, Then and Now III", offered: ["Autumn"] },
        { id: "Beijing Language", title: "Chinese in Beijing", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Cairo: Middle Eastern Civilizations", abroad: "Cairo", quarter: "Winter", courses: [
        { id: "Cairo Civ I", title: "Middle Eastern Civilizations I", offered: ["Winter"] },
        { id: "Cairo Civ II", title: "Middle Eastern Civilizations II", offered: ["Winter"] },
        { id: "Cairo Civ III", title: "Middle Eastern Civilizations III", offered: ["Winter"] },
        { id: "Cairo Language", title: "Arabic", offered: ["Winter"], category: "LANG" }
      ] },
      { name: "Córdoba: Crossroads of Mediterranean Civilizations", abroad: "Córdoba", quarter: "Spring", courses: [
        { id: "SOSC 19082", title: "Mediterranean Crossroads I", offered: ["Spring"] },
        { id: "SOSC 19083", title: "Mediterranean Crossroads II", offered: ["Spring"] },
        { id: "SOSC 19084", title: "Mediterranean Crossroads III", offered: ["Spring"] },
        { id: "Córdoba Language", title: "Spanish in Córdoba", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Dakar: African Civilizations", abroad: "Dakar", quarter: "Winter", courses: [
        { id: "Dakar Civ I", title: "African Civilizations I", offered: ["Winter"] },
        { id: "Dakar Civ II", title: "African Civilizations II", offered: ["Winter"] },
        { id: "Dakar Civ III", title: "African Civilizations III", offered: ["Winter"] },
        { id: "Dakar Language", title: "French or Wolof", offered: ["Winter"], category: "LANG" }
      ] },
      { name: "Dakar: Colonizations", abroad: "Dakar", quarter: "Spring", courses: [
        { id: "Dakar Civ I (Colonizations)", title: "Colonizations I", offered: ["Spring"] },
        { id: "Dakar Civ II (Colonizations)", title: "Colonizations II", offered: ["Spring"] },
        { id: "Dakar Civ III (Colonizations)", title: "Colonizations III", offered: ["Spring"] },
        { id: "Dakar Language (Colonizations)", title: "French or Wolof", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Istanbul: Middle Eastern Civilizations", abroad: "Istanbul", quarter: "Spring", courses: [
        { id: "Istanbul Civ I", title: "Middle Eastern Civilizations I", offered: ["Spring"] },
        { id: "Istanbul Civ II", title: "Middle Eastern Civilizations II", offered: ["Spring"] },
        { id: "Istanbul Civ III", title: "Middle Eastern Civilizations III", offered: ["Spring"] },
        { id: "Istanbul Language", title: "Turkish", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Jerusalem in Middle Eastern Civilizations (in Rome for 2027)", abroad: "Jerusalem", quarter: "Spring", courses: [
        { id: "Jerusalem Civ I", title: "Jerusalem Civilization I", offered: ["Spring"] },
        { id: "Jerusalem Civ II", title: "Jerusalem Civilization II", offered: ["Spring"] },
        { id: "Jerusalem Civ III", title: "Jerusalem Civilization III", offered: ["Spring"] },
        { id: "Jerusalem Language", title: "Language course", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Marrakesh: Middle Eastern Civilizations in Morocco", abroad: "Marrakesh", quarter: "Winter", courses: [
        { id: "Marrakesh Civ I", title: "Middle Eastern Civilizations I", offered: ["Winter"] },
        { id: "Marrakesh Civ II", title: "Middle Eastern Civilizations II", offered: ["Winter"] },
        { id: "Marrakesh Civ III", title: "Middle Eastern Civilizations III", offered: ["Winter"] },
        { id: "Marrakesh Language", title: "Arabic", offered: ["Winter"], category: "LANG" }
      ] },
      { name: "Oaxaca: Mexico in Latin American Civilizations", abroad: "Oaxaca", quarter: "Winter", courses: [
        { id: "Oaxaca Civ I", title: "Latin American Civilization I", offered: ["Winter"] },
        { id: "Oaxaca Civ II", title: "Latin American Civilization II", offered: ["Winter"] },
        { id: "Oaxaca Civ III", title: "Latin American Civilization III", offered: ["Winter"] },
        { id: "Oaxaca Language", title: "Spanish", offered: ["Winter"], category: "LANG" }
      ] },
      { name: "Paris: European Civilization", abroad: "Paris", quarter: "Autumn", courses: [
        { id: "Paris Civ I", title: "European Civilization in Paris I", offered: ["Autumn"] },
        { id: "Paris Civ II", title: "European Civilization in Paris II", offered: ["Autumn"] },
        { id: "Paris Civ III", title: "European Civilization in Paris III", offered: ["Autumn"] },
        { id: "Paris Language", title: "French", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Paris: Colonizations", abroad: "Paris", quarter: "Winter", courses: [
        { id: "Paris Civ I (Colonizations)", title: "Colonizations I", offered: ["Winter"] },
        { id: "Paris Civ II (Colonizations)", title: "Colonizations II", offered: ["Winter"] },
        { id: "Paris Civ III (Colonizations)", title: "Colonizations III", offered: ["Winter"] },
        { id: "Paris Language (Colonizations)", title: "French", offered: ["Winter"], category: "LANG" }
      ] },
      { name: "Paris: European Civilization (in French)", abroad: "Paris", quarter: "Autumn", courses: [
        { id: "Paris Civ I (European)", title: "Civilisation europeenne I", offered: ["Autumn"] },
        { id: "Paris Civ II (European)", title: "Civilisation europeenne II", offered: ["Autumn"] },
        { id: "Paris Civ III (European)", title: "Civilisation europeenne III", offered: ["Autumn"] },
        { id: "Paris Language (European)", title: "Advanced French", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Paris: Gender and Sexuality in World Civilizations", abroad: "Paris", quarter: "Autumn", courses: [
        { id: "Paris Civ I (Gender)", title: "Gender and Sexuality Civilization I", offered: ["Autumn"] },
        { id: "Paris Civ II (Gender)", title: "Gender and Sexuality Civilization II", offered: ["Autumn"] },
        { id: "GNSE 15013", title: "Gender Civ III: Giovanni's Room", offered: ["Autumn"] },
        { id: "Paris Language (Gender)", title: "French", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Paris: Migration, Decolonization, and Diaspora", abroad: "Paris", quarter: "Autumn", courses: [
        { id: "SOSC 19076", title: "Migration and Diaspora Civ I", offered: ["Autumn"] },
        { id: "SOSC 19077", title: "Migration and Diaspora Civ II", offered: ["Autumn"] },
        { id: "SOSC 19078", title: "Migration and Diaspora Civ III", offered: ["Autumn"] },
        { id: "Paris Language (Migration,)", title: "French", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Paris: Music in Western Civilization", abroad: "Paris", quarter: "Autumn", courses: [
        { id: "MUSI 12101", title: "Music and Euro-American Cultures I", offered: ["Autumn"] },
        { id: "MUSI 12201", title: "Music and Euro-American Cultures II", offered: ["Autumn"] },
        { id: "MUSI 12300", title: "Going to the Opera in Paris", offered: ["Autumn"] },
        { id: "Paris Language (Music)", title: "French", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Paris: Russia and Eurasia", abroad: "Paris", quarter: "Spring", courses: [
        { id: "Paris Civ I (Russia)", title: "Russia and Eurasia Civilization I", offered: ["Spring"] },
        { id: "Paris Civ II (Russia)", title: "Russia and Eurasia Civilization II", offered: ["Spring"] },
        { id: "Paris Civ III (Russia)", title: "Russia and Eurasia Civilization III", offered: ["Spring"] },
        { id: "Paris Language (Russia)", title: "French", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Pune: South Asian Civilization in India", abroad: "Pune", quarter: "Autumn", courses: [
        { id: "Pune Civ I", title: "South Asian Civilizations I", offered: ["Autumn"] },
        { id: "Pune Civ II", title: "South Asian Civilizations II", offered: ["Autumn"] },
        { id: "Pune Civ III", title: "South Asian Civilizations III", offered: ["Autumn"] },
        { id: "Pune Language", title: "South Asian language", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Rome: Antiquity to the Baroque", abroad: "Rome", quarter: "Autumn", courses: [
        { id: "Rome Civ I", title: "Rome: Antiquity to the Baroque I", offered: ["Autumn"] },
        { id: "Rome Civ II", title: "Rome: Antiquity to the Baroque II", offered: ["Autumn"] },
        { id: "Rome Civ III", title: "Rome: Antiquity to the Baroque III", offered: ["Autumn"] },
        { id: "Rome Language", title: "Italian in Rome", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Vienna in Western Civilization", abroad: "Vienna", quarter: "Autumn", courses: [
        { id: "Vienna Civ I", title: "Vienna in Western Civilization I", offered: ["Autumn"] },
        { id: "Vienna Civ II", title: "Vienna in Western Civilization II", offered: ["Autumn"] },
        { id: "Vienna Civ III", title: "Vienna in Western Civilization III", offered: ["Autumn"] },
        { id: "GRMN 15001", title: "German in Vienna", offered: ["Autumn"], category: "LANG" }
      ] },
      { name: "Vienna: Jewish Civilization", abroad: "Vienna", quarter: "Spring", courses: [
        { id: "SOSC 19073", title: "Jewish Civilization in Vienna I", offered: ["Spring"] },
        { id: "SOSC 19074", title: "Jewish Civilization in Vienna II", offered: ["Spring"] },
        { id: "SOSC 19075", title: "Jewish Civilization in Vienna III", offered: ["Spring"] },
        { id: "Vienna Language", title: "German", offered: ["Spring"], category: "LANG" }
      ] },
      { name: "Vienna: Music in Western Civilization", abroad: "Vienna", quarter: "Spring", courses: [
        { id: "MUSI 12100", title: "Music and Euro-American Cultures I", offered: ["Spring"] },
        { id: "MUSI 12200", title: "Music and Euro-American Cultures II", offered: ["Spring"] },
        { id: "Vienna Civ III (Music)", title: "Vienna around 1900", offered: ["Spring"] },
        { id: "Vienna Language (Music)", title: "German", offered: ["Spring"], category: "LANG" }
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
      ] }
    ]
  }
};
