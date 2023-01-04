import { useEffect, useState } from "react";
import * as Location from "expo-location";

interface Location {
  latitude: number | undefined;
  longitude: number | undefined;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    latitude: undefined,
    longitude: undefined,
  });

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const result = await Location.getLastKnownPositionAsync();
      const latitude = result?.coords.latitude;
      const longitude = result?.coords.longitude;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
