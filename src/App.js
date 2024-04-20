import './App.css';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <div className="App">
      <p>test</p>
      <GoogleLogin
  onSuccess={credentialResponse => {
    var decoded=jwtDecode(credentialResponse.credential);
    console.log(decoded);
  }}
  onError={() => {console.log('Login Failed');}}
/>;
    </div>
  );
}

export default App;
