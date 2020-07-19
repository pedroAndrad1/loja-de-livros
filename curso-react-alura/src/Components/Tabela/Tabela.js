import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const CellDeleta = ( {id, removeDados, titulo} ) => {
    
    //Se nao tem funcao de remover, entao nao vai ter o botao
    if(!removeDados){
        return null
    }
    

    
    return (
        <TableCell>
            <Button onClick={() => {removeDados(id)} }
                variant="contained"
                color="primary"
            >
                <DeleteIcon />
            </Button>
        </TableCell>
    )
}

const TituloDeleta = ({removeDados}) => {
     //Se nao tem funcao de remover, entao nao vai ter o cabecalho REMOVER
     if(!removeDados){
        return null
    }

    return <TableCell>Remover</TableCell>
}

const Tabela = props => {
    const { dados, removeDados, campos } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map(campo =>
                            (<TableCell>{campo.titulo}</TableCell>)
                        )

                    }
                    <TituloDeleta removeDados = {removeDados}/>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map((dado) => {
                        return (
                            <TableRow key={dado.id}>
                                {
                                    campos.map(campo =>
                                        (<TableCell>{dado[campo.nomeCampo]}</TableCell>)
                                    )
                                }
                                <CellDeleta id = {dado.id} removeDados = {removeDados}/>
                            </TableRow>
                        );
                    }
                    )
                }
            </TableBody>
        </Table>
    );
}
export default Tabela;