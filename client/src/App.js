import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>

    </div>
  );
}

export default App;
