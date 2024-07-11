document.getElementById('result-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const registrationNumber = document.getElementById('registration-number').value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const result = data.find(item => item.registration_number === registrationNumber);
            if (result) {
                document.getElementById('result').innerHTML = result.status === 'LULUS' 
                    ? 'Selamat! Anda dinyatakan LULUS.' 
                    : 'Maaf, Anda BELUM LULUS.';
            } else {
                document.getElementById('result').innerHTML = 'Nomor pendaftaran tidak ditemukan.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
