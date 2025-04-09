document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkomt dat het formulier op de traditionele manier wordt ingediend
  
    // Verkrijg gebruikersnaam en wachtwoord uit het formulier
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Eenvoudige controle voor gebruikersnaam en wachtwoord (vervang dit door echte validatie)
    if (username === "jouwgebruikersnaam" && password === "jouwwachtwoord") {
      // Bij succes, doorverwijzen naar het dashboard
      window.location.href = "dashboard.html";  // Vervang dit door de daadwerkelijke locatie van je dashboard
    } else {
      alert("Ongeldige gebruikersnaam of wachtwoord. Probeer het opnieuw.");
    }
  });
  
  // Hamburger menu
  document.getElementById("menu-toggle").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
  });
  // Functie voor het toggelen van het hamburger menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}