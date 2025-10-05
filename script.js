document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errors = [];

   
    if (name.length < 2) {
      errors.push("Please enter your name.");
    }

    if (email === "") {
      errors.push("Please enter your email address.");
    }

    if (message.length < 5) {
      errors.push("Your message must be at least 5 characters long.");
    }

    
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      
      alert("✅ Thank you! Your message has been sent successfully.");
      form.reset(); 
    }
  });
});