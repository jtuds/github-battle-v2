let React = require('react');
let Home = require('./Home');
let Popular = require('./Popular');
let Battle = require('./Battle');
let ReactRouter = require('react-router-dom');
let Nav = require('./Nav');
let hashHistory = require('react-router-dom').hashHistory;

let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route 
              render={function() {
                return <p>Not found</p>;
              }} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
