
import './App.css';
import CompA from './components/CompA';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  const details=[
    {
      name:"ammu",
      roll:"636"
    },
    {
      name:"jhanu",
      roll:"668" 
    },
    {
      name:"SAI",
      roll:"622"
    }
  ]
  return (
    <>
    <BrowserRouter>
    <ul>
      <li>
      <Link to="/CompA">click to CompA WELCOME </Link>
      </li>
    </ul>
      
      <Routes>
        <Route path="/CompA" element={<CompA data={details}/>}></Route>
        
    </Routes>
    
    
    
    
    </BrowserRouter>
     
    
    
    </>
    
  );
}

export default App;
