import Recaptcha from 'react-recaptcha';
import './App.css';

function App() {
  const validacion = () => {
    console.log("Respuesta")
  }
  return (
    <div className="App">
      <center>
      <Recaptcha
    sitekey="6LfaWpQaAAAAAH8X7L3GDxlQCse4TZIsVBq3UKdN"
    render="explicit"
    onloadCallback={validacion}
  />
      </center>
     
    </div>
  );
}

export default App;
