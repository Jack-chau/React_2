import { useEffect, useState } from 'react' ;
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid' ;
import NotFound from '../components/404' ;
import Dictionary from './Dictionary';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition( ) {
    const [ word, setWord ] = useState( [ ] ) ;
    const [ notFound, setNotFound ] = useState( false ) ;
    let { search } = useParams( ) ;
    const navigate = useNavigate( ) ;
    const [ serverError, setServerError ] = useState( false ) ;
    const [ error, setError ] = useState( false ) ;

    useEffect (
        () => {
            const httpErrorUrl = 'http://httpstat.us/501' ;
            const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search 
            const fakeUrl = 'http://chk.com'
            async function log_JSON_Data() {
                const response = await fetch( dictionaryUrl ) ;
                // console.log( response.status )
                if ( response.status === 404 ) {
                    // console.log( response.status ) ;
                    setNotFound( true ) ;
                    // console.log( notFound ) ;
                } else if ( response.status === 401 ) {
                    navigate( '/login' ) ;
                } else if ( response.status === 500 ) {
                    setServerError( true ) ;
                }
                
                if( !response.ok ) {
                    try{
                        setError( true ) ;
                        console.log( error ) ;
                        throw new Error( 'Something went worng' ) ;
                    } catch( error ) {
                       console.log( error.message ) ;
                    }
                }

                const jsonData = await response.json( );
                setWord( jsonData[ 0 ].meanings ) ; //word in useState
            }

            log_JSON_Data( ) ;

        } , []
    ) ;
    
//    console.log( 'Notfound :' + notFound ) ;
    if ( notFound === true ) {
        return ( 
            <>
                <NotFound></NotFound>
                <Link to = '/dictionary' >Search another</Link>
            </>
         )
    } else if( error === true ) {
        return(
            <>
                <p>Something went wrong, try again</p>
                <Link to = '/dictionary'>Search another</Link>
            </>
        ) 
    } else {
        return (
            <>
                { 
                    word ? 
                        <>  
                            <h1> Here is a definition: </h1>
                            { word.map( ( meaning ) => {
                                return (
                                    <p key = { uuidv4( ) } >
                                        { meaning.partOfSpeech + ' : ' }
                                        { meaning.definitions[ 0 ].definition }
                                    </p>
                                ) ;
                            } ) }
                            <p>Search again:</p>
                            < DefinitionSearch /> {/*Not Dictionary, because the formating went wrong*/}
                        </>
                    : ( 
                        null
                    )
                }
            </>
        )
    }
}