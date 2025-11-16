const konten = document.getElementById("konten");
const home = document.getElementById("home");
const mahasiswa = document.getElementById("mahasiswa");
const kelas = document.getElementById("kelas");
const sidebarLinks = document.querySelectorAll(".sidebar a");

function setActive(link) {
  sidebarLinks.forEach(a => a.classList.remove("active"));
  link.classList.add("active");
}

home.addEventListener("click", () => {
  setActive(home);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang, Nama Mahasiswa-Kelas";
 
});

mahasiswa.addEventListener("click", () => {
  setActive(mahasiswa);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang, Nazwa Naysila Putri-Kelas";
  
});

kelas.addEventListener("click", () => {
  setActive(kelas);
  konten.querySelector(".welcome-card h1").textContent = "Selamat Datang,  Nazwa Naysila Putri- Kelas SI-3C";
  
});