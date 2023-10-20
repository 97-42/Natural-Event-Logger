// Set the update interval (e.g., every 24 hours)
const updateInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function fetchAndStoreEvents() {
  fetch('http://eonet.sci.gsfc.nasa.gov/api/v3/events')
    .then(response => response.json())
    .then(data => {
      // Store the event data in local storage
      chrome.storage.local.set({ events: data }, function() {
        console.log('Events data updated.');
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Fetch and store events on extension load and then at regular intervals
fetchAndStoreEvents();
setInterval(fetchAndStoreEvents, updateInterval);
