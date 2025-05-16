document.addEventListener("DOMContentLoaded", () => {
  // === HAMBURGER MENU ===
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  });

  // === ANIMASI FOTO GANTUNG SAAT MASUK ===
  setTimeout(() => {
    document.querySelectorAll(".hanging-container").forEach((photo) => {
      photo.classList.add("slide-in");
      photo.classList.add("show");
    });
  }, 500);

  // === SEMBUNYIKAN FOTO SAAT SCROLL BAWAH ===
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    document.querySelectorAll(".hanging-container").forEach((photo) => {
      photo.style.opacity = scrollTop > 100 ? "0" : "1";
    });
  });

  // === FLASHSCREEN (opsional, jika kamu pakai) ===
  const flashscreen = document.getElementById("flashscreen");

  // Munculkan animasi foto
  setTimeout(() => {
    document.querySelectorAll(".photo").forEach((photo) => {
      photo.classList.add("show");
    });
  }, 1000); // Setelah 1 detik

  // Hilangkan flashscreen
  setTimeout(() => {
    flashscreen.classList.add("hide");
    setTimeout(() => {
      flashscreen.style.display = "none";
    }, 1000);
  }, 3600);
});
const flashscreen = document.getElementById("flashscreen");

// Munculkan animasi foto
setTimeout(() => {
  document.querySelectorAll(".photo").forEach((photo) => {
    photo.classList.add("show");
  });
}, 1000); // Setelah 1 detik

// Hilangkan flashscreen
setTimeout(() => {
  flashscreen.classList.add("hide");
  setTimeout(() => {
    flashscreen.style.display = "none";
  }, 1000);
}, 3600);

const projectCards = document.querySelectorAll(".project-card-detailed"); // <--- PASTIKAN INI ADA!

if (projectCards.length > 0) {
  // Selalu baik untuk memeriksa apakah elemen ditemukan
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  };

  const projectObserver = new IntersectionObserver(
    observerCallback,
    observerOptions
  );
  projectCards.forEach((card) => {
    projectObserver.observe(card);
  });
} else {
  console.warn(
    "Tidak ada elemen .project-card-detailed yang ditemukan untuk Intersection Observer."
  );
}

// Pastikan link 'Proyek' di navigasi aktif (jika ini juga ada di script.js)
const navLinksForActive = document.querySelectorAll("header nav .nav-links a");
navLinksForActive.forEach((link) => {
  link.classList.remove("active");
  // Asumsi path halaman proyek Anda adalah 'project.html' atau 'projects.html'
  if (
    window.location.pathname.endsWith("project.html") ||
    window.location.pathname.endsWith("projects.html")
  ) {
    if (
      link.getAttribute("href") === "project.html" ||
      link.getAttribute("href") === "projects.html"
    ) {
      link.classList.add("active");
    }
  }
  // Anda mungkin perlu logika lebih canggih di sini jika struktur link berbeda
});
