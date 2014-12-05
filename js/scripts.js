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
//hide zip menu
$("div.ui.menu").hide();

$("div.ui.icon.button").click(function(){
  $("div.ui.menu").transition("browse right");
});