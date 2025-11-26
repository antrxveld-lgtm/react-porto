const express = require('express');
const path = require('path');
const app = express();

// AMBIL PORT DARI PTERODACTYL
const port = process.env.SERVER_PORT;

// GANTI 'build' JADI 'dist' KALO LO PAKE VITE !!!
const buildPath = path.join(__dirname, 'build'); 

// Sajikan file statis dari folder build
app.use(express.static(buildPath));

// Handle SPA Routing (Biar kalo di-refresh di halaman lain ga 404)
app.get('/*', function (req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`React jalan di port ${port}, Gas!`);
});
