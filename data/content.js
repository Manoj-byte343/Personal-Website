// ---------------------------------------------------------------------------
// Fields marked [FILL IN] are placeholders — replace with your real info.
// Everything else here is drawn from your resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Manoj Lamichhane",
  initials: "ML",
  credentials: "EIT, PE (Civil: Water Resources & Environmental)",
  title: "Water Resources Engineer, Ph.D.",
  location: "Colorado, USA",
  badge: "PH.D. · EIT · PE (WATER RESOURCES)",
  bioGreeting: "Hi, I'm Manoj!",
  bio:
    "I'm a Water Resources Engineer working at the intersection of machine learning, climate modeling, and remote sensing. I spent my PhD years applying machine learning and advanced remote sensing to understand and address complex water resources challenges. I'm especially interested in building and deploying ML models and developing scalable workflows through MLOps.",
  email: "Manoj.Lamichhane@jacks.sdstate.edu",
  phone: "(607) 663-0567", // remove this line from Hero/Contact if you'd rather not publish it
  scholarUrl: "https://scholar.google.com/citations?user=1a5hblcAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/manoj-lamichhane-ph-d-58455028b",
  githubUrl: "https://github.com/manojlamichhane-ml",
  orcidUrl: "https://orcid.org/0009-0009-5581-6692",
  cvUrl: "/cv.pdf", // drop your real CV PDF into /public/cv.pdf
};

export const education = [
  {
    degree: "Ph.D. in Water Resources Engineering",
    focus: "GPA 4.00/4.00",
    institution: "South Dakota State University, Brookings, SD",
    period: "Mar 2026",
  },
  {
    degree: "M.S. in Water Resources Engineering",
    focus: "GPA 3.66/4.00 (WES Evaluation)",
    institution: "Tribhuvan University, Nepal",
    period: "Sep 2021",
  },
  {
    degree: "B.S. in Agricultural Engineering",
    focus: "GPA 3.77/4.00 (WES Evaluation)",
    institution: "Tribhuvan University, Nepal",
    period: "Sep 2018",
  },
];

export const experience = [
  {
    role: "Graduate Research Assistant",
    organization: "South Dakota State University, Brookings, SD",
    period: "Aug 2023 – Present",
    description:
      "Applying distributed and semi-distributed hydrological models to estimate water quantity, water quality, soil moisture, and groundwater recharge, achieving a 27% reduction in error for deep-layer soil moisture prediction. Developing flood inundation maps with HEC-RAS 1D/2D and culvert hydraulic design with HY-8. Supporting proposal development for NASA, USDA, and NSF.",
  },
  {
    role: "Summer Research Intern, HPC Laboratory",
    organization: "Mississippi State University, Starkville, MS",
    period: "Jun 2025 – Aug 2025",
    description:
      "Processed large climate, precipitation, and terrain datasets using high-performance computing for watershed-scale hydrologic analysis. Built an interactive ArcGIS Pro decision-support portal for evaluating water availability, flood risk, and land-surface conditions.",
  },
  {
    role: "Water Resources Engineer",
    organization: "Sentinel Engineering Consultancy, Kathmandu, Nepal",
    period: "Sep 2018 – Jun 2023",
    description:
      "Performed hydrologic and hydraulic analyses for 30+ motorable bridges, estimating design floods, HFL, and scour depths. Converted survey data into terrain surfaces and cross-sections in AutoCAD Civil 3D for 1D/2D HEC-RAS modeling. Applied empirical, conceptual, and semi-distributed models to estimate streamflow and sediment yield across catchments of 500–45,000 km².",
  },
  {
    role: "Part-time Lecturer",
    organization: "Tribhuvan University, Nepal",
    period: "Apr 2020 – Jun 2023",
    description:
      "Taught Hydraulics, Hydrology, Fluid Mechanics, and Groundwater Engineering to undergraduate civil engineering students. Mentored students on applied modeling using HEC-RAS and HEC-HMS.",
  },
];

export const skills = [
  {
    category: "Hydrologic & Hydraulic Modeling",
    items: ["HEC-RAS", "HEC-HMS", "HY-8", "SWAT / SWAT+", "WEAP", "MODFLOW", "HYDRUS", "SWMM"],
  },
  {
    category: "Data Science & Machine Learning",
    items: ["Python", "R", "MATLAB", "FORTRAN", "Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    category: "Geospatial & Remote Sensing",
    items: ["ArcGIS Pro", "ArcGIS Online", "QGIS", "ENVI", "Google Earth Engine", "Pix4D"],
  },
  {
    category: "High-Performance Computing",
    items: ["SLURM", "Linux clusters", "Job scripting", "Parallel processing"],
  },
  {
    category: "Design & Engineering",
    items: ["AutoCAD Civil 3D", "Revit", "Excel (VBA)", "Power BI"],
  },
];

export const projects = [
  {
    title: "Explainable ML for Hydrological Drivers of Yield Variability",
    summary:
      "Open-source research project applying explainable machine learning to identify the hydrological drivers behind crop yield variability.",
    tags: ["Machine Learning", "Hydrology", "GitHub"],
    link: "https://github.com/manojlamichhane-ml/Explainable-ML-reveals-hydrological-drivers-of-yield-variability",
  },
  {
    title: "Flood Inundation Mapping & Culvert Hydraulic Design",
    summary:
      "1D/2D flood inundation mapping in HEC-RAS and culvert hydraulic design in HY-8, evaluating flow capacity, headwater depth, and roadway overtopping.",
    tags: ["HEC-RAS", "HY-8", "Flood Risk"],
  },
  {
    title: "Bridge Hydraulics & Scour Analysis, Nepal",
    summary:
      "Hydrologic and hydraulic analysis for 30+ motorable bridges — design floods, high flood levels, and scour depths — supporting safe bridge design across catchments from 500 to 45,000 km².",
    tags: ["Bridge Hydraulics", "HEC-RAS", "Consulting"],
  },
  {
    title: "HPC Climate & Terrain Decision-Support Portal",
    summary:
      "Interactive ArcGIS Pro portal built during a summer research internship, processing large climate, precipitation, and terrain datasets on HPC clusters to support watershed-scale decisions on water availability and flood risk.",
    tags: ["HPC", "ArcGIS Pro", "Climate Data"],
  },
];

export const publications = [
  {
    title:
      "Irrigation demand under climate change in the Mahakali command area",
    authors: "Lamichhane, M., Mishra, Y., et al.",
    venue: "Journal of Hydrology: Regional Studies",
    year: "[FILL IN year]",
    link: "#",
  },
  {
    title: "Dam breach hydraulic model parameter sensitivity: a systematic review",
    authors: "Lamichhane, M., et al.",
    venue: "In preparation — targeting a Q1 journal",
    year: "In progress",
    link: "#",
  },
];

export const publicationsNote =
  "12 peer-reviewed papers published in Q1 journals and 17 oral/poster presentations at national and international conferences — full record on Google Scholar.";

export const awards = [
  {
    title: "ABE Graduate Scholarship Winner",
    issuer: "South Dakota State University",
    year: "2025",
  },
  {
    title: "Outstanding Oral Presentation",
    issuer: "ASABE North Central Intersectional Conference",
    year: "2025",
  },
  {
    title: "Third Place, 3-Minute Thesis Competition",
    issuer: "Department of ABE, SDSU",
    year: "2025",
  },
  {
    title: "Best Presentation Award",
    issuer: "AGU 2024, AGU Remote Sensing Technical Committee",
    year: "2024",
  },
  {
    title: "Travel Award for a Conference",
    issuer: "South Dakota State University",
    year: "2024",
  },
  {
    title: "Outstanding Oral Presentation",
    issuer: "ASABE North Central Regional Section Meeting, SD",
    year: "2024",
  },
  {
    title: "Hutta Ram Baidya Scholarship",
    issuer: "Nepalese Society of Agricultural Engineers, Kathmandu",
    year: "2018",
  },
];

export const certificates = [
  { title: "Engineer-in-Training (EIT), Certified", year: "" },
  { title: "PE Civil: Water Resources & Environmental — Exam Passed", year: "" },
];

export const service = [
  {
    title: "Peer Reviewer, Springer Nature & Elsevier",
    detail: "20+ manuscripts reviewed in water resources, hydrology, and environmental modeling.",
    year: "2024 – Present",
  },
  {
    title: "Trainer, NSF I-GUIDE 2024 Workshop",
    detail: "One-week training on GeoAI applications to predict field-scale actual evapotranspiration.",
    year: "2024",
  },
  {
    title: "Student Panelist, 2025 Great Plains Water Conference",
    detail: "Discussed how state Water Resources Research Institutes prepare graduate students for industry and academia.",
    year: "2025",
  },
];

export const memberships = [
  "American Geophysical Union (AGU), 2024 – Present",
  "American Society of Agricultural and Biological Engineers, 2023 – Present",
  "Committee Member, American Society of Nepalese Engineers, 2024 – Present",
];
