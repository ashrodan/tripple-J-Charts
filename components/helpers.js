const minifyImg = (uri) => {
    return uri
    const base = 'https://imagecdnnet.imgix.net/'
    const params = `w=100`
    return `${base}${encodeURIComponent(uri)}?${params}`
}

const transformPlay = (play) => {
    console.log(play);

    return {
        title: play.title,
        image: minifyImg(play.releases[0].artwork[0].url),
        artist: play.artists[0].name,
    }
}

export { transformPlay }

// http://resize.abcradio.net.au/qu5uHsfq79sY1MHO-EOYe_4j5BQ=/100x100/center/middle/http%3A%2F%2Fwww.abc.net.au%2Ftriplej%2Falbums%2F58991%2Fcovers%2Foriginal.jpg
// http://resize.abcradio.net.au/100x100/center/middle/http%3A%2F%2Fwww.abc.net.au%2Ftriplej%2Falbums%2F59015%2Fcovers%2Foriginal.jpg
// http://resize.abcradio.net.au/qu5uHsfq79sY1MHO-EOYe_4j5BQ=/100x100/center/middle/http%3A%2F%2Fwww.abc.net.au%2Ftriplej%2Falbums%2F58991%2Fcovers%2Foriginal.jpg
// http://resize.abcradio.net.au/qu5uHsfq79sY1MHO-EOYe_4j5BQ=/100x100/center/middle/http%3A%2F%2Fwww.abc.net.au%2Ftriplej%2Falbums%2F59015%2Fcovers%2Foriginal.jpg