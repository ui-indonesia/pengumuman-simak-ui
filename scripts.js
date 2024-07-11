document.getElementById('result-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch('check-result.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
