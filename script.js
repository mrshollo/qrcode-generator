const wrapper = document.querySelector(".wrapper"),
      qrInput = wrapper.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrCode = wrapper.querySelector(".qr-code img");

let preValue = "";

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;

    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    
    // Set the QR code image source
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    
    // Show the QR code after it loads
    qrCode.addEventListener("load", () => {
        document.querySelector(".qr-code").style.display = "flex";
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

// Reset the QR code if the input is cleared
qrInput.addEventListener("input", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        document.querySelector(".qr-code").style.display = "none";
    }
});
