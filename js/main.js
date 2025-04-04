
// DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const subscribeForm = document.getElementById('subscribe-form');
const contactForm = document.getElementById('contact-form');
const testimonialSlider = document.getElementById('testimonialSlider');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialPrev = document.getElementById('testimonialPrev');
const dots = document.querySelectorAll('.dot');
const formMessage = document.getElementById('form-message');
const contactFormMessage = document.getElementById('contact-form-message');

// Mobile Navigation Toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Testimonial Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

// Initialize the slider
function initSlider() {
  if (!slides.length) return;
  
  // Show the first slide
  showSlide(currentSlide);
  
  // Set up event listeners for the slider controls
  if (testimonialNext) {
    testimonialNext.addEventListener('click', nextSlide);
  }
  
  if (testimonialPrev) {
    testimonialPrev.addEventListener('click', prevSlide);
  }
  
  // Set up event listeners for the dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-index'));
      showSlide(slideIndex);
    });
  });
  
  // Auto-advance the slider every 5 seconds
  setInterval(nextSlide, 5000);
}

function showSlide(n) {
  // Remove active class from all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show the current slide and highlight the current dot
  slides[n].classList.add('active');
  dots[n].classList.add('active');
  
  // Update the current slide index
  currentSlide = n;
}

function nextSlide() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  showSlide(prevIndex);
}

// Form Submissions
function handleSubscribeForm() {
  if (!subscribeForm) return;
  
  subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (!email || !validateEmail(email)) {
      showFormMessage(formMessage, 'Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission (replace with actual API call)
    try {
      // Simulating API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      showFormMessage(formMessage, 'Thank you for subscribing to our newsletter!', 'success');
      subscribeForm.reset();
    } catch (error) {
      showFormMessage(formMessage, 'An error occurred. Please try again later.', 'error');
    }
  });
}

function handleContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      showFormMessage(contactFormMessage, 'Please fill in all required fields.', 'error');
      return;
    }
    
    if (!validateEmail(email)) {
      showFormMessage(contactFormMessage, 'Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission (replace with actual API call)
    try {
      // Simulating API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      showFormMessage(contactFormMessage, 'Your message has been sent! We\'ll get back to you soon.', 'success');
      contactForm.reset();
    } catch (error) {
      showFormMessage(contactFormMessage, 'An error occurred. Please try again later.', 'error');
    }
  });
}

function showFormMessage(element, message, type) {
  if (!element) return;
  
  element.textContent = message;
  element.className = 'form-message ' + type;
  element.style.display = 'block';
  
  // Hide the message after 5 seconds
  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset for the fixed header
      behavior: 'smooth'
    });
  });
});

// Reveal animations on scroll
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .mentorship-card, .product-card');
  
  const revealOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  handleSubscribeForm();
  handleContactForm();
  initRevealAnimations();
});

// Back to top button
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (scrollPosition > 500) {
    if (!backToTopBtn) {
      const btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.innerHTML = '↑';
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(btn);
    }
  } else if (backToTopBtn) {
    backToTopBtn.remove();
  }
});

// Add styles for the back to top button
const style = document.createElement('style');
style.textContent = `
  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--brand-blue);
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 99;
  }
  
  .back-to-top:hover {
    background-color: var(--brand-dark);
    transform: translateY(-5px);
  }
  
  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
