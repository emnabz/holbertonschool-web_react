import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils';
import Notifications from  '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function App() {
  return (
    <>
    <Notifications />
    <div className="App">
    <Header/>
    </div>
      <div className='App-body'>
    <Login/>
    </div>
    <div className='App-footer'>
    <Footer/>
    </div>
  </>
  );
}

export default App;
