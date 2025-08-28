# Sumud Nusantara – Live Tracking Map

Laman web ni dibuat untuk **papar peta penjejakan (live tracking)** laluan/konvoi dan hentian utama di Malaysia serta beberapa negara jiran. Tujuan utama: bagi orang ramai **nampak dengan jelas** di mana lokasi semasa dan **laluan yang ditempuh**, terus boleh akses dari telefon atau desktop.

> **Ringkasnya:** peta ringan, statik (tanpa backend), dihoskan di GitHub Pages dengan domain `risegaza.org`.

---

## 🎯 Tujuan & Objektif
- Memaparkan **titik lokasi** (marker berkelip) untuk negara/negeri/hentian.
- Menunjukkan **laluan (route)** ikut turutan hentian yang ditetapkan.
- Mudah diselenggara oleh pasukan: hanya kemas kini 1 fail `tracker.js`.
- **Mesra telefon (mobile-friendly)** dan pantas dimuat (fail statik + CDN).

---

## 🧰 Teknologi Digunakan
- **Leaflet.js** + OpenStreetMap (paparan peta)
- **HTML, CSS, JavaScript** (vanilla, tanpa framework)
- **GitHub Pages** (hosting statik + custom domain)

---

## 📦 Struktur Projek
.
index.html # rangka laman (header, peta, footer)
style.css # tema gelap Sumud + animasi marker
tracker.js # senarai titik & definisi laluan
README.md

---

## 🗺️ Cara Ubah Titik & Laluan
- Semua konfigurasi ada dalam `tracker.js`.

### Tambah/ubah titik
```js
// Contoh tambah lokasi baharu
stops['Nama Lokasi'] = [LAT, LNG];
routes.push({
  name: 'Laluan Baru',
  color: '#ff6600',
  stops: ['Hentian A', 'Hentian B', 'Dataran Merdeka']
});
const map = L.map('map').setView([4.5, 102.0], 6);

---

Direka & dibangunkan dengan solidariti oleh Amir Izat 🇲🇾.
