const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/school.route');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', schoolRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
