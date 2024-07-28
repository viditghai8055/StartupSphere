document.addEventListener("DOMContentLoaded", function() {
    const startupOption = document.getElementById("startup-option");
    const investorOption = document.getElementById("investor-option");
    const startupForm = document.getElementById("startup-form");
    const investorForm = document.getElementById("investor-form");
    const signUpBox = document.getElementById("sign-up-box");
    const sectorSelect = document.getElementById("sector");
    const otherSectorInput = document.getElementById("other-sector");

    startupOption.addEventListener("click", function() {
        startupForm.classList.remove("hidden");
        investorForm.classList.add("hidden");
        signUpBox.classList.add("hidden");
    });

    investorOption.addEventListener("click", function() {
        investorForm.classList.remove("hidden");
        startupForm.classList.add("hidden");
        signUpBox.classList.add("hidden");
    });

    sectorSelect.addEventListener("change", function() {
        if (sectorSelect.value === "other") {
            otherSectorInput.classList.remove("hidden");
        } else {
            otherSectorInput.classList.add("hidden");
        }
    });

    // Verification functionality (simplified example)
    document.getElementById("verify-email-startup").addEventListener("click", function() {
        alert("Verification code sent to the startup's email.");
    });

    document.getElementById("verify-phone-startup").addEventListener("click", function() {
        alert("Verification code sent to the startup's phone.");
    });

    document.getElementById("verify-email-investor").addEventListener("click", function() {
        alert("Verification code sent to the investor's email.");
    });

    document.getElementById("verify-phone-investor").addEventListener("click", function() {
        alert("Verification code sent to the investor's phone.");
    });
});

function redirectToPage() {
    window.location.href = 'form.html';
}

function scrollToSection1() {
    const section = document.getElementById("section1");
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection2() {
    const section = document.getElementById("section2");
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection3() {
    const section = document.getElementById("section3");
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection4() {
    const section = document.getElementById("section4");
    section.scrollIntoView({ behavior: 'smooth' });
}
 
function scrollToFooter() {
    const section = document.getElementById("footer");
    section.scrollIntoView({ behavior: 'smooth' });
}