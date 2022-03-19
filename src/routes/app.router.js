const express = require("express");

const appRouter = express.Router();

// API ROUTE -> /api
appRouter
  .route("/")
  .get((req, res) => res.status(200).send("Hello, from the GET /api route"))
  .post((req, res) => res.status(200).send("Hello, from the POST /api route"));

module.exports = { appRouter };
