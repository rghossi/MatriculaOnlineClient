import React, { Component } from 'react';

class QuebraPreRequisito extends Component {
  render() {
    return (
      <div className="container">
        <div className="section"></div>
        <h4 className="center-align indigo-text darken-4">Quebra de Pré-Requisito</h4>

          <br />
          <br />

          <label>Escolha a matéria que deseja pedir a quebra de Pré-Requisito</label>
         <select>
          <option disabled selected></option>
          <option>Calculo 2</option>
          <option>Física 2</option>
          <option>Métodos Matemáticos</option>
          <option>Redes de computadores</option>
          <option>Banco de dados</option>
         </select>

         <br />
         <br />

         <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Descreva os motivos para o pedido de quebra de Pré-Requisito:</label>
                </div>
              </div>
            </form>
          </div>


          <div className="section center-align"><a className="waves-effect waves-light btn-large indigo">Enviar pedido</a></div>

      </div>
    );
  }
}

export default QuebraPreRequisito;