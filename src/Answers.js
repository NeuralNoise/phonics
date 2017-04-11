import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Question from './Question';
import AnswerItem from './AnswerItem';
import './styles/styles.css'

class Answers extends React.Component {

    render() {
        const children = this.props.data.map((answer) =>
            <AnswerItem answer={answer} key={answer}/>
        );
        return (
        <div className="container">
            <h2>Click on the picture that matches the word.</h2>
            <Question name="cat"/>
            <div className="row">
                {children}
            </div>
        </div>
        );
    }
}
export default Answers;