function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["pass"].value;

    if (x == "admin", y == "kelompok7") {
        alert("Login Success!")
        return true
    }
    else {
        alert("Username atau Password Salah!")
        return false
    }
}