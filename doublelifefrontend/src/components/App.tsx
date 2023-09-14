/* eslint-disable react/jsx-no-undef */
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routers } from '../routes/Routers';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { useLocation } from 'react-router-dom';
// import ErrorBoundary from 'pages/errorpage/ErrorBoundary';

function App() {
  // const locationNow = useLocation();
  return (
    
    <div className="App">

      {window.location.pathname === "/petmap/salon" || window.location.pathname === "/petmap/hospital"
      ? <>
      <Header />
      <Routers />
      </>
      :
      <>
      <Header />
      <Routers />
      <Footer />
      </>
      }
      
  
      {/* <ErrorBoundary>     */}
      {/* <Header />
      <Routers />
      <Footer /> */}
     
      
     
      {/* </ErrorBoundary>   */}
    </div>
    
  );
}

export default App;
