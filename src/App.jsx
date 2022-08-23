import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Movies from './components/Movie';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='header bg-warning'>
        <Header />
      </div>
      <Movies />
      <Footer />
    </>
  );
}

export default App;
