const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

const changeThemeIcon = () => {
  const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();
  // Change the icons inside the button based on previous settings
  if (theme === "dark") {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
};

changeThemeIcon()

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("theme") || localStorage.getItem("color-theme")) {
    if (localStorage.getItem("theme") === "light" || localStorage.getItem("color-theme") === "light") {
      document.classList.toggle("dark");
      // localStorage.setItem("theme", "dark");
      // localStorage.setItem("color-theme", "dark");
      return changeThemeIcon()
    } else {
      document.classList.toggle("dark");
      // localStorage.setItem("theme", "light");
      // localStorage.setItem("color-theme", "light");
      return changeThemeIcon()
    }
    
    // if NOT set via local storage previously
  } else {
    if (document.classList.contains("dark")) {
      document.classList.remove("dark");
      localStorage.setItem("theme", "light");
      localStorage.setItem("color-theme", "light");
    } else {
      document.classList.add("dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// set the target element that will be collapsed or expanded (eg. navbar menu)
const navbar = document.getElementById("default-sidebar");
// optionally set a trigger element (eg. a button, hamburger icon)
const hamburguerAside = document.getElementById("hamburguerAside");
hamburguerAside.addEventListener("click", () => {
  if (document.getElementById("hamburguerAside")?.ariaExpanded == "true") {
    document.getElementById("hamburguerAside")?.click();
  }
});

document.getElementById("main")?.addEventListener("click", () => {
  if (navbar.ariaLabel == "open") {
    hamburguerAside.click();
  }
});

// set the target element that will be collapsed or expanded (eg. navbar menu)
const navSearch = document.getElementById("navbar-search");
// optionally set a trigger element (eg. a button, hamburger icon)
const hamburguer = document.getElementById("hamburguer");
hamburguer?.addEventListener("click", () => {
  if (document.getElementById("default-sidebar")?.ariaLabel == "open") {
    document.getElementById("hamburguerAside")?.click();
  }
  if (hamburguer?.ariaExpanded == "true") {
    navSearch?.classList.add("hidden");
    hamburguer.ariaExpanded = "false";
  } else {
    navSearch?.classList.remove("hidden");
    hamburguer.ariaExpanded = "true";
  }
});

document.getElementById("main")?.addEventListener("click", () => {
  if (document.getElementById("hamburguer")?.ariaExpanded == "true") {
    document.getElementById("hamburguer")?.click();
  }
});

// View Transition
document.addEventListener("astro:page-load", () => {
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }

  const themeToggleBtn = document.getElementById("theme-toggle");

  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
  localStorage.theme === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.add("light");

  // set the target element that will be collapsed or expanded (eg. navbar menu)
  const navbar = document.getElementById("default-sidebar");
  // optionally set a trigger element (eg. a button, hamburger icon)
  const hamburguerAside = document.getElementById("hamburguerAside");
  hamburguerAside.addEventListener("click", () => {
    if (document.getElementById("hamburguerAside")?.ariaExpanded == "true") {
      document.getElementById("hamburguerAside")?.click();
    }
    if (navbar.ariaLabel == "close") {
      navbar.ariaLabel = "open";
      navbar.removeAttribute("aria-hidden");
      navbar.setAttribute("aria-modal", "true");
      navbar.setAttribute("role", "dialog");
      document.body.classList.add("overflow-hidden");
      navbar.classList.add("transform-none");
      navbar.classList.remove("-translate-x-full");
    } else {
      navbar.ariaLabel = "close";
      navbar.removeAttribute("aria-modal");
      navbar.removeAttribute("role");
      navbar.setAttribute("aria-hidden", "true");
      document.body.classList.remove("overflow-hidden");
      navbar.classList.remove("transform-none");
      navbar.classList.add("-translate-x-full");
    }
  });

  document.getElementById("main")?.addEventListener("click", () => {
    if (navbar.ariaLabel == "open") {
      hamburguerAside.click();
    }
  });

  // set the target element that will be collapsed or expanded (eg. navbar menu)
  const navSearch = document.getElementById("navbar-search");
  // optionally set a trigger element (eg. a button, hamburger icon)
  const hamburguer = document.getElementById("hamburguer");
  hamburguer?.addEventListener("click", () => {
    if (document.getElementById("default-sidebar")?.ariaLabel == "open") {
      document.getElementById("hamburguerAside")?.click();
    }
    if (hamburguer?.ariaExpanded == "true") {
      navSearch?.classList.add("hidden");
      hamburguer.ariaExpanded = "false";
    } else {
      navSearch?.classList.remove("hidden");
      hamburguer.ariaExpanded = "true";
    }
  });

  document.getElementById("main")?.addEventListener("click", () => {
    if (document.getElementById("hamburguer")?.ariaExpanded == "true") {
      document.getElementById("hamburguer")?.click();
    }
  });
});
