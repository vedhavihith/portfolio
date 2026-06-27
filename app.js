document.addEventListener("DOMContentLoaded", () => {
  // 1. INITIALIZE DYNAMIC CONTENT FROM DATA
  initProfile();
  initSkills();
  initProjects();
  initTimeline();
  initCertifications();
  
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. HERO TYPING ANIMATION
  initTypingEffect();

  // 3. THEME ACCENT SWITCHER
  initThemeSwitcher();

  // 4. NAVIGATION LOGIC (SCROLL & MOBILE TOGGLE)
  initNavigation();

  // 5. PROJECT FILTERING LOGIC
  initProjectFiltering();

  // 6. MODAL INTERACTION
  initModal();

  // 7. CONTACT FORM VALIDATION & INTERACTION
  initContactForm();

  // 8. SCROLL-TO-TOP BUTTON
  initScrollTop();
});

// Initialize Profile Info
function initProfile() {
  if (!window.portfolioData) return;
  const p = window.portfolioData.profile;
  
  document.getElementById("hero-name").textContent = p.name;
  document.getElementById("hero-description").textContent = p.bio;
  document.getElementById("info-location").textContent = p.location;
  document.getElementById("info-email").textContent = p.email;
  document.getElementById("contact-email").textContent = p.email;
  document.getElementById("contact-location").textContent = p.location;
  
  // Set navbar logo and footer name
  const firstWord = p.name.split(" ")[0];
  document.getElementById("logo-text").textContent = firstWord;
  document.getElementById("footer-name").textContent = p.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Set social links with inline SVGs for guaranteed rendering of brand logos
  const socialContainer = document.getElementById("social-links");
  socialContainer.innerHTML = `
    <a href="${p.github}" target="_blank" class="social-btn" aria-label="GitHub">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    </a>
    <a href="${p.linkedin}" target="_blank" class="social-btn" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    </a>
    <a href="${p.leetcode}" target="_blank" class="social-btn" aria-label="LeetCode">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    </a>
  `;
}

// Initialize Skills List
function initSkills() {
  if (!window.portfolioData) return;
  const skills = window.portfolioData.skills;
  
  const frontendContainer = document.getElementById("skills-frontend");
  const backendContainer = document.getElementById("skills-backend");
  const toolsContainer = document.getElementById("skills-tools");

  frontendContainer.innerHTML = "";
  backendContainer.innerHTML = "";
  toolsContainer.innerHTML = "";

  skills.forEach(skill => {
    const tag = document.createElement("div");
    tag.className = "skill-tag";
    tag.innerHTML = `<span>${skill.name}</span>`;
    
    if (skill.category === "frontend") {
      frontendContainer.appendChild(tag);
    } else if (skill.category === "backend") {
      backendContainer.appendChild(tag);
    } else {
      toolsContainer.appendChild(tag);
    }
  });
}

// Initialize Projects grid
function initProjects() {
  if (!window.portfolioData) return;
  const projects = window.portfolioData.projects;
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "glass-card project-card";
    card.dataset.category = project.category;
    card.id = `card-${project.id}`;

    // Select project icon based on tags/category
    let iconName = "code-2";
    if (project.category === "design") iconName = "palette";
    else if (project.category === "open-source") iconName = "git-branch";
    else if (project.tags.includes("React") || project.tags.includes("Next.js")) iconName = "layout";

    card.innerHTML = `
      <div class="project-card-image-wrapper">
        ${project.image ? `
          <img src="${project.image}" alt="${project.title}" class="project-card-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        ` : ''}
        <div class="project-card-image-placeholder" style="${project.image ? 'display: none;' : 'display: flex;'}">
          <i data-lucide="${iconName}" class="project-icon"></i>
        </div>
      </div>
      <div class="project-card-content">
        <div class="project-card-tags">
          ${project.tags.map(t => `<span class="project-card-tag">${t}</span>`).join("")}
        </div>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.shortDescription}</p>
        <div class="project-card-links">
          <a href="#" class="project-card-link open-details-btn" data-id="${project.id}">
            <span>View Details</span>
            <i data-lucide="external-link" style="width: 14px; height: 14px;"></i>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialize Experience & Education Timeline
function initTimeline() {
  if (!window.portfolioData) return;
  const items = window.portfolioData.experience;
  const container = document.getElementById("timeline-container");
  container.innerHTML = "";

  items.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    
    timelineItem.innerHTML = `
      <div class="timeline-node"></div>
      <div class="glass-card timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-company">${item.company}</span>
          </div>
          <span class="timeline-duration">${item.duration}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `;
    container.appendChild(timelineItem);
  });
}

// Hero Typing Effect
function initTypingEffect() {
  if (!window.portfolioData) return;
  const words = window.portfolioData.profile.titles;
  const textElement = document.getElementById("typed-text");
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      typingSpeed = 50;
    } else {
      charIndex++;
      typingSpeed = 100;
    }

    textElement.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at the end of the word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // brief pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing
  if (words.length > 0) {
    type();
  }
}

// Theme Accent Customizer
function initThemeSwitcher() {
  const options = document.querySelectorAll(".color-option");
  
  // Check localStorage for saved theme
  const savedHue = localStorage.getItem("portfolio-accent-hue");
  const savedSat = localStorage.getItem("portfolio-accent-sat");
  const savedLit = localStorage.getItem("portfolio-accent-lit");
  
  if (savedHue && savedSat && savedLit) {
    document.documentElement.style.setProperty("--accent-hue", savedHue);
    document.documentElement.style.setProperty("--accent-saturation", savedSat);
    document.documentElement.style.setProperty("--accent-lightness", savedLit);
    
    options.forEach(opt => {
      if (opt.dataset.hue === savedHue) {
        options.forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
      }
    });
  }

  options.forEach(option => {
    option.addEventListener("click", () => {
      options.forEach(opt => opt.classList.remove("active"));
      option.classList.add("active");
      
      const hue = option.dataset.hue;
      const sat = option.dataset.saturation;
      const lit = option.dataset.lightness;

      document.documentElement.style.setProperty("--accent-hue", hue);
      document.documentElement.style.setProperty("--accent-saturation", sat);
      document.documentElement.style.setProperty("--accent-lightness", lit);

      // Save to localStorage
      localStorage.setItem("portfolio-accent-hue", hue);
      localStorage.setItem("portfolio-accent-sat", sat);
      localStorage.setItem("portfolio-accent-lit", lit);
    });
  });
}

// Navigation scroll effects & Mobile toggle
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("mobile-nav-toggle");
  const menu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Scroll effect on Navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    // Highlight Active Link on Scroll
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.section === current) {
        link.classList.add("active");
      }
    });
  });

  // Mobile Toggle menu click
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    const icon = toggle.querySelector("i");
    if (menu.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x");
    } else {
      icon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  });

  // Close menu when clicking link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      const icon = toggle.querySelector("i");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });
}

// Project Filtering Logic
function initProjectFiltering() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "flex";
          // Add animation
          card.style.animation = "fadeInUp 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Modal Interaction
function initModal() {
  const modal = document.getElementById("project-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");
  const content = document.getElementById("modal-body-content");
  
  // Use event delegation for dynamic open buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-details-btn");
    if (!btn) return;
    
    e.preventDefault();
    const id = btn.dataset.id;
    const project = window.portfolioData.projects.find(p => p.id === id);
    if (!project) return;

    // Fill Modal Content
    content.innerHTML = `
      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-tags">
        ${project.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}
      </div>
      <p class="modal-desc">${project.longDescription}</p>
      
      <h3 class="modal-subheading">Key Highlights & Features</h3>
      <ul class="modal-features-list">
        ${project.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      
      <div class="modal-actions">
        ${project.demoLink && project.demoLink !== '#' ? `
          <a href="${project.demoLink}" target="_blank" class="btn btn-primary">
            <span>Live Demo</span>
            <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
          </a>
        ` : ''}
        ${project.codeLink && project.codeLink !== '#' ? `
          <a href="${project.codeLink}" target="_blank" class="btn btn-secondary">
            <span>Source Code</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-left: 2px;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        ` : ''}
      </div>
    `;
    
    // Re-trigger lucide icons
    lucide.createIcons();
    
    // Open Modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable body scroll
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Enable body scroll
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
}

// Contact Form Validation & Submission
function initContactForm() {
  const form = document.getElementById("contact-form");
  const overlay = document.getElementById("form-success-overlay");
  const resetBtn = document.getElementById("btn-success-reset");

  const inputs = form.querySelectorAll(".form-input");

  // Validate single input
  function validateInput(input) {
    const errorText = document.getElementById(`error-${input.id.replace("form-", "")}`);
    let isValid = true;

    if (input.required && !input.value.trim()) {
      isValid = false;
    } else if (input.type === "email" && input.value.trim()) {
      // Regex check for email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        isValid = false;
      }
    }

    if (!isValid) {
      input.classList.add("error");
      if (errorText) errorText.style.display = "block";
    } else {
      input.classList.remove("error");
      if (errorText) errorText.style.display = "none";
    }

    return isValid;
  }

  // Live validation on blur
  inputs.forEach(input => {
    input.addEventListener("blur", () => validateInput(input));
    input.addEventListener("input", () => {
      // Remove error state as user types
      if (input.classList.contains("error")) {
        validateInput(input);
      }
    });
  });

  // Submit Handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Save submission data to localStorage for testing/demo
      const submission = {
        name: document.getElementById("form-name").value.trim(),
        email: document.getElementById("form-email").value.trim(),
        subject: document.getElementById("form-subject").value.trim(),
        message: document.getElementById("form-message").value.trim(),
        date: new Date().toISOString()
      };
      
      let submissions = JSON.parse(localStorage.getItem("portfolio-contacts") || "[]");
      submissions.push(submission);
      localStorage.setItem("portfolio-contacts", JSON.stringify(submissions));

      // Trigger animation and reveal overlay
      overlay.classList.add("active");
    }
  });

  // Reset Success overlay
  resetBtn.addEventListener("click", () => {
    form.reset();
    overlay.classList.remove("active");
  });
}

// Scroll to Top
function initScrollTop() {
  const btn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    } else {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    }
  });
  
  // Set initial state
  btn.style.opacity = "0";
  btn.style.pointerEvents = "none";
  btn.style.transition = "opacity 0.3s ease";

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Initialize Certifications & Achievements
function initCertifications() {
  if (!window.portfolioData) return;
  const certs = window.portfolioData.certifications;
  const achievements = window.portfolioData.achievements;
  
  const certsList = document.getElementById("certifications-list");
  const achList = document.getElementById("achievements-list");
  
  if (certsList && certs) {
    certsList.innerHTML = "";
    certs.forEach(c => {
      const item = document.createElement("div");
      item.className = "cert-card glass-card";
      item.innerHTML = `
        <div class="cert-card-content">
          <span class="cert-title">${c.title}</span>
          <span class="cert-issuer">${c.issuer}</span>
        </div>
      `;
      certsList.appendChild(item);
    });
  }
  
  if (achList && achievements) {
    achList.innerHTML = "";
    achievements.forEach(a => {
      const item = document.createElement("div");
      item.className = "achievement-card glass-card";
      item.innerHTML = `
        <div class="achievement-card-content">
          <span class="achievement-title">${a.title}</span>
          <span class="achievement-desc">${a.desc}</span>
        </div>
      `;
      achList.appendChild(item);
    });
  }
}
