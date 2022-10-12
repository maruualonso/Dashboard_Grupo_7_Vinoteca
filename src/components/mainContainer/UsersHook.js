import React from 'react';
import { useState, useEffect } from 'react';


function UsersHook() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("/api/users") 
        .then(response => {
            return response.json();
        })
        .then(
        (data) => {
            setIsLoaded(true);
            setUsers(data.count);
            }
        )
        .catch(error => console.log(error));
    }, [])

    if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (

            <React.Fragment>
                <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Usuarios en la Base de Datos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{users}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsersHook;