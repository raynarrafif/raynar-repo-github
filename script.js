// Cursor glow
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Hamburger
const ham = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
function closeMobileNav() {
  ham.classList.remove('open');
  mobileNav.classList.remove('open');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(r => revealObs.observe(r));

// Skill bar animation
const skillBars = document.querySelectorAll('.skill-bar-fill');
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width + '%';
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(b => skillObs.observe(b));

// Count-up animation
const counters = document.querySelectorAll('.stat-number[data-count]');
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseInt(e.target.dataset.count);
      let cur = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        e.target.textContent = cur + (target > 10 ? '+' : '');
        if (cur >= target) clearInterval(timer);
      }, 40);
      countObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => countObs.observe(c));

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});

// Form submit
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  if (!name || !email || !msg) {
    alert('Harap isi semua field terlebih dahulu.');
    return;
  }
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}
