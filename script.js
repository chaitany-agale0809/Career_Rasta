/* =========================================================
   EduPath India — interactivity
   ========================================================= */
(function () {
  "use strict";

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  const savedTheme = null; // in-memory only, no localStorage per artifact rules
  let currentTheme = "light";

  function applyTheme(t) {
    currentTheme = t;
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }
  function toggleTheme() { applyTheme(currentTheme === "dark" ? "light" : "dark"); }
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("themeToggle2").addEventListener("click", toggleTheme);

  // respect OS preference on load
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }

  /* ---------- mobile nav ---------- */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");
  hamburger.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", open);
  });
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
  }));

  /* ---------- search ---------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const siteSearch = document.getElementById("siteSearch");
  const searchResults = document.getElementById("searchResults");

  searchToggle.addEventListener("click", () => {
    const open = searchPanel.classList.toggle("is-open");
    searchToggle.setAttribute("aria-expanded", open);
    if (open) setTimeout(() => siteSearch.focus(), 150);
  });

  function buildSearchIndex() {
    const idx = [];
    CAREERS.forEach(c => idx.push({ label: c.title, tag: "Career", action: () => openCareerModal(c.id) }));
    EXAMS.forEach(e => idx.push({ label: e.name, tag: "Exam", action: () => { location.hash = "#exams"; openExam(e.id); } }));
    Object.keys(SKILLS).forEach(s => idx.push({ label: s, tag: "Skill Path", action: () => { location.hash = "#skills"; selectSkillTab(s); } }));
    return idx;
  }
  const searchIndex = buildSearchIndex();

  siteSearch.addEventListener("input", () => {
    const q = siteSearch.value.trim().toLowerCase();
    searchResults.innerHTML = "";
    if (!q) return;
    const matches = searchIndex.filter(i => i.label.toLowerCase().includes(q)).slice(0, 8);
    matches.forEach(m => {
      const a = document.createElement("a");
      a.href = "#";
      a.innerHTML = `<span>${m.label}</span><span class="tag">${m.tag}</span>`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        m.action();
        searchPanel.classList.remove("is-open");
        siteSearch.value = "";
        searchResults.innerHTML = "";
      });
      searchResults.appendChild(a);
    });
  });

  /* ---------- roadmap ---------- */
  const roadmapBoard = document.getElementById("roadmapBoard");
  const roadmapDetail = document.getElementById("roadmapDetail");
  const switchBtns = document.querySelectorAll(".switch-btn");
  let currentStage = "10";

  function renderRoadmap(stage) {
    roadmapBoard.innerHTML = "";
    roadmapDetail.hidden = true;
    ROADMAP[stage].forEach((level) => {
      const levelEl = document.createElement("div");
      levelEl.className = "rm-level";
      level.forEach(node => {
        const nodeEl = document.createElement("div");
        nodeEl.className = "rm-node";
        nodeEl.tabIndex = 0;
        nodeEl.innerHTML = `<h4>${node.title}</h4><p>${node.desc}</p><span class="rm-arrow">view →</span>`;
        nodeEl.addEventListener("click", () => showRoadmapDetail(node.id, nodeEl));
        nodeEl.addEventListener("keydown", (e) => { if (e.key === "Enter") showRoadmapDetail(node.id, nodeEl); });
        levelEl.appendChild(nodeEl);
      });
      roadmapBoard.appendChild(levelEl);
    });
  }

  function showRoadmapDetail(id, nodeEl) {
    document.querySelectorAll(".rm-node.is-selected").forEach(n => n.classList.remove("is-selected"));
    nodeEl.classList.add("is-selected");
    const d = ROADMAP_DETAILS[id];
    if (!d) { roadmapDetail.hidden = true; return; }
    roadmapDetail.hidden = false;
    roadmapDetail.innerHTML = `
      <span class="rd-path">${d.path}</span>
      <h3>${nodeEl.querySelector("h4").textContent}</h3>
      <div class="rd-grid">
        <div><h5>Eligibility</h5><p>${d.eligibility}</p></div>
        <div><h5>What it leads to</h5><p>${d.next}</p></div>
        <div><h5>Typical timeline</h5><p>${d.timeline}</p></div>
      </div>`;
    roadmapDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  switchBtns.forEach(btn => btn.addEventListener("click", () => {
    switchBtns.forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    currentStage = btn.dataset.stage;
    renderRoadmap(currentStage);
  }));
  renderRoadmap(currentStage);

  /* ---------- career explorer ---------- */
  const careerGrid = document.getElementById("careerGrid");
  const explorerChips = document.getElementById("explorerChips");
  const explorerSearch = document.getElementById("explorerSearch");
  let activeChip = "All";

  function renderChips() {
    const tags = ["All", ...new Set(CAREERS.map(c => c.tag))];
    explorerChips.innerHTML = "";
    tags.forEach(tag => {
      const chip = document.createElement("button");
      chip.className = "chip" + (tag === activeChip ? " is-active" : "");
      chip.textContent = tag;
      chip.addEventListener("click", () => { activeChip = tag; renderChips(); renderCareers(); });
      explorerChips.appendChild(chip);
    });
  }

  function renderCareers() {
    const q = explorerSearch.value.trim().toLowerCase();
    careerGrid.innerHTML = "";
    const filtered = CAREERS.filter(c =>
      (activeChip === "All" || c.tag === activeChip) &&
      (c.title.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q))
    );
    if (!filtered.length) {
      careerGrid.innerHTML = `<p style="color:var(--ink-soft)">No careers match that search — try another keyword.</p>`;
      return;
    }
    filtered.forEach(c => {
      const card = document.createElement("div");
      card.className = "career-card";
      card.tabIndex = 0;
      card.innerHTML = `
        <span class="cc-icon">${c.icon}</span>
        <h4>${c.title}</h4>
        <p>${c.tagline}</p>
        <div class="cc-meta"><span>${c.tag}</span><span>${c.salary.split(" ")[0]}</span></div>`;
      card.addEventListener("click", () => openCareerModal(c.id));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") openCareerModal(c.id); });
      careerGrid.appendChild(card);
    });
  }
  explorerSearch.addEventListener("input", renderCareers);
  renderChips();
  renderCareers();

  /* ---------- career modal ---------- */
  const modalBackdrop = document.getElementById("careerModalBackdrop");
  const modalContent = document.getElementById("careerModalContent");
  document.getElementById("careerModalClose").addEventListener("click", closeCareerModal);
  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeCareerModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCareerModal(); });

  function openCareerModal(id) {
    const c = CAREERS.find(x => x.id === id);
    if (!c) return;
    modalContent.innerHTML = `
      <div class="mc-title"><span class="cc-icon">${c.icon}</span><h3>${c.title}</h3></div>
      <p class="mc-tagline">${c.tagline}</p>
      <div class="mc-grid">
        <div><h5>Eligibility</h5><p>${c.eligibility}</p></div>
        <div><h5>Required subjects</h5><p>${c.subjects}</p></div>
        <div><h5>Course duration</h5><p>${c.duration}</p></div>
        <div><h5>Typical fees</h5><p>${c.fees}</p></div>
        <div class="full"><h5>Top colleges</h5><p>${c.colleges}</p></div>
        <div><h5>Entrance exams</h5><p>${c.exams}</p></div>
        <div><h5>Salary range</h5><p>${c.salary}</p></div>
        <div class="full"><h5>Future scope</h5><p>${c.future}</p></div>
        <div class="full"><h5>Skills required</h5><p>${c.skills}</p></div>
      </div>`;
    modalBackdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeCareerModal() {
    modalBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------- exams accordion ---------- */
  const examAccordion = document.getElementById("examAccordion");
  function renderExams() {
    examAccordion.innerHTML = "";
    EXAMS.forEach(e => {
      const item = document.createElement("div");
      item.className = "acc-item";
      item.id = "exam-" + e.id;
      item.innerHTML = `
        <div class="acc-head">
          <div class="acc-head-left"><h3>${e.name}</h3><span class="acc-full">${e.full}</span></div>
          <span class="acc-plus">+</span>
        </div>
        <div class="acc-body"><div class="acc-body-inner">
          <div><h5>Eligibility</h5><p>${e.eligibility}</p></div>
          <div><h5>Syllabus</h5><p>${e.syllabus}</p></div>
          <div><h5>Exam pattern</h5><p>${e.pattern}</p></div>
          <div><h5>Important dates</h5><p>${e.dates}</p></div>
          <div><h5>Preparation tips</h5><p>${e.tips}</p></div>
        </div></div>`;
      item.querySelector(".acc-head").addEventListener("click", () => {
        const wasOpen = item.classList.contains("is-open");
        examAccordion.querySelectorAll(".acc-item").forEach(i => i.classList.remove("is-open"));
        if (!wasOpen) item.classList.add("is-open");
      });
      examAccordion.appendChild(item);
    });
  }
  window.openExam = function (id) {
    const item = document.getElementById("exam-" + id);
    if (!item) return;
    examAccordion.querySelectorAll(".acc-item").forEach(i => i.classList.remove("is-open"));
    item.classList.add("is-open");
    item.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  renderExams();

  /* ---------- skill roadmaps ---------- */
  const skillTabs = document.getElementById("skillTabs");
  const skillPath = document.getElementById("skillPath");
  let currentSkill = Object.keys(SKILLS)[0];

  function renderSkillTabs() {
    skillTabs.innerHTML = "";
    Object.keys(SKILLS).forEach(name => {
      const tab = document.createElement("button");
      tab.className = "skill-tab" + (name === currentSkill ? " is-active" : "");
      tab.textContent = name;
      tab.addEventListener("click", () => selectSkillTab(name));
      skillTabs.appendChild(tab);
    });
  }
  window.selectSkillTab = function (name) {
    currentSkill = name;
    renderSkillTabs();
    renderSkillPath();
  };
  function renderSkillPath() {
    skillPath.innerHTML = "";
    const stageLabels = ["Beginner", "Intermediate", "Projects", "Internship", "Job"];
    SKILLS[currentSkill].forEach((step, i) => {
      const el = document.createElement("div");
      el.className = "sp-step";
      el.innerHTML = `<div class="sp-num">${i + 1}</div><div class="sp-body"><h4>${stageLabels[i] || "Next step"}</h4><p>${step}</p></div>`;
      skillPath.appendChild(el);
    });
  }
  renderSkillTabs();
  renderSkillPath();

  /* ---------- compare table ---------- */
  const compareTable = document.getElementById("compareTable");
  function renderCompare() {
    let html = `<thead><tr><th>Factor</th><th>Science</th><th>Commerce</th><th>Arts</th></tr></thead><tbody>`;
    COMPARE_ROWS.forEach(r => {
      html += `<tr><td><strong>${r.label}</strong></td><td>${r.science}</td><td>${r.commerce}</td><td>${r.arts}</td></tr>`;
    });
    html += `</tbody>`;
    compareTable.innerHTML = html;
  }
  renderCompare();

  /* ---------- salary table ---------- */
  const salaryTable = document.getElementById("salaryTable");
  function renderSalary() {
    let html = `<thead><tr><th>Career</th><th>Average Salary</th><th>Growth Outlook</th></tr></thead><tbody>`;
    SALARY_DATA.forEach(s => {
      html += `<tr><td><strong>${s.career}</strong></td><td>${s.range}</td><td class="stars">${"★".repeat(s.growth)}${"☆".repeat(5 - s.growth)}</td></tr>`;
    });
    html += `</tbody>`;
    salaryTable.innerHTML = html;
  }
  renderSalary();

  /* ---------- quiz ---------- */
  const quizQuestion = document.getElementById("quizQuestion");
  const quizStep = document.getElementById("quizStep");
  const quizBack = document.getElementById("quizBack");
  const quizProgressBar = document.getElementById("quizProgressBar");
  let quizIndex = 0;
  let quizAnswers = [];

  function renderQuizQuestion() {
    if (quizIndex >= QUIZ_QUESTIONS.length) { renderQuizResult(); return; }
    const q = QUIZ_QUESTIONS[quizIndex];
    quizQuestion.innerHTML = `<div class="quiz-q-title">${q.q}</div><div class="quiz-options"></div>`;
    const optsEl = quizQuestion.querySelector(".quiz-options");
    q.opts.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        quizAnswers[quizIndex] = opt.tag;
        quizIndex++;
        renderQuizQuestion();
      });
      optsEl.appendChild(btn);
    });
    quizStep.textContent = `Question ${quizIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    quizProgressBar.style.width = `${((quizIndex) / QUIZ_QUESTIONS.length) * 100}%`;
    quizBack.disabled = quizIndex === 0;
  }

  function renderQuizResult() {
    const counts = {};
    quizAnswers.forEach(tag => counts[tag] = (counts[tag] || 0) + 1);
    const topTag = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const results = QUIZ_RESULTS[topTag] || QUIZ_RESULTS.tech;
    quizProgressBar.style.width = "100%";
    quizStep.textContent = "Done";
    quizBack.disabled = false;
    quizQuestion.innerHTML = `
      <div class="quiz-result">
        <h3>Based on your answers, explore these:</h3>
        <div class="quiz-result-list">
          ${results.map(r => `<div class="quiz-result-card"><div><strong>${r.title}</strong><br><span>${r.why}</span></div></div>`).join("")}
        </div>
        <button class="btn btn-ghost" id="quizRestart">Retake the quiz</button>
      </div>`;
    document.getElementById("quizRestart").addEventListener("click", () => {
      quizIndex = 0; quizAnswers = []; renderQuizQuestion();
    });
  }

  quizBack.addEventListener("click", () => {
    if (quizIndex > 0) { quizIndex--; renderQuizQuestion(); }
  });
  renderQuizQuestion();

  /* ---------- scholarships ---------- */
  const scholarshipGrid = document.getElementById("scholarshipGrid");
  function renderScholarships() {
    scholarshipGrid.innerHTML = "";
    SCHOLARSHIPS.forEach(s => {
      const card = document.createElement("div");
      card.className = "scholarship-card";
      card.innerHTML = `<span class="sc-badge">${s.level}</span><h4>${s.name}</h4><p>${s.desc}</p><span class="sc-deadline">Deadline: ${s.deadline}</span>`;
      scholarshipGrid.appendChild(card);
    });
  }
  renderScholarships();

  /* ---------- news + resources ---------- */
  const newsList = document.getElementById("newsList");
  function renderNews() {
    newsList.innerHTML = "";
    NEWS.forEach(n => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${n.text}</span><span class="n-date">${n.date}</span>`;
      newsList.appendChild(li);
    });
  }
  renderNews();

  const resourceList = document.getElementById("resourceList");
  function renderResources() {
    resourceList.innerHTML = "";
    RESOURCES.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${r.text}</span><span class="r-type">${r.type}</span>`;
      resourceList.appendChild(li);
    });
  }
  renderResources();

  /* ---------- success stories ---------- */
  const storyScroll = document.getElementById("storyScroll");
  function renderStories() {
    storyScroll.innerHTML = "";
    STORIES.forEach(s => {
      const card = document.createElement("div");
      card.className = "story-card";
      card.innerHTML = `<span class="st-role">${s.role}</span><h4>${s.name}</h4><p>${s.text}</p>`;
      storyScroll.appendChild(card);
    });
  }
  renderStories();

  /* ---------- AI career assistant (rule-based demo) ---------- */
  const assistantChat = document.getElementById("assistantChat");
  const assistantForm = document.getElementById("assistantForm");
  const assistantInput = document.getElementById("assistantInput");

  function addChatMsg(text, who) {
    const div = document.createElement("div");
    div.className = "chat-msg " + who;
    div.textContent = text;
    assistantChat.appendChild(div);
    assistantChat.scrollTop = assistantChat.scrollHeight;
  }

  addChatMsg("Hi! Tell me your marks, interests or a stream you're considering, and I'll point you toward a few options.", "bot");

  function generateReply(msg) {
    const m = msg.toLowerCase();
    const scoreMatch = m.match(/(\d{2,3})\s*%/);
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;

    if (m.includes("physic") && (m.includes("cod") || m.includes("program") || m.includes("computer"))) {
      return "Physics + coding is a strong signal for Engineering (via JEE/CET) or a direct Computer Science route like BCA. Check the Software Engineer and Data Scientist cards in the Career Explorer above, and try the Software Development skill roadmap if you want to start building right away.";
    }
    if (m.includes("biology") || m.includes("neet") || m.includes("doctor")) {
      return "Sounds like the Medical route (PCB → NEET) could fit. Also look at Paramedical courses after 10th if you want a faster path into healthcare — both are in the roadmap above.";
    }
    if (m.includes("bba") && m.includes("commerce")) {
      return "BBA after 12th Commerce is a solid foundation if you're aiming for an MBA later or want to eventually run a family business. It's less rigorous than CA but opens broad management doors — pair it with a CAT attempt in your final year for the best outcome.";
    }
    if (m.includes("design") || m.includes("creative") || m.includes("art")) {
      return "If you enjoy visual or creative work, look at UI/UX Designer, Architect, or the NIFT/NID design route in the roadmap. A portfolio matters more here than marks — start building one now, even informally.";
    }
    if (m.includes("law") || m.includes("clat")) {
      return "For Law, CLAT is the main national entrance for the 5-year integrated course after 12th (any stream). Strong reading speed and current affairs awareness matter more than your 12th stream — check the CLAT card in the Entrance Exams section.";
    }
    if (score !== null) {
      if (score >= 90) return `A ${score}% is a strong score — most competitive streams (Science with PCM/PCB) are realistically open to you. The real question is interest, not eligibility: try the "Find My Path" quiz above to narrow it down.`;
      if (score >= 75) return `${score}% keeps Science, Commerce and Arts all comfortably open. Focus less on "which stream is hardest to get into" and more on which one matches how you actually like to think — the Stream Comparison table above can help.`;
      return `${score}% is workable across streams — Commerce, Arts, Diploma and skill-based routes are all strong options and often lead to less exam pressure than Science while still being high-paying long-term. Have a look at the "After 10th" roadmap above.`;
    }
    return "Tell me a bit more — your approximate marks, a subject you enjoy, or a stream you're leaning toward — and I'll point you to the most relevant section of the site.";
  }

  assistantForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = assistantInput.value.trim();
    if (!val) return;
    addChatMsg(val, "user");
    assistantInput.value = "";
    setTimeout(() => addChatMsg(generateReply(val), "bot"), 350);
  });

})();
