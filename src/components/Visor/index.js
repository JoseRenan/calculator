import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Visor = ({expr, result, isError}) => (
    <div class="visor">
        <h3 class="expr font-weight-light">{expr}</h3>
        <h5 class="result">{result}</h5>
    </div>
);

Visor.propTypes = {
    expr: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    isError: PropTypes.bool
};

export default Visor;