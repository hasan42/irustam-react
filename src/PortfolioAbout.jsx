import React, { Component } from 'react';
import './PortfolioAbout.css';

class PortfolioAbout extends Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(value) {
        if (!value) return ''
        let d = new Date(value)
        if (!isNaN(d)) {
            let options = {
                year: 'numeric',
                month: 'long',
            };
            return d.toLocaleString("ru", options).toString().slice(0, -3)
        } else {
            return 'наст. время'
        }
    }

    render() {
        return (
            <div className="portfolio-about">
                <div className="portfolio-about__image"><a href={this.props.about[0].link} target="_blank"><img src={this.props.about[0].image} alt={this.props.about[0].name} /></a></div>
                <div className="portolio-about__info">
                    <h3><a href={this.props.about[0].link} target="_blank">{this.props.about[0].name}</a>&nbsp;<span>{this.formatDate(this.props.about[0].start)} &mdash; {this.formatDate(this.props.about[0].finish)}</span></h3>
                    <div dangerouslySetInnerHTML={{ __html: this.props.about[0].info }}></div>
                </div >
            </div >);
    }
}

export default PortfolioAbout;