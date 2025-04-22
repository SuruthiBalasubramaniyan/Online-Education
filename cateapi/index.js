require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected to Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
const teamRoutes = require('./routes/teamroute');
app.use('/api', teamRoutes); // Includes /contact
const auth = require('./routes/auth');
app.use('/api/auth', auth);

// Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
