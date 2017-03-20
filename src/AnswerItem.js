import React from 'react';
import Image from './Image';

const AnswerItem = (props) => {
    return (
    <div className="col-md-4 col-md-offset-1">
        <Image name={props.answer} />
    </div>
    );
};

export default AnswerItem;