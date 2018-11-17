const app = require('./webserver/server')

const PORT = 3000
app.listen(PORT, function () {
  console.log(`Listening on PORT: ${PORT}`);
})