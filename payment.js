let selectedAmount = 0;

function updateAmount() {
  const roomType = document.getElementById("roomType").value;
  const amountDisplay = document.getElementById("amountDisplay");
  const message = document.getElementById("message");

  if (roomType === "AC") {
    selectedAmount = 1000;
  } else if (roomType === "Non-AC") {
    selectedAmount = 500;
  } else {
    selectedAmount = 0;
  }

  amountDisplay.textContent = `Amount: ₹${selectedAmount}`;
}


function confirmPayment() {
  const roomType = document.getElementById("roomType").value;
  const paymentForm = document.getElementById("paymentForm");

  if (!roomType) {
    message.textContent = "Please select a room type.";
    message.style.color = "red";
    return;
  }
  if (!paymentForm.checkValidity()) {
    alert("Please select a payment method.");
    return;
  }

  
  const creditCard = document.getElementById("creditCard").checked;
  const debitCard = document.getElementById("debitCard").checked;
  const upi = document.getElementById("upi").checked;
  const qrCode = document.getElementById("qrCode").checked;
  

  let isPaymentValid = false;

  if (creditCard) {
    const creditCardField = document.getElementById("creditCardField").value.trim();
    isPaymentValid = creditCardField !== "";
    if (!isPaymentValid) alert("Please enter your Credit Card number.");
  } else if (debitCard) {
    const debitCardField = document.getElementById("debitCardField").value.trim();
    isPaymentValid = debitCardField !== "";
    if (!isPaymentValid) alert("Please enter your Debit Card number.");
  } else if (upi) {
    const upiField = document.getElementById("upiField").value.trim();
    isPaymentValid = upiField !== "";
    if (!isPaymentValid) alert("Please enter your UPI ID.");
  } else if (qrCode) {
    isPaymentValid = document.getElementById("qr-section").dataset.payment === "success";
    if (!isPaymentValid) alert("Please scan the QR Code to complete payment.");
  }
 

  if (isPaymentValid) {
    const details = JSON.parse(localStorage.getItem("bookingDetails"));

    if (details) {
      alert(
        `Thank you, ${details.name}! Your table for ${details.people} people on ${details.date} at ${details.time} has been booked successfully.`
      );   
      localStorage.removeItem("bookingDetails");
      window.location.href = "book-table.html";
    } else {
      alert("Booking details not found. Please try again.");
      window.location.href = "book-table.html";
    }
  }
}

function simulateQRScan() {
  alert("QR Code scanned successfully!");
  const qrSection = document.getElementById("qr-section");
  qrSection.dataset.payment = "success";
}

document.getElementById("paymentForm").addEventListener("change", (e) => {
  const qrSection = document.getElementById("qr-section");
  if (e.target.id === "qrCode") {
    qrSection.style.display = "block";
  } else {
    qrSection.style.display = "none";
  }
});




