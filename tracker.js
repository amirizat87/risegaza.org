/* ========= SETUP PETA ========= */
const map = L.map('map').setView([4.7, 102.0], 7); // Fokus Semenanjung MY

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

/* ========= PETA NAMA → KOORDINAT =========
   (anggaran tepat; boleh tweak bila perlu) */
const stops = {
  // Route 1
  'Masjid Muhammadi, Kota Bharu':        [6.1288, 102.2386],
  'Masjid Terapung, Kuala Terengganu':   [5.2830, 103.1736], // Masjid Terapung TT Zaharah
  'Masjid Sultan Ahmad 1, Kuantan':      [3.8076, 103.3260],
  'R&R Temerloh':                        [3.4565, 102.4275],
  'R&R Genting Sempah':                  [3.3548, 101.7900],
  'Dataran Merdeka':                     [3.1486, 101.6933],

  // Route 2
  'Hentian Gua Musang':                  [4.8795, 101.9647],

  // Route 3
  'R&R Seremban':                        [2.8350, 101.8720],

  // Route 4
  'Jabatan Agama Islam Johor':           [1.4654, 103.7570],
  'R&R Ayer Keroh':                      [2.2990, 102.3060],

  // Route 5
  'Masjid Alwi, Kangar':                 [6.4337, 100.1980],
  'Petronas Tol Sungai Dua, Penang':     [5.4820, 100.4340],
  'R&R Tapah':                           [4.1220, 101.2570]
};

/* ========= SENARAI ROUTE (ikut turutan hentian) ========= */
const routes = [
  {
    name: 'Laluan 1',
    color: '#ff2fad',
    stops: [
      'Masjid Muhammadi, Kota Bharu',
      'Masjid Terapung, Kuala Terengganu',
      'Masjid Sultan Ahmad 1, Kuantan',
      'R&R Temerloh',
      'R&R Genting Sempah',
      'Dataran Merdeka'
    ]
  },
  {
    name: 'Laluan 2',
    color: '#00c2ff',
    stops: [
      'Hentian Gua Musang',
      'R&R Genting Sempah',
      'Dataran Merdeka'
    ]
  },
  {
    name: 'Laluan 3',
    color: '#ffd400',
    stops: [
      'R&R Seremban',
      'Dataran Merdeka'
    ]
  },
  {
    name: 'Laluan 4',
    color: '#6a5acd',
    stops: [
      'Jabatan Agama Islam Johor',
      'R&R Ayer Keroh',
      'R&R Seremban',
      'Dataran Merdeka'
    ]
  },
  {
    name: 'Laluan 5',
    color: '#00d68f',
    stops: [
      'Masjid Alwi, Kangar',
      'Petronas Tol Sungai Dua, Penang',
      'R&R Tapah',
      'Dataran Merdeka'
    ]
  }
];

/* ========= HELPER: lukis satu route ========= */
function drawRoute(route) {
  // Tukar nama hentian → [lat,lng]
  const latlngs = route.stops
    .map(n => stops[n])
    .filter(Boolean);

  if (latlngs.length < 2) return;

  // Garisan
  const line = L.polyline(latlngs, {
    color: route.color,
    weight: 4,
    opacity: 0.95,
    lineJoin: 'round'
  }).addTo(map);

  // Titik bulat setiap hentian
  latlngs.forEach((ll, idx) => {
    L.circleMarker(ll, {
      radius: 6,
      color: route.color,
      fillColor: route.color,
      fillOpacity: 1,
      weight: 2
    })
    .addTo(map)
    .bindTooltip(`${route.stops[idx]}`, { permanent: false, direction: 'top' });
  });

  return line;
}

/* ========= LUKIS SEMUA ROUTE ========= */
const bounds = L.latLngBounds([]);
routes.forEach(r => {
  const line = drawRoute(r);
  if (line) bounds.extend(line.getBounds());
});

// Kalau nak auto-zoom nampak semua laluan, buka komen baris bawah:
// map.fitBounds(bounds, { padding: [30, 30] });

/* ========= (Opsyen) Tambah marker kelip pulsing di setiap hentian =========
   — Kalau nak, buang komen blok ini. Pastikan CSS .pulse dah ada. */
/*
const pulsingIcon = L.divIcon({ className: 'pulse', iconSize:[20,20], iconAnchor:[0,0] });
Object.entries(stops).forEach(([label, ll]) => {
  L.marker(ll, { icon: pulsingIcon }).addTo(map).bindTooltip(label, {direction:'top'});
});
*/
