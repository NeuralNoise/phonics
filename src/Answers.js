import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Image from './Image';

class Answers extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-xs-4">
                    <Image name="cat" />
                </div>
                <div className="col-xs-4"><h1>cat</h1></div>
                <div className="col-xs-4">
                    <Image name="cow" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-4">
                    <Image name="pig"/>
                </div>
                <div className="col-xs-4"></div>
                <div className="col-xs-4">
                    <Image name="dog"/>
                </div>
            </div>
        </div>
        );
    }
}
export default Answers;