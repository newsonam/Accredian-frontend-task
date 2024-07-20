
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const showToastMessage = () => {
    toast.success("Refer data submitted !");
  };
  return (
    <div className="App">
      <Header />
      <Main showToastMessage={showToastMessage} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
