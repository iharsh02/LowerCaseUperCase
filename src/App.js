// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title = "Senpai Moon"  aboutTxt = "About me" Search ="Search"/>
      {/* <Navbar/> */}

      
      <Textform txt ="Enter the Text " btn ="convert to upper case" btn2 ="convert to lower case" btn3 ="Find and Replace"/>
      
    </>

  );
}

export default App;



