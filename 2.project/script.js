// // Button Click

// const button = document.querySelector("button");

// button.addEventListener("click", () => {

//     alert("Appointment page coming soon!");

// });

//NEW

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("✅ Appointment Booked Successfully!");

        appointmentForm.reset();

    });

}

// Login Form

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Login Successful!");

        loginForm.reset();

    });

}

const searchDoctor = document.getElementById("searchDoctor");
const doctorCards = document.querySelectorAll(".doctor-card");
const filterButtons = document.querySelectorAll(".filter-btn");

function filterDoctors() {

    const searchText = searchDoctor.value.toLowerCase();
    const activeButton = document.querySelector(".filter-btn.active");
    const selectedDepartment = activeButton.dataset.filter.toLowerCase();

    doctorCards.forEach(card => {

        const doctorName = card.querySelector("h3").textContent.toLowerCase();
        const specialization = card.querySelector("h4").textContent.toLowerCase();

        const matchesSearch =
            doctorName.includes(searchText) ||
            specialization.includes(searchText);

        const matchesDepartment =
            selectedDepartment === "all" ||
            specialization.includes(selectedDepartment);

        if(matchesSearch && matchesDepartment){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// Search

searchDoctor.addEventListener("keyup", filterDoctors);

// Filter Buttons

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

filterDoctors();

});

});


//  Book Appointment Buttons

const doctorButtons = document.querySelectorAll(".doctor-card button");

doctorButtons.forEach(button=>{

button.addEventListener("click",()=>{

window.location.href="appointment.html";

});

});

// Service Card Animation

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Contact Form

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Your message has been sent.");

contactForm.reset();

});

}


// ================= REGISTER PAGE =================

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;

if(password!==confirmPassword){

alert("❌ Password and Confirm Password do not match!");

return;

}

alert("✅ Registration Successful!");

registerForm.reset();

});

}

// Show / Hide Password

function togglePassword(id,icon){

const input=document.getElementById(id);

if(input.type==="password"){

input.type="text";

icon.classList.remove("fa-eye");
icon.classList.add("fa-eye-slash");

}else{

input.type="password";

icon.classList.remove("fa-eye-slash");
icon.classList.add("fa-eye");

}

}

// ================= FORGOT PASSWORD =================

const forgotForm = document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("forgotEmail").value;

alert("✅ Password reset link has been sent to:\n\n"+email);

forgotForm.reset();

});

}