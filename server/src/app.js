const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes");
const helmet = require("helmet");
const ErrorResponse = require("./utils/errorResponse");
var cron = require("node-cron");
const cronJob = require("./utils/cron");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use(routes);

app.use(require("./middlewares/error"));

app.use(require("./utils/cron"));

cron.schedule("* * * * *", () => {
  cronJob();
});

app.use((req, res, next) => {
  next(
    new ErrorResponse(
      `API not found - ${req.originalUrl}`,
      httpStatus.NOT_FOUND
    )
  );
});

module.exports = app;
