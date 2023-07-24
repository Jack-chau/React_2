// import Header from '../components/Header' ;
import { useEffect, useState} from 'react' ;
import { Link } from 'react-router-dom'
import { baseUrl } from '../shared'

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
                const response = await fetch( baseUrl + 'api/customers/' ) ;
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
                return (
                    <p>
                        <Link to={'/customers/' + customer.id} >{ customer.name }</Link>
                    </p>
                )
            } ) : null }
        </>
    ) ;
}