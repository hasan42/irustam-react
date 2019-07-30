import React, { Component } from 'react';
import './PortfolioItem.css';

class PortfolioItem extends Component {

    render() {
        let info = null, image = null;
        if (this.props.link !== '') {
            info = <div className="portfolio-item__image"><a href={this.props.link} target="_blank"><img src={this.props.image !== '' ? this.props.image : 'images/no-photo.png'} alt={this.props.name} /></a></div>;
            image = <div className="portfolio-item__name"><a href={this.props.link} target="_blank">{this.props.name}</a></div>;
        } else {
            info = <div className="portfolio-item__image"><a><img src={this.props.image !== '' ? this.props.image : 'images/no-photo.png'} alt={this.props.name} /></a></div>;
            image = <div className="portfolio-item__name"><a>{this.props.name}</a></div>;
        }
        return (
            <div className="portfolio-item">
                {this.props.design === '1' ?
                    <div className="portfolio-item__design"></div> : null
                }
                {this.props.support === '1' ?
                    <div className="portfolio-item__support"></div> : null
                }
                {this.props.frontend === '1' ?
                    <div className="portfolio-item__frontend"></div> : null
                }
                {info}
                {image}
            </div>);
    }
}

export default PortfolioItem;