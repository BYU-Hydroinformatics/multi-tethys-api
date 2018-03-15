'use strict'

const boom = require('boom')
const httpStatus = require('http-status')

const logger = require('../utils/logger')

const shell = require('./shell')

const createNewPortal = async function(req, res) {
    const folderName = req.query.portalSubAdress

    try {

        // Do YOUR ASYNC WORK here

        const path = await shell.checkFolder(folderName);
        // If the above didn't throw any errors, we are good to proceed
        await shell.installTethys(path);


        return res({
            status: 'Good So far'
        })
    } catch (error) {

        if (error.code == 'exists')
            return res(boom.conflict('This Portal Directory already exists. Please choose a different address'));
        else {
            !error.logged && logger.error(error, errorMessage)
            return res(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))

        }
    }
}

module.exports = {
    createNewPortal
}