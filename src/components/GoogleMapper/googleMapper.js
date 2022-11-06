import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import className from 'classnames/bind';
import { useMemo } from 'react';
import styles from './GoogleMapper.module.scss';

const cx = className.bind(styles);

function Map() {
    const center = useMemo(() => ({ lat: 10.740991646216226, lng: 106.65872675315354 }), []);
    return (
        <GoogleMap zoom={17.5} center={center} mapContainerClassName={cx('container')}>
            <MarkerF position={center} />
        </GoogleMap>
    );
}

function GoogleMapComponent() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

export default GoogleMapComponent;
