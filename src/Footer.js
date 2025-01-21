import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';

function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <div className="nav justify-content-center text-center border-bottom pb-3 mb-3 px-2 text-body-secondary">
                    Contact The Messerschmidt Foundation:<br/>
                    4 Rue Revanche, 1002 Kirchberg Luxemburg, Luxembourg<br/>
                    tomas.messerschmidt@gmail.com
                </div>
                <p className="text-center text-body-secondary">&copy; 2024 The Messerschmidt Foundation</p>
            </footer>
        </div>
    )
}

export default Footer;