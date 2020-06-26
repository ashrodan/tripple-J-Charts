const fetch = require('node-fetch');

export default async (req, res) => {
    // const recentItems = await
    const url = 'https://music.abcradio.net.au/api/v1/recordings/plays.json?order=desc&limit=50&service=triplej&from=2019-11-15T12:00:00Z&to=2019-11-15T13:00:00Z'
    const res = await fetch(url, {
        method: 'get',
        body: JSON.stringify(body),
    });
    console.log(res.items.length);

    res.json({ name: 'John', email: 'john@example.com' })
}