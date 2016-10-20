


$(document).ready(function() {

if ( $(window).width() < 700 ) {

     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map-canvas", {
                center: [64.538333, 40.518768],
                zoom: 17
            }); 
            
   

var myPlacemark = new ymaps.Placemark([64.538333, 40.518768], {
    hintContent: 'TEXT'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


            // Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
            myMap.geoObjects.add(myPlacemark);
        }
    } else {
        
     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map-canvas", {
                center: [64.538333, 40.515227],
                zoom: 17
            }); 
            
   

var myPlacemark = new ymaps.Placemark([64.538333, 40.518768], {
    hintContent: 'TEXT'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


            // Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
            myMap.geoObjects.add(myPlacemark);
        }
    }


});