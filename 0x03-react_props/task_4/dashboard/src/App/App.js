import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils';
import Notifications from  '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import Header from '../Header/Header';
import PropTypes from "prop-types";


function App() {
  return (
    <>
    <Notifications />
    <div className="App">
    <Header/>
    </div>
      <div className='App-body'>{!isLoggedIn ? <Login /> : <CourseList />}</div>
    <div className='App-footer'>
    <Footer/>
    </div>
  </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
