'use strict'

const config = require('config')
const handler = require('./handler')
const validations = require('./validation')

const API_PATH = '/api/1.0'

const routes = []

routes.push({
    path: `${API_PATH}/addportal`,
    method: 'GET',
    handler: handler.createNewPortal,
    config: {
        tags: ['api','new','tethys','portal'],
        validate: validations.newPortal
    }
}, )

module.exports = routes