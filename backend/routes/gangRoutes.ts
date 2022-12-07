import { Router } from "express"
import Gang from '../models/Gang'
import Member from "../models/Member"
const router = Router()


// Get all gangs
router.get('/gangs', async (req, res) => {
    try {
        const gangs = await Gang.find().populate('rivalries').populate('alliances').populate('leader').populate('reunionPlace')
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

// Get one gang
router.get('/gangs/:id', async (req, res) => {
    try {
        const gang = await Gang.findById(req.params.id).populate('reunionPlace').populate('crimes').populate('leader').populate('members').populate('rivalries').populate('alliances')
        res.send(gang)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one gang
router.patch('/gangs/:id', async (req, res) => {
    try {
        const updatedGang = await Gang.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedGang)
    } catch (error) {
        res.send(error)
    }
})

// Delete one gang
router.delete('/gangs/:id', async (req, res) => {
    try {
        const gang = await Gang.findByIdAndDelete(req.params.id)
        // Cascade deletion for members of the gang
        if(gang){
            for (const member of gang.members) {
                await Member.findByIdAndDelete(member)
            }
        }
        res.send(gang)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router