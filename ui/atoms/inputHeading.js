import React from 'react'
import PropTypes from 'prop-types';


export default function InputHeading({heading}) {
    return (<label class="block font-semibold">{heading}</label>)
}

InputHeading.propTypes = {
    heading: PropTypes.string,
};

InputHeading.defaultProps={
    heading:""
}
