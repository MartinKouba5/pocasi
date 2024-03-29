import React from "react";

const Navbar = ({ onLogout, isLoggedIn }) => { // Přidána prop isLoggedIn
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img src="https://cdn-icons-png.flaticon.com/512/7477/7477790.png" width="43" height="auto"></img>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Goofy počasí</a>
            </li>
          </ul>
          {isLoggedIn && ( // Tlačítko "Odhlásit se" se zobrazí pouze pokud je uživatel přihlášen
            <form class="d-flex ml-auto"> 
              <button class="btn btn-info" type="button" onClick={handleLogout}>Odhlásit se</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
