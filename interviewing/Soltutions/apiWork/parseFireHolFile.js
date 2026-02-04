// parseFileLinesIgnoreComments

const fs = require('fs');
const path = require('path');

const parseFileLinesIgnoreComments = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const linesWithoutComments = lines.filter((line) => !line.startsWith('#'));
    return linesWithoutComments;
}


// test if string is valid ipv6 address
const isIpv6 = (str) => {
    const regex = /^[0-9a-f:]+$/i;
    return regex.test(str);
}




const isIp = (str) => {
    const regex = /^[0-9.]+$/;
    return regex.test(str);
}

// test if a string has only digits 