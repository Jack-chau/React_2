import { Link, useParams, useNavigate } from "react-router-dom";
import { Component, useEffect, useState } from 'react' ;
import NotFound from "../components/404";
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
                } else if( response.status === 500 ) {
                    console.log( response.status ) ;
                    navigate( '/500' ) ;
                }else if( response.status === 200 ){
                    console.log( 'health' ) ;
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
            <Link to='/customers/'>Search another</Link>
        </>
    ) ;
}