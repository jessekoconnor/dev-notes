var https = require('node:https');

function getHTTPSResponseJSON(url, callback) {
    
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
};

async function test() {
    const posts = await getHTTPSResponseJSON('https://jsonplaceholder.typicode.com/posts/1');
    console.log('got the following posts', posts)    
}

test();