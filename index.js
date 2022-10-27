
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())


const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Server Is Running Learning platfrom')
})


app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);
    const course = courses.find((course) => course.id === id)
    console.log(course);
    res.send(course)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})