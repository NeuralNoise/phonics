import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class Answers extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-4 ">
                <img alt="Cat" className="img-thumbnail" src="./images/cat.png"/>
                </div>
                <div className="col-xs-4"><h1>cat</h1></div>
                <div className="col-xs-4">
                <img alt="Cat" className="img-thumbnail" src="./images/cow.png"/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4 ">
                    <img alt="Cat" className="img-thumbnail" src="./images/pig.png"/>
                </div>
                <div className="col-xs-4"></div>
                <div className="col-xs-4">
                    <img alt="Cat" className="img-thumbnail" src="./images/dog.png"/>
                </div>
            </div>
        </div>
        );
    }
}
export default Answers;