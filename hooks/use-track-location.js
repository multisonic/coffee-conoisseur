import { useState } from "react";

const useTrackLocation = () => {
  const [latLong, setLatLong] = useState("");
  const [locationErrorMsg, setLocationErrorMsg] = useState("");

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg(""); // clear to make sure no error msg on success
  };

  const error = () => {
    setLocationErrorMsg("Unable to retrieve your location");
  };
  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return { latLong, handleTrackLocation, locationErrorMsg };
};

export default useTrackLocation;
