const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- SETTING ADMIN & FONNTE ---
const ADMIN_WA = '6285180771860';            // Ganti dengan nomor WhatsApp admin
const FONNTE_TOKEN = 'zMobWTgHpWbr9zZgNctP'; // Ganti dengan API Key Fonnte kamu
// ------------------------------

// Endpoint menerima order dari frontend
app.post('/api/order', async (req, res) => {
  const { pubg_id, category, packageLabel, uc, price, pay, phone } = req.body;
  const pesan = 
`Pesanan Baru!
ID PUBG: ${pubg_id}
Paket: ${packageLabel} (${uc} UC)
Harga: Rp${price}
Metode: ${pay?.toUpperCase()}
No. WA Customer: ${phone || '-'}
Waktu: ${new Date().toLocaleString('id-ID')}
`;
  try {
    await axios.post('https://api.fonnte.com/send', {
      target: ADMIN_WA,
      message: pesan,
      countryCode: 62
    }, {
      headers: { Authorization: FONNTE_TOKEN }
    });
    res.json({ success: true, message: 'Order diterima & notifikasi WA terkirim ke admin.' });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Gagal kirim notifikasi WA', error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API Ready at http://localhost:${PORT}`));