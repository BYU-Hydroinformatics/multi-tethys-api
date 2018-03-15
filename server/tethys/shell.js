const shell = require('shelljs')
const logger = require('../utils/logger')
const { execFile } = require('child_process')

let tethysMain = '/Users/student/Desktop/tethys-main'


const checkFolder = async function(folderName) {

    // First Let's check if this install already exists, if not create the install directory so it's blocked for this user. 
    shell.cd(tethysMain);
    let found = shell.ls('-d', '*/').find((file) => file == `${folderName}/`);
    // DISABLING CHECK BELOW FOR NOW
    if (found && false)
        throw { code: "exists" };
    else {
        let path = `${tethysMain}/${folderName}`
        shell.mkdir('-p', path);
        return { success: true, path }
    }

}

const installTethys = async function(installLocation) {



    shell.cd(tethysMain);
    let found = shell.ls('-d', '*/').find((file) => file == `${folderName}/`);
    // DISABLING CHECK BELOW FOR NOW
    if (found && false)
        throw { code: "exists" };
    else {
        let path = `${tethysMain}/${folderName}`
        shell.mkdir('-p', path);
        return { success: true, path }
    }

}


module.exports = { checkFolder, installTethys };