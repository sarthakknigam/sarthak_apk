const express = require('express');
const cors = require('cors');
const path = require('path');
const complaints = require('./routes/complaints');
const polls = require('./routes/polls');
const upload = require('./routes/upload');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/complaints', complaints);
app.use('/api/polls', polls);
app.use('/api/upload', upload);

const PORT = process.env.PORT || 4000;

// run migrations (simple)
const fs = require('fs');
(async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'migrations', 'init.sql'), 'utf8');
    await db.query(sql);
    console.log('migrations run');
  } catch (e) { console.warn('migration failed', e.message); }

  app.listen(PORT, () => console.log('Server running on', PORT));
})();
