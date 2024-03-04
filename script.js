var res=fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((data1)=>weather(data1));

var container=document.createElement("div")
container.className="container"

var row=document.createElement("div")
row.className="row"

function weather(data1){
    for(var i=0;i<data1.length;i++){

        var col=document.createElement("div")
        col.className="col-lg-4"
        col.innerHTML +=`   <div class="card" style="width: 20rem; height:29rem">
                                <div class="card-header"><h5 class="card-title">${data1[i].name.common}</h5></div>
                                    <div class="card-body">
                                        <img src="${data1[i].flags.png}" class="card-img-top" alt="flags" width="100%" height="150px">
                                        <h6></h6>
                                        <h6 class="card-title">Capital: ${data1[i].capital}</h6>
                                        <h6 class="card-title">Region: ${data1[i].region}</h6>
                                        <h6 class="card-title">Country Code: ${data1[i].fifa}</h6>
                                        <h6 class="card-title">Latitude: ${data1[i].latlng[0]}&deg;</h6>
                                        <h6 class="card-title">Longitude: ${data1[i].latlng[1]}&deg;</h6>
                                        <button type="button" class="btn btn-primary" onclick="foo(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
                                    </div>
                                </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
    }

}

function foo(lat,lon){
    var final_res=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88f8f760262d49f067960cf4499bcd41`).then((data2)=>data2.json()).then((data3)=>{
    alert(`
    Weather data for the country ${data3.name} is listed below:
    Pressure:${data3.main.pressure} Pascal
    Humidity: ${data3.main.humidity} g.m-3
    Temperature: ${data3.main.temp} Kelvin
    Wind Speed: ${data3.wind.speed}`)
    })
}

