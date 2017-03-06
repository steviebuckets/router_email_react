import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import MESSAGES from './messages'; // DATA IS BEING PUT OUT AS ALLCAPS
import App from './components/app';
import Inbox from './components/inbox';
import Spam from './components/spam';
import Openm from './components/openm';
import Opens from './components/opens';
import Read from './components/read';

const routes =(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Inbox} />
      <Route path="/read" component={Read} />
      <Route path="/spam" component={Spam} />
        <Route path="/openm" component={Openm} />
        <Route path="/opens" component={Opens} />
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', () =>{
  ReactDOM.render(routes, document.getElementById('app'));
});
//   ReactDOM.render(<Inbox inboxTitle="My Mail" messages={MESSAGES}/>, document.getElementById('app'))
// );
