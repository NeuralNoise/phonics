import React from "react";
import swal from "sweetalert";
import '../node_modules/sweetalert/dist/sweetalert.css';


class Image extends React.Component {
    constructor () {
        super();
        this.onClick = this.onClick.bind(this);
    }
    
    onClick = (e) => {
        e.preventDefault();
        let correct = e.currentTarget.alt === 'cat';
        if (correct)
            swal("Great job!", "Correct Answer", "success");
        else
            swal({
                title: "Error!",
                text: "Here's my error message!",
                type: "error",
                confirmButtonText: "Cool"
            });
    };
    
    render() {
        const path = `./images/${this.props.name}.png`;
        return (
            <div className="img">
                <img alt={this.props.name} className="img-thumbnail" src={path} onClick={this.onClick}/>
            </div>
        );
    }
}
export default Image;