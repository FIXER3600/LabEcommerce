import React from 'react';
import styled from 'styled-components';
import Lup from './lupa.svg'
const Inputheader = styled.input`
	width: 30rem;
	    height: 2rem;
	    border-radius: 20px;
	    background-color: rgb(255, 255, 255);
	    border: none;
	    padding: 0px 2rem;`

const H1Tela = styled.h1`
margin-left: 0;
display: flex;
flex-direction: column;
align-items: center;
cursor:pointer;
color:white;
`
const Header = styled.header`
background-color: rgb(60, 19, 153);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 0;
  padding-top:0;
  padding-bottom:0;
  height: 10%;
`
const ImgTela = styled.img`
height: 35px;

`
const Lupa=styled.img`
position: relative;
right: 170px;
top: 1px;
width: 2%;`

const TotalItens = styled.p`
  position: absolute;
  top:0px;
  right: 3.5rem;
  background-color: #ff671c;
  border-radius: 100%;
  color: #ffffff;
  font-weight: 100;
  font-size: 14px;
  width: 16px;
  height: 16px;
  text-align: center;
  @media (max-width: 800px) {
    right: 0.16rem;
    top: 10px;
    width: 20px;
    heidht: 20px;
  }
`;

export default class App extends React.Component {
	
	render() {

	  if (this.props.paginaProdutos){	return (
			<Header>
				<H1Tela>LabEcommerce</H1Tela>
				<Inputheader type="text" placeholder="Pesquisar..." value={this.props.query} onChange={this.props.buscaNome}  id="campoDeBusca" />
				<Lupa src={Lup}/>
				<TotalItens>{this.props.totalItens()}</TotalItens>
				<ImgTela onClick={this.props.paginaCarrinho} alt="Carrinho" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Font_Awesome_5_solid_shopping-cart.svg" />

			</Header>
		)}else{
      return(
      <Header>
      <H1Tela onClick={this.props.paginaCarrinho}>LabEcommerce</H1Tela>
      <Inputheader type="text" placeholder="Pesquisar..." id="campoDeBusca" />
    </Header>
      )
    }
      
	}
}