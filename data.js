/* =========================================================
   EduPath India — content data
   Sample / illustrative data for demo purposes.
   ========================================================= */

const ROADMAP = {
  10: [
    [
      { id: "science", title: "Science", desc: "PCM, PCB or PCMB — the widest door", leadsTo: "pcm" },
      { id: "commerce", title: "Commerce", desc: "Numbers, business and money", leadsTo: "comm" },
      { id: "arts", title: "Arts / Humanities", desc: "People, ideas, culture, media", leadsTo: "arts" },
      { id: "diploma", title: "Diploma (Polytechnic)", desc: "3-year direct-to-industry technical path", leadsTo: "dip" },
      { id: "iti", title: "ITI", desc: "Short, trade-focused, job-ready fast", leadsTo: "iti2" },
      { id: "para", title: "Paramedical", desc: "Healthcare support careers", leadsTo: "para2" },
      { id: "skillc", title: "Skill Courses", desc: "Certifications in a specific trade/skill", leadsTo: "skillc2" }
    ],
    [
      { id: "pcm", title: "PCM", desc: "Physics, Chemistry, Maths → Engineering, Architecture, Defence" },
      { id: "comm", title: "Commerce (with/without Maths)", desc: "→ CA, CS, BBA, B.Com, Banking" },
      { id: "arts", title: "Arts stream", desc: "→ Law, Design, Civil Services, Journalism, Psychology" },
      { id: "dip", title: "Diploma stream", desc: "→ Lateral entry to B.E./B.Tech 2nd year, or direct job" },
      { id: "iti2", title: "ITI trades", desc: "→ Skilled technician jobs, or further diploma" },
      { id: "para2", title: "Paramedical stream", desc: "→ Lab tech, radiology, nursing assistant roles" },
      { id: "skillc2", title: "Skill certifications", desc: "→ Direct entry-level jobs in 6–12 months" }
    ]
  ],
  12: [
    [
      { id: "eng", title: "Engineering", desc: "B.Tech/B.E. via JEE, MHT CET, state CETs" },
      { id: "med", title: "Medical", desc: "MBBS/BDS/AYUSH via NEET" },
      { id: "law", title: "Law", desc: "5-yr integrated via CLAT / state CETs" },
      { id: "mgmt", title: "BBA / BMS", desc: "Management foundation, then MBA" },
      { id: "bca", title: "BCA", desc: "Software track without core engineering maths" },
      { id: "design", title: "Design", desc: "NIFT / NID / UCEED — product, fashion, communication" },
      { id: "hotel", title: "Hotel Management", desc: "NCHMCT JEE → hospitality careers" },
      { id: "defence", title: "Defence", desc: "NDA → Army / Navy / Air Force officer" },
      { id: "govt", title: "Government Exams", desc: "SSC, banking, railways, state PSCs" },
      { id: "abroad", title: "Foreign Education", desc: "UG abroad — cost, visas, scholarships" }
    ],
    [
      { id: "eng", title: "Engineering → Job / M.Tech / MBA", desc: "Software, Core, GATE for PSUs & PG" },
      { id: "med", title: "Medical → Practice / PG / Research", desc: "NEET-PG, specialisation, or public health" },
      { id: "law", title: "Law → Litigation / Corporate / Judiciary", desc: "Bar exam, corporate law firms, judicial services" },
      { id: "mgmt", title: "BBA/BMS → MBA / Family Business / Job", desc: "CAT/management entrances after grad" },
      { id: "bca", title: "BCA → MCA / Software Job", desc: "Faster route into software roles" },
      { id: "design", title: "Design → Studio / Brand / Freelance", desc: "Portfolio-driven careers" },
      { id: "hotel", title: "Hotel Mgmt → Hospitality / Cruise / F&B", desc: "Global placement opportunities" },
      { id: "defence", title: "Defence → Officer Cadre", desc: "Training academy, then commissioned service" },
      { id: "govt", title: "Govt Exams → Stable Govt Job", desc: "Job security, pension, structured growth" },
      { id: "abroad", title: "Abroad → International Degree", desc: "Global exposure, higher cost, visa process" }
    ]
  ]
};

const ROADMAP_DETAILS = {
  science: { path: "10th → Science → 11th–12th (PCM/PCB/PCMB)", eligibility: "Class 10 pass, generally 60%+ recommended for competitive prep", next: "Engineering, Medical, Architecture, Pure Sciences, Defence", timeline: "2 years (11th + 12th) before next entrance exam" },
  commerce: { path: "10th → Commerce → 11th–12th", eligibility: "Class 10 pass, Maths optional but recommended for CA/finance routes", next: "B.Com, BBA, CA, CS, Banking, Economics Honours", timeline: "2 years, CA foundation can start alongside 12th" },
  arts: { path: "10th → Arts/Humanities → 11th–12th", eligibility: "Class 10 pass, no specific cutoff usually", next: "Law, Design, Psychology, Journalism, Civil Services prep", timeline: "2 years, widest range of degree options after" },
  diploma: { path: "10th → 3-yr Polytechnic Diploma", eligibility: "Class 10 pass, entrance via state polytechnic CET", next: "Lateral entry to Engineering 2nd year, or direct core-industry job", timeline: "3 years, job-ready or 3 more years for B.Tech" },
  iti: { path: "10th → ITI Trade (6 months–2 years)", eligibility: "Class 10 pass, trade-specific entrance/merit", next: "Technician roles, apprenticeships, further diploma", timeline: "Fastest route to employment after 10th" },
  para: { path: "10th → Paramedical Certificate/Diploma", eligibility: "Class 10 pass, some courses need Science background", next: "Lab technician, radiology assistant, nursing support", timeline: "1–2 years to job-ready" },
  skillc: { path: "10th → Skill Certification Course", eligibility: "Class 10 pass, no stream restriction usually", next: "Entry-level jobs in IT, retail, service industries", timeline: "3 months – 1 year" },
  eng: { path: "12th (PCM) → JEE/CET → B.Tech/B.E.", eligibility: "PCM in 12th, qualifying entrance rank", next: "Software/Core job, M.Tech, MBA, Civil Services (GATE optional)", timeline: "4 years UG + optional 2 yr PG" },
  med: { path: "12th (PCB) → NEET → MBBS/BDS/AYUSH", eligibility: "PCB in 12th, NEET qualifying rank, min. age 17", next: "Residency, NEET-PG, specialisation, private/govt practice", timeline: "5.5 years UG (incl. internship) + optional PG" },
  law: { path: "12th (any stream) → CLAT/state CET → 5-yr Integrated Law", eligibility: "12th pass any stream, English + reasoning heavy entrance", next: "Litigation, corporate law, judiciary exams, policy roles", timeline: "5 years integrated, or 3 years after any UG degree" },
  mgmt: { path: "12th (any stream) → BBA/BMS → MBA", eligibility: "12th pass, some colleges have entrance tests (SET, NPAT)", next: "MBA via CAT/CMAT, family business, corporate roles", timeline: "3 years UG + optional 2 yr MBA" },
  bca: { path: "12th (any stream, Maths preferred) → BCA → MCA/Job", eligibility: "12th pass, Maths recommended, some entrance tests", next: "Software developer roles, MCA for deeper specialisation", timeline: "3 years UG" },
  design: { path: "12th (any stream) → NID/NIFT/UCEED → Design Degree", eligibility: "12th pass, design aptitude test + portfolio/interview", next: "Studio design, brand roles, freelance, further M.Des", timeline: "4 years UG" },
  hotel: { path: "12th (any stream) → NCHMCT JEE → BHM", eligibility: "12th pass any stream, national entrance exam", next: "Hotels, airlines, cruise lines, F&B management", timeline: "3–4 years UG" },
  defence: { path: "12th (PCM for Air Force/Navy Tech) → NDA → Training Academy", eligibility: "12th pass, NDA written + SSB interview, age 16.5–19.5", next: "Commissioned officer in Army/Navy/Air Force", timeline: "3-year academy + service commitment" },
  govt: { path: "12th/Grad → SSC/Banking/Railways/State PSC", eligibility: "Varies by exam — 12th pass to Graduate level", next: "Stable government job with defined pay scale & pension", timeline: "6 months – 2 years of preparation typical" },
  abroad: { path: "12th → SAT/IELTS/TOEFL → Foreign University", eligibility: "12th pass, English proficiency test, strong academic profile", next: "Global degree, international work exposure, PR pathways", timeline: "3–4 years UG, high cost, scholarships help" }
};

const CAREERS = [
  { id:"swe", icon:"💻", title:"Software Engineer", tag:"Engineering", tagline:"Builds the apps, websites and systems that run everything digital.",
    eligibility:"B.Tech/B.E./BCA/BSc CS", subjects:"PCM in 12th (for B.Tech route)", duration:"4 years (B.Tech) or 3 years (BCA)", fees:"₹2L–12L total (govt vs private)",
    colleges:"IITs, NITs, IIITs, BITS Pilani, top state colleges", exams:"JEE Main/Advanced, state CETs", salary:"₹6–15 LPA (fresher–mid)", future:"AI/ML, cloud, product roles, high global demand", skills:"DSA, one language deeply, system design, communication" },
  { id:"doctor", icon:"🩺", title:"Doctor (MBBS)", tag:"Medical", tagline:"Diagnoses and treats patients; one of India's most respected, demanding careers.",
    eligibility:"12th PCB, NEET qualifying score", subjects:"Physics, Chemistry, Biology", duration:"5.5 years (incl. internship)", fees:"₹1L–25L+ (govt vs private, huge range)",
    colleges:"AIIMS, government medical colleges, top private colleges", exams:"NEET-UG", salary:"₹8–20 LPA (varies hugely by specialisation)", future:"Specialisation via NEET-PG, research, public health, private practice", skills:"Patience, memory, empathy, decision-making under pressure" },
  { id:"ca", icon:"📊", title:"Chartered Accountant", tag:"Commerce", tagline:"Handles auditing, taxation and financial strategy for businesses.",
    eligibility:"12th any stream (Commerce helps)", subjects:"Accounts, Maths/Stats recommended", duration:"~4–5 years (Foundation → Inter → Articleship → Final)", fees:"₹1–2L total via ICAI (very affordable)",
    colleges:"ICAI-registered (not college-based)", exams:"CA Foundation, Intermediate, Final (ICAI)", salary:"₹8–25 LPA (post-qualification, varies by firm)", future:"Own practice, CFO track, Big 4 firms, consulting", skills:"Accounting rigor, attention to detail, ethics, tax law" },
  { id:"pilot", icon:"✈️", title:"Commercial Pilot", tag:"Aviation", tagline:"Flies passenger or cargo aircraft after rigorous licensed training.",
    eligibility:"12th PCM, medical fitness (Class 1)", subjects:"Physics, Maths compulsory", duration:"1.5–2 years flight training + hours-building", fees:"₹35L–45L (flight training is expensive)",
    colleges:"DGCA-approved flying schools (Indigo/private academies)", exams:"DGCA CPL exams, airline-specific tests", salary:"₹15–40 LPA (rises fast with airline seniority)", future:"Captain rank, international airlines, instructor roles", skills:"Spatial awareness, calm under pressure, discipline" },
  { id:"uiux", icon:"🎨", title:"UI/UX Designer", tag:"Design", tagline:"Designs how digital products look, feel and function for users.",
    eligibility:"Any stream, portfolio matters more than degree", subjects:"None mandatory — design fundamentals learnable", duration:"3–4 years degree OR 6–12 month bootcamp", fees:"₹0 (self-taught) to ₹8L (design degree)",
    colleges:"NID, IDC IIT Bombay, MIT-ID, or self-taught with portfolio", exams:"UCEED, NID DAT (for formal degree route)", salary:"₹5–18 LPA depending on portfolio & company", future:"Product design lead, design systems, freelance/consulting", skills:"Figma, user research, visual design, empathy" },
  { id:"datasci", icon:"📈", title:"Data Scientist", tag:"Technology", tagline:"Turns raw data into predictions and business decisions using statistics + code.",
    eligibility:"Any technical degree + strong Maths/Stats", subjects:"Maths, Stats, Programming", duration:"3–4 years UG + often a Masters", fees:"₹2L–15L depending on institute", colleges:"IITs, ISI Kolkata, IIITs, top private universities",
    exams:"JEE (UG) or GATE/entrance tests (PG)", salary:"₹8–20 LPA", future:"ML engineering, AI research, analytics leadership", skills:"Python/R, statistics, SQL, storytelling with data" },
  { id:"lawyer", icon:"⚖️", title:"Lawyer", tag:"Law", tagline:"Advises, argues and represents in legal matters — litigation or corporate.",
    eligibility:"12th any stream", subjects:"English & reasoning strength helps at entrance stage", duration:"5-year integrated (BA LLB) or 3-year after any degree", fees:"₹1L–20L (NLUs cheaper, private colleges costlier)",
    colleges:"National Law Universities (NLUs), top private law schools", exams:"CLAT, AILET, state law entrances", salary:"₹6–20 LPA at top firms, variable in litigation", future:"Partner track, judiciary, corporate counsel, policy", skills:"Argumentation, research, writing, reading law fast" },
  { id:"architect", icon:"🏛️", title:"Architect", tag:"Engineering", tagline:"Designs buildings and spaces — part engineer, part artist.",
    eligibility:"12th PCM", subjects:"Physics, Chemistry, Maths + drawing aptitude", duration:"5 years B.Arch", fees:"₹3L–15L", colleges:"SPA Delhi, IITs (limited seats), top state colleges",
    exams:"NATA, JEE Main Paper 2", salary:"₹5–14 LPA (rises with own practice/firm)", future:"Own studio, urban planning, interior design specialisation", skills:"Spatial thinking, sketching, CAD software, structural sense" },
  { id:"civilservant", icon:"🏛️", title:"IAS / Civil Services", tag:"Government", tagline:"Administers government policy at district, state or national level.",
    eligibility:"Any graduate degree", subjects:"None specific — General Studies + one optional subject", duration:"Graduation + 1–3 years UPSC prep typically", fees:"Coaching optional, ₹0–3L", colleges:"Any recognised university (for the degree)",
    exams:"UPSC Civil Services Examination (Prelims, Mains, Interview)", salary:"₹8–14 LPA equivalent (govt pay scale + perks)", future:"Secretary-level postings, policy influence, pension", skills:"Reading stamina, current affairs, essay writing, ethics" },
  { id:"cyber", icon:"🔐", title:"Cybersecurity Analyst", tag:"Technology", tagline:"Protects systems and data from breaches and attacks.",
    eligibility:"B.Tech/BCA/BSc IT", subjects:"PCM helps but not mandatory everywhere", duration:"3–4 years UG + certifications", fees:"₹2L–10L + certification costs", colleges:"NITs, IIITs, private engineering colleges",
    exams:"JEE/state CETs for UG; certs like CEH, OSCP post-grad", salary:"₹6–18 LPA", future:"Security architect, ethical hacking, CISO track", skills:"Networking, Linux, threat analysis, scripting" },
  { id:"chef", icon:"👨‍🍳", title:"Chef / Hospitality", tag:"Hospitality", tagline:"Runs kitchens or hospitality operations — creative and high-pressure.",
    eligibility:"12th any stream", subjects:"None mandatory", duration:"3–4 years BHM or 1–2 year culinary diploma", fees:"₹1L–8L", colleges:"IHM network, NCHMCT-affiliated institutes",
    exams:"NCHMCT JEE", salary:"₹4–15 LPA (much higher abroad or as head chef)", future:"Own restaurant, cruise lines, five-star hotel groups", skills:"Culinary skill, stamina, team management, creativity" },
  { id:"psych", icon:"🧠", title:"Psychologist", tag:"Arts", tagline:"Studies mind and behaviour; helps people through therapy or research.",
    eligibility:"12th any stream (Psychology as subject helps)", subjects:"None mandatory at UG entry", duration:"3 years BA/BSc + 2 years MA (practice needs MA minimum)", fees:"₹1L–8L",
    colleges:"Delhi University, TISS, Christ University, top state colleges", exams:"CUET (for many central universities)", salary:"₹4–12 LPA (private practice can be higher)", future:"Clinical practice, corporate wellness, research, academia", skills:"Active listening, empathy, statistics, patience" }
];

const EXAMS = [
  { id:"jee", name:"JEE (Main & Advanced)", full:"Joint Entrance Examination — for IITs, NITs, IIITs", eligibility:"12th with PCM, min. 75% (varies)", syllabus:"Physics, Chemistry, Maths (11th & 12th NCERT + advanced)", pattern:"Main: computer-based, MCQ + numerical. Advanced: tougher, for IITs only", dates:"Main held twice a year (Jan & Apr)", tips:"Master NCERT first, then move to problem-solving; solve past 10 years' papers" },
  { id:"neet", name:"NEET-UG", full:"National Eligibility cum Entrance Test — for MBBS/BDS/AYUSH", eligibility:"12th with PCB, min. 50% (40% for reserved categories)", syllabus:"Physics, Chemistry, Biology (11th & 12th NCERT-based)", pattern:"Pen-and-paper, 200 MCQs, single national exam", dates:"Once a year, typically May", tips:"NCERT Biology line-by-line is non-negotiable; time yourself on mock tests" },
  { id:"cet", name:"MHT CET", full:"Maharashtra Common Entrance Test — Engineering/Pharmacy", eligibility:"12th with PCM/PCB (Maharashtra domicile preference for state quota)", syllabus:"11th + 12th Physics, Chemistry, Maths/Biology", pattern:"Computer-based, MCQ, state-level ranking", dates:"Usually April–May", tips:"Focus on 11th syllabus early — it's often under-prepared vs 12th" },
  { id:"cuet", name:"CUET-UG", full:"Common University Entrance Test — for central & many state universities", eligibility:"12th pass, any stream (subject-specific tests)", syllabus:"NCERT Class 12 syllabus for chosen subjects", pattern:"Computer-based, subject-wise papers you choose", dates:"Usually May–June", tips:"Pick subjects strategically matching your target course, not just your 12th subjects" },
  { id:"nda", name:"NDA", full:"National Defence Academy exam — for Army/Navy/Air Force", eligibility:"12th pass (PCM for Air Force/Navy tech), age 16.5–19.5, unmarried", syllabus:"Maths + General Ability Test (English, GK, reasoning)", pattern:"Written exam + SSB interview (5 days)", dates:"Twice a year (UPSC conducts)", tips:"Physical fitness matters as much as academics — start training early" },
  { id:"clat", name:"CLAT", full:"Common Law Admission Test — for National Law Universities", eligibility:"12th pass, any stream", syllabus:"English, Current Affairs, Legal Reasoning, Logical Reasoning, Maths", pattern:"Computer-based, passage-based questions, 2-hour test", dates:"Usually held in December", tips:"Read a newspaper daily; practice comprehension speed under time pressure" },
  { id:"nift", name:"NIFT Entrance", full:"National Institute of Fashion Technology admission test", eligibility:"12th pass, any stream", syllabus:"GAT (aptitude) + CAT (creative ability, for design programs)", pattern:"Written test + situation test/interview for shortlisted candidates", dates:"Usually January", tips:"Build a sketch/portfolio habit months in advance, not last-minute" },
  { id:"cat", name:"CAT", full:"Common Admission Test — for IIMs and top B-schools", eligibility:"Any graduate degree (final-year students can apply)", syllabus:"Quant, Verbal Ability, Data Interpretation & Logical Reasoning", pattern:"Computer-based, sectional time limits", dates:"Usually last week of November", tips:"Sectional accuracy matters more than attempting everything — pick your battles" },
  { id:"gate", name:"GATE", full:"Graduate Aptitude Test in Engineering — for M.Tech & PSU jobs", eligibility:"B.Tech/B.E. degree or final year", syllabus:"Core engineering subject + General Aptitude", pattern:"Computer-based, MCQ + numerical answer type", dates:"Usually February", tips:"Previous 15 years' papers are gold — patterns repeat more than people expect" },
  { id:"upsc", name:"UPSC CSE", full:"Civil Services Examination — for IAS/IPS/IFS and more", eligibility:"Any graduate degree, age 21–32 (relaxations apply)", syllabus:"Prelims (GS + CSAT), Mains (9 papers), Interview", pattern:"3-stage: Prelims → Mains → Personality Test", dates:"Prelims usually in June", tips:"Consistency over intensity — this is a 12–18 month marathon, not a sprint" }
];

const SKILLS = {
  "Software Development": ["Pick one language (Python/JS/Java) and get comfortable with syntax", "Learn data structures & algorithms — arrays, trees, sorting, recursion", "Build 3–4 real projects (to-do app, blog, small e-commerce clone)", "Do a 2–3 month internship or open-source contribution", "Apply for junior developer roles, keep building in public"],
  "AI/ML": ["Strengthen Python + Maths (linear algebra, probability, stats)", "Learn core ML: regression, classification, clustering with scikit-learn", "Go deeper into neural networks with PyTorch/TensorFlow", "Build projects: a classifier, a recommendation system, a fine-tuned model", "Internship or Kaggle competitions → ML Engineer / Data Scientist role"],
  "Data Science": ["Learn SQL and Excel deeply — most real work starts here", "Python for data: pandas, numpy, matplotlib", "Statistics: hypothesis testing, distributions, A/B testing", "Build an end-to-end project with a public dataset and a dashboard", "Internship → junior data analyst → data scientist"],
  "Cyber Security": ["Learn networking fundamentals (TCP/IP, DNS, firewalls)", "Get comfortable with Linux and scripting (Bash/Python)", "Study common vulnerabilities (OWASP Top 10), try TryHackMe/HackTheBox", "Earn an entry certification (CEH, Security+) and build a home lab", "Internship in a SOC (Security Operations Centre) → analyst role"],
  "Embedded Systems": ["Learn C/C++ and basic electronics (circuits, sensors)", "Work with microcontrollers — Arduino, then STM32/ESP32", "Understand RTOS basics and communication protocols (I2C, SPI, UART)", "Build projects: home automation, a sensor-based device", "Internship with a hardware/IoT company → embedded engineer"],
  "VLSI": ["Strong foundation in digital electronics & Verilog/VHDL", "Learn chip design flow: RTL → synthesis → verification", "Use tools like ModelSim / Xilinx Vivado for hands-on practice", "Do a tapeout-style academic project or internship", "Apply to semiconductor companies as a design/verification engineer"],
  "UI/UX": ["Learn design fundamentals: layout, typography, colour theory", "Get fluent in Figma — the industry-standard tool", "Study user research basics: personas, journey maps, usability testing", "Redesign 2–3 existing apps as portfolio case studies", "Internship or freelance gigs → junior product designer role"],
  "Digital Marketing": ["Understand SEO, content marketing and social media basics", "Learn Google Ads, Meta Ads Manager through free certifications", "Practice with analytics tools (Google Analytics, Search Console)", "Run a real campaign — even for a friend's small business", "Internship at an agency or startup → marketing associate role"],
  "Finance": ["Learn accounting basics and how financial statements work", "Study valuation, financial modelling in Excel", "Get familiar with markets — equities, mutual funds, basic macro", "Consider CFA Level 1 or a finance-focused certification", "Internship at a bank/fintech/startup → analyst role"]
};

const COMPARE_ROWS = [
  { label: "Typical difficulty", science: "High — concept-heavy, competitive exams", commerce: "Moderate — numerical + conceptual mix", arts: "Moderate — reading & writing heavy" },
  { label: "Average course cost", science: "₹2L–25L (engineering/medical range widely)", commerce: "₹1L–10L (CA is notably affordable)", arts: "₹50K–8L (mostly affordable)" },
  { label: "Job market breadth", science: "Very wide — tech, core, medical, research", commerce: "Wide — finance, business, banking, entrepreneurship", arts: "Wide but less linear — law, design, media, civil services" },
  { label: "Typical starting salary", science: "₹4–15 LPA depending on field", commerce: "₹3–10 LPA, CA/CFA push it higher", arts: "₹3–10 LPA, highly field-dependent" },
  { label: "Future flexibility", science: "Can pivot into commerce/management easily via MBA", commerce: "Can pivot into most business functions", arts: "Can pivot into law, design, civil services, media" }
];

const SALARY_DATA = [
  { career:"Software Engineer", range:"₹6–15 LPA", growth:5 },
  { career:"Doctor (MBBS, specialised)", range:"₹8–20 LPA", growth:5 },
  { career:"Chartered Accountant", range:"₹8–25 LPA", growth:4 },
  { career:"Commercial Pilot", range:"₹15–40 LPA", growth:5 },
  { career:"Data Scientist", range:"₹8–20 LPA", growth:5 },
  { career:"Lawyer (corporate)", range:"₹6–20 LPA", growth:4 },
  { career:"UI/UX Designer", range:"₹5–18 LPA", growth:4 },
  { career:"IAS Officer", range:"₹8–14 LPA + perks", growth:3 },
  { career:"Cybersecurity Analyst", range:"₹6–18 LPA", growth:5 },
  { career:"Architect", range:"₹5–14 LPA", growth:3 }
];

const SCHOLARSHIPS = [
  { level:"National", name:"National Scholarship Portal (NSP)", desc:"Umbrella portal covering dozens of central govt scholarships by category and state.", deadline:"Varies by scheme, usually Oct–Nov" },
  { level:"National", name:"PM YASASVI Scholarship", desc:"For OBC/EBC/DNT students in Class 9–12 and beyond.", deadline:"Usually September" },
  { level:"State", name:"Maharashtra EBC / Post-Matric Scholarship", desc:"Fee reimbursement for economically backward category students in Maharashtra.", deadline:"Varies by academic year" },
  { level:"Private", name:"Reliance Foundation Scholarships", desc:"Undergraduate scholarships for meritorious students across streams.", deadline:"Usually August–September" },
  { level:"Private", name:"HDFC Educational Crisis Scholarship", desc:"Support for students facing a financial crisis in the family.", deadline:"Rolling, check portal" },
  { level:"National", name:"AICTE Pragati / Saksham", desc:"For girl students and specially-abled students in technical education.", deadline:"Usually October" }
];

const NEWS = [
  { date:"Aug 2026", text:"JEE Main 2027 registration dates expected to be announced this month." },
  { date:"Jul 2026", text:"NEET-UG counselling round 2 seat allotment results released." },
  { date:"Jul 2026", text:"CUET-UG exam pattern tweaked — reduced number of subject combinations allowed." },
  { date:"Jun 2026", text:"Several state boards release Class 12 supplementary exam results." },
  { date:"Jun 2026", text:"NIFT entrance situation test schedule released for shortlisted candidates." }
];

const RESOURCES = [
  { type:"PDF", text:"NCERT Class 11–12 Physics, Chemistry, Maths (official PDFs)" },
  { type:"Video", text:"Free full-syllabus Biology playlist for NEET aspirants" },
  { type:"Practice", text:"Previous 10 years' JEE Main papers with solutions" },
  { type:"Notes", text:"One-page revision notes for Class 12 Economics" },
  { type:"Book", text:"NCERT-aligned reference list for Commerce stream" },
  { type:"Practice", text:"Free CLAT mock test series (timed, sectional)" }
];

const STORIES = [
  { role:"Software Engineer", name:"From a Tier-3 college to a product company", text:"\"I didn't get into an IIT. I focused on projects and DSA instead of the college name — that's what got me hired.\"" },
  { role:"Doctor", name:"Second NEET attempt, first-choice college", text:"\"My first attempt taught me time management. The second attempt was about trusting the process I'd already built.\"" },
  { role:"IAS Officer", name:"Engineering degree, civil services career", text:"\"My B.Tech didn't go to waste — the structured thinking it taught me showed up in every UPSC answer I wrote.\"" },
  { role:"Entrepreneur", name:"Dropped a stable job to build a startup", text:"\"Commerce background helped me understand unit economics before I even had a product.\"" },
  { role:"Designer", name:"Self-taught, no design degree", text:"\"I built a portfolio from redesigning apps I used daily. That got me more interviews than a certificate would have.\"" },
  { role:"Scientist", name:"Pure sciences, now in published research", text:"\"Everyone pushed me toward engineering. Physics Honours was the better fit, and I only realised that by ignoring the noise.\"" }
];

const QUIZ_QUESTIONS = [
  { q:"Which of these sounds most like your kind of Sunday?", opts:[
      { text:"Fixing something broken or building a small gadget", tag:"tech" },
      { text:"Reading the news and debating an opinion piece", tag:"humanities" },
      { text:"Managing a budget or planning a group trip's costs", tag:"business" },
      { text:"Sketching, editing photos, or making something look good", tag:"creative" }
  ]},
  { q:"Which subject do you actually enjoy — not just tolerate?", opts:[
      { text:"Maths or Physics", tag:"tech" },
      { text:"Biology", tag:"science" },
      { text:"Economics or Accounts", tag:"business" },
      { text:"English, History or Political Science", tag:"humanities" }
  ]},
  { q:"When working in a group project, you're usually the one who…", opts:[
      { text:"Solves the trickiest technical problem", tag:"tech" },
      { text:"Keeps everyone organised and on budget", tag:"business" },
      { text:"Comes up with the creative direction", tag:"creative" },
      { text:"Writes the final report or presents it", tag:"humanities" }
  ]},
  { q:"Which work environment appeals to you most?", opts:[
      { text:"A lab, hospital, or clinical setting", tag:"science" },
      { text:"A courtroom, newsroom, or government office", tag:"humanities" },
      { text:"A studio or creative agency", tag:"creative" },
      { text:"A tech company or startup", tag:"tech" }
  ]},
  { q:"How do you feel about long, high-stakes exams?", opts:[
      { text:"Bring it on — I like structured competition", tag:"tech" },
      { text:"I'd rather build a portfolio than sit one big exam", tag:"creative" },
      { text:"Fine, as long as it leads to stability", tag:"business" },
      { text:"I prefer exams testing reading and reasoning over pure recall", tag:"humanities" }
  ]},
  { q:"Ten years from now, what matters most to you?", opts:[
      { text:"Being at the cutting edge of technology", tag:"tech" },
      { text:"Financial independence and business ownership", tag:"business" },
      { text:"Making an impact on people's lives directly", tag:"science" },
      { text:"Doing work that's creatively fulfilling every day", tag:"creative" }
  ]}
];

const QUIZ_RESULTS = {
  tech: [ { title:"Software Engineer", why:"Strong fit for logical, build-it-yourself thinking." }, { title:"Data Scientist", why:"If you like Maths as much as code." }, { title:"Cybersecurity Analyst", why:"For the problem-solver who likes defending systems." } ],
  business: [ { title:"Chartered Accountant", why:"Structured, numbers-driven, respected qualification." }, { title:"BBA → MBA track", why:"If you enjoy leading and organising over pure numbers." }, { title:"Banking / Finance roles", why:"Stable, business-adjacent, many entry points." } ],
  humanities: [ { title:"Lawyer", why:"For strong reading, arguing and writing instincts." }, { title:"Civil Services (IAS/IPS)", why:"If impact-through-policy appeals to you." }, { title:"Journalism / Media", why:"If you like turning information into stories." } ],
  creative: [ { title:"UI/UX Designer", why:"Portfolio-first career, high demand in tech." }, { title:"Architect", why:"If you like creativity backed by technical structure." }, { title:"Fashion/Communication Design (NIFT/NID)", why:"For strong visual and conceptual thinkers." } ],
  science: [ { title:"Doctor (MBBS)", why:"For those drawn to biology and helping people directly." }, { title:"Paramedical careers", why:"Faster route into healthcare, still deeply impactful." }, { title:"Research Scientist", why:"If you love biology but not necessarily clinical practice." } ]
};
