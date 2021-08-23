import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator({
  Places: PlacesListScreen,
  PlaceDetails: PlaceDetailsScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
  }
});

export default createAppContainer(PlacesNavigator);
