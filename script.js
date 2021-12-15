let city= "Delhi";
let unit='C';
let Day="Today";
let lat="28.6517",lon="77.2219";
let c=true;
let f=false;
document.getElementById('Search').value=city;
document.getElementById('c').addEventListener('click',function(){  
    document.getElementById('c').style.backgroundColor='#b71c1c';
    document.getElementById('f').style.backgroundColor='white';
    unit=$('#c')[0].name;
    event.preventDefault();
    c=true;
    f=false;
    if(c){
        Location.fetchLocation(city,'C');
    }
    else{
        Location.fetchLocation(city,'F');

    }
});
document.getElementById('f').addEventListener('click',function(){
    event.preventDefault();
    document.getElementById('f').style.backgroundColor='#b71c1c';
    document.getElementById('c').style.backgroundColor='white';
    unit=$('#f')[0].name;
    c=false;
    f=true;
    if(c){
        Location.fetchLocation(city,'C');
    }
    else{
        Location.fetchLocation(city,'F');
    }

})
    document.getElementById('Submit').addEventListener('click',function(){
    event.preventDefault();
    city=document.getElementById('Search').value;
    $('#Search')[0].value="";
    if(c){
        unit='C';
    }
    else{
        unit='F';
    }
    Location.fetchLocation(city,unit);
});

    let Location={
        apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
        fetchLocation:function(x,u){
            fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + x +"&appid="+ this.apiKey).then(response=>response.json()).then(data=>{
                lat=data[0].lat;
                lon=data[0].lon;
                weather.fetchWeather(lat,lon,u);
            });
        }
    }
document.getElementById('Curr_day').addEventListener('click',function(){
    Day="Today";
});
document.getElementById('Curr_week').addEventListener('click',function(){
    Day="Week";
});
let weather={
    apiKey:"6c65d5c02dc08e8e70fa959a377ba5bd",
    fetchWeather: function(lat,lon,unit){
        let extra;
        if(unit=='C'){
            extra="&units=metric"
        }
        else{
            extra="&units=imperial";
        }
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+extra+"&appid="+this.apiKey).then((response)=>response.json()).then((data)=>{
           //Today Completed.
            $('#Today h6')[0].innerHTML=data.current.weather[0].main;
            $('#Today p .far')[0].innerHTML= data.current.visibility;
            $('#Today .fas')[0].innerHTML=data.current.humidity +"%";
            $('#Today .temp')[0].innerHTML=data.current.temp +"&#176;"+ unit;
           //Saturday
           $('#Saturday h6')[0].innerHTML=data.daily[0].weather[0].description;
           $('#Saturday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[0].wind_speed+"meter/sec":data.daily[0].wind_speed+"miles/hr";
           $('#Saturday .fa-tint')[0].innerHTML = data.daily[0].humidity + "%";
           $('#Saturday .temp')[0].innerHTML = +data.daily[0].temp.max+"&#176;"+ unit;
           //Sunday
           $('#Sunday h6')[0].innerHTML=data.daily[1].weather[0].description;
           $('#Sunday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[1].wind_speed+"meter/sec":data.daily[1].wind_speed+"miles/hr";
           $('#Sunday .fa-tint')[0].innerHTML = data.daily[1].humidity + "%";
           $('#Sunday .temp')[0].innerHTML = +data.daily[1].temp.max+"&#176;"+ unit;
           //Monday
           $('#Monday h6')[0].innerHTML=data.daily[2].weather[0].description;
           $('#Monday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[2].wind_speed+"meter/sec":data.daily[2].wind_speed+"miles/hr";
           $('#Monday .fa-tint')[0].innerHTML = data.daily[2].humidity + "%";
           $('#Monday .temp')[0].innerHTML = +data.daily[2].temp.max+"&#176;"+ unit;
           //Tuesday
           $('#Tuesday h6')[0].innerHTML=data.daily[3].weather[0].description;
           $('#Tuesday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[3].wind_speed+"meter/sec":data.daily[3].wind_speed+"miles/hr";
           $('#Tuesday .fa-tint')[0].innerHTML = data.daily[3].humidity + "%";
           $('#Tuesday .temp')[0].innerHTML = +data.daily[3].temp.max+"&#176;"+ unit;
           //Wednesday
           $('#Wednesday h6')[0].innerHTML=data.daily[4].weather[0].description;
           $('#Wednesday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[4].wind_speed+"meter/sec":data.daily[4].wind_speed+"miles/hr";
           $('#Wednesday .fa-tint')[0].innerHTML = data.daily[4].humidity + "%";
           $('#Wednesday .temp')[0].innerHTML = +data.daily[4].temp.max+"&#176;"+ unit;
           //Thursday
           $('#Thursday h6')[0].innerHTML=data.daily[5].weather[0].description;
           $('#Thursday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[5].wind_speed+"meter/sec":data.daily[5].wind_speed+"miles/hr";
           $('#Thursday .fa-tint')[0].innerHTML = data.daily[5].humidity + "%";
           $('#Thursday .temp')[0].innerHTML = +data.daily[5].temp.max+"&#176;"+ unit;
           //Friday
           $('#Friday h6')[0].innerHTML=data.daily[6].weather[0].description;
           $('#Friday p .fa-wind')[0].innerHTML = unit==='C'?data.daily[6].wind_speed+"meter/sec":data.daily[6].wind_speed+"miles/hr";
           $('#Friday .fa-tint')[0].innerHTML = data.daily[6].humidity + "%";
           $('#Friday .temp')[0].innerHTML = +data.daily[6].temp.max+"&#176;"+ unit;
        });
    }
};
weather.fetchWeather(lat,lon,unit);