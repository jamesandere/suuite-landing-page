import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
