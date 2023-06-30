import { useState, useEffect } from 'react' ;
import { useNavigate } from 'react-router-dom';

export default function Dictionary( ) {
    const [ word, setWord ] = useState( '' ) ;
    const navigate = useNavigate( ) ;

/* First Way To Use useEffect
// no dependency array --> update for any state change

    useEffect( () => {
         console.log( 'State Updated', word + ' ' + word2 ) ;
    }) ;
*/

/*  Second Method To Use useEffect
// empthy dependency array --> excute once
//    You can use useEffect with an empty dependency array if you want to do something 
//    on initial page load after everything is loaded then you can execute some code.
//    Normally, this setup when we want to fetch some data to put inside out web page,
//    we only need to fetch that data at the beginnning of the page load and then we can
//    just subsitute in the value that are return from the API into the web page.

    useEffect( ( ) => {
        console.log( 'State Updated', word + ' ' + word2 ) ;
    }, [] ) ;
*/

/*
// Third way to use useEffect 
// passing in data --> only execute when those state variables are changed
    useEffect( 
        ( ) => {
            console.log( 'State Update ' + word ) ;
        }, [ word ] // Only execute the *word* when state changed, *word2 will not updated
    ) ;

    useEffect( 
        ( ) => {
            console.log( 'State Update ' + word2 ) ;
        } , [ word2 ] 
    )
*/
    return ( 
        <>
            <h2>What you want to search:</h2>
            <input 
                type='text' 
                onChange={ (event) => {
                setWord( event.target.value ) ;
                }} 
            />
            <button 
                onClick = { ( ) => {
                    navigate( '/definition/' + word, { replace : true } )  // for more, see redirect
                } }
            >
                search
            </button>
        </>
    )
}