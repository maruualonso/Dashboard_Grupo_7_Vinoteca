import React from 'react';
import ProductsCount from './Products'
import AmountCategories from './AmountCategories';
import ListProductsHook from './ListProductsHook';
import UsersHook from './UsersHook';
import ProductsCategoriesHook from './ProductCategoriesHook';

function MainContainer() {
    return (
        <React.Fragment>
            <div className="container-fluid color-back-pp">


                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 title-sp" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Dashboard de Administración</h1>
                </div>
                <div className="row">
                    <ProductsCount />                    
                    <AmountCategories />                     
                    <UsersHook />
                </div>
                <div className="row">
                    
                    <ListProductsHook />                    
                    <ProductsCategoriesHook />
                    
                
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainContainer;