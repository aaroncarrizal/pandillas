require('dotenv').config()
import { Router } from "express"
import User from '../models/User'
import authenticateToken from "../middleware/auth"
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = Router()


// Get all users
router.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
})

// Create a new user
router.post('/users', authenticateToken, async (req, res) => {
    const user = new User(req.body)
    try {
        // Encrypt the password
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        res.json(user)
    } catch (error) {
        res.send(error)
    }
})

// Get one user
router.get('/users/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Edit one user
router.patch('/users/:id', authenticateToken, async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedUser)
    } catch (error) {
        res.send(error)
    }
})

// Delete one user
router.delete('/users/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

//Log in user
router.post('/users/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email})
        // Check if user exists
        if(user == null){
            throw "User does not exist"
        }
        // Check if password is correct
        if(await bcrypt.compare(req.body.password, user.password)){
            const accessToken = jwt.sign(user.email, process.env.ACCESS_TOKEN_SECRET)
            res.json({ 
                accessToken: accessToken,
                role: user.role
            })
        }
    } catch (error) {
        res.send(error)
    }
})


export default router