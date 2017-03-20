import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Question from './Question';
import AnswerItem from './AnswerItem';

class Answers extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <Question name="cat"/>
            <div className="row">
                <AnswerItem answer="cow"/>
                <AnswerItem answer="cat"/>
                <AnswerItem answer="dog"/>
                <AnswerItem answer="pig"/>
            </div>
        </div>
        );
    }
}
export default Answers;