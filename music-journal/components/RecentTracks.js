import { Row, Col, Carousel } from 'react-bootstrap/';
import { NavigationBar } from '../components/NavigationBar';

const fetcher = (url) =>
    fetch(url, {
        method: 'GET',
    }).then((res) => res.json());


class RecentTracks extends React.Component {

    static async getInitialProps(ctx) {
        const { firebaseToken } = cookies(ctx);
        if (!firebaseToken) {
            return {}
        }
        return { firebaseToken };
    }

    constructor(props) {
        super(props);
        this.state = {
            recentTracks: [],
            carouselIndex: 0,
            scaleRatio: 0,
            scaleDirection: 1
        };
        this.moveCarousel = this.moveCarousel.bind(this);
    }

    componentDidMount() {
        setTimeout(() => console.log('Hello, World!'), 3000);
        setInterval(() => {
            if (this.state.scaleRatio > .2) {
                this.setState({scaleDirection: -1})
            }
            if (this.state.scaleRatio < 0) {
                this.setState({scaleDirection: 1})
            }
            this.setState({scaleRatio: this.state.scaleRatio + (.00009 * this.state.scaleDirection) }, () => console.log(this.state.scaleRatio));
        }, 10);
        fetcher('/api/recent-tracks-from-spotify').then((json) => {
            this.setState({
                recentTracks: json
            });
        });
    }

    moveCarousel(index) {
        let nextIndex = this.state.carouselIndex + index
        if(nextIndex < 0) {
            nextIndex = this.state.recentTracks.length - 1
        }
        this.setState({ carouselIndex: nextIndex % this.state.recentTracks.length })
        console.log(this.state.carouselIndex)
    }

    render() {
        return (
            <div style={{overflowX: 'hidden',overflowY: 'hidden'}}>
                <div
                    className="backgroundDiv"
                    style={this.state.recentTracks.length > 0 ? {
                        background: `url(${this.state.recentTracks[this.state.carouselIndex].image.url}) center center/cover no-repeat fixed`,
                        transform: `scale(${ 1 + this.state.scaleRatio}, ${ 1 + this.state.scaleRatio })`,
                        height: '100vh'
                    } : {}}>
                    <div  style={{ height: '100%', width: '100%' }}>
                        <div style={{ height: '100%', float: 'left', width: '50%' }} onClick={() => this.moveCarousel(-1)}></div>
                        <div style={{  height: '100%', float: 'left', width: '50%' }} onClick={() => this.moveCarousel(1)}></div>
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
                        {this.state.recentTracks.length > 0 ? this.state.recentTracks[this.state.carouselIndex].description : ''}
                </p>
            </div>
        )
    }
}

export default RecentTracks;