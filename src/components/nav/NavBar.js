import React from 'react';

function NavBar () {
    return(
        <React.Fragment>
            <ul className="navbar-nav color-pp  sidebar sidebar-dark accordion" id="accordionSidebar">

        
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i><img className="img-profile " src="images/logo.png" width="60" alt="" /></i>
                </div>
                <div className="sidebar-brand-text mx-3">DH Winery</div>
                </a>
    
            
                <hr className="sidebar-divider"/>
    
                <div className="sidebar-heading">Principal</div>

                <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-columns"></i>
                    <span>Dashboard</span></a>
                </li><br/>
    
            
                <hr className="sidebar-divider"/>
    
            
                <div className="sidebar-heading">Links</div>
    
                
                <li className="nav-item">
                <div className="nav-link collapsed" href="/">
                    <i className="fab fa-chrome"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:3005" target="_blank" rel="noopener noreferrer">Home DH Vinoteca</a></span>
                </div>
                </li>
    
            
                <li className="nav-item">
                <div className="nav-link" href="/">
                    <i className="fas fa-sign-in-alt"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="http://localhost:3005/users/login" target="_blank" rel="noopener noreferrer">Login DH Vinoteca</a></span></div>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Acciones</div>
    
            
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tablas</span></a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-balance-scale"></i>
                    <span>Métricas</span></a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-database"></i>
                    <span>Base de datos</span></a>
                </li>

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">Extras</div>

                <li className="nav-item">
                <div className="nav-link" href="/">
                    <i className="fas fa-id-card"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="images/formulario.png" target="_blank" rel="noopener noreferrer">Notificaciones</a></span></div>
                </li>

                <li className="nav-item">
                <div className="nav-link" href="/">
                    <i className="fas fa-store"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="images/formulario.png" target="_blank" rel="noopener noreferrer">Iconos</a></span></div>
                </li>

                <li className="nav-item">
                <div className="nav-link" href="/">
                    <i className="fas fa-code"></i>
                    <span><a style={{ color: 'inherit', textDecoration: 'inherit'}} href="images/formulario.png" target="_blank" rel="noopener noreferrer">Docs</a></span></div>
                </li>
    
            
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    );
}

export default NavBar;