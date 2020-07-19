import React, { Component } from 'react';
import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Toast from '../Toast/Toast';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ])

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
            mensagem: {
                open: false,
                texto: '',
                tipo: 'success'
            }
        }

        this.state = this.stateInicial;



    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            const autor = {
                nome: this.state.nome,
                livro: this.state.livro,
                preco: this.state.preco,
            }
            this.props.escutadorDeSubmit(autor);
            this.setState(this.stateInicial);
            this.setState({
                mensagem: {
                    open: true,
                    texto: 'Cadastro realizado com sucesso!',
                    tipo: 'success'
                }
            })
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            const erros = camposInvalidos.reduce((texto, campo) => texto + campo.mensagem + '. ', '');
            console.log(erros)
            this.setState({
                mensagem: {
                    open: true,
                    texto: erros,
                    tipo: 'error'
                }
            })
        }

    }

    render() {

        const { nome, livro, preco } = this.state;
        let snackTextoAtual = this.state.mensagem.texto;
        let snackSeverityAtual = this.state.mensagem.tipo;

        return (
            <form>
                <Toast
                    open={this.state.mensagem.open}
                    severity={this.state.mensagem.tipo}
                    handleClose={() =>
                        this.setState({
                            mensagem: {
                                open: false,
                                texto: snackTextoAtual,
                                tipo: snackSeverityAtual
                            }
                        })
                    }
                >
                    {this.state.mensagem.texto}
                </Toast>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                        <TextField
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                            label="Nome"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                            label="Livro"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                            label="Preço"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={this.submitFormulario}
                            variant="contained"
                            color="primary"
                        >Salvar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
export default Formulario;