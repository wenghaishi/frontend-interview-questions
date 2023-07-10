import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

function App() {
  const arr = [1,2,3,4,5]
  return (
    <div className="App">
      <h1>Select your top 5 tech skills</h1>
      <div className='box'>
        {arr.map((e) => <Item key={e} num={e}/>)}
      </div>
    </div>
  );
}

export default App;
