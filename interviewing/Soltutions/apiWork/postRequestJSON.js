var https = require('https');

function getHTTPSResponseJSON(url, postData) {
    
    const postPayload = JSON.stringify(postData);

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postPayload),
        },
    };

    // console.log('URL RESULT', new URL(url))

    // let url object parse out hostname and path
    const { hostname, pathname } = new URL(url);
    // pathname -> path
    postOptions = { ...postOptions, hostname, path: pathname}

    console.log('POST OPTIONS', postOptions)
    
    return new Promise((resolve, reject) => {
        const req = https.request(postOptions, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

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

        req.write(postPayload);
        req.end();
    });
};

async function test() {
    const post = await getHTTPSResponseJSON(
        'https://jsonplaceholder.typicode.com/posts',
        { field1: 'value1' },
    );
    console.log('got the following post', post)    
}

test();