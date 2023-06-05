import { useState,useEffect } from 'react' ;
export default function Dictionary( ) {
    
    const [ word, setWord ] = useState( 'Help' ) ;
    
    useEffect( ( ) => {
        console.log( 'State Update', word)
    } ) ;

    return ( 
        <>
            <input 
                type='text' onChange={ (e) => {
                setWord( e.target.value ) ;
                } }
            />
            <h1>Let's get the definition for {word}</h1>
        </>
    )
}