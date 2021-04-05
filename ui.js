class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Volos";
  }

  populateUI(data) {

    this.uiContainer.innerHTML = `
        
        <div class="card mb-5 mx-auto" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}, ${data.sys.country}&emsp;&emsp;&emsp;&emsp;&emsp;${data.weather[0].main} </h5>
                <h6 class="card-subtitle mb-1">Current temperature ${data.main.temp}°C.</h6>
                <h6 class="card-subtitle mb-1">Current wind speed ${data.wind.speed}m/s.</h6>
                <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }
}
