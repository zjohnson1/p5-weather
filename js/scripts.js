
$('article').hide();
$('div.huge.button').click(function(){
  $('article').transition('drop')

});

$('div.ui.menu').hide();
$('.myIcon').hide();

$('div.ui.icon.button').click(function(){
  $('div.ui.menu').transition('horizontal flip');
});

if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

 var loadWeather = function(location) { 
  $.simpleWeather({

      //create function called testResults which take in a div takes the form in the div
      //and assigns the value wich should be a number zip code to the variable zip
      /*function testResults (div) {

        var zip = div.input.value;
      
      }*/
      

      
      location: location,
      
      
      success: function(weather) {
        //hide all of my icons
        

        //put temp into h1
        $('h1').text(weather.temp + weather.units.temp);

        //put high of the day into h2
        $('.high').text('High ' + weather.high + weather.units.temp);

        //put low of the day into h2
        $('.low').text('Low ' + weather.low + weather.units.temp);


        //enter 5 day data
          $('div a:nth-child(1)').text(weather.forecast[0].day);
          $('div a:nth-child(3)').text(weather.forecast[1].day);
          $('div a:nth-child(5)').text(weather.forecast[2].day);
          $('div a:nth-child(7)').text(weather.forecast[3].day);
          $('div a:nth-child(9)').text(weather.forecast[4].day);

        //enter 5 day weather description
           $('div p:nth-child(2)').text(weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(4)').text(weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(6)').text(weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(8)').text(weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(10)').text(weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[1].low);

          if( weather.currently == 'Sunny'){
            $('img.myIcon.Sunny').show();
          }
          else if( weather.currently == 'Cloudy'){
            $('img.myIcon.Cloudy').show();
          }
          else if( weather.currently == 'Partly Cloudy'){
            $('img.myIcon.Partly').show();
          }
          else if( weather.currently == 'Rainy'){
            $('img.myIcon.Rain').show();
          }
          else if( weather.currently == 'Mostly Cloudy'){
            $('img.myIcon.Cloudy').show();
          }
          else{
            $('img.myIcon.Cloudy').show();
          }

        

        console.log(weather);

      },
      
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
      
    });
  };

$('i.search.icon').on('click', function() {

  var zipcode = $('#getWeather').val();
$.simpleWeather({
            
      location: zipcode,
      
      
      success: function(weather) {
        //hide all of my icons
        

        //put temp into h1
        $('h1').text(weather.temp + weather.units.temp);

        //put high of the day into h2
        $('.high').text('High ' + weather.high + weather.units.temp);

        //put low of the day into h2
        $('.low').text('Low ' + weather.low + weather.units.temp);


        //enter 5 day data
          $('div a:nth-child(1)').text(weather.forecast[0].day);
          $('div a:nth-child(3)').text(weather.forecast[1].day);
          $('div a:nth-child(5)').text(weather.forecast[2].day);
          $('div a:nth-child(7)').text(weather.forecast[3].day);
          $('div a:nth-child(9)').text(weather.forecast[4].day);

        //enter 5 day weather description
           $('div p:nth-child(2)').text(weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(4)').text(weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(6)').text(weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(8)').text(weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[1].low);
          $('div p:nth-child(10)').text(weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[1].low);

          if( weather.currently == 'Sunny'){
            $('img.myIcon.Sunny').show();
          }
          else if( weather.currently == 'Cloudy'){
            $('img.myIcon.Cloudy').show();
          }
          else if( weather.currently == 'Partly Cloudy'){
            $('img.myIcon.Partly').show();
          }
          else if( weather.currently == 'Rainy'){
            $('img.myIcon.Rain').show();
          }
          else if( weather.currently == 'Mostly Cloudy'){
            $('img.myIcon.Cloudy').show();
          }
          else{
            $('h1').text(weather.currently);
          }

        

        console.log(weather);

      },
      
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
      
    });



$('#getWeather').val('');
  
});








    