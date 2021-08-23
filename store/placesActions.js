export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = title => {
    return {
      title: ADD_PLACE,
      placeData: {
        title,
      }
    };
};