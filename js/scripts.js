  $.simpleWeather({
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',


    success: function(weather) {
        $('.temp').text(weather.temp);

        $('.current').text(weather.currently);
    },


    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }


  });