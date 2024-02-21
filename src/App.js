

import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import  Routes  from './pages/Routes';
function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
