// import Header from '../components/Header' ;
import { useEffect, useState } from 'react' ;
import { Link } from 'react-router-dom'
import { baseUrl } from '../shared'
import AddCustomer from '../components/AddCustomer';

export default function Customers() {
    const [ customers, setCustomers ] = useState( ) ;

    useEffect( 
        () => {
            async function fetch_Customers( ) {
                console.log( 'fetching...' );
                const response = await fetch( baseUrl + 'api/customers/' ) ;
                const customersData = await response.json( ) ;
                setCustomers( customersData.customers );
                
            } ;
            fetch_Customers( ) ;
        }, [ ] ) ;


    async function new_Customer( name, industry ) {
        const data = { 'name': name,  'industry': industry } ;
        const url = baseUrl + 'api/customers/' ;
        const response = await fetch( url, {
            method: 'POST' ,
            headers: {
                'Content-Type' : 'application/json' ,
            } ,
            body : JSON.stringify( data ) ,
        } )
        if ( !response.ok ) {
            const message = 'An error has occured: ' + response.status ;
            throw new Error( message ) ;
        }
    }

    return ( 
        <>
            <h1>Here are our customer:</h1>
            <ul>
                { customers ? customers.map( ( customer ) => {
                    return (
                            <li key = { customer.id } >
                                <Link to={'/customers/' + customer.id} >{ customer.name }</Link>
                            </li>
                    )
                } ) : null }
            </ul>
        <AddCustomer newCustomer = { new_Customer } />
        </>
    ) ;
}