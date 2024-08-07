
setTimeout(a, 1)


function a() {
    
    
    document.getElementById('login-form').addEventListener('submit', function(event) {
    
    document.getElementById('username').value = document.getElementById('username').value.trim();

document.getElementById('password').value = document.getElementById('password').value.trim();
    
    var username = document.getElementById('username').checkValidity();
    var password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        event.preventDefault();
    }
});


    
    
    
}
