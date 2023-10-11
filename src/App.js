
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className='container'>
      <TextForm heading="Enter the text"/>
    </div> 
    
    </>
  ); 
}

export default App;
