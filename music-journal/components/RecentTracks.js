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

    moveCarousel() {
        this.setState({ carouselIndex: (this.state.carouselIndex + 1) % this.state.recentTracks.length })
        console.log(this.state.carouselIndex)
    }

    render() {
        return (
            <div onClick={this.moveCarousel}
                className="backgroundDiv" 
                style={this.state.recentTracks.length > 0 ? {
                    background: `url(${this.state.recentTracks[this.state.carouselIndex].image.url}) center center/cover no-repeat fixed`, 
                    transform: 'scale(1,1)',
                    height: '100vh'} : {}}>
                        <NavigationBar />
                        <p style={{ 
                            background: 'black',
                            color: 'white',
                            fontSize: '50px',
                            textAlign: 'center',
                            opacity: '.8',
                            position: 'absolute',
                            bottom: '0'
                            }}>
                            { this.state.recentTracks.length > 0 ? this.state.recentTracks[this.state.carouselIndex].description : ''}
                        </p>
                {/* <Carousel indicators={false}>
                    {this.state.recentTracks.map(track =>
                        <Carousel.Item key={track.position}>
                            <img width="100%" src={track.image.url} alt={track.description} />
                            <Carousel.Caption class="trackdescription"><p>{track.description}</p></Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel> */}
            </div>
    //         <Col xs={12} class="recenttrackscontainer">
    //             <Row >
    //                 <Col xs={12}>
    //                     <Carousel indicators={false}>
    //                         {this.state.recentTracks.map(track =>
    //                             <Carousel.Item key={track.position}>
    //                                 <img width="100%" src={track.image.url} alt={track.description} />
    //                                 <Carousel.Caption class="trackdescription"><p>{track.description}</p></Carousel.Caption>
    //                             </Carousel.Item>
    //                         )}
    //                     </Carousel>
    //                 </Col>
    //             </Row>
    //     <style global jsx>{`
  
    //     .trackdescription {
    //         border-radius: 0px 0px 20px 20px;
    //         height: 100%;    
    //         color:white;
    //         background: black;
    //         text-align: center;
    //     }
    // `}</style>
    //         </Col>
        )
    }
}

export default RecentTracks;