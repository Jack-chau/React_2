import DifinitionSearch from '../components/DefinitionSearch' ;

export default function Dictionary( ) {
    return( 
        <div className = " flex justify-center ">
            < DifinitionSearch />
        </div>
    )
}

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


