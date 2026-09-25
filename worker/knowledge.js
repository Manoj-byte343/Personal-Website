// This is the chatbot's knowledge about Manoj. Keep it in sync by hand
// whenever you update data/content.js in the main site — this file is
// separate because the Worker runs independently of the Next.js app.

export const KNOWLEDGE = `
ABOUT MANOJ LAMICHHANE
Water Resources Engineer, Ph.D. Based in Colorado, USA.
Credentials: Engineer-in-Training (EIT), passed the PE Civil: Water Resources & Environmental exam.
Works at the intersection of machine learning, climate modeling, and remote sensing. Spent his
PhD years applying machine learning and advanced remote sensing to complex water resources
challenges. Especially interested in building and deploying ML models and developing scalable
workflows through MLOps.

EDUCATION
- Ph.D. in Water Resources Engineering, South Dakota State University, Brookings, SD — GPA 4.00/4.00, completed Mar 2026
- M.S. in Water Resources Engineering, Tribhuvan University, Nepal — GPA 3.66/4.00, Sep 2021
- B.S. in Agricultural Engineering, Tribhuvan University, Nepal — GPA 3.77/4.00, Sep 2018

EXPERIENCE
- Graduate Research Assistant, South Dakota State University (Aug 2023 – Present): applied
  distributed and semi-distributed hydrological models for water quantity, water quality, soil
  moisture, and groundwater recharge, achieving a 27% reduction in error for deep-layer soil
  moisture prediction. Built flood inundation maps with HEC-RAS 1D/2D and culvert hydraulic
  design with HY-8. Supported proposal development for NASA, USDA, and NSF.
- Summer Research Intern, HPC Laboratory, Mississippi State University (Jun–Aug 2025): processed
  large climate, precipitation, and terrain datasets on HPC clusters for watershed-scale
  hydrologic analysis; built an interactive ArcGIS Pro decision-support portal for water
  availability, flood risk, and land-surface conditions.
- Water Resources Engineer, Sentinel Engineering Consultancy, Kathmandu, Nepal (Sep 2018 – Jun
  2023): hydrologic and hydraulic analyses for 30+ motorable bridges (design floods, HFL, scour
  depths). Converted survey data into terrain surfaces and cross-sections in AutoCAD Civil 3D for
  1D/2D HEC-RAS modeling. Applied empirical, conceptual, and semi-distributed models to estimate
  streamflow and sediment yield across catchments of 500–45,000 km².
- Part-time Lecturer, Tribhuvan University, Nepal (Apr 2020 – Jun 2023): taught Hydraulics,
  Hydrology, Fluid Mechanics, and Groundwater Engineering; mentored students on HEC-RAS and
  HEC-HMS.

SKILLS
- Hydrologic & Hydraulic Modeling: HEC-RAS, HEC-HMS, HY-8, SWAT/SWAT+, WEAP, MODFLOW, HYDRUS, SWMM
- Data Science & Machine Learning: Python, R, MATLAB, FORTRAN, Scikit-learn, TensorFlow, Keras
- Geospatial & Remote Sensing: ArcGIS Pro, ArcGIS Online, QGIS, ENVI, Google Earth Engine, Pix4D
- High-Performance Computing: SLURM, Linux clusters, job scripting, parallel processing
- Design & Engineering: AutoCAD Civil 3D, Revit, Excel (VBA), Power BI

PHD DISSERTATION PAPERS (all ML-based, code being published on GitHub at
github.com/manojlamichhane-ml)
1. Daily ETa (actual evapotranspiration) estimation using machine learning — published in
   Measurement: Digitalization (2026), DOI 10.1016/j.meadig.2026.100044. Repo: dryland-eta-ml.
2. Multi-layer root zone soil moisture modeling — published in Vadose Zone Journal (2025), DOI
   10.1002/vzj2.70047. Repo: multilayer-soil-moisture-ml.
3. Explainable ML for wheat yield prediction — published in European Journal of Agronomy (2026),
   DOI 10.1016/j.eja.2026.128296. Repo: dryland-wheat-yield-xai.
4. LSTM-based drought (SPEI) forecasting in Nepal — published in Theoretical and Applied
   Climatology (2026), DOI 10.1007/s00704-026-06298-5. Repo: drought-forecasting-LSTM.

OTHER PUBLICATIONS
- Irrigation demand under climate change in the Mahakali command area, co-authored with Dr.
  Yogendra Mishra — Journal of Hydrology: Regional Studies.
- Dam breach hydraulic model parameter sensitivity: a systematic review (PRISMA-style) — in
  preparation, targeting a Q1 journal.
- 12 peer-reviewed papers total published in Q1 journals; 17 oral/poster presentations at
  national and international conferences.

AWARDS & HONORS
- ABE Graduate Scholarship Winner, South Dakota State University (2025)
- Outstanding Oral Presentation, ASABE North Central Intersectional Conference (2025)
- Third Place, 3-Minute Thesis Competition, Dept of ABE, SDSU (2025)
- Best Presentation Award, AGU 2024, AGU Remote Sensing Technical Committee (2024)
- Travel Award for a Conference, South Dakota State University (2024)
- Outstanding Oral Presentation, ASABE North Central Regional Section Meeting, SD (2024)
- Hutta Ram Baidya Scholarship, Nepalese Society of Agricultural Engineers, Kathmandu (2018)

SERVICE & MEMBERSHIPS
- Peer Reviewer, Springer Nature & Elsevier (2024–Present): 20+ manuscripts reviewed
- Trainer, NSF I-GUIDE 2024 Workshop: GeoAI applications for field-scale evapotranspiration
- Student Panelist, 2025 Great Plains Water Conference
- Member, American Geophysical Union (AGU), 2024–Present
- Member, American Society of Agricultural and Biological Engineers, 2023–Present
- Committee Member, American Society of Nepalese Engineers, 2024–Present

CONTACT & LINKS
- Email: Manoj.Lamichhane@jacks.sdstate.edu
- LinkedIn: linkedin.com/in/manoj-lamichhane-ph-d-58455028b
- Google Scholar: scholar.google.com/citations?user=1a5hblcAAAAJ
- ORCID: orcid.org/0009-0009-5581-6692
- GitHub: github.com/manojlamichhane-ml
`.trim();
