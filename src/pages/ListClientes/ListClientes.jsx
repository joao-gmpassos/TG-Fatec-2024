import React from "react";
import './ListClientesStyle.css'
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap"

const Listc = () => {
    return (
        <div className="pagina">
            <div className="titulo"><h1>Lista de Clientes</h1></div>
                <div className="listus">
                    <Table className="tabelaus">
                        <tread>
                            <tr>
                                <th>
                                    gay
                                </th>
                            </tr>
                        </tread>
                    </Table>
                    <Link className="botaolistus" to='/login'>Modificar</Link>
                    <Link className="botaolistus" to='/login'>Cadastrar</Link>
                    <Link className="botaolistus" to='/login'>Deletar</Link>
                </div>
        </div>
    )
}


export default Listc;