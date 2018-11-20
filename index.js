const app = require('./interfaces/webserver/server')

const PORT = 3000
app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`);
})