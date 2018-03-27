import React from 'react';

const EmpresaForm = ({submitHandler}) => {
    let _empresaCNPJ, _empresaNome,_empresaDataFundacao,_empresaSituacao,_empresaDataSituacao;
    const handleSubmit = (e) => {
        submitHandler(e, {
            cnpj: _empresaCNPJ.value, 
            nome: _empresaNome.value,
            data_fundacao:_empresaDataFundacao.value,
            situacao_receita:_empresaSituacao.value,
            situacao_receita_data:_empresaDataSituacao.value}
        );
        clearForm();
    }

    const clearForm = () => {
        _empresaCNPJ.value = '';
        _empresaNome.value = '';
        _empresaDataFundacao.value = '';
        _empresaSituacao.value = '';
        _empresaDataSituacao.value = '';
    }
    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInput">Release Name</label>
            <input type="text" ref={input => _empresaCNPJ = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="CNPJ" />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Release Date</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" ref={input => _empresaNome = input} className="form-control" id="inlineFormInputGroup" placeholder="Nome" />
            </div>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" ref={input => _empresaDataFundacao = input} className="form-control" id="inlineFormInputGroup" placeholder="Data da fundação" />
            </div>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" ref={input => _empresaSituacao = input} className="form-control" id="inlineFormInputGroup" placeholder="Situação" />
            </div>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" ref={input => _empresaDataSituacao = input} className="form-control" id="inlineFormInputGroup" placeholder="Data da Situação" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default EmpresaForm;