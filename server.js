import express from 'express'
import path from 'path';


const __dirname = path.resolve()
const app = express()
app.use(express.static(path.resolve( __dirname ,"public")));




app.get('/api',function (req, res) {
    res.status(200).sendFile(path.resolve( __dirname ,"components","Activity.html"))
   })
app.get('/api/Map',function (req, res) {
    res.status(200).sendFile(path.resolve( __dirname ,"components","Map.html"))
   })
app.get('/api/Timer',function (req, res) {
    res.status(200).sendFile(path.resolve( __dirname ,"components","Timer.html"))
   })
app.get('*', function (req, res) {
    console.log("server:",req.originalUrl)
    res.sendFile(path.resolve( __dirname ,"public","index.html"))
})



app.listen(3000)