import React from 'react'
import { spinnerStyle } from './SpinnerStyles.jsx';

const Spinner = () => {

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' style={spinnerStyle}></div>
            </div>
        }
        </>
    )
}

export default Spinner;