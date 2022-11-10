import { Router } from "express"
import Place from '../models/Place'
const router = Router()


// Get all places
router.get('/places', async (req, res) => {
    try {
        const places = await Place.find()
        res.send(places)
    } catch (error) {
        res.send(error)
    }
})

// Create a new place
router.post('/places', async (req, res) => {
    const place = new Place(req.body)
    try {
        await place.save()
        res.json(place)
    } catch (error) {
        res.send(error)
    }
})

// Get one place
router.get('/places/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id)
        res.send(place)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one place
router.patch('/places/:id', async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedPlace)
    } catch (error) {
        res.send(error)
    }
})

// Delete one place
router.delete('/places/:id', async (req, res) => {
    try {
        const place = await Place.findByIdAndDelete(req.params.id)
        res.send(place)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router