require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { errorHandler } = require("./middlewares/error-handler.middleware");
const { NODE_ENV } = require("./config");
const { appRouter } = require("./routes/app.router");

const app = express();

// ROUTES
app.use("/api", appRouter);

// MIDDLEWARES
app.use(morgan(NODE_ENV === "production" ? "tiny" : "common"));
app.use(helmet());
app.use(cors());

// ERROR HANDLER
app.use("*", errorHandler);

module.exports = app;
