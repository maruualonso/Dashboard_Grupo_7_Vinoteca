import React from 'react';
import { useState, useEffect } from 'react';
        
        
        function AmountCategories() {
            const [isLoaded, setIsLoaded] = useState(true);
            const [AmountCategories, setAmountCategories] = useState([]);
        
        
            useEffect(() => {
                fetch("/api/products") 
                .then(response => {
                    return response.json();
                })
                .then(
                (data) => {
                    setIsLoaded(true);
                    setAmountCategories(data.count);
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
                    <div className="card border-left-successa shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-successa text-uppercase mb-1">Total Categorias</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{AmountCategories}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-layer-group fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

export default AmountCategories;