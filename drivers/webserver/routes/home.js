// HTML
const template = `
  <p>Routes:</p>
  <ul>
    <li> GET /users </li> 
    <li> GET /users/:id </li>
  </ul>
`

module.exports = (req, res, next) => {
  res.send(template)
}

