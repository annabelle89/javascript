function calculThem() {
    var shoeSize = document.getElementById('shoeSize').value;
    var birth = document.getElementById('birth').value;
    var result = (((((shoeSize * 2) + 5) * 50) - birth) + 1769);
    alert('le résultat est: ' + result);
}