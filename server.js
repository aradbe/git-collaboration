

console.log("This is server");


// Import express so we can create a server
const express = require("express")

// Create an express app
const app = express()

// Choose the port for the server
const PORT = 3000

// Serve all static files from the dist folder
// This means index.html, style.css, main.js, images, etc. can be loaded by the browser
app.use(express.static("dist"))

// Create a GET route called /message
// When someone goes to http://localhost:3000/message,
// the server will send back this secret message
app.get("/message", function (req, res) {
  res.send("This is a secret message from the back-end")
})

// Start the server
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`)
})