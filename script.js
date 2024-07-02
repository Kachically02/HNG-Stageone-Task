function updateDateTime() {
    const now = new Date();
  
    // Get current time in UTC (Coordinated Universal Time)
    const utcTime = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
  
    // Get current day of the week
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

      // Update the elements with current time and day
  const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentDayElement = document.querySelector('[data-testid="currentDay"]');

  currentTimeElement.textContent = utcTime;
  currentDayElement.textContent = dayOfWeek;
  }
  
  // Call the updateDateTime function on page load and every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
