import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
import useEncrypt from './useEncrypt';

function App() {

  const [name,setName] = useLocalStorage('name','');
  useUpdateLogger(name);
  console.log(useEncrypt("HELLO WORLD"));

  return (
    <input
      type="=text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}

export default App;
