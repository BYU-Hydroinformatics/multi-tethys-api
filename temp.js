var shell = require('shelljs');

// First Let's check if this install already exists, if not create the install directory so it's blocked for this user. 

let tethysMain = '/Users/student/Desktop/tethys-main';
let folderToCheck = 'newFolder';

shell.cd(tethysMain);

let found = shell.ls('-d', '*/').find( (file) => file == `${folderToCheck}/`);

if(found)
	console.log('Already Exists');
else
	shell.mkdir('-p',`${tethysMain}/${folderToCheck}`);


