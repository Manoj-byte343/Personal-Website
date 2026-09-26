// This is the chatbot's knowledge about Manoj. Keep it in sync by hand
// whenever you update data/content.js in the main site — this file is
// separate because the Worker runs independently of the Next.js app.

export const KNOWLEDGE = `
ABOUT MANOJ LAMICHHANE
Water Resources Scientist, Ph.D. Based in Denver, CO.
Credentials: Engineer-in-Training (EIT), passed the PE Civil: Water Resources & Environmental exam.
Works at the intersection of hydraulic modeling and data science. PhD research applied machine
learning and deep learning to satellite remote sensing and climate data on a USDA-funded project,
using Google Earth Engine and HPC clusters for large-scale data processing.

EDUCATION
- Ph.D. in Water Resources Engineering, South Dakota State University, Brookings, SD — GPA 4.00/4.00, Aug 2026
- M.S. in Water Resources Engineering, Tribhuvan University, Nepal — GPA 3.66/4.00, Sep 2021
- B.S. in Engineering, Tribhuvan University, Nepal — GPA 3.77/4.00, Sep 2018

EXPERIENCE
- Water Resources Scientist, Knight Piésold (May 2026 – Present): performs dam breach analyses to
  estimate breach outflow hydrographs and downstream flood wave propagation, inundation extent,
  flow depths, velocities, and arrival times. Builds and runs 2D/3D hydraulic models in FLO-2D,
  RiverFlow2D, and FLOW-3D. Automates model pre- and post-processing with Python, and uses QGIS
  for terrain/DEM processing and hazard mapping.
- Graduate Research Assistant, South Dakota State University (Aug 2023 – Aug 2026): developed
  data-driven models to estimate soil moisture, evapotranspiration, and streamflow using
  multi-source satellite data, achieving a 27% reduction in error for deep-layer soil moisture
  prediction. Automated data pipelines in Python and Google Earth Engine. Supported proposal
  development for NASA, USDA, and NSF.
- Summer Research Intern, HPC Laboratory, Mississippi State University (Jun–Aug 2025): processed
  large climate, precipitation, and terrain datasets on HPC clusters for large-scale environmental
  analysis; built an interactive ArcGIS Pro decision-support portal for environmental risk and
  land-surface conditions.
- Water Resources Engineer, Sentinel Engineering Consultancy, Kathmandu, Nepal (Sep 2018 – Jun
  2023): processed and analyzed large-scale terrain, survey, and environmental datasets across 30+
  infrastructure projects; applied GIS-based terrain analysis for infrastructure planning and
  disaster-mitigation risk assessments.
- Part-time Lecturer, Tribhuvan University, Nepal (Apr 2020 – Jun 2023): taught Hydraulics,
  Hydrology, Fluid Mechanics, and Groundwater Engineering; mentored students on HEC-RAS and
  HEC-HMS.

SKILLS
- Water Resources & Hydraulic Modeling: dam breach & flood inundation analysis, FLO-2D,
  RiverFlow2D, FLOW-3D, HEC-RAS, HEC-HMS, SWAT/SWAT+, QGIS, ArcGIS Pro/Online, Google Earth
  Engine, ENVI, Pix4D
- Data Science & Machine Learning: Python (NumPy, Pandas, Scikit-learn, TensorFlow, Keras), R,
  MATLAB, FORTRAN, Random Forest, SVM, XGBoost, ANN, LSTM, HPC (Linux clusters, SLURM), MLOps,
  Power BI, Excel (VBA)

PUBLICATIONS (14 peer-reviewed Q1 journal papers plus additional co-authored work; 21 oral/poster
conference presentations)
Selected papers:
- Explainable machine learning reveals water-related drivers of sub-field dryland wheat yield
  variability — European Journal of Agronomy (2026), doi.org/10.1016/j.eja.2026.128296
- Daily Actual Evapotranspiration Estimation in Dryland Cropping Systems Using Parsimonious
  Machine Learning Frameworks — Measurement: Digitalization (2026), doi.org/10.1016/j.meadig.2026.100044
- Assessment and forecasting of drought in Nepal using long short-term memory model — Theoretical
  and Applied Climatology (2026), doi.org/10.1007/s00704-026-06298-5
- Multi-Layer Root Zone Soil Moisture Estimation Using Field and Remote Sensing Data Fusion with
  Machine Learning in Semi-Arid Croplands — Vadose Zone Journal (2025), doi.org/10.1002/vzj2.70047
- Surface Soil Moisture Prediction Using Multimodal Remote Sensing Data Fusion and Machine
  Learning Algorithms in Semi-Arid Agricultural Region — Science of Remote Sensing (2025),
  doi.org/10.1016/j.srs.2025.100255
- Soil Moisture Prediction Using Remote Sensing and Machine Learning Algorithms: A Review on
  Progress, Challenges, and Opportunities — Remote Sensing (2025), doi.org/10.3390/rs17142397
- Several additional co-authored papers (2021–2025) on hydropower potential modeling, drought
  assessment, reference evapotranspiration, streamflow and baseflow under climate change (SWAT,
  CMIP6), rice yield prediction with remote sensing, and irrigation water demand in Nepali river
  basins. Full list with DOIs is on Google Scholar.

AWARDS & HONORS
- Outstanding Oral Presentation, 2025 ASABE North Central Intersectional Conference, MN (2026)
- ABE Graduate Scholarship Winner, South Dakota State University (2025)
- Outstanding Oral Presentation, 2025 ASABE North Central Intersectional Conference, SD (2025)
- Third Place, 3-Minute Thesis Competition, Dept of ABE, SDSU (2025)
- Best Presentation Award, AGU 2024, AGU Remote Sensing Technical Committee (2024)
- Travel Award for a Conference, South Dakota State University (2024)
- Outstanding Oral Presentation, ASABE North Central Regional Section Meeting, SD (2024)

SERVICE & MEMBERSHIPS
- Peer Reviewer, Springer Nature & Elsevier (2024–Present): 20+ manuscripts reviewed
- Trainer, NSF I-GUIDE 2024 Workshop, Boulder, CO: GeoAI applications for field-scale
  evapotranspiration
- Student Panelist, 2025 Great Plains Water Conference
- Member, American Geophysical Union (AGU), 2024–Present
- Committee Member, American Society of Nepalese Engineers, 2024–Present

CONTACT & LINKS
- Email: Manoj.Lamichhane@jacks.sdstate.edu
- LinkedIn: linkedin.com/in/manoj-lamichhane-ph-d-58455028b
- Google Scholar: scholar.google.com/citations?user=1a5hblcAAAAJ
- ORCID: orcid.org/0009-0009-5581-6692
- GitHub: github.com/manojlamichhane-ml
`.trim();
