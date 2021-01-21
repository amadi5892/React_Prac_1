import React from 'react';

const validate = (props) => {
    
    return (
        <div>
            <p>
                Text length: {props.length}
            </p>
            {
                props.length > 5 ? 
                <p>Text long enough</p> :
                <p>Text too short</p>
            }
        </div>
    )
}

export default validate;