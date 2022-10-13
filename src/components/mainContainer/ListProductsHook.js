import React from 'react';
import { useState, useEffect } from 'react';


function ListProductsHook() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("/api/products")  
        .then(response => {
            return response.json();
        })
        .then(
        ({data}) => {
            setIsLoaded(true);
            setProducts(data);
            }
        )
        .catch(error => console.log(error));
    }, [])

    if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    return (
        <React.Fragment>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold title-sp">Listado de Productos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                    {products.map((product) => (
                            <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body bgcat" key={product.name + product.id}>Producto: {product.name}                                             
                                </div>
                            </div>  
                        </div>
                        ))}
                        
                        
                    </div>
                </div>
                </div>
                
        </div>
    </React.Fragment>
    );
    }
}

export default ListProductsHook;