import '../index.css' ;
import Employee from '../components/Employee' ;
import { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid' ;
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {
  const [ role, setRole ] = useState( 'no Role' ) ;
  const [ employees, setEmployees ] = useState([
      { 
        id : 1,
        name : "Jack",
        role : "Intern",
        img : "https://images.pexels.com/photos/1098684/pexels-photo-1098684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },

     {
      id : 2,
      name : "Calabe" ,
      role : "Professor",
      img : "https://images.pexels.com/photos/1549528/pexels-photo-1549528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     },

     {
      id : 3,
      name : "loserJack",
      role : "abc company",
      img : "https://images.pexels.com/photos/3283430/pexels-photo-3283430.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     },

     {
      id : 4,
      name : "rubbishJack",
      role : "joker",
      img : "https://images.pexels.com/photos/10368942/pexels-photo-10368942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     },

     {
      id : 5,
      name : "Abby",
      role : "no Role",
      img :   "https://images.pexels.com/photos/4042772/pexels-photo-4042772.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
     },
    ]) ;

  function updateEmployee( id, newName, newRole ) {
    const updatedEmployees = employees.map( ( employee ) => {
      if ( id === employee.id ) {
        return { ...employee, name : newName, role : newRole } ;
      }
        return employee ;
    } ) ;
    setEmployees( updatedEmployees ) ;
  }

  function newEmployee( name, role, img ) {
    const newEmployee = {
      id : uuidv4( ),
      name : name ,
      role : role ,
      img : img ,
    }
    setEmployees( [ ...employees, newEmployee ] )
  }

  const showEmployees = true ;

  return (
    <div className="App bg-gray-300 min-h-screen" >

      { showEmployees ? (
      // if ture 
        <>
          <div className="flex flex-wrap justify-center my-2">
            { employees.map( ( employee ) => {
                const editEmployee = (
                  < EditEmployee 
                      id = { employee.id }
                      name = { employee.name }
                      role = { employee.role }
                      updateEmployee = { updateEmployee }
                  />
                ) ;
              return (
                <Employee
                  key = { employee.id }
                  id = { employee.id }
                  name = { employee.name }
                  role = { employee.role }
                  img = { employee.img }
                  editEmployee = { editEmployee }
                />
              ) ; }
            ) }
          </div>

          <div className='flex flex-wrap justify-center'>
            { <AddEmployee newEmployee = { newEmployee } ></AddEmployee>}
          </div>
        </>
      // if false
      ) : ( 
        <p>You cannot see the employees</p>
    ) } 

    </div>
  );
}

export default Employees;
