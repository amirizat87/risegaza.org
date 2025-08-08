/* ——— SETUP PETA ——— */
const map = L.map('map').setView([4.5, 102.0], 6);   // lat, lng, zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

/* ——— IKON KELIP-KELIP ——— */
const pulsingIcon = L.divIcon({
  className: 'pulse',
  iconSize: [5, 5],
  iconAnchor: null
});

/* ——— KOORDINAT MARKER ——— */
const points = [
  // Negara
  { name:'Maldives',   lat:  3.2028,  lng:  73.2207 },
  { name:'Sri Lanka',  lat:  7.8731,  lng:  80.7718 },
  { name:'Bangladesh', lat: 23.6850,  lng:  90.3563 },
  { name:'Pakistan',   lat: 30.3753,  lng:  69.3451 },
  { name:'Filipina',   lat: 8.0070,   lng: 124.2880 },
  { name:'Indonesia',  lat: -6.2088,  lng: 106.8456 },
  { name:'Thailand',   lat: 15.8700,  lng: 100.9925 },

  // Negeri Malaysia
  { name:'Perlis',     lat:  6.4440,  lng: 100.2048 },
  { name:'Kelantan',   lat:  6.1254,  lng: 102.2381 },
  { name:'Johor',      lat:  1.4854,  lng: 103.7618 }
];

/* ——— TAMBAH MARKER KE PETA ——— */
points.forEach(p => {
  L.marker([p.lat, p.lng], { icon: pulsingIcon })
   .addTo(map)
   .bindTooltip(p.name, { permanent: true, direction: 'top' });
});





