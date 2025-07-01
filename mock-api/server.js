const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Enable CORS
server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Add JSON parser middleware
server.use(jsonServer.defaults({
  static: 'public',
  logger: true
}));

// Login endpoint
server.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get('users').find({ email }).value();
  
  if (user && user.password === password) {
    res.json({ success: true, token: 'mock-token', user: { id: user.id, email: user.email, name: user.name } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Register endpoint
server.post('/api/register', (req, res) => {
  const { email, password, name } = req.body;
  const existingUser = router.db.get('users').find({ email }).value();
  
  if (existingUser) {
    res.status(400).json({ success: false, message: 'Email already registered' });
    return;
  }

  const newUser = {
    id: router.db.get('users').value().length + 1,
    email,
    password,
    name,
    verified: false
  };

  router.db.get('users').push(newUser).write();
  res.json({ success: true, message: 'Registration successful' });
});

// Verify email endpoint
server.post('/api/verify', (req, res) => {
  const { email, code } = req.body;
  const storedCode = router.db.get('verificationCodes').value()[email];
  
  if (storedCode === code) {
    const user = router.db.get('users').find({ email }).value();
    if (user) {
      router.db.get('users').find({ email }).assign({ verified: true }).write();
      res.json({ success: true, message: 'Email verified successfully' });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Invalid verification code' });
  }
});

// Reset password endpoint
server.post('/api/reset-password', (req, res) => {
  const { email } = req.body;
  const user = router.db.get('users').find({ email }).value();
  
  if (user) {
    router.db.get('verificationCodes').assign({
      ...router.db.get('verificationCodes').value(),
      [email]: Math.random().toString().slice(2, 8)
    }).write();
    res.json({ success: true, message: 'Password reset link sent' });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
