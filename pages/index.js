import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import SongList from '../components/SongList'
import { transformPlay } from '../components/helpers'

const TESTOBJ = [{
    image: 'http://www.abc.net.au/triplej/albums/59131/covers/original.jpg',
    title: 'test title',
    artist: 'test artist'
}]

const Index = props => (
    <Layout>
        <div>
            <p> Hello World and Ash</p>
        </div >
        {console.log(props.plays[0])}
        <SongList songs={props.plays} />
        {/* <ul>
            {props.plays.map(play => (
                <li key={play.arid}>
                    <Link href="/p/[id]" as={`/p/${play.arid}`}>
                        <a>{play.title} - {play.artists[0].name || 'unknown'}</a>
                    </Link>
                </li>
            ))}
        </ul> */}
    </Layout>
)



Index.getInitialProps = async function () {
    const uri = 'https://music.abcradio.net.au/api/v1/recordings/plays.json?order=desc&limit=50&service=triplej&from=2019-11-02T13:00:00Z&to=2019-11-09T13:00:00Z'
    // https://api.tvmaze.com/search/shows?q=batman
    const res = await fetch(uri)

    const data = await res.json()
    // console.log(data)
    console.log(JSON.stringify(data.items[0], null, 2))

    console.log(`fetched data count: ${data.items.length}`)

    return {
        plays: data.items.map(play => transformPlay(play))
    }
}
export default Index