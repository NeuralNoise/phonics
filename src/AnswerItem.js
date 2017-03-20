import React from 'react';
import Image from './Image';

const AnswerItem = (props) => {
    return (
    <div className="col-xs-4 col-xs-offset-2">
        <Image name={props.answer} />
    </div>
    );
};

export default AnswerItem;