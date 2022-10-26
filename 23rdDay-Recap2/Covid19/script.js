// document.getelementby id
// get weather data
//get the data on submit button
//show/display that data to the browser



async function getCovidData(){

    var countryName=document.getElementById('countryName').value
    console.log(countryName)
    let url=`https://api.covid19api.com/dayone/country/${countryName}`
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)

    var covidContainer=document.getElementById('covidContainer')

    covidContainer.innerHTML=`
    <div class="row g-0">
            <div class="col-md-4">
                <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Covid Update ${countryName}</h5>

                <p class="card-text m-0"><small class="text-muted">Confirmed Cases:${res[0].Confirmed}</small></p>
                <p class="card-text m-0"><small class="text-muted">Death Cases:${res[0].Deaths}</small></p>
                <p class="card-text m-0"><small class="text-muted">Recovered Cases:${res[0].Recovered}</small></p>
                <p class="card-text m-0"><small class="text-muted">Country Code:${res[0].CountryCode}</small></p>
                </div>
            </div>
            </div>
`
}


