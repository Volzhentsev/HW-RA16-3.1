import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
      <Stars count={0} />
      <Stars count={5} />
      <Stars count={3} />
      <Stars count={7} />
    </>

  );
}

export default App;
