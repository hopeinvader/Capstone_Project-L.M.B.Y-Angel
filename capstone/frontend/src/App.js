import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarTest} from './components/Navbar';
import Login from './components/LogIn';
import SignUp from './components/SignUp'
import PitchViewPage from './components/Entrepneurs/PitchViewPage';
import ProfileViewPage from './components/Investors/ProfileViewPage';
import MainPage from './components/MainPage';
import Faq from './components/Faq';
import GetstartEntrepneurs from './components/Entrepneurs/GetstartEntrepneurs';
import GetstartInvestors from './components/Investors/GetstartInvestors';
import SearchEntrepneurs from './components/Entrepneurs/SearchEntrepneurs';
import SearchInvestors from './components/Investors/SearchInvestors';
import EntrepneursPitch from './components/Entrepneurs/EntrepneursPitch';
import InvestorsProfile from './components/Investors/InvestorsProfile';
import Footer from './components/Footer'
import Layout from './components/Layout'
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard'
import Dashboard2 from './components/Dashboard/Dashboard2'

const PurePrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const Component = component;
  if (Component != null) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  } else {
    return null;
  }
};

const PrivateRoute = connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PurePrivateRoute);


function App() {
  return (
    <Router>
    <div className="App">
      <NavbarTest />
      <Route exact={true} path="/" component={MainPage} />
      <Route exact={true} path="/layout"  title="Hello" component={Layout}/>
      <Route path="/pitch" component={Dashboard}/>
      <Route path="/profile" component={Dashboard2}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/search/entrepneurs" component={SearchEntrepneurs} />
      <Route path="/entrepneurs/:id" component={EntrepneursPitch} />
      <Route path="/search/investors" component={SearchInvestors} />
      <Route path="/investors/:id" component={InvestorsProfile} />
      <Route exact={true} path="/getstart/entrepneurs" component={GetstartEntrepneurs} />
      <PrivateRoute exact={true} path="/getstart/entrepneurs/pitch" component={PitchViewPage} />
      <Route exact={true} path="/getstart/investors" component={GetstartInvestors} />
      <PrivateRoute exact={true} path="/getstart/investors/pitch" component={ProfileViewPage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
