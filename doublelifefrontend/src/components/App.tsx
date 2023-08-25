import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routers } from '../routes/Routers';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
