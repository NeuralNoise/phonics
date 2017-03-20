import React from "react";
import swal from "sweetalert";
import '../node_modules/sweetalert/dist/sweetalert.css';


class Image extends React.Component {
    constructor () {
        super();
        this.onClick = this.onClick.bind(this);
        //set initial state
        // this.state = {
        //     correctAnswer : {
        //
        //     }
        // }
    }
    
    onClick = (e) => {
        e.preventDefault();
        let correct = e.currentTarget.alt === 'cat';
        console.log("the target is ",e.currentTarget.alt);
        if (correct)
            swal("Good job!", "You clicked the button!", "success");
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
            <div>
                <img alt={this.props.name} className="img-thumbnail" src={path} onClick={this.onClick}/>
            </div>
        );
    }
}
export default Image;