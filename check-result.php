<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $registrationNumber = $_POST['registration-number'];
    // Koneksi ke database
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM kelulusan WHERE registration_number = '$registrationNumber'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if ($row['status'] == 'LULUS') {
            echo "Selamat! Anda dinyatakan LULUS.";
        } else {
            echo "Maaf, Anda BELUM LULUS.";
        }
    } else {
        echo "Nomor pendaftaran tidak ditemukan.";
    }

    $conn->close();
}
?>
