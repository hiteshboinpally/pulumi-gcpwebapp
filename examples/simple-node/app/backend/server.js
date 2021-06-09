const express = require('express');
const cors = require('cors');
const app = express();

// Allowing all cross-origin access -- this is dangerous and not ideal for production
// You should instead only specify the URL necessary.

const FRONTEND_URL = "https://storage.googleapis.com";

app.use(cors({
  origin: FRONTEND_URL,
}));

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/randNum', (req, res) => {
    try {
        res.send({randNum: Math.floor(Math.random() * 100)});
    } catch (err) {
        res.send(500).send("Error in server");
    }
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});