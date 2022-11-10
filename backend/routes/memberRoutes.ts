import { Router } from "express"
import Member from '../models/Member'
const router = Router()


// Get all members
router.get('/members', async (req, res) => {
    try {
        const members = await Member.find()
        res.send(members)
    } catch (error) {
        res.send(error)
    }
})

// Create a new member
router.post('/members', async (req, res) => {
    const member = new Member(req.body)
    try {
        if(!member.gangId){
            throw 'gangId should not be null'
        }
            await member.save()
            res.json(member)
    } catch (error) {
        res.send(error)
    }
})

// Get one gang
router.get('/members/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id)
        res.send(member)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one gang
router.patch('/members/:id', async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedMember)
    } catch (error) {
        res.send(error)
    }
})

// Delete one gang
router.delete('/members/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id)
        res.send(member)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router