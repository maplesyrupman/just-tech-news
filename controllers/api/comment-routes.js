const router = require('express').Router()
const { text } = require('express')
const { Comment } = require('../../models')

router.get('/', (req, res) => {
    Comment.findAll({
        order: [['created_at', 'DESC']],
        attributes: ['comment_text']
    })
    .then(dbCommentData => res.status(200).json(dbCommentData))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
    const { comment_text, post_id } = req.body
    const user_id = req.session.user_id
    if (req.session) {
        Comment.create({
            comment_text,
            user_id,
            post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    }
})

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'no comment found with that id' })
            return
        }
        res.status(200).json(dbCommentData)
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router