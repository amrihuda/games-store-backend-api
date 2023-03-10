const express = require("express")
const app = express()

require("dotenv").config()
const port = process.env.PORT || 3000

const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

const routes = require("./routes")
app.use(routes)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

app.locals.rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

app.locals.date = (date) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
}