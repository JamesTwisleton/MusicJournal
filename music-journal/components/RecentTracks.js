import { Row, Col, Carousel } from 'react-bootstrap/';

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
            recentTracks: []
        };
    }

    componentDidMount() {
        fetcher('/api/recent-tracks-from-spotify').then((json) => {
            console.log(json);
            this.setState({
                recentTracks: json
            });
        });
    }

    render() {
        return (
            <Col xs={12}>
                {/* <Row className="justify-content-center" xs={12}>
                    <h4>Your Recent Songs</h4>
                </Row> */}
                <Row >
                    <Col xs={12}>
                        <Carousel>
                            {this.state.recentTracks.map(track => 
                                <Carousel.Item key={track.position}>
                                    <img  width="100%" src={track.image.url} alt={track.description}/>
                                    <Carousel.Caption><p>{track.description}</p></Carousel.Caption>
                                </Carousel.Item>                    
                            )}
                        </Carousel>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default RecentTracks;