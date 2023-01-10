const gadgets = require("express");
const application = gadgets();

application.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

application.listen(3000);

module.exports = application;
