const app = require('./routes/app.js')
const http = require('http')
const port = process.env.PORT || 4000

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server currently running at PORT ${port}`)
})
