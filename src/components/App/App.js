import React, { Component } from 'react';
import axios from 'axios';

import { HashRouter as Router, Route } from 'react-router-dom';
import Start from '../Start/Start';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Add_Comment from '../Add_Comment/Add_Comment'
import Review from '../Review/Review';
import Thank_You from '../Thank_You/Thank_You';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="theme">
        
          <Router>
              <Route exact path="/" component={Start} />
              <Route path="/feeling" component={Feeling} />
              <Route path="/understanding" component={Understanding} />
              <Route path="/support" component={Support} />
              <Route path="/add_comment" component={Add_Comment} />
              <Route path="/review" component={Review} />
              <Route path="/thanks" component={Thank_You} />
          </Router>
      </div>
    );
  }
}

export default App;
