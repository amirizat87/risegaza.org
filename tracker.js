/* ---------- SETUP MAP ---------- */
const map = L.map('map').setView([10, 100], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

/* ---------- PULSING ICON ---------- */
const pulsingIcon = L.divIcon({
  html: '<div></div>',        // ada elemen <div> di dalam
  className: 'pulse',         // kelas CSS di atas
  iconSize:  [18, 18],        // kena sama dgn CSS
  iconAnchor:[9, 9]           // pusat ikon
});

/* ---------- DATA POINTS ---------- */
const points = [
  { name:'Maldives',   lat:  3.2028,  lng:  73.2207 },
  { name:'Sri Lanka',  lat:  7.8731,  lng:  80.7718 },
  { name:'Bangladesh', lat: 23.6850,  lng:  90.3563 },
  { name:'Pakistan',   lat: 30.3753,  lng:  69.3451 },
  { name:'Filipina',   lat: 12.8797,  lng: 121.7740 },
  { name:'Indonesia',  lat: -0.7893,  lng: 113.9213 },
  { name:'Thailand',   lat: 15.8700,  lng: 100.9925 },
  { name:'Perlis',     lat:  6.4440,  lng: 100.2048 },
  { name:'Kelantan',   lat:  6.1254,  lng: 102.2381 },
  { name:'Johor',      lat:  1.4854,  lng: 103.7618 }
];

/* ---------- ADD MARKERS ---------- */
points.forEach(p => {
  L.marker([p.lat, p.lng], { icon: pulsingIcon })
   .addTo(map)
   .bindTooltip(p.name, { permanent:true, direction:'top' });
});
