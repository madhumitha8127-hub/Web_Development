/* =====================================================================
   Sweet Crumbs — site script
   ---------------------------------------------------------------------
   START HERE when handing this to a client. Edit the CONFIG block below
   and every phone number, WhatsApp link, address, map and Instagram
   link across all five pages updates automatically.
   ===================================================================== */

const CONFIG = {
  businessName: "Sweet Crumbs",

  /* Digits only, with country code, no +, no spaces. 91 = India. */
  whatsappNumber: "916309748223",

  /* Pre-filled text in the customer's WhatsApp app */
  whatsappMessage: "Hi Sweet Crumbs! I'd like to place an order.",

  /* Shown on the page and used for tel: links */
  phoneDisplay: "+91 63097 48223",

  email: "hello@sweetcrumbs.in",

  addressLines: [
    "Shop 4, Rose Arcade, Road No. 12",
    "Banjara Hills, Hyderabad 500034"
  ],

  instagram: "https://instagram.com/sweetcrumbs",

  /* UPI ID to receive payments — from Google Pay, PhonePe, Paytm etc. */
  upiId: "sweetcrumbs@upi",

  /* Name shown to the customer in their UPI app when they scan/pay */
  upiPayeeName: "Sweet Crumbs Bakery",

  /* Paste the src from Google Maps → Share → Embed a map → Copy HTML */
  mapEmbed:
    "https://www.google.com/maps?q=Banjara+Hills,+Hyderabad&output=embed",

  /* Google Maps link used by the "Get directions" buttons */
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Banjara+Hills,+Hyderabad",

  /* Used to highlight today's row in the opening-hours list.
     Index 0 = Sunday, through 6 = Saturday. */
  openingHours: [
    { day: "Sunday",    hours: "8:00 am – 9:00 pm" },
    { day: "Monday",    hours: "7:30 am – 9:30 pm" },
    { day: "Tuesday",   hours: "7:30 am – 9:30 pm" },
    { day: "Wednesday", hours: "7:30 am – 9:30 pm" },
    { day: "Thursday",  hours: "7:30 am – 9:30 pm" },
    { day: "Friday",    hours: "7:30 am – 10:30 pm" },
    { day: "Saturday",  hours: "8:00 am – 10:30 pm" }
  ]
};

/* ---------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------- */
const $  = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

function waLink(itemName) {
  const text = itemName
    ? `Hi ${CONFIG.businessName}! I'd like to order: ${itemName}.`
    : CONFIG.whatsappMessage;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/* ---------------------------------------------------------------------
   1. Inject business details everywhere
   Any element with data-cfg="key" gets its text/href filled in.
   ------------------------------------------------------------------- */
function applyConfig() {
  // Generic WhatsApp links
  $$("[data-wa]").forEach((el) => {
    el.href = waLink(el.dataset.wa || "");
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Phone
  $$("[data-cfg='phone']").forEach((el) => {
    el.textContent = CONFIG.phoneDisplay;
    if (el.tagName === "A") el.href = "tel:" + CONFIG.phoneDisplay.replace(/\s/g, "");
  });
  $$("[data-cfg='phone-link']").forEach((el) => {
    el.href = "tel:" + CONFIG.phoneDisplay.replace(/\s/g, "");
  });

  // Email
  $$("[data-cfg='email']").forEach((el) => {
    el.textContent = CONFIG.email;
    if (el.tagName === "A") el.href = "mailto:" + CONFIG.email;
  });

  // Address
  $$("[data-cfg='address']").forEach((el) => {
    el.innerHTML = CONFIG.addressLines.join("<br>");
  });

  // Instagram
  $$("[data-cfg='instagram']").forEach((el) => {
    el.href = CONFIG.instagram;
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Directions
  $$("[data-cfg='directions']").forEach((el) => {
    el.href = CONFIG.mapDirections;
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Map embed
  const map = $("[data-cfg='map']");
  if (map) map.src = CONFIG.mapEmbed;

  // Current year
  $$("[data-cfg='year']").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Opening hours
  const hoursList = $("[data-cfg='hours']");
  if (hoursList) {
    const today = new Date().getDay();
    hoursList.innerHTML = CONFIG.openingHours
      .map(
        (row, i) =>
          `<li class="${i === today ? "is-today" : ""}"><span>${row.day}${
            i === today ? " (today)" : ""
          }</span><span>${row.hours}</span></li>`
      )
      .join("");
  }
}

/* ---------------------------------------------------------------------
   2. Mobile navigation
   ------------------------------------------------------------------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#primary-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) close();
  });

  // Header border appears once the page has scrolled
  const header = $(".site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------------------------------------------------------------
   3. Scroll reveal
   ------------------------------------------------------------------- */
function initReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------
   4. Floating WhatsApp button
   ------------------------------------------------------------------- */
function initFloatingCta() {
  const btn = $(".wa-float");
  if (!btn) return;
  const show = () => btn.classList.toggle("is-visible", window.scrollY > 420);
  show();
  window.addEventListener("scroll", show, { passive: true });
}

/* ---------------------------------------------------------------------
   5. Menu category filter
   ------------------------------------------------------------------- */
function initFilters() {
  const chips = $$(".chip[data-filter]");
  const products = $$(".product[data-category]");
  const empty = $(".empty-state");
  if (!chips.length || !products.length) return;

  const apply = (value) => {
    let shown = 0;
    products.forEach((card) => {
      const match = value === "all" || card.dataset.category === value;
      card.classList.toggle("is-hidden", !match);
      if (match) shown++;
    });
    if (empty) empty.classList.toggle("is-hidden", shown > 0);
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      apply(chip.dataset.filter);
    });
  });

  // Deep link support: menu.html#cakes opens that category
  const hash = window.location.hash.replace("#", "");
  const target = chips.find((c) => c.dataset.filter === hash);
  if (target) target.click();
}

/* ---------------------------------------------------------------------
   6. Gallery lightbox
   ------------------------------------------------------------------- */
function initLightbox() {
  const items = $$(".gallery__item");
  const box = $(".lightbox");
  if (!items.length || !box) return;

  const img = $(".lightbox img", box);
  const caption = $(".lightbox__caption", box);
  let index = 0;
  let lastFocus = null;

  const render = () => {
    const source = items[index].querySelector("img");
    img.src = source.dataset.full || source.src;
    img.alt = source.alt;
    caption.textContent = `${source.alt} — ${index + 1} of ${items.length}`;
  };

  const open = (i) => {
    index = i;
    lastFocus = document.activeElement;
    render();
    box.classList.add("is-open");
    document.body.classList.add("nav-open");
    $(".lightbox__close", box).focus();
  };

  const close = () => {
    box.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (lastFocus) lastFocus.focus();
  };

  const step = (dir) => {
    index = (index + dir + items.length) % items.length;
    render();
  };

  items.forEach((item, i) => item.addEventListener("click", () => open(i)));
  $(".lightbox__close", box).addEventListener("click", close);
  $(".lightbox__nav--prev", box).addEventListener("click", () => step(-1));
  $(".lightbox__nav--next", box).addEventListener("click", () => step(1));
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

/* ---------------------------------------------------------------------
   7. Contact form
   Validates in the browser. To actually receive messages, see README.
   ------------------------------------------------------------------- */
function initForm() {
  const form = $("#contact-form");
  if (!form) return;

  const status = $(".form__status", form);

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Enter your name."),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
        ? ""
        : "Enter a valid email address.",
    phone: (v) =>
      v.trim() === "" || /^[\d\s+()-]{8,18}$/.test(v.trim())
        ? ""
        : "Enter a valid phone number, or leave this blank.",
    topic: (v) => (v ? "" : "Choose what your message is about."),
    message: (v) =>
      v.trim().length >= 10 ? "" : "Tell us a bit more — at least 10 characters."
  };

  const validateField = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const error = rule(input.value);
    const field = input.closest(".field");
    field.classList.toggle("has-error", Boolean(error));
    const slot = $(".field__error", field);
    if (slot) slot.textContent = error;
    input.setAttribute("aria-invalid", error ? "true" : "false");
    return !error;
  };

  $$("input, select, textarea", form).forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("has-error")) {
        validateField(input);
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = $$("input, select, textarea", form).filter((i) => rules[i.name]);
    const results = inputs.map(validateField);

    if (results.includes(false)) {
      const first = inputs.find((i) => i.closest(".field").classList.contains("has-error"));
      if (first) first.focus();
      status.classList.remove("is-visible");
      return;
    }

    status.textContent =
      "Thanks — your message is ready to send. Connect a form service (see README) to start receiving these in your inbox.";
    status.classList.add("is-visible");
    status.scrollIntoView({ behavior: "smooth", block: "center" });
    form.reset();
  });
}

/* ---------------------------------------------------------------------
   8. Count-up numbers (About page stats)
   ------------------------------------------------------------------- */
function initCounters() {
  const nums = $$("[data-count]");
  if (!nums.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const start = performance.now();
        const run = (now) => {
          const p = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased).toLocaleString("en-IN") + suffix;
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
        io.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  nums.forEach((n) => io.observe(n));
}

/* ---------------------------------------------------------------------
   9. Graceful image fallback
   If a photo fails to load (offline, or a URL swapped out by the client),
   the tinted placeholder shows instead of a broken-image icon.
   ------------------------------------------------------------------- */
function initImageFallback() {
  $$("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.style.opacity = "0";
    });
  });
}

/* ---------------------------------------------------------------------
   9. Payment section (UPI)
   Builds a UPI deep link and a matching QR code from CONFIG.upiId, and
   wires up the "copy" button next to the UPI ID.
   ------------------------------------------------------------------- */
function upiLink() {
  const params = new URLSearchParams({
    pa: CONFIG.upiId,
    pn: CONFIG.upiPayeeName,
    cu: "INR"
  });
  return `upi://pay?${params.toString()}`;
}

function initPayment() {
  const idEl = $("[data-cfg='upi-id']");
  if (!idEl) return; // payment section isn't on this page

  idEl.textContent = CONFIG.upiId;

  const payBtn = $("[data-cfg='upi-pay-link']");
  if (payBtn) payBtn.href = upiLink();

  const qr = $("[data-cfg='upi-qr']");
  if (qr) {
    qr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=" +
      encodeURIComponent(upiLink());
    qr.alt = `UPI QR code to pay ${CONFIG.businessName} at ${CONFIG.upiId}`;
  }

  const copyBtn = $("[data-cfg='upi-copy']");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.upiId);
      } catch {
        // Clipboard API blocked (older browser or no HTTPS) — fall back silently.
      }
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copied";
      copyBtn.disabled = true;
      setTimeout(() => {
        copyBtn.textContent = original;
        copyBtn.disabled = false;
      }, 1800);
    });
  }
}

/* ---------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initImageFallback();
  initPayment();
  initNav();
  initReveal();
  initFloatingCta();
  initFilters();
  initLightbox();
  initForm();
  initCounters();
});