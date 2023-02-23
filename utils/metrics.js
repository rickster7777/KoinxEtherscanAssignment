const express = require('express')
const client = require("prom-client");

const app = express();

const restResponseTimeHistogram = new client.Histogram({
  name: "rest_response_time_duration_seconds",
  help: "REST API response time in seconds",
  labelNames: ["method", "route", "status_code"],
});

const counter = new client.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests'
});

function startMetricsServer() {
  const collectDefaultMetrics = client.collectDefaultMetrics;

  collectDefaultMetrics();

  app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);

    return res.send(await client.register.metrics());
  });

  app.listen(9100, () => {
    console.log("Metrics server started at http://localhost:9100");
  });
}
module.exports = {counter, restResponseTimeHistogram, startMetricsServer};