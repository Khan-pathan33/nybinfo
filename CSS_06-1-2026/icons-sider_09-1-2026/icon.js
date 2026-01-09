 const icons = document.querySelectorAll(".icon");
  const panels = document.querySelectorAll(".panel");
  const sidebar = document.querySelector(".sidebar");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const panelId = icon.dataset.panel;
      const isActive = icon.classList.contains("active");

      // Reset icons & panels
      icons.forEach(i => i.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      // Toggle behavior (click same icon closes)
      if (!isActive) {
        icon.classList.add("active");
        document.getElementById(panelId).classList.add("active");
        sidebar.classList.add("open");
      } else {
        sidebar.classList.remove("open");
      }
    });
  });