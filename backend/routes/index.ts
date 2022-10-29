import { Router } from "express"
import Gang from '../models/Gang'
const router = Router()


router.get('/', (req, res) => {
    res.send("REST API is working!")
})

/* 
    Gangs routes
*/

// Get all gangs
router.get('/gangs', async (req, res) => {
    try {
        const gangs = await Gang.find()
        res.send(gangs)
    } catch (error) {
        res.send(error)
    }
})

// Create a new gang
router.post('/gangs', async (req, res) => {
    const gang = new Gang(req.body)
    try {
        await gang.save()
        res.json(gang)
    } catch (error) {
        res.send(error)
    }
})

// router.patch('/songs/:id', async (req, res) => {
//     const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     res.send(updatedSong)
// })

// router.get('/songs/:id', async (req, res) => {
//     try {
//         const song = await Song.findById(req.params.id)
//         res.send(song)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

// router.delete('/songs/:id', async (req, res) => {
//     try {
//         const song = await Song.findByIdAndDelete(req.params.id)
//         res.send(song)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })
export default router