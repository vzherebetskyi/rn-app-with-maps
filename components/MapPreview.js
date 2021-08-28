import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import envVars from '../env';

const MapPreview = props => {
  let imagePreviewUrl;
  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=200x300&maptype=roadmap&markers=color:red%7C${props.location.lat},${props.location.lng}&key=${envVars.googleApi}`;
  }

  return (
    <View style={{...styles.mapPreview, ...props.style}}>
       {props.location ? (
         <Image
           style={styles.mapImage}
           source={{ uri: imagePreviewUrl }}
          />
       ) : (
        props.children
       )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '80%',
  }
});

export default MapPreview;
