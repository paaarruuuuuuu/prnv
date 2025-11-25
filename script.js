// Initialize Lucide Icons
lucide.createIcons();

// Time Widget Logic
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    });
    document.getElementById('time-display').innerText = timeString;
}
setInterval(updateTime, 1000);
updateTime(); // Run immediately