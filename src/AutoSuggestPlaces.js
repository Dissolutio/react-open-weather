const googlePlaces = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&libraries=places`;
console.log(window.google);

getGooglePlacesSuggestions = (input) => {
  axios
    .get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
      params: {
        key: `${process.env.REACT_APP_GOOGLE_MAPS_API}`,
        input: `${input}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
}
