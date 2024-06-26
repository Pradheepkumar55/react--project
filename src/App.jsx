import Demo from "./Components/Demo"
import './App.css';
const App = () => {
  const name=["BUS" ,"Ship","TRAIN","LORRY","CAR","BIKE"]
 return <>
 {
 name .map((name,ind) => <Demo name={name } key={ind}/>)
 }
 </>;
  
  




    
};

export default App