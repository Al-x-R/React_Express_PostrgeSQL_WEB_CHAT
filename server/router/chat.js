const chatRouter = require('express').Router()
const { index } = require('../controllers/chatController')
const { validate } = require('../validators')
const { auth } = require('../middleware/auth')
const { chatFile } = require('../middleware/fileUpload')

chatRouter.get('/', [auth], index)

/*chatRouter.get('/messages', [auth], messages)
chatRouter.post('/create', [auth], create)
chatRouter.post('/upload-image', [auth, chatFile], imageUpload)
chatRouter.post('/add-user-to-group', auth, addUserToGroup)
chatRouter.post('/leave-current-chat', auth, leaveCurrentChat)
chatRouter.delete('/:id', [auth], deleteChat)*/

module.exports = chatRouter