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
            carouselIndex: 0
        };
        this.moveCarousel = this.moveCarousel.bind(this);
    }

    componentDidMount() {
        setTimeout(() => console.log('Hello, World!'), 3000);
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
            <div
                className="backgroundDiv"
                style={this.state.recentTracks.length > 0 ? {
                    background: `url(${this.state.recentTracks[this.state.carouselIndex].image.url}) center center/cover no-repeat fixed`,
                    transform: 'scale(1,1)',
                    height: '100vh'
                } : {}}>
                <Row style={{ height: '100vh' }}>
                    <Col xs={6} onClick={() => this.moveCarousel(-1)}>
                    </Col>
                    <Col xs={6} onClick={() => this.moveCarousel(1)}>
                    </Col>
                </Row>


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