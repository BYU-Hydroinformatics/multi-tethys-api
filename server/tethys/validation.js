'use strict'

const joi = require('joi')

const validations = {
  newPortal: {
    headers: {},
    query: {
      portalName: joi.string().trim().required().description('Name of the Portal'),
      portalSubAdress: joi.string().trim().required().description('SubDir ex: wmo will create a new tethys portal at : wmo-tethys.byu.edu/wmo'),
      admin_username: joi.string().trim().description('username of the portal Admin. Default: admin').default('admin')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = validations
