import React from 'react';
import Image from './Image';

const AnswerItem = (props) => {
    return (
    <div className="col-md-6 col-md-offset-2">
        <Image name={props.answer} />
    </div>
    );
};

export default AnswerItem;