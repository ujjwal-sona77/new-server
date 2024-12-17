const http = require("http");
const app = require("./app");

http.createServer(app).listen(process.env.PORT, () => {
  console.log("Server Started Correctly");
});
