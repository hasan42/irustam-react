import React, { Component } from 'react';
import './PortfolioNav.css';

class PortfolioNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.company,
            active: 'all'
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive(tag) {
        this.setState({ active: tag });
        this.props.selected(tag);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div className="portfolio-nav">
                <div className={this.state.active === 'all' ? 'portfolio-nav__item active' : 'portfolio-nav__item'} onClick={this.setActive.bind(this, 'all')} > Все</div>
                {
                    this.state.items.map(item =>
                        <div className={this.state.active === item.tag ? 'portfolio-nav__item active' : 'portfolio-nav__item'} onClick={this.setActive.bind(this, item.tag)} key={item.id}>{item.name}</div>
                    )
                }
            </div>);
    }
}

export default PortfolioNav;