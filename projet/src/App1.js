import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
  import Project from './Project';

function App1(){
    return(
 <Router>

<Switch>
<Route path="/Project" component={Project} />
</Switch>  
</Router>
    );
}
export default App1;