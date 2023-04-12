import './index.css';
import Employee from './components/Employee'
import { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid' ;

function App() {
  const [ role, setRole ] = useState( 'no Role' ) ;
  const [ employees, setEmployees ] = useState( 
    [
      { 
        name : "Jack",
        role : "Intern",
        img : "https://images.pexels.com/photos/1098684/pexels-photo-1098684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     },

     {
      name : "Calabe" ,
      role : "Professor",
      img : "https://images.pexels.com/photos/1549528/pexels-photo-1549528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
     },

     {
      name : "loserJack",
      role : "abc company",
      img : "https://images.pexels.com/photos/3283430/pexels-photo-3283430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
     },

     {
      name : "rubbishJack",
      role : "joker",
      img : "https://images.pexels.com/photos/10368942/pexels-photo-10368942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
     },

     {
      name : "Abby",
      role : "no Role",
      img :   "https://images.pexels.com/photos/4042772/pexels-photo-4042772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
     }

    ]
  ) ;

  const showEmployees = true ;

  return (
    <div className="App" >

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
        <div className="flex flex-wrap justify-center">

          { employees.map( ( employee ) => {
            console.log( employee ) ;
            console.log( uuidv4() ) ;
            return (
              <Employee
                key = { uuidv4( ) }
                name = { employee.name }
                role = { employee.role }
                img = { employee.img }
              />
            ) ;
          } ) }

        </div>
        </>
      // if false
      ) : ( 
        <p>You cannot see the employees</p>
    ) } 

    </div>
  );
}

export default App;
