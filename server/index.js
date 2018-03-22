require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

// Import controllers
const { getEventsInfo, getRSVPs } = require("./controllers/meetupCtrl");

const app = express();

// SERVE FRONTEND
app.use(express.static(`${__dirname}/../build/`));

// Attach Middlewares
app.use(json());
app.use(cors());

// API Endpoints
app.get("/api/eventsInfo/:groupName", getEventsInfo);
app.get("/api/rsvps/:groupName/:eventID", getRSVPs);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`I'm all the way up! Running on: ${port}`));
