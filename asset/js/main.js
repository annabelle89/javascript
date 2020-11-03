function divideThem() {
    var firstnumber = document.getElementById('firstnumber').value;
    var secondnumber = document.getElementById('secondnumber').value;
    var result = (firstnumber % secondnumber);
    alert(result);
}

function displayAlert() {
    var myResult = divideThem();
    alert(myResult);
}
/*---ou---*/
function displayAlert() {
    alert(divideThem());
}