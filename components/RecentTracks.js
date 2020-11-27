import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';
import withAuth from '../utils/withAuth';

const RecentTracks = (props) => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [recentTracks, setRecentTracks] = useState([]);
    const [scaleDirection, setScaleDirection] = useState(1);
    const [scaleRatio, setScaleRatio] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (scaleRatio > .2) {
                setScaleDirection(-1)
            }
            if (scaleRatio < 0) {
                setScaleDirection(1)
            }
            setScaleRatio(scaleRatio + (.00009 * scaleDirection));
        }, 10);

        fetcher(`/api/recent-tracks-from-spotify?token=${props.token}`)
            .then((response) => {
                setRecentTracks(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    const moveCarousel = (index) => {
        let nextIndex = carouselIndex + index

        if (nextIndex < 0) {
            nextIndex = recentTracks.length - 1
        }

        setCarouselIndex(nextIndex % recentTracks.length);
    }

    return (
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <div
                className="backgroundDiv"
                style={recentTracks.length > 0 ? {
                    background: `url(${recentTracks[carouselIndex].image.url}) center center/cover no-repeat fixed`,
                    transform: `scale(${1 + scaleRatio}, ${1 + scaleRatio})`,
                    height: '100vh'
                } : {}}>
                <div style={{ height: '100%', width: '100%' }}>
                    <div
                        style={{ height: '100%', float: 'left', width: '50%' }}
                        onClick={() => moveCarousel(-1)}
                    />
                    <div
                        style={{ height: '100%', float: 'left', width: '50%' }}
                        onClick={() => moveCarousel(1)}
                    />
                </div>
            </div>

            <p style={{
                background: 'black',
                color: 'white',
                fontSize: '50px',
                textAlign: 'center',
                opacity: '.8',
                position: 'absolute',
                bottom: '0'
            }}>
                {recentTracks.length > 0 ? recentTracks[carouselIndex].description : ''}
            </p>
        </div>
    )
}

export default withAuth(RecentTracks);
