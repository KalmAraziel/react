/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (    
    <header>       
        <h1 className="text-center">{titulo}</h1>
    </header>
);
   
Header.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default Header;