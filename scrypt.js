// Initialize the map
var map = L.map('map').setView([51.505, 10], 4); // Centered in Europe

// Load map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// Dummy data for cars in different countries
const carData = {
  'Germany': [
    { model: 'Audi A4', price: 25000, type: 'Sedan', img: 'https://via.placeholder.com/150' },
    { model: 'BMW X5', price: 45000, type: 'SUV', img: 'https://via.placeholder.com/150' }
  ],
  'France': [
    { model
