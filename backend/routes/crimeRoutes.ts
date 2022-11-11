import { Router } from "express"
import Crime from '../models/Crime'
const router = Router()


// Get all crimes
router.get('/crimes', async (req, res) => {
    try {
        const crimes = await Crime.find()
        res.send(crimes)
    } catch (error) {
        res.send(error)
    }
})

// Create a new crime
router.post('/crimes', async (req, res) => {
    const crime = new Crime(req.body)
    try {
            await crime.save()
            res.json(crime)
    } catch (error) {
        res.send(error)
    }
})

// Get one crime
router.get('/crimes/:id', async (req, res) => {
    try {
        const crime = await Crime.findById(req.params.id)
        res.send(crime)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one crime
router.patch('/crimes/:id', async (req, res) => {
    try {
        const updatedCrime = await Crime.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedCrime)
    } catch (error) {
        res.send(error)
    }
})

// Delete one crime
router.delete('/crimes/:id', async (req, res) => {
    try {
        const crime = await Crime.findByIdAndDelete(req.params.id)
        res.send(crime)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router