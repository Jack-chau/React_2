import { useState } from 'react' ;
import { useNavigate } from 'react-router-dom';


export default function DefinitionSearch( ) {
    const [ word, setWord ] = useState( '' ) ;
    const navigate = useNavigate( ) ;
    return ( 
        < form 
            className = " flex space-x-2 max-w-[300px] space-between "
            onSubmit = { () => {
                navigate( '/dictionary/' + word ) ;
            } }
        >
            <input
                className = " shrink min-w-0 px-2 py-1 rounded "
                placeholder = " Dinosaur "
                type='text' 
                onChange={ ( event ) => {
                setWord( event.target.value ) ;
                }} 
            />
            <button className = 'bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded py-1 px-2 ' >Search</button>
        </form>
    )
}

// <form></form> can use 'enter' key to submmit