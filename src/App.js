import logo from './logo.svg';
import './App.scss';
import Header from './shared/components/header';
import Footer from './shared/components/footer';
import Home from './home/module';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
