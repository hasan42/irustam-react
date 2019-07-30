import React, { Component } from 'react';
import PortfolioNav from './PortfolioNav';
import PortfolioAbout from './PortfolioAbout';
import PortfolioFilter from './PortfolioFilter';
import PortfolioList from './PortfolioList';
import './Portfolio.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            active: '',
            allproject: '',
            project: '',
            count: []
        };
        fetch('company.php')
            .then(response => response.json())
            .then(data => this.setState({ company: data }))
            .catch(error => console.log(error));
        fetch('portfolio.php')
            .then(response => response.json())
            .then(data => {
                this.setState({ allproject: data })
                this.setState({ project: data })
                this.calcCount();
            })
            .catch(error => console.log(error));

        this.calcCount = this.calcCount.bind(this);
        this.selectCompany = this.selectCompany.bind(this);
    }

    componentWillMount() {
    }

    selectCompany(tag) {
        this.setState({ active: this.state.company.filter(d => d.tag === tag) });
        if (tag !== 'all') {
            this.setState({ project: this.state.allproject.filter(d => d.company === tag) }, () => {
                this.calcCount();
            });
        } else {
            this.setState({ project: this.state.allproject }, () => {
                this.calcCount();
            });
        }
    }

    calcCount() {
        if (!this.state.project) return;
        let countDesign = this.state.project.filter(d => d.design === '1').length;
        let countFrontend = this.state.project.filter(d => d.frontend === '1').length;
        let countSupport = this.state.project.filter(d => d.support === '1').length;
        this.setState({ count: [countDesign, countFrontend, countSupport] });
    }

    render() {
        let portfolioNavComponent, portfolioAboutComponent, portfolioFilterComponent, portfolioListComponent;
        if (this.state.company != '') {
            portfolioNavComponent = <PortfolioNav company={this.state.company} selected={this.selectCompany} />;
        } else {
            portfolioNavComponent = null;
        }
        if (this.state.active != '') {
            portfolioAboutComponent = <PortfolioAbout about={this.state.active} />;
        } else {
            portfolioAboutComponent = null;
        }
        if (this.state.project != '') {
            portfolioFilterComponent = <PortfolioFilter count={this.state.count} />;
            portfolioListComponent = <PortfolioList items={this.state.project} />;
        } else {
            portfolioFilterComponent = null;
            portfolioListComponent = null;
        }

        return (
            <div className="portfolio">
                <h2>Опыт работы</h2>
                {portfolioNavComponent}
                {portfolioAboutComponent}
                {portfolioFilterComponent}
                {portfolioListComponent}
            </div>);
    }
}

export default Portfolio;