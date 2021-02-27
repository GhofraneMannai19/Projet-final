
import React from "react";
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import Header from './Header.js';
import Project from './Project';
import Contact from './Contact';

  return (
<Router>
      
        <Switch>
           <Route exact path="/" component={Header}/>
           <Route path="/project" component={Project} />
           <Route path="/Contact" component={Contact} />
      
        </Switch>
      
    </Router>
  );
}

export default App;
