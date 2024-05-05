import { useState } from 'react';
import './App.css';
import { Copy, ClipboardCheck } from 'lucide-react';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Radio, setRadio] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordLength, setPasswordLength] = useState(12);
  const [cpy, setcpy] = useState(false);

  const getPassword = () => {
    let charset;
    if (Radio === 'easy') {
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (Radio === 'medium') {
      charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    } else {
      charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&%*$!';
    }

    let retVal = '';
    for (var i = 0, n = charset.length; i < PasswordLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(retVal);
    setcpy(false);
  };

  const copytoclip = () => {
    copy(Password);
    toast.success('Password Copied');
    setcpy(true);
  };

  return (
    <div className="main">
      <input
        type="number"
        style={{ width: '50px', textAlign: 'center' }}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        value={PasswordLength}
      />
      <div className="radio">
        <label>Easy</label>
        <input
          type="radio"
          name="Strength"
          value="easy"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>Medium</label>
        <input
          type="radio"
          name="Strength"
          value="medium"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>Hard</label>
        <input
          type="radio"
          name="Strength"
          value="hard"
          onChange={(e) => setRadio(e.target.value)}
        />
      </div>

      <div className="inpu">
        <input type="text" value={Password} />
        {cpy ? (
          <ClipboardCheck className="copy" />
        ) : (
          <Copy className="copy" onClick={copytoclip} />
        )}
      </div>
      <div className="card">
        <button onClick={getPassword}>Get Password</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
