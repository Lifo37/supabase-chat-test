
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/Header';
import Footer from "./layout/Footer"
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      
      <Header/>
      <Chat />
      <Footer/>
    </Router>
  );
}

export default App;
