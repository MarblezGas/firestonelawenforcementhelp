document.getElementById("submitButton").addEventListener("click", function () {
    document.getElementById("welcomeBox").style.display = "none";
    document.getElementById("sidebar").classList.add("open");
});

document.getElementById("arrestButton").addEventListener("click", function () {
    document.getElementById("searchContainer").classList.add("open");
});
