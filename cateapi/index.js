// // const express = require('express');
// // const cors = require('cors');
// // require('dotenv').config();
// // const connectDB = require('./config/db'); // Import DB connection function
// // const multer = require('multer');
// // const bodyParser = require('body-parser');



// // // Middleware  
// // const app = express();
// // app.use(express.json());
// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Connect to MongoDB
// // connectDB();  

// // // Middleware for file upload (Multer)
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/'); // Ensure 'uploads/' directory exists
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + '-' + file.originalname);
// //   },
// // });
// // const upload = multer({ storage: storage });

// // // Import team routes
// // const teamRoutes = require('./routes/teamroute');

// // // Use the team routes
// // app.use('/api', teamRoutes); // Use '/api' as the base route

// // // Import auth routes
// // const authRoutes = require('./routes/auth');
// // app.use('/api/auth', authRoutes);

// // // Start the server
// // const PORT = process.env.PORT || 4000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });
// // main server file
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/db'); // Import DB connection function
// const multer = require('multer');
// const bodyParser = require('body-parser');

// // Middleware  
// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// connectDB();  

// // Middleware for file upload (Multer)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Ensure 'uploads/' directory exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// // Import team routes
// const teamRoutes = require('./routes/teamroute');

// // Use the team routes
// app.use('/api', teamRoutes); // Use '/api' as the base route

// // Import auth routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// index.js or server.js

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

// Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
