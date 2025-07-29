document.addEventListener('DOMContentLoaded', function () {
    const transferForm = document.getElementById('transfer-form');
    transferForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const Account = document.getElementById('from-account').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const balances = {savings: 223432,current: 24583};
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        else if (amount > balances[Account]) {
            alert('Insufficient balance in the selected account.');
            return window.location.href = 'dashboard.html';
        }
        else{
            alert('Transfer successful!\nAmount: ₹' + amount.toFixed(2));
            transferForm.reset();
            return;        
        }
    });
});