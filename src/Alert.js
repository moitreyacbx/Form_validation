import React from 'react'
import './Alert.css'
const Alert = (props) => {
    const { alert } = props;
    return (
        <div className='disAlert'>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role='alert'>
                {alert.msg}
            </div>}
        </div>
    )
}

export default Alert
