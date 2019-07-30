import React, { Component } from 'react';
import './Personal.css';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: '',
        };
        fetch('personal.php')
            .then(response => response.json())
            .then(data => this.setState({ info: data.filter(d => d.active === '1') }))
            .catch(error => console.log(error));
    }

    componentWillMount() {}

    render() {
        let text = null;
        if (this.state.info != '') {
            text = <div className="personal-about" dangerouslySetInnerHTML={{ __html: this.state.info[0].info }}></div>
        }
        return (
            <div className="info">
                {text}
            </div>);
    }
}

export default Personal;