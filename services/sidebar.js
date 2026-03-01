document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("site-sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".parts-dropdown-toggle");
  const dropdown = document.getElementById("parts-dropdown");

  if (!toggle || !dropdown) return;

  const setOpen = (open) => {
    dropdown.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  // Optional: close after selecting an item on mobile
  dropdown.addEventListener("click", (e) => {
    const isMobile = window.matchMedia("(max-width: 649px)").matches;
    if (!isMobile) return;

    const btn = e.target.closest("button");
    if (!btn) return;

    setOpen(false);
  });
});