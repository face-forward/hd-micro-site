const express = require('express')
const router = express.Router()
const post = require('../models/cars.model')
const m = require('../helpers/middlewares')

/* All Cars */
router.get('/', async (req, res) => {
    await post.getPosts()
    .then(posts => res.json(posts))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A post by id */
router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await post.getPost(id)
    .then(post => res.json(post))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new post */
router.post('/:id', m.checkFieldsPost, async (req, res) => {
    const id = req.params.id
    await post.insertPost(req.body, id)
    .then(post => res.status(201).json({
        message: `The post #${post.id} has been created`,
        content: post
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Delete a post */
router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await post.deletePost(id)
    .then(post => res.json({
        message: `The post #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router
