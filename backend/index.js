const express = require('express');
const bodyParser = require('body-parser');
const emailRoute = require('./routes');
const cors = require('cors');

const app = express();

env.config();

// Set up CORS middleware
app.use(cors({
    origin: "https://email-api-server-front.vercel.app", // Allow requests from this origin
    methods: ["POST", "GET"], // Allow these HTTP methods
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

app.use('/api', pdfRoute);
// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
