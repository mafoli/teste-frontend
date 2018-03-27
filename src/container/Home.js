import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';
export default class Home extends Component {

    homeCardEmpresas = {
        title: 'Empresas',
        text: 'Gerenciamento de Empresas',
        action: () => hashHistory.push('/empresas')
    }
    

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardEmpresas}  />
                    
                </div>
            </div>
        );
    }
}