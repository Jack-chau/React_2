function Employee( props ) {
    
    return (

        <>
            <h3>Employee { props.name } </h3>

            { props.role ? (
                <p className = "role" > { props.role } </p>
            ) : (
                <p className = "no role" > No Role </p> 
            ) }

        </>

    )
}

export default Employee ;