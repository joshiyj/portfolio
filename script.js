document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      // Change icon between menu and close
      const icon = menuToggle.querySelector('i');
      if (icon) {
        const currentIconName = icon.getAttribute('data-lucide');
        const newIconName = currentIconName === 'menu' ? 'x' : 'menu';
        icon.setAttribute('data-lucide', newIconName);
        lucide.createIcons();
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  // --- Sticky Navbar ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check in case page is refreshed while scrolled

  // --- Active Navigation Link Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const scrollSpy = () => {
    const scrollY = window.scrollY + 120; // Offset for header height
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (activeLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', scrollSpy);
  scrollSpy(); // Run initial spy

  // --- Simulated Code Editor Execution ---
  // We can add an execution pulse at the bottom comment after a delay
  const consoleOutputComment = document.querySelector('.code-content .comment');
  if (consoleOutputComment) {
    // Start with low opacity comment
    consoleOutputComment.style.opacity = '0.3';
    consoleOutputComment.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
      consoleOutputComment.style.opacity = '1';
      // Add a brief subtle glow effect to the editor code window
      const codeWindow = document.querySelector('.code-window');
      if (codeWindow) {
        codeWindow.style.borderColor = 'rgba(255, 87, 34, 0.4)';
        setTimeout(() => {
          codeWindow.style.borderColor = '';
        }, 1000);
      }
    }, 1500);
  }

  // --- Contact Form Submission Handling ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Simple visual validation
      if (!name || !email || !subject || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.className = 'form-status error';
        return;
      }

      // Show sending state
      formStatus.textContent = 'Sending message...';
      formStatus.className = 'form-status';
      const submitBtn = contactForm.querySelector('.btn-submit');
      if (submitBtn) submitBtn.disabled = true;

      // Send form data to Web3Forms
      const formData = new FormData(contactForm);
      const json = JSON.stringify(Object.fromEntries(formData));

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status === 200) {
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          formStatus.textContent = jsonResponse.message || 'Something went wrong. Please try again.';
          formStatus.className = 'form-status error';
        }
      })
      .catch(error => {
        formStatus.textContent = 'Network error. Please check your connection and try again.';
        formStatus.className = 'form-status error';
      })
      .then(() => {
        if (submitBtn) submitBtn.disabled = false;

        // Clear status after 5 seconds
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 5000);
      });
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }
});
