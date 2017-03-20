import React from 'react';

const Question = (props) => {
    return (
        <div className="col-xs-12">
            <h1>{props.name}</h1>
        </div>
    );
};

export default Question;