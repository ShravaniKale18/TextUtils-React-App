import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App(props) {
  return (
    <>
      <Navbar
        title="TextUtils"
        homeText="Home"
        aboutText="About TextUtils"
      />
      <div className="container my-3">
        <TextForm heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;
