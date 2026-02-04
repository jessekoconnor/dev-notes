const fs = require('fs').promises;
const main = async () => {
    try {
        const parsedJson = JSON.parse(await fs.readFile('./audit-log-response.json')); 
        const { data } = parsedJson;
        let fields = ['updatedAt', 'publishedAt', 'createdAt', 'expiresAt'];

        data.forEach( (elem, index) => {
            fields.forEach(field => {
                elem[field] = elem.attributes[field];
            });
            elem.originalIndex = index;
        });

        // console.log('yoyo', JSON.stringify(data, null, 2));
        const originalOrder = [...data];
        // console.log('originalOrder any sorting:');
        // console.table(originalOrder, ['id', ...fields,'originalIndex']);

        // TODO SORT

        const sortedByPublishedAt = [...data].sort((elem1, elem2) => new Date(elem2.publishedAt) - new Date(elem1.publishedAt));
        console.log('sortedByPublishedAt sorting:', JSON.stringify(sortedByPublishedAt, null, 2));
        debugger;
    } catch (err) {
        console.error('There was a problem during script execution', err);
    }
}

main();