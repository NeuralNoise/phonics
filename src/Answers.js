import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Question from './Question';
import AnswerItem from './AnswerItem';

class Answers extends React.Component {

    render() {
        const children = this.props.data.map((answer) =>
            <AnswerItem answer={answer} key={answer}/>
        );
        console.log('the item ',children);
        return (
        <div className="container-fluid">
            <Question name="cat"/>
            <div className="row">
                {children}
            </div>
        </div>
        );
    }
}
export default Answers;