import React, { Component } from 'react';
import './PortfolioFilter.css';

class PortfolioFilter extends Component {

    render() {
        let designItem = null, frontendItem = null, supportItem = null;
        if (this.props.count[0] != '' && this.props.count[0] > 0) {
            designItem = <div className="portfolio-filter__item portfolio-filter__item_design">Макет<span>{this.props.count[0]}</span></div>
        } else {
            designItem = null;
        }
        if (this.props.count[1] != '' && this.props.count[1] > 0) {
            frontendItem = <div className="portfolio-filter__item portfolio-filter__item_frontend">Верстка<span>{this.props.count[1]}</span></div>
        } else {
            frontendItem = null;
        }
        if (this.props.count[2] != '' && this.props.count[2] > 0) {
            supportItem = <div className="portfolio-filter__item portfolio-filter__item_support">Тех.поддержка<span>{this.props.count[2]}</span></div>
        } else {
            supportItem = null;
        }
        return (
            <div className="portfolio-filter">
                {designItem}
                {frontendItem}
                {supportItem}
            </div>);
    }
}

export default PortfolioFilter;