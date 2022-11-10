import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import baseRoutes from './routes/index'
import gangRoutes from './routes/gangRoutes'
import memberRoutes from './routes/memberRoutes'
import placeRoutes from './routes/placeRoutes'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use("/api", baseRoutes)
app.use("/api", gangRoutes)
app.use("/api", memberRoutes)
app.use("/api", placeRoutes)
export default app