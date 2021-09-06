import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Colors from '../constants/Colors';

const MapScreen = props => {
  const initialLocation = props.route.params && props.route.params.initialLocation;
  const readonly = props.route.params && props.route.params.readonly;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = event => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      // Alert.
      return;
    }
    props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    const readonly = navData.route.params && navData.route.params.readonly;
    if (readonly) {
      return {};
    } else {
      props.navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity style={styles.headerButton} onPress={savePickedLocationHandler}>
            <Text style={styles.headerButtonText}>
              Save
            </Text>
          </TouchableOpacity>
          )      
      });
    }
  }, [savePickedLocationHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates &&
        <Marker
          title="Picked Location"
          coordinate={markerCoordinates}>
        </Marker>
      }
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? '#fff' : Colors.primary,
  }
});
  
export default MapScreen;
