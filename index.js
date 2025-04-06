let loggedIn = false;
let username = '';

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    username = document.getElementById('username').value;
    loggedIn = true;
    updateNavbar();
    let loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.hide();
});

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registration Successful');
    let registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    registerModal.hide();
});

document.getElementById('logout-btn').addEventListener('click', () => {
    loggedIn = false;
    username = '';
    updateNavbar();
});

function updateNavbar() {
    if (loggedIn) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'none';
        document.getElementById('logged-in-user').style.display = 'flex';
        document.getElementById('username-display').innerText = username;
    } else {
        document.getElementById('login-btn').style.display = 'inline-block';
        document.getElementById('register-btn').style.display = 'inline-block';
        document.getElementById('logged-in-user').style.display = 'none';
    }
}

// Initialize
updateNavbar();