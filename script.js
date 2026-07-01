const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    tabButtons.forEach((tabButton) => {
      const isActive = tabButton === button;
      tabButton.classList.toggle("active", isActive);
      tabButton.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === selectedTab;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

function setError(field, message) {
  const errorElement = document.querySelector(`[data-error-for="${field.name}"]`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function validateField(field) {
  if (field.validity.valueMissing) {
    return "This field is required.";
  }

  if (field.validity.typeMismatch) {
    return "Please enter a valid email address.";
  }

  if (field.validity.patternMismatch) {
    return "Please enter a valid phone number.";
  }

  if (field.validity.tooShort) {
    return `Please enter at least ${field.minLength} characters.`;
  }

  return "";
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = Array.from(contactForm.querySelectorAll("input, textarea"));
  let hasError = false;

  fields.forEach((field) => {
    const message = validateField(field);
    setError(field, message);
    field.setAttribute("aria-invalid", String(Boolean(message)));
    hasError = hasError || Boolean(message);
  });

  if (hasError) {
    formStatus.textContent = "";
    return;
  }

  // TODO: Replace this client-side success state with a real form submission endpoint.
  formStatus.textContent = "Thanks. Your demo request is ready to be sent once the form service is connected.";
  contactForm.reset();
});

contactForm?.addEventListener("input", (event) => {
  const field = event.target;
  if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
    return;
  }

  setError(field, validateField(field));
  field.setAttribute("aria-invalid", String(!field.checkValidity()));
});
