import React, { Component } from 'react';

import EmpresaForm from '../ui/EmpresaForm';

export default class Empresas extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            empresas: [
                {
                    id: 1,
                    cnpj: '111111111111111',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 2,
                    cnpj: '22222222222222',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 3,
                    cnpj: '33333333333333',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 4,
                    cnpj: '44444444444444',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 5,
                    cnpj: '55555555555555',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 6,
                    cnpj: '66666666666666',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 7,
                    cnpj: '77777777777777',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 8,
                    cnpj: '88888888888888',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },
                {
                    id: 9,
                    cnpj: '99999999999999',
	                nome: 'EMPRESA TESTE',
	                data_fundacao: '01/12/1979',
	                situacao_receita: 'REGULAR',
	                situacao_receita_data: '2016-10-17'
                    
                },


                
                
            ]
        }
    }

    handleSubmit(e, {cnpj, nome,data_fundacao,situacao_receita,situacao_receita_data}) {
        e.preventDefault();
        var state = this.state;
        var myEmpresa = {
            id: state.empresas.length + 1,
            cnpj:cnpj,
            nome:nome,
            data_fundacao:data_fundacao,
            situacao_receita:situacao_receita,
            situacao_receita_data:situacao_receita_data
            
        }
        this.setState({empresas: state.empresas.concat(myEmpresa)});
    }

    handleRemove(id){
        console.log('Implement remove function here!');
        var myEmpresa = this.state.empresas;
        myEmpresa.splice(id, 1)
        this.setState({empresas: myEmpresa});
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <EmpresaForm submitHandler={this.handleSubmit} />
                <table name="Table" className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CNPJ</th>
                            <th>RAZÃO SOCIAL</th>
                            <th> DATA DA FUNDAÇÃO</th>
                            <th>SITUAÇÃO NA RECEITA</th>
                            <th>DATA DA CONSULTA</th>
                            <th>AÇÕES</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empresas.map((empresas, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={empresas.id}>
                                    <th scope="row">{empresas.id}</th>
                                    <td>{empresas.cnpj}</td>
                                    <td>{empresas.nome}</td>
                                    <td>{empresas.data_fundacao}</td>
                                    <td>{empresas.situacao_receita}</td>
                                    <td>{empresas.situacao_receita_data}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remove</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}