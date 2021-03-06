;(function(window){
  'use strict';

  $('.whats-new-container').on('click',function() {
    $("html, body").animate({ scrollTop: $(window).height() });
  });

  $('.nav-action').click(function(){
    $('html, body').animate({
        // scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  var on = true;
  $('#menu-icon').on('click',function(){
    if (on) {
        $('#site-navigation').find('ul').show(200);
        on = !on;
    }else {
      $('#site-navigation').find('ul').hide(200);
        on = !on;
    }
  });

  // $('.btn-register').on('click',function() {
  //   $('.btn-register').text('Coming soon...');
  //   $('.btn-register').addClass('disable');
  // });

  var animateSpace = 10;
  var adding = 1;
  var animateButton = function(pos) {
    if(pos==undefined) pos=0;
    if(pos>animateSpace || pos<animateSpace*-1) adding*=-1;
    $('.whats-new-container').css({
        'transform': "translateY("+pos+"px)",
        '-ms-transform': "translateY("+pos+"px)",
        '-webkit-transform': "translateY("+pos+"px)"
      });
    setTimeout(function() {
      animateButton(pos+adding);
    },15);
  };
  animateButton();


  var myCenter=new google.maps.LatLng(22.337697,114.1716871);
  var marker;

  function initialize() {
    var styles =   [{
        "elementType": "geometry",
        "stylers": [
          { "weight": 1.4 },
          { "hue": "#00ffdd" },
          { "lightness": 22 },
          { "saturation": -46 },
          { "gamma": 0.76 }
        ]
      }];
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

    var mapProp = {
      center:myCenter,
      zoom:18,
      scrollwheel: false,
      panControl:false,
      zoomControl:false,
      mapTypeControl:false,
      scaleControl:false,
      streetViewControl:false,
      overviewMapControl:false,
      rotateControl:false,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };

    var map=new google.maps.Map(document.getElementById("map"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.BOUNCE
      });

    marker.setMap(map);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }

  google.maps.event.addDomListener(window, 'load', initialize);

  var countDownContainer = $('.countDown');
  var countDownDate = new Date('Oct 3, 2015 00:00:00');

  $(".countDown-longer .textTimer").countdown(countDownDate, function(event) {
    $(this).text(event.strftime('%-D Days, %-H Hours, %-M Minutes, %-S Seconds'))
    if (Date.now() > countDownDate) {
      countDownContainer.hide();
    } else {
      if (countDownContainer.hasClass('hidden')) countDownContainer.removeClass('hidden');
    }
  });
  $(".countDown-shorter .textTimer").countdown(countDownDate, function(event) {
    $(this).text(event.strftime('%-D Days %H:%M:%S'))
    if (Date.now() > countDownDate) {
      countDownContainer.hide();
    } else {
      if (countDownContainer.hasClass('hidden')) countDownContainer.removeClass('hidden');
    }
  });

})(window);
