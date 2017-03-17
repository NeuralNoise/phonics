import React from 'react';

class Image extends React.Component {
    render() {
        const path = `./images/${this.props.name}.png`;
        return (
            <div>
                <img alt={this.props.name} className="img-thumbnail" src={path}/>
            </div>
        );
    }
}
export default Image;