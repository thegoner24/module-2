const toggleButton = document.getElementById("dark-mode-toggle");


if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "🌞"; 
} else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙"; 
}


toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "🌞";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙"; 
    }
});
