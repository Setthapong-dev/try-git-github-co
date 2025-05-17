// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

// 🔒 จำลองข้อมูลผู้ใช้
const USERS = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'abcd' }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = USERS.find(u => u.username === username && u.password === password);

  if (found) {
    res.json({ message: 'Login successful ✅' });
  } else {
    res.json({ message: 'Invalid username or password ❌' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
