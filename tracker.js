/* --------- SETUP PETA ---------- */
const map = L.map('map').setView([5.4164, 100.3327], 8);   // titik mula

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

/* --------- IKON KELIP-KELIP ---------- */
const pulsingIcon = L.divIcon({ className: 'pulse' });  // .pulse ada dalam style.css

/* --------- UTIL MARKER ---------- */
const markers = [];   // simpan semua marker di sini

// tambah marker baru ➜ pulang index dalam array
function addMarker(lat, lng, label = '') {
  const m = L.marker([lat, lng], { icon: pulsingIcon })
             .addTo(map)
             .bindTooltip(label, { permanent: true, direction: 'top' });
  markers.push(m);
  return markers.length - 1;      // index marker
}

// gerakkan marker ikut index
function moveMarker(i, lat, lng) {
  if (markers[i]) markers[i].setLatLng([lat, lng]);
}

/* --------- DEMO: satu marker bergerak ---------- */

// 1) mula-mula letak marker
const idPenjejak = addMarker(5.4164, 100.3327, 'Konvoi 1');

// 2) simulasi bergerak setiap 3 saat
let step = 0;
setInterval(() => {
  step += 0.02;
  const newLat = 5.4164 + Math.sin(step) * 0.1;   // ubah sikit-sikit
  const newLng = 100.3327 + Math.cos(step) * 0.1;
  moveMarker(idPenjejak, newLat, newLng);
}, 3000);

/* --------- OPTIONAL: baca data JSON eksternal ---------- */
/*
async function refreshFromServer() {
  const res = await fetch('coords.json?cache=' + Date.now());
  const data = await res.json();          // [{lat:.., lng:.., name:'..'}, …]
  data.forEach((pos, i) => {
    if (!markers[i]) addMarker(pos.lat, pos.lng, pos.name);
    else             moveMarker(i, pos.lat, pos.lng);
  });
}
setInterval(refreshFromServer, 5000);
*/
