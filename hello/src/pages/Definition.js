import { useEffect, useState } from 'react' ;
import { useParams, useNavigate, Link, json } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid' ;
import NotFound from '../components/404'

export default function Definition( ) {
    const [ word, setWord ] = useState( [ ] ) ;
    const [ notFound, setNotFound ] = useState( false ) ;
    let { search } = useParams( ) ;
    const navigate = useNavigate( ) ;

    useEffect ( 
        () => {
            async function logJSONData() {
                const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search );

                if ( response.status === 404 ) {
                    console.log( response.status ) ;
                    notFound = true ;
                    console.log( notFound ) ;
                }

                const jsonData = await response.json( );
                setWord( jsonData[ 0 ].meanings ) ; //word in useState
            } ;

            logJSONData( ) ;

        } , []
    ) ;
    
    console.log( 'Notfound :' + notFound ) ;
    if ( notFound === true ) {
        return ( 
            <>
                <NotFound></NotFound>
                <Link to = './definition'>Search another</Link>
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
                        </>
                    : ( 
                        null
                    )
                }
            </>
        )
    }
}