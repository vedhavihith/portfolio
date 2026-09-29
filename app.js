document.addEventListener("DOMContentLoaded", () => {
  // 1. INITIALIZE DYNAMIC CONTENT FROM DATA
  initProfile();
  initSkills();
  initProjects();
  initTimeline();
  initCertifications();
  initCertLightbox();
  initScrollReveal();
  
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

  if (frontendContainer) frontendContainer.innerHTML = "";
  if (backendContainer) backendContainer.innerHTML = "";
  if (toolsContainer) toolsContainer.innerHTML = "";

  skills.forEach(skill => {
    const tag = document.createElement("div");
    tag.className = "skill-tag";
    tag.innerHTML = `<span>${skill.name}</span>`;
    
    if (skill.category === "frontend" && frontendContainer) {
      frontendContainer.appendChild(tag);
    } else if (skill.category === "backend" && backendContainer) {
      backendContainer.appendChild(tag);
    } else if (toolsContainer) {
      toolsContainer.appendChild(tag);
    }
  });
}

// Initialize Projects Grid with 3D Flip Card Engine
function initProjects() {
  if (!window.portfolioData) return;
  const projects = window.portfolioData.projects;
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  projects.forEach(project => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "project-card-container reveal-on-scroll";
    cardContainer.dataset.category = project.category;
    cardContainer.id = `card-${project.id}`;
    cardContainer.setAttribute("tabindex", "0");
    cardContainer.setAttribute("role", "button");
    cardContainer.setAttribute("aria-label", `Project card for ${project.title}. Click to flip card.`);

    let iconName = "code-2";
    if (project.category === "design") iconName = "palette";
    else if (project.category === "open-source") iconName = "git-branch";

    cardContainer.innerHTML = `
      <div class="project-card-inner">
        <!-- FRONT SIDE -->
        <div class="project-card-front">
          <div class="project-card-image-wrapper">
            ${project.image ? `
              <img src="${project.image}" alt="${project.title}" class="project-card-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            ` : ''}
            <div class="project-card-image-placeholder" style="${project.image ? 'display: none;' : 'display: flex;'}">
              <i data-lucide="${iconName}" class="project-icon"></i>
            </div>
          </div>
          <div class="project-card-front-content">
            <div class="project-card-tags">
              ${project.tags.map(t => `<span class="project-card-tag">${t}</span>`).join("")}
            </div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-short-desc">${project.shortDescription}</p>
            <div class="project-card-flip-hint">
              <span>View Repository Overview</span>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </div>

        <!-- BACK SIDE -->
        <div class="project-card-back">
          <div class="project-card-back-header">
            <div class="github-header-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub Repository Preview</span>
            </div>
            <button class="flip-back-btn" title="Flip back to front" aria-label="Flip back">
              <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
          
          <div class="project-card-back-content">
            <h3 class="project-card-back-title">${project.title}</h3>
            
            <div class="project-card-tech-section">
              <span class="tech-label">Technologies Used</span>
              <div class="project-card-tags">
                ${project.tags.map(t => `<span class="project-card-tag tech-tag">${t}</span>`).join("")}
              </div>
            </div>

            <div class="project-card-features-preview">
              <span class="tech-label">Key Highlights & Specifications</span>
              <ul class="back-features-list">
                ${project.features.map(f => `<li>${f}</li>`).join("")}
              </ul>
            </div>

            <div class="project-card-back-actions">
              ${project.codeLink && project.codeLink !== '#' ? `
                <a href="${project.codeLink}" target="_blank" rel="noopener noreferrer" class="btn github-repo-btn">
                  <span>View on GitHub</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              ` : `
                <span class="private-repo-badge">Internal / Private Repository</span>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    // 3D Flip Card Interaction
    cardContainer.addEventListener("click", (e) => {
      // Prevent flipping if user clicked directly on the GitHub repo link
      if (e.target.closest(".github-repo-btn")) {
        e.stopPropagation();
        return;
      }
      cardContainer.classList.toggle("flipped");
    });

    // Flip back button explicitly
    const flipBackBtn = cardContainer.querySelector(".flip-back-btn");
    if (flipBackBtn) {
      flipBackBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        cardContainer.classList.remove("flipped");
      });
    }

    // Keyboard navigation (Enter / Space)
    cardContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (!e.target.closest(".github-repo-btn")) {
          e.preventDefault();
          cardContainer.classList.toggle("flipped");
        }
      }
    });

    grid.appendChild(cardContainer);
  });
  
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize Experience & Education Timeline
function initTimeline() {
  if (!window.portfolioData) return;
  const items = window.portfolioData.experience;
  const container = document.getElementById("timeline-container");
  if (!container) return;
  container.innerHTML = "";

  items.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item reveal-on-scroll";
    
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
  if (!textElement) return;
  
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
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  if (words.length > 0) {
    type();
  }
}

// Theme Accent Customizer
function initThemeSwitcher() {
  const options = document.querySelectorAll(".color-option");
  
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

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
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

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      const icon = toggle.querySelector("i");
      if (icon) {
        if (menu.classList.contains("active")) {
          icon.setAttribute("data-lucide", "x");
        } else {
          icon.setAttribute("data-lucide", "menu");
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        const icon = toggle.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    });
  }
}

// Project Filtering Logic
function initProjectFiltering() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card-container");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        card.classList.remove("flipped");
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
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
  if (!modal) return;
  
  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
}

// Contact Form Validation & Submission
function initContactForm() {
  const form = document.getElementById("contact-form");
  const overlay = document.getElementById("form-success-overlay");
  const resetBtn = document.getElementById("btn-success-reset");
  if (!form) return;

  const inputs = form.querySelectorAll(".form-input");

  function validateInput(input) {
    const errorText = document.getElementById(`error-${input.id.replace("form-", "")}`);
    let isValid = true;

    if (input.required && !input.value.trim()) {
      isValid = false;
    } else if (input.type === "email" && input.value.trim()) {
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

  inputs.forEach(input => {
    input.addEventListener("blur", () => validateInput(input));
    input.addEventListener("input", () => {
      if (input.classList.contains("error")) {
        validateInput(input);
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
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

      if (overlay) overlay.classList.add("active");
    }
  });

  if (resetBtn && overlay) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      overlay.classList.remove("active");
    });
  }
}

// Scroll to Top
function initScrollTop() {
  const btn = document.getElementById("scroll-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    } else {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    }
  });
  
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
      if (c.image) {
        item.className = "cert-card-featured glass-card reveal-on-scroll";
        item.innerHTML = `
          <div class="cert-img-thumb-wrap">
            <img src="${c.image}" alt="${c.title}" class="cert-img-thumb">
          </div>
          <div class="cert-card-content">
            <span class="cert-badge-tag">${c.issuer}</span>
            <h4 class="cert-title">${c.title}</h4>
            ${c.date ? `<span class="cert-date">${c.date}</span>` : ''}
            <span class="cert-view-hint">
              <span>View Certificate</span>
              <i data-lucide="external-link" style="width: 12px; height: 12px; vertical-align: middle;"></i>
            </span>
          </div>
        `;
        item.addEventListener("click", () => openCertLightbox(c));
      } else {
        item.className = "cert-card glass-card reveal-on-scroll";
        item.innerHTML = `
          <div class="cert-card-content">
            <span class="cert-title">${c.title}</span>
            <span class="cert-issuer">${c.issuer}</span>
          </div>
        `;
      }
      certsList.appendChild(item);
    });
  }
  
  if (achList && achievements) {
    achList.innerHTML = "";
    achievements.forEach(a => {
      const item = document.createElement("div");
      item.className = "achievement-card glass-card reveal-on-scroll";
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

// Open Certificate Lightbox Modal
function openCertLightbox(cert) {
  const modal = document.getElementById("cert-lightbox-modal");
  const img = document.getElementById("cert-lightbox-img");
  const title = document.getElementById("cert-lightbox-title");
  const meta = document.getElementById("cert-lightbox-meta");
  const download = document.getElementById("cert-lightbox-download");

  if (!modal || !img) return;

  img.src = cert.image;
  title.textContent = cert.title;
  meta.textContent = `${cert.issuer} • Issued: ${cert.date || ''} ${cert.certId ? `(ID: ${cert.certId.substring(0, 16)}...)` : ''}`;
  download.href = cert.image;
  download.setAttribute("download", `${cert.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Certificate Lightbox Event Listeners
function initCertLightbox() {
  const modal = document.getElementById("cert-lightbox-modal");
  const backdrop = document.getElementById("cert-lightbox-backdrop");
  const closeBtn = document.getElementById("cert-lightbox-close-btn");

  if (!modal) return;

  const closeLightbox = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

// Scroll Reveal Animation Engine using IntersectionObserver
function initScrollReveal() {
  const elements = document.querySelectorAll(".section-header, .timeline-item, .about-bio-wrap, .skills-column, .certs-achievements-container, .project-card-container");
  
  elements.forEach(el => el.classList.add("reveal-on-scroll"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("revealed"));
  }
}
