import { Link, useParams, useNavigate } from "react-router-dom";
import {  useEffect, useState } from 'react' ;
import { baseUrl } from '../shared'

export default function Customer( ) {
    const { id } = useParams( ) ;
    const [ customer, setCustomer ] = useState( ) ;
    const [ notFound, setNotFound ] = useState( false ) ;
    const navigate = useNavigate( ) ;

    useEffect( 
        ( ) => {
            async function customer( ) {
                const url = baseUrl + 'api/customers/' + id ;
                const response = await fetch( url ) ;
                console.log( response.status ) ;
                if( response.status === 404 ) {
                    setNotFound( true ) ;
                }
                else {
                    const data = await response.json( ) ;
                    setCustomer( data.customer ) ;
                }
            } ;
            customer( ) ;
    }, [ ] ) ;

    return (
        <>
            { notFound ? <p>The customer with id { id } is not found! </p> : null}
            {
                customer ? (
                    <div>
                        <p> { customer.id } </p>
                        <p> { customer.name } </p>
                        <p> { customer.industry } </p>
                    </div>
                ) : null
            }
            <button 
                onClick = { ( ) => {
                    const url = baseUrl + 'api/customers/' + id ;
                    fetch( url, { 
                        method : 'DELETE' ,
                        headers: {
                        'Content-Type' : 'application/json' ,
                        },
                     } )
                    .then( (response) => {
                        if( !response.ok ) {
                            throw new Error( 'something went wrong' )
                        }
                        navigate( '/customers' ) ;
                        //assume things went well
                    } )
                    .catch( (error) => { console.log( error ) } )
                } }
            >Delete</button>
            <br></br>
            <Link to='/customers/'>Search another</Link>
        </>
    ) ;
}