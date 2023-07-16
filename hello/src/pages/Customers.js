import Header from '../components/Header' ;
import { useEffect, useState } from 'react' ;

export default function Customers() {
    const [ customers, setCustomers ] = useState( ) ;
/*
    useEffect( ( ) => {
        console.log( 'Fetching' ) ;
        fetch( 'htt://localhost:8000/api/customers' )
            .then( ( response ) => {
                response.json( ) ;
            } )
            .then( ( data ) => {
                console.log( data ) ;
                setCustomers( data ) ;
            } )

    }, [ ] ) ;
*/

    useEffect( 
        () => {
            async function fetch_Customers( ) {
                console.log( 'fetching...' );
                const response = await fetch( 'http://127.0.0.1:8000/api/customers/' ) ;
                const customersData = await response.json( ) ;
                console.log( customersData ) ;
                setCustomers( customersData.customers );
            } ;

            fetch_Customers( ) ;
        }, [ ] ) ;
    return ( 
        <>
            <h1>Here are our customer:</h1>
            { customers ? customers.map( ( customer ) => {
                return <p>{ customer.name }</p> ;
            } ) : null}
        </>
    ) ;
}