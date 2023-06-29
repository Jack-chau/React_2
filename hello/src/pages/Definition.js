import { useEffect, useState } from 'react' ;
import { json } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid' ;


export default function Definition( ) {
    const [ word, setWord ] = useState( [ ] ) ;

    useEffect ( 
        () => {
            async function logJSONData() {
                const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/helicopter");
                const jsonData = await response.json( );
                setWord( jsonData[ 0 ].meanings ) ; //word in useState
                console.log( jsonData[ 0 ].meanings ) ;
            } ;

            logJSONData( ) ;

        } , []
    ) ;

    return (
        <>
            <h1>Here is a definition:</h1>
            { 
                word ?  
                    word.map( ( meaning ) => {
                        return (
                            <p key = { uuidv4( ) } >
                                { meaning.partOfSpeech + ' : ' }
                                { meaning.definitions[ 0 ].definition }
                            </p>
                        ) ;
                    } )
                : ( 
                    null
                )
            }
        </>
    )
}