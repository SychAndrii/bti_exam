const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
    const html = `<h2>Declaration:</h2>
    <p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.</p>
    <p>Name: <b style="background-color: yellow;">Andrii Sych</b></p>
    <p>Student number: <b style="background-color: yellow;">125752212</b></p>
    <p><a href="/test1">Go to Test1</a></p>`
    res.send(html)
})

app.get('/test1', (req, res) => res.sendFile(path.join(__dirname, '/pages/test1.html')))

app.listen(PORT, () => console.log(`"Express http server listening on ${PORT}`))
