/* eslint-disable react/jsx-no-undef */
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routers } from '../routes/Routers';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import ErrorBoundary from 'pages/errorpage/ErrorBoundary';

function App() {
  return (
    
    <div className="App">
      
  
      {/* <ErrorBoundary>     */}
      <Header />
      <Routers />
      <Footer />
     
      
     
      {/* </ErrorBoundary>   */}
    </div>
    
  );
}

export default App;
