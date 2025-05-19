function addFadeOut() {
  document.body.classList.add('fade-out');
}


const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
let bookingDetails = {};
//for book table
function goToPayment() {
  const form = document.getElementById("bookTableForm");

  if (form.checkValidity()) {
    // Store booking details in localStorage
    bookingDetails = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      people: document.getElementById("people").value,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    window.location.href = "payment.html";
  } else {
    alert("Please fill out all fields before proceeding.");
  }
}

//Contact Javascript
function validateForm2() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before Submitting");
  } else {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);
    
      alert("Response sent successfully!");
      
  }
}
function logout() {

  window.open('Logout.html','_self');

}
function closePage() {
  alert("The page will now close."); 
  window.open('login.html ', '_self'); 
}