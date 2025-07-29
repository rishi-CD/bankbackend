document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const bankName = document.getElementById('bank-name').value;
    const type = document.getElementById('type').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    try {
        const response = await fetch('/bank/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerName, bankName, type, password, confirmPassword })
        });
        const result = await response.json();
        if (response.ok) {
            alert(`Registration successful! Your Customer ID: ${result.customerId}`);
            localStorage.setItem('customerId', result.customerId);
            window.location.href = 'index.html'; 
        } else {
            alert(`Error: ${result.error || 'Registration failed'}`);
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Network error. Please try again later.');
    }
});
