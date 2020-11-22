import GoogleMapReact from 'google-map-react';
const MapItem = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'purple',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class Map extends React.Component {
    static defaultProps = {
        center: { lat: 50.82551352099586, lng: -0.13538314692218156 },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MapItem
                        lat={50.82551352099586}
                        lng={-0.13538314692218156}
                        text={'Music Journal'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;