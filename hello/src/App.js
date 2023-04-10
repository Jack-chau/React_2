import './App.css';
import Employee from './components/Employee'
import { useState } from 'react' ;

function App() {
  const [ role, setRole ] = useState( 'dev' ) ;

  const showEmployees = true ;
  return (
    <div className="App">

      { showEmployees ? ( 
      // if ture 
        <>
        <input 
          type = "text" 
          onChange = { ( e ) => {
          console.log( e.target.value ) ;
          setRole( e.target.value ) ;
          } } 
        />

          <Employee name="Jack" role="Intern"/>
          <Employee name="Calabe" role="Professor"/>
          <Employee name="Abby" role={ role }/>
        </>
      // if false
      ) : ( 
        <p>You cannot see the employees</p>
    ) } 

    </div>
  );
}

export default App;
