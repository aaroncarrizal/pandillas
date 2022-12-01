import { Router } from "express"
import Member from '../models/Member'
import Gang from '../models/Gang'
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
            const gang = await Gang.findById(member.gangId)
            if(gang){
                gang.members.push(member.id)
                gang.numMembers = gang.members.length
                gang.save()
            }
            res.json(member)
    } catch (error) {
        res.send(error)
    }
})

// Get one member
router.get('/members/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id).populate('crimes')
        res.send(member)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one member
router.patch('/members/:id', async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedMember)
    } catch (error) {
        res.send(error)
    }
})

// Delete one member
router.delete('/members/:id', async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id)
        if(member){
            let gang = await Gang.findById(member.gangId)
            if(gang){
                // Delete member from gang
                for(let i = 0; i < gang.members.length; i++){
                    if(gang.members[i].toString() == member.id){
                        gang.members.splice(i,1)
                    }
                }
                gang.numMembers = gang.members.length
                gang.save()
                }
            }
        res.send(member)
    } catch (error) {
        res.status(404).send(error)
    }
})

export default router