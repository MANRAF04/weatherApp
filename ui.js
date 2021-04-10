class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Volos";
  }

  populateUI(data) {

    this.uiContainer.innerHTML = `
        
        <div id="el" class="card mb-5 mx-auto" style="width: 22rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.city.name}, ${data.city.country}&emsp;&emsp;&emsp;${data.list[0].weather[0].main} </h5>
                <br>
                <h6 class="card-subtitle mb-1">Current temperature ${data.list[0].main.temp}°C.</h6>
                <br>
                <h6 class="card-subtitle mb-1">Current wind speed ${data.list[0].wind.speed}m/s.</h6>
                <br>
                <p class="card-text ">Weather conditions are described as: ${data.list[0].weather[0].description}</p>
                
            </div>
        </div>
        <div id="el1" class="container">
          <canvas id="myChart"></canvas>
        </div>
        
        
        `;
    var counter = 2;
    var day2,day3,day4,day5;
    var iday2,iday3,iday4,iday5;
    for (var i = 1; i <= 39; i++){
        if (counter == 2) {
            if (data.list[i].dt_txt.substring(0,10) != data.list[0].dt_txt.substring(0,10)){
                day2 = data.list[i].dt_txt.substring(8,10)+'/'+data.list[i].dt_txt.substring(5,7);
                iday2 = i;
                counter++;
            }
        } else if (counter == 3) {
            if (data.list[i].dt_txt.substring(0,10) != data.list[iday2].dt_txt.substring(0,10)){
                day3 = data.list[i].dt_txt.substring(8,10)+'/'+data.list[i].dt_txt.substring(5,7)
                iday3 = i;
                counter++;
            }
        } else if (counter == 4) {
            if (data.list[i].dt_txt.substring(0,10) != data.list[iday3].dt_txt.substring(0,10)){
                day4 = data.list[i].dt_txt.substring(8,10)+'/'+data.list[i].dt_txt.substring(5,7)
                iday4 = i;
                counter++;
            }
        } else if (counter == 5) {
            if (data.list[i].dt_txt.substring(0,10) != data.list[iday4].dt_txt.substring(0,10)){
                day5 = data.list[i].dt_txt.substring(8,10)+'/'+data.list[i].dt_txt.substring(5,7)
                iday5 = i;
                counter++;
            }
        } else break;
    }
    console.log(iday2,iday3,iday4,iday5)
    let myChart = document.getElementById('myChart').getContext('2d');
    Chart.defaults.font.size = 18;
    Chart.defaults.font.family = 'Arial';
    let tempChart = new Chart(myChart, {
        
        type: 'bar', 
        data: {
            labels: [data.list[0].dt_txt.substring(8,10)+'/'+data.list[0].dt_txt.substring(5,7),day2,day3,day4,day5],
            datasets: [{
                label: 'Temperature',
                data: [
                  data.list[0].main.temp,
                  data.list[iday2].main.temp,
                  data.list[iday3].main.temp,
                  data.list[iday4].main.temp,
                  data.list[iday5].main.temp
                ],
                backgroundColor: '#333333',
                borderColor: '#333333',
                hoverBorderColor: '#ccfff7',
                hoverBorderWidth: 4
            }]
        },
        options: {  
            plugins: {
                title: {
                    display: true,
                    text: 'Forecast'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
                
            }
        }
    });
  }
}
