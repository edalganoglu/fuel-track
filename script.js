// Global variables
let map;
let routeControl;
let currentLanguage = 'tr';
let currentFuelPrice = 55.50; // Default price in TL
let fromMarker, toMarker;

// Language data
const translations = {
    tr: {
        'Mazot Hesaplayıcı': 'Mazot Hesaplayıcı',
        'Fuel Calculator': 'Mazot Hesaplayıcı',
        'Güncel Mazot Fiyatı': 'Güncel Mazot Fiyatı',
        'Current Diesel Price': 'Güncel Mazot Fiyatı',
        'Son güncelleme: Bugün': 'Son güncelleme: Bugün',
        'Last update: Today': 'Son güncelleme: Bugün',
        'Reklam Alanı - 728x90': 'Reklam Alanı - 728x90',
        'Advertisement Space - 728x90': 'Reklam Alanı - 728x90',
        'Yakıt Maliyeti Hesaplayıcı': 'Yakıt Maliyeti Hesaplayıcı',
        'Fuel Cost Calculator': 'Yakıt Maliyeti Hesaplayıcı',
        'Güzergah': 'Güzergah',
        'Route': 'Güzergah',
        'Nereden?': 'Nereden?',
        'From where?': 'Nereden?',
        'Nereye?': 'Nereye?',
        'To where?': 'Nereye?',
        'Mesafe (KM)': 'Mesafe (KM)',
        'Distance (KM)': 'Mesafe (KM)',
        'Hesapla': 'Hesapla',
        'Calculate': 'Hesapla',
        'Şehir': 'Şehir',
        'City': 'Şehir',
        'Yakıt Tipi': 'Yakıt Tipi',
        'Fuel Type': 'Yakıt Tipi',
        'Motorin (Eurodiesel)': 'Motorin (Eurodiesel)',
        'Diesel (Eurodiesel)': 'Motorin (Eurodiesel)',
        'Kurşunsuz 95': 'Kurşunsuz 95',
        'Unleaded 95': 'Kurşunsuz 95',
        'Otogaz': 'Otogaz',
        'LPG': 'Otogaz',
        'Gazyağı': 'Gazyağı',
        'Kerosene': 'Gazyağı',
        'Araç Tipi': 'Araç Tipi',
        'Vehicle Type': 'Araç Tipi',
        'Manuel Giriş': 'Manuel Giriş',
        'Manual Input': 'Manuel Giriş',
        'Küçük Otomobil (6L/100km)': 'Küçük Otomobil (6L/100km)',
        'Small Car (6L/100km)': 'Küçük Otomobil (6L/100km)',
        'Orta Otomobil (8L/100km)': 'Orta Otomobil (8L/100km)',
        'Medium Car (8L/100km)': 'Orta Otomobil (8L/100km)',
        'Büyük Otomobil (10L/100km)': 'Büyük Otomobil (10L/100km)',
        'Large Car (10L/100km)': 'Büyük Otomobil (10L/100km)',
        'SUV (12L/100km)': 'SUV (12L/100km)',
        'Minibüs (15L/100km)': 'Minibüs (15L/100km)',
        'Minibus (15L/100km)': 'Minibüs (15L/100km)',
        'Kamyonet (20L/100km)': 'Kamyonet (20L/100km)',
        'Pickup Truck (20L/100km)': 'Kamyonet (20L/100km)',
        'Kamyon (25L/100km)': 'Kamyon (25L/100km)',
        'Truck (25L/100km)': 'Kamyon (25L/100km)',
        'Büyük Kamyon (35L/100km)': 'Büyük Kamyon (35L/100km)',
        'Large Truck (35L/100km)': 'Büyük Kamyon (35L/100km)',
        'Yakıt Tüketimi (L/100km)': 'Yakıt Tüketimi (L/100km)',
        'Fuel Consumption (L/100km)': 'Yakıt Tüketimi (L/100km)',
        'Yolculuk Tipi': 'Yolculuk Tipi',
        'Trip Type': 'Yolculuk Tipi',
        'Tek Yön': 'Tek Yön',
        'One Way': 'Tek Yön',
        'Gidiş-Dönüş': 'Gidiş-Dönüş',
        'Round Trip': 'Gidiş-Dönüş',
        'Maliyeti Hesapla': 'Maliyeti Hesapla',
        'Calculate Cost': 'Maliyeti Hesapla',
        'Hesaplama Sonucu': 'Hesaplama Sonucu',
        'Calculation Result': 'Hesaplama Sonucu',
        'Toplam Mesafe': 'Toplam Mesafe',
        'Total Distance': 'Toplam Mesafe',
        'Yakıt Tüketimi': 'Yakıt Tüketimi',
        'Fuel Consumption': 'Yakıt Tüketimi',
        'Toplam Maliyet': 'Toplam Maliyet',
        'Total Cost': 'Toplam Maliyet',
        'Rota Haritası': 'Rota Haritası',
        'Route Map': 'Rota Haritası',
        'Rota hesaplanıyor...': 'Rota hesaplanıyor...',
        'Calculating route...': 'Rota hesaplanıyor...',
        'Hakkında': 'Hakkında',
        'About': 'Hakkında',
        'Türkiye\'nin en güncel mazot fiyatları ile yakıt maliyeti hesaplayıcısı.': 'Türkiye\'nin en güncel mazot fiyatları ile yakıt maliyeti hesaplayıcısı.',
        'Turkey\'s most up-to-date diesel price fuel cost calculator.': 'Türkiye\'nin en güncel mazot fiyatları ile yakıt maliyeti hesaplayıcısı.',
        'Özellikler': 'Özellikler',
        'Features': 'Özellikler',
        'Güncel fiyatlar': 'Güncel fiyatlar',
        'Current prices': 'Güncel fiyatlar',
        'Rota hesaplama': 'Rota hesaplama',
        'Route calculation': 'Rota hesaplama',
        'Mobil uyumlu': 'Mobil uyumlu',
        'Mobile friendly': 'Mobil uyumlu',
        'İletişim': 'İletişim',
        'Contact': 'İletişim',
        'Geri bildirimleriniz için bize ulaşın.': 'Geri bildirimleriniz için bize ulaşın.',
        'Contact us for your feedback.': 'Geri bildirimleriniz için bize ulaşın.',
        'Tüm hakları saklıdır.': 'Tüm hakları saklıdır.',
        'All rights reserved.': 'Tüm hakları saklıdır.'
    },
    en: {
        'Mazot Hesaplayıcı': 'Fuel Calculator',
        'Fuel Calculator': 'Fuel Calculator',
        'Güncel Mazot Fiyatı': 'Current Diesel Price',
        'Current Diesel Price': 'Current Diesel Price',
        'Son güncelleme: Bugün': 'Last update: Today',
        'Last update: Today': 'Last update: Today',
        'Reklam Alanı - 728x90': 'Advertisement Space - 728x90',
        'Advertisement Space - 728x90': 'Advertisement Space - 728x90',
        'Yakıt Maliyeti Hesaplayıcı': 'Fuel Cost Calculator',
        'Fuel Cost Calculator': 'Fuel Cost Calculator',
        'Güzergah': 'Route',
        'Route': 'Route',
        'Nereden?': 'From where?',
        'From where?': 'From where?',
        'Nereye?': 'To where?',
        'To where?': 'To where?',
        'Mesafe (KM)': 'Distance (KM)',
        'Distance (KM)': 'Distance (KM)',
        'Hesapla': 'Calculate',
        'Calculate': 'Calculate',
        'Şehir': 'City',
        'City': 'City',
        'Yakıt Tipi': 'Fuel Type',
        'Fuel Type': 'Fuel Type',
        'Motorin (Eurodiesel)': 'Diesel (Eurodiesel)',
        'Diesel (Eurodiesel)': 'Diesel (Eurodiesel)',
        'Kurşunsuz 95': 'Unleaded 95',
        'Unleaded 95': 'Unleaded 95',
        'Otogaz': 'LPG',
        'LPG': 'LPG',
        'Gazyağı': 'Kerosene',
        'Kerosene': 'Kerosene',
        'Güzergah Seçin': 'Select Route',
        'Yakıt Ayarları': 'Fuel Settings',
        'Araç Bilgileri': 'Vehicle Information',
        'Araç Tipi': 'Vehicle Type',
        'Vehicle Type': 'Vehicle Type',
        'Manuel Giriş': 'Manual Input',
        'Manual Input': 'Manual Input',
        'Küçük Otomobil (6L/100km)': 'Small Car (6L/100km)',
        'Small Car (6L/100km)': 'Small Car (6L/100km)',
        'Orta Otomobil (8L/100km)': 'Medium Car (8L/100km)',
        'Medium Car (8L/100km)': 'Medium Car (8L/100km)',
        'Büyük Otomobil (10L/100km)': 'Large Car (10L/100km)',
        'Large Car (10L/100km)': 'Large Car (10L/100km)',
        'SUV (12L/100km)': 'SUV (12L/100km)',
        'Minibüs (15L/100km)': 'Minibus (15L/100km)',
        'Minibus (15L/100km)': 'Minibus (15L/100km)',
        'Kamyonet (20L/100km)': 'Pickup Truck (20L/100km)',
        'Pickup Truck (20L/100km)': 'Pickup Truck (20L/100km)',
        'Kamyon (25L/100km)': 'Truck (25L/100km)',
        'Truck (25L/100km)': 'Truck (25L/100km)',
        'Büyük Kamyon (35L/100km)': 'Large Truck (35L/100km)',
        'Large Truck (35L/100km)': 'Large Truck (35L/100km)',
        'Yakıt Tüketimi (L/100km)': 'Fuel Consumption (L/100km)',
        'Fuel Consumption (L/100km)': 'Fuel Consumption (L/100km)',
        'Yolculuk Tipi': 'Trip Type',
        'Trip Type': 'Trip Type',
        'Tek Yön': 'One Way',
        'One Way': 'One Way',
        'Gidiş-Dönüş': 'Round Trip',
        'Round Trip': 'Round Trip',
        'Maliyeti Hesapla': 'Calculate Cost',
        'Calculate Cost': 'Calculate Cost',
        'Hesaplama Sonucu': 'Calculation Result',
        'Calculation Result': 'Calculation Result',
        'Toplam Mesafe': 'Total Distance',
        'Total Distance': 'Total Distance',
        'Yakıt Tüketimi': 'Fuel Consumption',
        'Fuel Consumption': 'Fuel Consumption',
        'Toplam Maliyet': 'Total Cost',
        'Total Cost': 'Total Cost',
        'Rota Haritası': 'Route Map',
        'Route Map': 'Route Map',
        'Rota hesaplanıyor...': 'Calculating route...',
        'Calculating route...': 'Calculating route...',
        'Hakkında': 'About',
        'About': 'About',
        'Türkiye\'nin en güncel mazot fiyatları ile yakıt maliyeti hesaplayıcısı.': 'Turkey\'s most up-to-date diesel price fuel cost calculator.',
        'Turkey\'s most up-to-date diesel price fuel cost calculator.': 'Turkey\'s most up-to-date diesel price fuel cost calculator.',
        'Özellikler': 'Features',
        'Features': 'Features',
        'Güncel fiyatlar': 'Current prices',
        'Current prices': 'Current prices',
        'Rota hesaplama': 'Route calculation',
        'Route calculation': 'Route calculation',
        'Mobil uyumlu': 'Mobile friendly',
        'Mobile friendly': 'Mobile friendly',
        'İletişim': 'Contact',
        'Contact': 'Contact',
        'Geri bildirimleriniz için bize ulaşın.': 'Contact us for your feedback.',
        'Contact us for your feedback.': 'Contact us for your feedback.',
        'Tüm hakları saklıdır.': 'All rights reserved.',
        'All rights reserved.': 'All rights reserved.'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    initializeEventListeners();
    loadFuelPrices();
    updateLanguage();
});

// Initialize Leaflet map
function initializeMap() {
    // Initialize map centered on Turkey
    map = L.map('map').setView([39.9334, 32.8597], 6);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add click event to map for location selection
    map.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        
        // Reverse geocoding to get address
        reverseGeocode(lat, lng).then(address => {
            const fromInput = document.getElementById('fromLocation');
            const toInput = document.getElementById('toLocation');
            
            if (!fromInput.value) {
                fromInput.value = address;
                addMarker(lat, lng, 'from');
            } else if (!toInput.value) {
                toInput.value = address;
                addMarker(lat, lng, 'to');
                calculateRoute();
            }
        });
    });
}

// Add marker to map
function addMarker(lat, lng, type) {
    const icon = type === 'from' ? 
        L.divIcon({
            html: '<i class="fas fa-map-marker-alt" style="color: #00b894; font-size: 24px;"></i>',
            iconSize: [24, 24],
            className: 'custom-marker'
        }) :
        L.divIcon({
            html: '<i class="fas fa-map-marker-alt" style="color: #e17055; font-size: 24px;"></i>',
            iconSize: [24, 24],
            className: 'custom-marker'
        });
    
    if (type === 'from') {
        if (fromMarker) map.removeLayer(fromMarker);
        fromMarker = L.marker([lat, lng], { icon }).addTo(map);
    } else {
        if (toMarker) map.removeLayer(toMarker);
        toMarker = L.marker([lat, lng], { icon }).addTo(map);
    }
}

// Initialize event listeners
function initializeEventListeners() {
    // Language toggle
    document.getElementById('langTr').addEventListener('click', () => changeLanguage('tr'));
    document.getElementById('langEn').addEventListener('click', () => changeLanguage('en'));
    
    // Swap locations button
    document.getElementById('swapLocations').addEventListener('click', swapLocations);
    
    // Calculate distance button
    document.getElementById('calculateDistance').addEventListener('click', calculateDistanceFromLocations);
    
    // Vehicle type change
    document.getElementById('vehicleType').addEventListener('change', handleVehicleTypeChange);
    
    // City and fuel type change
    document.getElementById('citySelect').addEventListener('change', loadFuelPrices);
    document.getElementById('fuelType').addEventListener('change', loadFuelPrices);
    
    // Form submission
    document.getElementById('calculatorForm').addEventListener('submit', handleFormSubmit);
    
    // Map controls
    document.getElementById('clearRoute').addEventListener('click', clearRoute);
    document.getElementById('centerMap').addEventListener('click', centerMap);
    
    // Location input autocomplete
    setupLocationAutocomplete('fromLocation');
    setupLocationAutocomplete('toLocation');
}

// Setup location autocomplete using Nominatim
function setupLocationAutocomplete(inputId) {
    const input = document.getElementById(inputId);
    let timeout;
    
    input.addEventListener('input', function() {
        clearTimeout(timeout);
        const query = this.value;
        
        if (query.length < 3) return;
        
        timeout = setTimeout(() => {
            searchLocation(query).then(results => {
                // Create or update autocomplete dropdown
                showAutocompleteResults(inputId, results);
            });
        }, 300);
    });
}

// Show autocomplete results
function showAutocompleteResults(inputId, results) {
    // Remove existing dropdown
    const existingDropdown = document.querySelector(`#${inputId}-dropdown`);
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    if (results.length === 0) return;
    
    const input = document.getElementById(inputId);
    const dropdown = document.createElement('div');
    dropdown.id = `${inputId}-dropdown`;
    dropdown.className = 'autocomplete-dropdown';
    dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000;
    `;
    
    results.slice(0, 5).forEach(result => {
        const item = document.createElement('div');
        item.style.cssText = `
            padding: 12px;
            cursor: pointer;
            border-bottom: 1px solid #f0f0f0;
            transition: background 0.2s;
        `;
        item.textContent = result.display_name;
        
        item.addEventListener('mouseenter', () => {
            item.style.background = '#f8f9fa';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'white';
        });
        
        item.addEventListener('click', () => {
            input.value = result.display_name;
            dropdown.remove();
            
            // Add marker to map
            const lat = parseFloat(result.lat);
            const lng = parseFloat(result.lon);
            const type = inputId === 'fromLocation' ? 'from' : 'to';
            addMarker(lat, lng, type);
            
            // If both locations are set, calculate route
            const fromInput = document.getElementById('fromLocation');
            const toInput = document.getElementById('toLocation');
            if (fromInput.value && toInput.value) {
                calculateRoute();
            }
        });
        
        dropdown.appendChild(item);
    });
    
    input.parentElement.style.position = 'relative';
    input.parentElement.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
        if (!input.parentElement.contains(e.target)) {
            dropdown.remove();
            document.removeEventListener('click', closeDropdown);
        }
    });
}

// Search location using Nominatim API
async function searchLocation(query) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=tr&limit=5&addressdetails=1`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Location search error:', error);
        return [];
    }
}

// Reverse geocoding
async function reverseGeocode(lat, lng) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`);
        const data = await response.json();
        return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    } catch (error) {
        console.error('Reverse geocoding error:', error);
        return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    }
}

// Calculate route between two locations
async function calculateRoute() {
    const fromInput = document.getElementById('fromLocation');
    const toInput = document.getElementById('toLocation');
    
    if (!fromInput.value || !toInput.value) return;
    
    showMapLoading(true);
    
    try {
        // Get coordinates for both locations
        const fromCoords = await getCoordinates(fromInput.value);
        const toCoords = await getCoordinates(toInput.value);
        
        if (!fromCoords || !toCoords) {
            throw new Error('Could not find coordinates for locations');
        }
        
        // Calculate route using OpenRouteService or OSRM
        const routeData = await getRoute(fromCoords, toCoords);
        
        if (routeData) {
            displayRoute(routeData);
            const distance = routeData.distance / 1000; // Convert to km
            document.getElementById('distance').value = distance.toFixed(1);
        }
    } catch (error) {
        console.error('Route calculation error:', error);
        alert(currentLanguage === 'tr' ? 'Rota hesaplanamadı. Lütfen tekrar deneyin.' : 'Could not calculate route. Please try again.');
    } finally {
        showMapLoading(false);
    }
}

// Get coordinates for a location
async function getCoordinates(locationName) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}&countrycodes=tr&limit=1`);
        const data = await response.json();
        
        if (data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
        }
        return null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
}

// Get route using OSRM (free routing service)
async function getRoute(fromCoords, toCoords) {
    try {
        const url = `https://router.project-osrm.org/route/v1/driving/${fromCoords.lng},${fromCoords.lat};${toCoords.lng},${toCoords.lat}?overview=full&geometries=geojson`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
            return {
                coordinates: data.routes[0].geometry.coordinates,
                distance: data.routes[0].distance,
                duration: data.routes[0].duration
            };
        }
        return null;
    } catch (error) {
        console.error('Routing error:', error);
        return null;
    }
}

// Display route on map
function displayRoute(routeData) {
    // Remove existing route
    if (routeControl) {
        map.removeLayer(routeControl);
    }
    
    // Convert coordinates to Leaflet format
    const latlngs = routeData.coordinates.map(coord => [coord[1], coord[0]]);
    
    // Add route polyline
    routeControl = L.polyline(latlngs, {
        color: '#667eea',
        weight: 5,
        opacity: 0.8
    }).addTo(map);
    
    // Fit map to route bounds
    map.fitBounds(routeControl.getBounds(), { padding: [20, 20] });
}

// Show/hide map loading
function showMapLoading(show) {
    const loading = document.getElementById('mapLoading');
    loading.style.display = show ? 'flex' : 'none';
}

// Load fuel prices
async function loadFuelPrices() {
    const priceLoader = document.getElementById('priceLoader');
    const currentPriceElement = document.getElementById('currentPrice');
    const updateTimeElement = document.getElementById('updateTime');
    
    if (priceLoader) priceLoader.style.display = 'block';
    
    try {
        const selectedCity = document.getElementById('citySelect')?.value || 'ISTANBUL';
        const selectedFuelType = document.getElementById('fuelType')?.value || 'Motorin(Eurodiesel)_TL/lt';
        
        // Try to fetch real fuel prices from API
        const response = await fetch(`/api/akaryakit/sehir=${selectedCity}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data) {
            // Get the first station's price for the selected fuel type
            const stations = Object.values(data.data);
            let price = null;
            
            for (const station of stations) {
                if (station[selectedFuelType] && station[selectedFuelType] !== '-' && station[selectedFuelType] !== '') {
                    const priceStr = station[selectedFuelType].toString().replace(',', '.');
                    price = parseFloat(priceStr);
                    if (!isNaN(price) && price > 0) {
                        break;
                    }
                }
            }
            
            if (price && price > 0) {
                currentFuelPrice = price;
                if (currentPriceElement) {
                    currentPriceElement.textContent = `₺${price.toFixed(2)} / L`;
                }
            } else {
                throw new Error('No valid price data available');
            }
        } else {
            throw new Error('Invalid API response structure');
        }
        
        // Update timestamp
        const now = new Date();
        const timeString = currentLanguage === 'tr' ? 
            `Son güncelleme: ${now.toLocaleDateString('tr-TR')}` :
            `Last update: ${now.toLocaleDateString('en-US')}`;
        if (updateTimeElement) {
            updateTimeElement.textContent = timeString;
        }
        
    } catch (error) {
        console.error('Error loading fuel prices:', error);
        
        // Fallback to mock price with some variation
        const basePrice = 55.50;
        const variation = (Math.random() - 0.5) * 4; // ±2 TL variation
        const mockPrice = Math.max(basePrice + variation, 45.0); // Minimum 45 TL
        
        currentFuelPrice = mockPrice;
        
        if (currentPriceElement) {
            currentPriceElement.textContent = `₺${mockPrice.toFixed(2)} / L`;
        }
        
        // Update timestamp with demo indicator
        const now = new Date();
        const timeString = currentLanguage === 'tr' ? 
            `Son güncelleme: ${now.toLocaleDateString('tr-TR')} (Demo)` :
            `Last update: ${now.toLocaleDateString('en-US')} (Demo)`;
        if (updateTimeElement) {
            updateTimeElement.textContent = timeString;
        }
    } finally {
        if (priceLoader) {
            priceLoader.style.display = 'none';
        }
    }
}

// Handle vehicle type change
function handleVehicleTypeChange() {
    const vehicleType = document.getElementById('vehicleType').value;
    const customGroup = document.getElementById('customConsumptionGroup');
    const fuelConsumption = document.getElementById('fuelConsumption');
    
    if (vehicleType === 'custom') {
        customGroup.classList.add('show');
        fuelConsumption.required = true;
    } else {
        customGroup.classList.remove('show');
        fuelConsumption.required = false;
        fuelConsumption.value = vehicleType;
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const vehicleType = document.getElementById('vehicleType').value;
    const customConsumption = parseFloat(document.getElementById('fuelConsumption').value);
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    
    if (!distance || distance <= 0) {
        alert(currentLanguage === 'tr' ? 'Lütfen geçerli bir mesafe girin.' : 'Please enter a valid distance.');
        return;
    }
    
    const consumption = vehicleType === 'custom' ? customConsumption : parseFloat(vehicleType);
    
    if (!consumption || consumption <= 0) {
        alert(currentLanguage === 'tr' ? 'Lütfen geçerli bir yakıt tüketimi girin.' : 'Please enter a valid fuel consumption.');
        return;
    }
    
    calculateFuelCost(distance, consumption, tripType);
}

// Calculate fuel cost
function calculateFuelCost(distance, consumption, tripType) {
    const multiplier = tripType === 'roundtrip' ? 2 : 1;
    const totalDistance = distance * multiplier;
    const fuelNeeded = (totalDistance * consumption) / 100;
    const totalCost = fuelNeeded * currentFuelPrice;
    
    // Display results
    document.getElementById('totalDistance').textContent = `${totalDistance.toFixed(1)} km`;
    document.getElementById('fuelNeeded').textContent = `${fuelNeeded.toFixed(2)} L`;
    document.getElementById('totalCost').textContent = `₺${totalCost.toFixed(2)}`;
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Calculate distance from locations
function calculateDistanceFromLocations() {
    calculateRoute();
}

// Swap locations
function swapLocations() {
    const fromInput = document.getElementById('fromLocation');
    const toInput = document.getElementById('toLocation');
    
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
    
    // Swap markers
    if (fromMarker && toMarker) {
        const fromLatLng = fromMarker.getLatLng();
        const toLatLng = toMarker.getLatLng();
        
        fromMarker.setLatLng(toLatLng);
        toMarker.setLatLng(fromLatLng);
        
        // Recalculate route if both locations exist
        if (fromInput.value && toInput.value) {
            calculateRoute();
        }
    }
}

// Clear route
function clearRoute() {
    if (routeControl) {
        map.removeLayer(routeControl);
        routeControl = null;
    }
    
    if (fromMarker) {
        map.removeLayer(fromMarker);
        fromMarker = null;
    }
    
    if (toMarker) {
        map.removeLayer(toMarker);
        toMarker = null;
    }
    
    document.getElementById('fromLocation').value = '';
    document.getElementById('toLocation').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('results').style.display = 'none';
}

// Center map
function centerMap() {
    map.setView([39.9334, 32.8597], 6);
}

// Change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.add('active');
    
    updateLanguage();
}

// Update language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-tr], [data-en]');
    
    elements.forEach(element => {
        const trText = element.getAttribute('data-tr');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'tr' && trText) {
            element.textContent = trText;
        } else if (currentLanguage === 'en' && enText) {
            element.textContent = enText;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-tr-placeholder], [data-en-placeholder]');
    placeholderElements.forEach(element => {
        const trPlaceholder = element.getAttribute('data-tr-placeholder');
        const enPlaceholder = element.getAttribute('data-en-placeholder');
        
        if (currentLanguage === 'tr' && trPlaceholder) {
            element.placeholder = trPlaceholder;
        } else if (currentLanguage === 'en' && enPlaceholder) {
            element.placeholder = enPlaceholder;
        }
    });
    
    // Update select options
    updateSelectOptions();
    
    // Update fuel price display
    loadFuelPrices();
}

// Update select options
function updateSelectOptions() {
    const vehicleSelect = document.getElementById('vehicleType');
    const options = vehicleSelect.querySelectorAll('option');
    
    options.forEach(option => {
        const trText = option.getAttribute('data-tr');
        const enText = option.getAttribute('data-en');
        
        if (currentLanguage === 'tr' && trText) {
            option.textContent = trText;
        } else if (currentLanguage === 'en' && enText) {
            option.textContent = enText;
        }
    });
}

// Add custom CSS for autocomplete dropdown
const style = document.createElement('style');
style.textContent = `
    .custom-marker {
        background: none;
        border: none;
    }
    
    .autocomplete-dropdown {
        font-family: 'Inter', sans-serif;
    }
    
    .autocomplete-dropdown div:last-child {
        border-bottom: none;
    }
`;
document.head.appendChild(style);

// Periodically update fuel prices (every 30 minutes)
setInterval(loadFuelPrices, 30 * 60 * 1000);