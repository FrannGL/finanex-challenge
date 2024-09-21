import React from "react";
import { GoogleMap, LoadScript, Polyline, Marker } from "@react-google-maps/api";
import data from "@/data/data.json";

const Map = () => {
	const API_LEY = process.env.NEXT_PUBLIC_GOOGLE_API;

	const containerStyle = {
		width: "100%",
		height: "500px",
	};

	const routeData = data.route_data;
	const center = { lat: routeData.pin_latitude, lng: routeData.pin_longitude };

	return (
		<LoadScript googleMapsApiKey={API_LEY || ""}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
				{routeData.route.map((route, idx) => (
					<Polyline
						key={idx}
						path={route.path.map(([lat, lng]) => ({ lat, lng }))}
						options={{ strokeColor: "#FF0000" }}
					/>
				))}
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
