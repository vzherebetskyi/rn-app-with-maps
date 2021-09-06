import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlacesListScreen, { screenOptions } from '../screens/PlacesListScreen';
import PlaceDetailsScreen, { screenOptionsDetails } from '../screens/PlaceDetailsScreen';
import NewPlaceScreen, { screenOptionsNewPlace } from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  }
};

const MyStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen
          name="Places"
          component={PlacesListScreen}
          options={screenOptions}
        />
        <MyStack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
          options={screenOptionsDetails}
        />
        <MyStack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={screenOptionsNewPlace}
        />
        <MyStack.Screen
          name="Map"
          component={MapScreen}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
