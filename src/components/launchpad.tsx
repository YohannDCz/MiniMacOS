import React from 'react';
import '../styles/launchpad.css';

const Launchpad = () => {
  return (
    <div className="container" id="container">
      <div className="exit" id="exit"></div>
      <div className="input">
        <img id="input-image" src="../images/icons/icon_search.svg" alt="Magnifier" />
        <input id="input" type="text" placeholder="Rechercher" autoComplete="off" />
      </div>
      <main className="panel">
        <div className="app">
          <img src="../images/apps/app_safari.png" alt="Safari logo" />
          <p>Safari</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_vstudio.png" alt="VSStudio logo" />
          <p>VS Code</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_notes.png" alt="Notes logo" />
          <p>Notes</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_calendar.png" alt="Calendar logo" />
          <p>Calendrier</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_photoshop.png" alt="Photoshop logo" />
          <p>Photoshop</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_facetime.png" alt="Facetime logo" />
          <p>Facetime</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_calculator.png" alt="Calculator logo" />
          <p>Calculatrice</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_terminal.png" alt="Terminal logo" />
          <p>Terminal</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_word.png" alt="Word logo" />
          <p>Word</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_mail.png" alt="Mail logo" />
          <p>Mail</p>
        </div>
        <div className="app">
          <img src="../images/apps/app_settings.png" alt="Settings logo" />
          <p>Paramètres</p>
        </div>
      </main>
    </div>
  );
}

export default Launchpad;
