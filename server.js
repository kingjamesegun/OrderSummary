const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// oder_summary.json
const data = require('./order_summary.json');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// ** MIDDLEWARE ** //
const whitelist = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://order-summary-kjs.herokuapp.com/',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));
// CUSTOMER'S PERSONAL DETAILS ROUTES
app.get('/customer', (req, res) => {
  return res.json({ message: 'sucessful', data: data.user });
});

// ORDER ROUTES
app.get('/order', (req, res) => {
  return res.json({ message: 'successful', data: data.items });
});

// routes
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(PORT, () => {
  console.log('Running on port: ' + PORT);
});
