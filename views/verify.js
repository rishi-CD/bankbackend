document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const CustomerId = document.getElementById("customer-id").value;
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/bank/login/${CustomerId}`);
      const jsn = await res.json();
      if (jsn.error) {
        alert(jsn.error);
      }else if(password!= jsn.password){
        alert("Password Wrong")
      } 
      else {
        window.location.href = "dashboard.html";
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Network error. Please try again later.");
    }
  });
