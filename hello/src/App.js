import './App.css';
import Employee from './components/Employee'

function App() {
  console.log( "we are about to list the employees" ) ;
  const showEmployees = true ;
  return (
    <div className="App">

      { showEmployees ? ( 
      // if ture 
        <>
          <Employee name="Jack" role="Intern"/>
          <Employee name="Calabe" role="Professor"/>
          <Employee name="Abby"/>
        </>
      // if false
      ) : ( 
        <p>You cannot see the employees</p>
    ) } 

    </div>
  );
}

export default App;
