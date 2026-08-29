/**
 * Presentation Controller JavaScript
 * A Study About Artificial Intelligence
 * Presented by GODUGU ESWAR
 */

document.addEventListener('DOMContentLoaded', () => {
  const totalSlides = 20;
  let currentSlide = 0;

  // DOM Elements
  const slides = document.querySelectorAll('.slide-section');
  const navItems = document.querySelectorAll('.nav-slide-item');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slideCounter = document.getElementById('slide-counter');
  const progressBar = document.getElementById('progress-bar');
  const dotNavigator = document.getElementById('dot-navigator');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle');
  const sidebarSearch = document.getElementById('sidebar-search');
  const fullscreenBtn = document.getElementById('fullscreen-btn');

  // Initialize Dot Navigator
  function initDots() {
    dotNavigator.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `nav-dot ${i === currentSlide ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to Slide ${i + 1}`);
      dot.setAttribute('title', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotNavigator.appendChild(dot);
    }
  }

  // Go to Specific Slide
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    // Remove active class from previous slide
    slides[currentSlide].classList.remove('active');
    navItems[currentSlide].classList.remove('active');

    // Update current slide index
    currentSlide = index;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    navItems[currentSlide].classList.add('active');

    // Scroll sidebar active item into view smoothly
    navItems[currentSlide].scrollIntoView({ block: 'nearest', behavior: 'smooth' });

    // Update UI elements
    updateUI();

    // Close sidebar on mobile after selection
    if (window.innerWidth < 992 && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
    }

    // Update URL hash
    window.location.hash = `slide-${currentSlide + 1}`;
  }

  // Update UI Elements
  function updateUI() {
    // Progress counter text
    slideCounter.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;

    // Progress bar width
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;

    // Dots update
    const dots = dotNavigator.querySelectorAll('.nav-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Next & Previous Slide Functions
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // Event Listeners for Navigation Buttons
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // Avoid triggering when focused on inputs
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  });

  // Sidebar Links Navigation
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const slideIndex = parseInt(item.getAttribute('data-slide-index'), 10);
      if (!isNaN(slideIndex)) {
        goToSlide(slideIndex);
      }
    });
  });

  // Theme Toggle Functionality
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('presentation-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun-fill';
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill';
    }
  }

  // Detect Saved Theme or System Preference
  const savedTheme = localStorage.getItem('presentation-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Mobile Sidebar Toggle
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 992) {
      if (!sidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target) && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
      }
    }
  });

  // Sidebar Search / Filter
  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      navItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Fullscreen Toggle
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // Check URL Hash on Load
  function checkHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1);
        return;
      }
    }
    goToSlide(0);
  }

  // Initialize
  initDots();
  checkHash();
});
