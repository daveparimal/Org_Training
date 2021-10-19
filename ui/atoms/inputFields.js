import React from 'react'
import PropTypes from 'prop-types';


export default function InputFields({type,placeholder,classNames}) {
    return (
            <input type={type} placeholder={placeholder} className={classNames}/>
    )
}
InputFields.propTypes = {
    classNames: PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string
};

InputFields.defaultProps={
     classNames:"border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md",
     placeholder:"",
     type:"text"
}
