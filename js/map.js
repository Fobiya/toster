
var map;
var richmond = new google.maps.LatLng(49.785833, 73.093136);
var gogcan = new google.maps.LatLng(49.7857964,73.0930302);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {




    // Specify features and elements to define styles.
    var featureOpts = [
        {
            featureType: "all"
        },{
            featureType: "road.arterial",
            elementType: "geometry"

        },{
            featureType: "poi.business",
            elementType: "labels"
        }
    ];

    var mapOptions = {
        zoom: 18,
        center: richmond,
        mapTypeControl: false,
        scrollwheel: false,
        zoomControl: true,
        mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var customMapType = new google.maps.StyledMapType(featureOpts);

    var contentString =

        '<div id="infowindow-content">'+
        '<ul>'+
        '<li><div class="street">Казахстан, Караганда,<br> ул. Бытовая 15</div></li>'+
        '<li><div class="info"><span><i class="fa fa-envelope" aria-hidden="true"></i></span> <a href="mail.to:sales@tak.parts">sales@tak.parts</a></div></li>'+
        '<li><div class="info"><span><i class="fa fa-volume-control-phone" aria-hidden="true"></i></span><a href="tel:+77021206007">+7 702 120 60 07</a></div></li>'+
        '</ul>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var icon = {

        anchor: new google.maps.Point(0,0),
        strokeWeight: 0,
        scale: 1/4
    }

    var marker = new google.maps.Marker({
        position: gogcan,
        map: map,
        draggable: false,
        icon: icon,
        title: 'Takparts'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", function() {

    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});