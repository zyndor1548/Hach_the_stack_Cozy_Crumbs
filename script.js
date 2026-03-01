document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('guests').value;

    // Standard confirmation message
    alert(`Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been requested.`);
    
    // Reset the form after submission
    this.reset();
});