const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const priceItems = Array.from(document.querySelectorAll('.price-item'));
const priceModal = document.getElementById('price-modal');
const priceModalTitle = document.getElementById('price-modal-title');
const priceModalDescription = document.getElementById('price-modal-description');
const closeModalElements = document.querySelectorAll('[data-close-modal]');

const formatPrice = (value) => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;

const animateCounter = (item) => {
  const counter = item.querySelector('.price-counter');

  if (!counter || counter.dataset.animated === 'true') {
    return;
  }

  counter.dataset.animated = 'true';
  const target = Number(item.dataset.target || item.dataset.price || 0);
  const duration = 1200;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    counter.textContent = formatPrice(Math.floor(target * eased));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

if (priceItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const item = entry.target;
        const index = priceItems.indexOf(item);

        setTimeout(() => {
          item.classList.add('is-visible');
          animateCounter(item);
        }, index * 180);

        revealObserver.unobserve(item);
      });
    },
    { threshold: 0.25 }
  );

  priceItems.forEach((item) => {
    revealObserver.observe(item);

    item.addEventListener('click', (event) => {
      if (event.target.closest('.price-cta')) {
        return;
      }

      if (!priceModal || !priceModalTitle || !priceModalDescription) {
        return;
      }

      priceModalTitle.textContent = item.dataset.title || 'Услуга';
      priceModalDescription.textContent = item.dataset.description || 'Описание услуги скоро появится.';
      priceModal.classList.add('open');
      priceModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
}

closeModalElements.forEach((element) => {
  element.addEventListener('click', () => {
    if (!priceModal) {
      return;
    }

    priceModal.classList.remove('open');
    priceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

if (priceModal) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      priceModal.classList.remove('open');
      priceModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

const contactsSection = document.getElementById('contacts');

Array.from(document.querySelectorAll('.price-cta')).forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    button.classList.remove('ripple');

    requestAnimationFrame(() => {
      button.classList.add('ripple');
    });

    setTimeout(() => {
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      button.classList.remove('ripple');
    }, 350);
  });
});
