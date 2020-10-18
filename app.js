fetch('https://corona.lmao.ninja/v3/covid-19/countries/poland')
  .then(response => {
    return response.json()
  })
  .then(data => {
    var country = (data.country);
    var cases = (data.cases);
    var deaths = (data.deaths);
    var todaycases = (data.todayCases);
    var todaydeaths = (data.todayDeaths);
    //document.getElementById("country").innerHTML = "Kraj: " + country;
    document.getElementById("cases").innerHTML = "Liczba zakażonych: " + "<br>" + cases;
    document.getElementById("deaths").innerHTML = "Liczba zgonów: " + "<br>"+ deaths;
    document.getElementById("todayCases").innerHTML =  todaycases;
    document.getElementById("todayDeaths").innerHTML =  todaydeaths;
  })
  .catch(err => {
    console.log("Data download error")
  })

