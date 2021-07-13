import React from 'react';

const InputOption = ({Icon, title, color}) => {
    return (
        <div className="inputOption">
            <Icon style={{color: color}} className="imputOption__icon"/>
            <h4 className="inputOption__title">{title}</h4> 
        </div>
    );
}

export default InputOption;
