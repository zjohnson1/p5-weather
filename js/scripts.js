var cheney = '99004';
var spokane = '99201';
var marker = 0;
var ticker = 1;

function test(form){
  var zip = form.inputbox.value;
  alert ("You typed: " + zip);
}

$('div.ui.menu').hide();

$('div.ui.icon.button').click(function(){
  $('div.ui.menu').transition('horizontal flip');
});


$.simpleWeather({



    
    location: spokane,
    woeid: '',
    unit: 'f',
    
    success: function(weather) {
      //hide all of my icons
      $('.myIcon').hide();

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
        $('div p:nth-child(2)').text('High ' + weather.forecast[0].high + ', Low ' + weather.forecast[1].low);
        $('div p:nth-child(4)').text(weather.forecast[1].high);
        $('div p:nth-child(6)').text(weather.forecast[2].high);
        $('div p:nth-child(8)').text(weather.forecast[3].high);
        $('div p:nth-child(10)').text(weather.forecast[4].high);

        if( weather.currently == 'Sunny'){
          $('img.myIcon.Sunny').show();
        }
        else if( weather.currently == 'Cloudy')

      

      console.log(weather);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
    
  });