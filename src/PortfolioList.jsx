import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import './PortfolioList.css';

class PortfolioList extends Component {

    render() {
        return (
            <div className="portfolio-list">
                {
                    this.props.items.map(item =>
                        <PortfolioItem key={item.id} company={item.company} name={item.name} link={item.link} image={item.image} design={item.design} frontend={item.frontend} support={item.support} />
                    )
                }
            </div>);
    }
}

export default PortfolioList;