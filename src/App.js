import logo from './logo.svg';
import './App.css';
import Articale from './Articale/articale';
import articales from './data/data.json'
import { useState } from 'react';

function App() {
  const [articaleList, setArticaleList] = useState(articales)
  console.log(articaleList)
  var i =1
  console.log(i)
  i+=1
  console.log(i)
  const addArticale = () => {
    const articale={
      "id":3,
      "title":"wowww!",
      "categoryy":"neww",
      "autor":"new autor",
      "publish_date":"26.01.24"
    }
    setArticaleList([...articaleList, articale]);
  }
  
  return (
    <div className="App">
      <button onClick={addArticale}>Add</button>
      {
        articaleList.map((articale)=>
        <Articale {...articale}/>
        )
      }
    
    </div>
      );

}

export default App;
