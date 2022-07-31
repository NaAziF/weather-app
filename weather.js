

//adding event listner to Search button

//let search = document.getElementById("searchWeather");



//search.addEventListener('click',showWeather);

let CityName = document.getElementById('cityName');

CityName = CityName.value;



function showWeather() {

    let CityName = document.getElementById('cityName');

    CityName = CityName.value;



    //alert(CityName)

    if (CityName == "") {



        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
let faf=getLocation()
function showPosition(position){
    console.log(position);
            let lat=position.coords.latitude ;
             let lon=  position.coords.longitude;
             let latLon=lat+","+lon;
        funShow(latLon)
}

    }

    else {

        funShow(CityName)
    }

    //sending request to api
    function funShow(CityName1) {


        const xhr = new XMLHttpRequest();

        let url = `https://api.weatherapi.com/v1/current.json?key=fb571d53a9af4e10bbb45633222007&q=${CityName1}`

        xhr.open('GET', url, true)

        xhr.onload = function () {

            let res = this.responseText;

            const obj1 = JSON.parse(res);

            //opeing the json data



            const locationObj = obj1.location;

            const currentObj = obj1.current;

            document.write("<h2>Current Weather</h2>");

            const currentKeys = Object.keys(currentObj);

            let currentObjLen = currentKeys.length;

            //displaying the weather info

            for (i = 0; i < currentObjLen; i++) {

                if (currentKeys[i] == "condition") {

                    tex = "text"

                    document.write("<b>Condition:</b>" + obj1.current.condition.text + " <br>")

                    document.write("<img src= " + obj1.current.condition.icon + " alt='image not loaded'><br>")



                    continue;

                }

                document.write("<b>" + currentKeys[i] + ":</b>" + currentObj[currentKeys[i]] + "<br>");



            }





































            //displaying the location info





            let locationKeys = Object.keys(locationObj);

            let lenLocationObj = locationKeys.length;

            document.write("<h2>About Location :</h2>");



            for (i = 0; i < lenLocationObj; i++) {



                document.write("<b>" + locationKeys[i] + " :</b> " + locationObj[locationKeys[i]] + "<br>")



                //console.log(locationKeys[lenLocation[i]]);

            }









        }

        xhr.send();

        document.write(`<p style="position:bottom 4px" align="center">&copy;NaZiF.Com</p>`);
    }








}







