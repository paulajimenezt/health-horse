const express = require("express");

const db = require("./db/models");
const horsesRouter = require("./src/routes/horse");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/horses", horsesRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
});
