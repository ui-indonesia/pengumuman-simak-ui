document.getElementById('result-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const registrationNumber = document.getElementById('registration-number').value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const result = data.find(item => item.registration_number === registrationNumber);
            if (result) {
                document.getElementById('result').innerHTML = result.status === 'LULUS' 
                    ? '<p class="success">Selamat! Anda dinyatakan LULUS.</p>' 
                    : '<p class="failure">Maaf, Anda BELUM LULUS.</p>';
            } else {
                document.getElementById('result').innerHTML = '<p class="not-found">Nomor pendaftaran tidak ditemukan.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
