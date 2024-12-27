document.getElementById("searchBtn").addEventListener("click", function () {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
  
    if (!source || !destination || !date) {
      alert("Please fill in all the fields.");
      return;
    }
  
    const resultsContainer = document.getElementById("results");
    const busList = document.getElementById("busList");
    const loading = document.getElementById("loading");
  
    // Show Loading Animation
    resultsContainer.style.display = "none";
    loading.style.display = "block";
  
    // Simulate search delay
    setTimeout(() => {
      loading.style.display = "none";
      resultsContainer.style.display = "block";
  
      const buses = [
        { name: "AC Sleeper", time: "10:00 AM", price: "₹500" },
        { name: "Non-AC Seater", time: "12:30 PM", price: "₹350" },
        { name: "Volvo Multi-Axle", time: "5:00 PM", price: "₹800" },
      ];
  
      busList.innerHTML = "";
      buses.forEach((bus) => {
        const busDiv = document.createElement("div");
        busDiv.classList.add("bus-result");
        busDiv.innerHTML = `
          <strong>Bus Name:</strong> ${bus.name}<br>
          <strong>Time:</strong> ${bus.time}<br>
          <strong>Price:</strong> ${bus.price}
        `;
        busList.appendChild(busDiv);
      });
    }, 2000); // Simulate a 2-second delay
  });

  document.getElementById("priceFilter").addEventListener("change", function () {
  const filterPrice = parseInt(this.value);
  const buses = [
    { name: "AC Sleeper", time: "10:00 AM", price: 500 },
    { name: "Non-AC Seater", time: "12:30 PM", price: 350 },
    { name: "Volvo Multi-Axle", time: "5:00 PM", price: 800 },
  ];

  const filteredBuses = buses.filter((bus) => !filterPrice || bus.price <= filterPrice);

  const busList = document.getElementById("busList");
  busList.innerHTML = "";
  filteredBuses.forEach((bus) => {
    const busDiv = document.createElement("div");
    busDiv.classList.add("bus-result");
    busDiv.innerHTML = `
      <strong>Bus Name:</strong> ${bus.name}<br>
      <strong>Time:</strong> ${bus.time}<br>
      <strong>Price:</strong> ₹${bus.price}
    `;
    busList.appendChild(busDiv);
  });
});

  