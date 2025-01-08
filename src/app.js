import express from 'express'
import cors from "cors"
// to access and set users cookies
import cookieParser from 'cookie-parser'

const app = express()

//used for middleware or configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//best practices and preparation for data (express configuration)
// from form
app.use(express.json({limit: "16kb"}))

//data from url
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))
// for cookies
app.use(cookieParser())


export {app}