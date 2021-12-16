const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', Controller.welcome)
router.post('/meetings', Controller.addMeeting)
router.get('/meetings', Controller.getMeetings)

module.exports = router