import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
import useEncrypt from './useCrypto';
import useArithmetic from './useArithmetic';

function App() {

  const [name,setName] = useLocalStorage('name','');
  // useUpdateLogger(name);
  // console.log(useEncrypt("U2FsdGVkX1+zhCehNH7+8dxjCCydwIYqCaZl43EIN0Y="));
  console.log(useArithmetic(5,5));

  return (
    <input
      type="=text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}

export default App;
