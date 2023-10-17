console.log("Connected")

// step 1 fetch all cars
const garageName = "garage-1385";
const garageURL = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
const carList = document.querySelector('.cars-list');
// define the function
const fetchAllCars = () => {
  // we call the server
  fetch(garageURL)
    .then(response => response.json())
    .then((data) => {
      console.log(data); // Array
      // We iterate on the array
      data.forEach((car) => {
        // we create a card for EACH cars
        const carCard = `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>
        `;
        // Insert into the list
        carList.insertAdjacentHTML('afterbegin', carCard);
      })
    })
}

// call the function
fetchAllCars();
