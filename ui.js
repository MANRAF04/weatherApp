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
    let myChart = document.getElementById('myChart').getContext('2d');
    Chart.defaults.font.size = 18;
    Chart.defaults.font.family = 'Arial';
    let tempChart = new Chart(myChart, {
        
        type: 'bar', 
        data: {
            labels: [data.list[0].dt_txt.substring(8,10)+'/'+data.list[0].dt_txt.substring(5,7),data.list[8].dt_txt.substring(8,10)+'/'+data.list[8].dt_txt.substring(5,7),data.list[16].dt_txt.substring(8,10)+'/'+data.list[16].dt_txt.substring(5,7),data.list[24].dt_txt.substring(8,10)+'/'+data.list[24].dt_txt.substring(5,7),data.list[33].dt_txt.substring(8,10)+'/'+data.list[33].dt_txt.substring(5,7)],
            datasets: [{
                label: 'Temperature',
                data: [
                  data.list[0].main.temp,
                  data.list[8].main.temp,
                  data.list[16].main.temp,
                  data.list[24].main.temp,
                  data.list[33].main.temp
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
