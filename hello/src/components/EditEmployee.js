import React, { useState } from 'react' ;
import Button from 'react-bootstrap/Button' ;
import Modal from 'react-bootstrap/Modal' ;

function EditEmployee( props ) {
  const [ name, setName ] = useState( props.name ) ;
  const [ role, setRole ] = useState( props.role ) ;

  const [ show, setShow ] = useState( false ) ;

  const handleClose = ( ) => setShow( false ) ;
  const handleShow = ( ) => setShow( true ) ;

  return (
    <>
      <Button 
        onClick={ handleShow }
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500... "
      >  
        Update
      </Button>

      <Modal 
        show = { show }
        onHide = { handleClose }
        backdrop = "static"
        keyboard = { false }
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form 
            onSubmit={ ( e ) => {
              handleClose( ) ;
              e.preventDefault( ) ;
              props.updateEmployee(  props.id, name, role ) ;
            } }
            id='editmodal' 
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label 
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                  htmlFor="employee-name"
                >
                  Employee Name
                </label>  
              </div>

              <div className="md:w-2/3">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="name" 
                  type="text" 
                  value = { name }
                  onChange = { 
                    ( e ) => {
                      setName( e.target.value ) ;
                  } }
                />
              </div>

            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label 
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                  htmlFor="role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input 
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="role"
                  type="text"
                  value = { role }
                  onChange = { 
                    ( e ) => {
                      setRole( e.target.value ) ;
                    } 
                  }
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>

          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" 
            onClick= { handleClose }
          >
              Close
          </button>

          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
          >
            Update
          </button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee ;