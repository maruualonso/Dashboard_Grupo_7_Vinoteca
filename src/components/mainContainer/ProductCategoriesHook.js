import React from 'react';
import { useState, useEffect } from 'react';


function ProductsCategoryHook() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [productsCategory, setProductsCategory] = useState([]);


    useEffect(() => {
      fetch("api/categorys")  
        .then(response => {
            return response.json();
        })
        .then(
        ({data}) => {
            setIsLoaded(true);
            setProductsCategory(data);
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
                    <h6 className="m-0 font-weight-bold title-sp">Categorías de Productos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                    {productsCategory.map(category => (
                            <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body bgcat" key={category.name + category.id}>Categoría {category.name}
                                <div>Total productos: </div>               
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

export default ProductsCategoryHook;