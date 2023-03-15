// ini bagian fungsi untuk melakukan operasi penjumlahan dua angka yang diambil dari inputan pada halaman HTML
function tambah() {
    // Mengambil nilai input angka pertama dan kedua dari halaman HTML dan mengonversinya menjadi tipe data float
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    // Melakukan operasi penjumlahan antara dua angka tersebut
    var hasil = angka1 + angka2;
    // Mengecek apakah hasilnya adalah NaN (Not a Number)
    if (isNaN(hasil)) {
      // Jika hasilnya NaN, maka menampilkan pesan bahwa angka belum terisi pada halaman HTML
      document.getElementsByName("hasil")[0].value = "Maaf angka belum terisi";
      document.getElementById("inputuser").innerHTML = "Maaf angka belum terisi, <br> Silahkan diisi terlebih dahulu";
    } else {
      // Jika hasilnya bukan NaN, maka menampilkan hasil penjumlahan dan pesan yang berisi angka-angka yang diinputkan oleh user beserta operator matematika yang digunakan pada halaman HTML
      document.getElementsByName("hasil")[0].value = hasil;
      document.getElementById("inputuser").innerHTML = "Anda menginput " + angka1 + " dan " + angka2 + " dengan menggunakan operator matematika yaitu <b>TAMBAH (+)</b> menghasilkan " + hasil;
    }
}

// ini bagian fungsi untuk melakukan operasi pengurangan dua angka yang diambil dari inputan pada halaman HTML
function kurang() {
    // Mengambil nilai input angka pertama dan kedua dari halaman HTML dan mengonversinya menjadi tipe data float
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    // Melakukan operasi pengurangan antara dua angka tersebut
    var hasil = angka1 - angka2;
    // Mengecek apakah hasilnya adalah NaN (Not a Number)
    if (isNaN(hasil)) {
      // Jika hasilnya NaN, maka menampilkan pesan bahwa angka belum terisi pada halaman HTML
      document.getElementsByName("hasil")[0].value = "Maaf angka belum terisi";
      document.getElementById("inputuser").innerHTML = "Maaf angka belum terisi, <br> Silahkan diisi terlebih dahulu";
    } else {
      // Jika hasilnya bukan NaN, maka menampilkan hasil pengurangan dan pesan yang berisi angka-angka yang diinputkan oleh user beserta operator matematika yang digunakan pada halaman HTML
      document.getElementsByName("hasil")[0].value = hasil;
      document.getElementById("inputuser").innerHTML = "Anda menginput " + angka1 + " dan " + angka2 + " dengan menggunakan operator matematika yaitu <b>KURANG (-)</b> menghasilkan " + hasil;
    }
}

// ini bagian fungsi untuk melakukan operasi perkalian dua angka yang diambil dari inputan pada halaman HTML
function kali() {
  // Mengambil nilai input angka pertama dan kedua dari halaman HTML dan mengonversinya menjadi tipe data float
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    // Melakukan operasi perkalian antara dua angka tersebut
    var hasil = angka1 * angka2;
    // Mengecek apakah hasilnya adalah NaN (Not a Number)
    if (isNaN(hasil)) {
      // Jika hasilnya NaN, maka menampilkan pesan bahwa angka belum terisi pada halaman HTML
      document.getElementsByName("hasil")[0].value = "Maaf angka belum terisi";
      document.getElementById("inputuser").innerHTML = "Maaf angka belum terisi, <br> Silahkan diisi terlebih dahulu";
    } else {
      // Jika hasilnya bukan NaN, maka menampilkan hasil perkalian dan pesan yang berisi angka-angka yang diinputkan oleh user beserta operator matematika yang digunakan pada halaman HTML
      document.getElementsByName("hasil")[0].value = hasil;
      document.getElementById("inputuser").innerHTML = "Anda menginput " + angka1 + " dan " + angka2 + " dengan menggunakan operator matematika yaitu <b>KALI (*)</b> menghasilkan " + hasil;
    }
}

// ini bagian fungsi untuk melakukan operasi pembagian dua angka yang diambil dari inputan pada halaman HTML
function bagi() {
    // Mengambil nilai input angka pertama dan kedua dari halaman HTML dan mengonversinya menjadi tipe data float
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    // Melakukan operasi pembagian antara dua angka tersebut
    var hasil = angka1 / angka2;
    // Mengecek apakah hasilnya adalah NaN (Not a Number)
    if (isNaN(hasil)) {
      // Jika hasilnya NaN, maka menampilkan pesan bahwa angka belum terisi pada halaman HTML
      document.getElementsByName("hasil")[0] .value = "Maaf angka belum terisi";
      document.getElementById("inputuser").innerHTML = "Maaf angka belum terisi, <br> Silahkan diisi terlebih dahulu";
    } else {
      // Jika hasilnya bukan NaN, maka menampilkan hasil pembagian dan pesan yang berisi angka-angka yang diinputkan oleh user beserta operator matematika yang digunakan pada halaman HTML
      document.getElementsByName("hasil")[0].value = hasil;
      document.getElementById("inputuser").innerHTML = "Anda menginput " + angka1 + " dan " + angka2 + " dengan menggunakan operator matematika yaitu <b>BAGI (/)</b> menghasilkan " + hasil;
    }
}

// ini bagian fungsi untuk melakukan operasi perpangkatan dua angka yang diambil dari inputan pada halaman HTML
function pangkat() {
    // Mengambil nilai input angka pertama dan kedua dari halaman HTML dan mengonversinya menjadi tipe data float
    var angka1 = parseFloat(document.getElementsByName("angka")[0].value);
    var angka2 = parseFloat(document.getElementsByName("angka2")[0].value);
    // Melakukan operasi perpangkatan antara dua angka tersebut
    var hasil = Math.pow(angka1, angka2);
    // Mengecek apakah hasilnya adalah NaN (Not a Number)
    if (isNaN(hasil)) {
      // Jika hasilnya NaN, maka menampilkan pesan bahwa angka belum terisi pada halaman HTML
      document.getElementsByName("hasil")[0].value = "Maaf angka belum terisi";
      document.getElementById("inputuser").innerHTML = "Maaf angka belum terisi, <br> Silahkan diisi terlebih dahulu";
    } else {
      // Jika hasilnya bukan NaN, maka menampilkan hasil perpangkatan dan pesan yang berisi angka-angka yang diinputkan oleh user beserta operator matematika yang digunakan pada halaman HTML
      document.getElementsByName("hasil")[0].value = hasil;
      document.getElementById("inputuser").innerHTML = "Anda menginput " + angka1 + " dan " + angka2 + " dengan menggunakan operator matematika yaitu <b>PANGKAT (^)</b> menghasilkan " + hasil;
    }
}

// Fungsi untuk mereset form
function resetForm() {
  // Reset form dengan id "frm"
  document.getElementById("frm").reset();
  // Buat variabel kosong yang berisi string kosong
  var kosong = "";
  // Set innerHTML dari elemen dengan id "inputuser" menjadi kosong
  document.getElementById("inputuser").innerHTML = kosong;
}