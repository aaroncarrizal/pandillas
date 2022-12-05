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
            let gang = await Gang.findById(member.gangId)
            if(gang){
                // Add member to gang
                gang.members.push(member.id)
                // Increase number of members
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
        const oldMember = await Member.findById(req.params.id)
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
        // If member changed gang
        if(oldMember?.gangId != updatedMember?.gangId){
            let oldGang = await Gang.findById(oldMember?.gangId)
            if(oldGang && oldMember && updatedMember){
                // If member was the leader
                if(oldGang.leader == oldMember.id){
                    oldGang.leader = undefined
                }
                // Delete member from oldGang
                for(let i = 0; i < oldGang.members.length; i++){
                    if(oldGang.members[i].toString() == oldMember.id){
                        oldGang.members.splice(i,1)
                    }
                }
                oldGang.numMembers = oldGang.members.length
                await oldGang.save()
                // Add member to new gang
                let newGang = await Gang.findById(updatedMember.gangId)
                if(newGang){
                    // Add member to gang
                    newGang.members.push(updatedMember.id)
                    // Increase number of members
                    newGang.numMembers = newGang.members.length
                    await newGang.save()
                }
            }
        }
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