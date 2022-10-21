import './App.css';
// import useLocalStorage from './useLocalStorage';
// import useUpdateLogger from './useUpdateLogger';
// import useEncrypt from './useCrypto';
// import useArithmetic from './useArithmetic';
import usePattern from './usePattern';

function App() {

  // const [name,setName] = useLocalStorage('name','');
  // useUpdateLogger(name);
  // console.log(useEncrypt("U2FsdGVkX1+zhCehNH7+8dxjCCydwIYqCaZl43EIN0Y="));
  // console.log(useArithmetic(5,5));
  console.log(usePattern(8,8,"diamond","*"))

  return (
    // <input
    //   type="=text"
    //   value={name}
    //   onChange={e => setName(e.target.value)}
    // />
    <h1>
      hello custom react hook from Tharoth
    </h1>
  );
}

export default App;
