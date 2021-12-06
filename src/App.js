import React from "react";
import styled from 'styled-components';
import Card from './components/Card'
import Header from './components/Header'
import Filtro from './components/Filtro'
import Footer from './components/Footer'
import Ordenacao from './components/Ordenacao'
import Carrinho from './components/Carrinho/Carrinho'
import FogJunior from './foguete_junior.jpg'
import FogBlaster from './foguete_blaster.jpg'
import FogSingle from './foguete_single.jpg'
import NavMega from './nave_megalodon.jpg'
import NavClassic from './nave_classic.jpg'
const Corpo = styled.div`
width: 100%;
padding: 0;
margin: 0;
`
const Tela = styled.div` height: 100vh;
display: flex;
flex-direction: column;`
const Principal = styled.main`
min-height: 80%;
display: flex;`
const MnuVertical = styled.details`
  display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content:space-between;
    border-right-style: solid;
    border-right-width: thin;
    width:150px;
    width:250px;
    margin: 0px 10px;
    text-align:center;
`
const PainelProdutos = styled.section`
flex-grow: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
row-gap: 10px;
column-gap: 10px;
color: black;
margin:10px;
`

const Filter = styled.summary`
text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    display: flex;
    flex-direction:row;
    justify-content:center;
`
const BotoesMnuVertical = styled.h3`
list-style-type: none;
  color:black;
`
const ImgTela = styled.img`
height: 25px;
margin-top: 25px;
`
const naves = [
  {
    id: 1,
    name: 'Milano',
    value: Number(25.0).toFixed(2),
    imageUrl: 'https://3.bp.blogspot.com/-LiIBwWqp4Ek/U-GeoiNXvyI/AAAAAAAABwo/YCVHpesRkTM/s1600/81J1NrFjYoL._SL1500_.jpg',
    descricao:"O Milano é uma nave Ravager M e a principal espaçonave usada pelos Guardiões da Galáxia para voos interestelares para os mundos."
  },
  {
    id: 2,
    name: 'Nave Megalodon',
    value: Number(59.0).toFixed(2),
    imageUrl: NavMega,
    descricao:"Robusta, comporta grupos de até 50 pessoas confortavelmente!"
  },
  {
    id: 3,
    name: 'Nave Classic',
    value: Number(49.0).toFixed(2),
    imageUrl: NavClassic,
    descricao:"Visual clássico, com tecnologia de ponta!"
  },
  {
    id: 4,
    name: 'Foguete Junior',
    value: Number(20.0).toFixed(2),
    imageUrl: FogJunior,
    descricao:"É ideal para o transporte de família com até 4 membros. Econômico e veloz!"
  },
  {
    id: 5,
    name: 'Foguete Single',
    value: Number(30.0).toFixed(2),
    imageUrl: FogSingle,
    descricao:"É ideal para o transporte de apenas um passageiro. Econômico e veloz"
  },
  {
    id: 6,
    name: 'Foguete Blaster',
    value:Number(40.0).toFixed(2),
    imageUrl: FogBlaster,
    descricao:"Comporta até 5 passageiros em uma viagem extremamente veloz!"
  },
  {
    id: 7,
    name: 'Nave Millenium Falcon',
    value:Number(69.0).toFixed(2),
    imageUrl: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/Millennium-Falcon.jpg',
    descricao:"A Millennium Falcon é uma nave fictícia da franquia Star Wars."
  },
  {
    id: 8,
    name: 'Estação Espacial - Estrela da Morte',
    value:Number(79.0).toFixed(2),
    imageUrl: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/11/death-star-wallpaper-by-krischan.jpg',
    descricao:"Estação espacial bélica criada pelo Império Galáctico"
  },
]

export default class App extends React.Component {
  state={
           query:"" ,
           paginaPrincipal:true,
           carrinho:[],
           naves:naves,
           minPrice: "",
            maxPrice: Infinity, 
            sortingParameter: "title",

            order:1,
      }

            buscaNome=(e)=>{
              this.setState({query: e.target.value})
            }

            updateMinPrice = (ev) => {
              this.setState({
                minPrice: ev.target.value
              })
            }

            updateMaxPrice = (ev) => {
              this.setState({
                maxPrice: ev.target.value
              })
            }
            limparFiltro = () => {
              this.setState({
                minPrice: "",
                maxPrice: "",
              });
            };
            updateSortingParameter = (ev) => {
              this.setState({
                sortingParameter: ev.target.value
              })
            }
            paginaCarrinho = () => {
            this.setState({ paginaPrincipal: !this.state.paginaPrincipal });
            };
                  
            buscaNome=(e)=>{
              this.setState({query: e.target.value})
            }
            adicionarProduto = (id) => {
              const itemCarrinho = this.state.carrinho.find(
                (nave) => id === nave.id
              );
              if (itemCarrinho) {
                const novoCarrinho = this.state.carrinho.map((nave) => {
                  if (id === nave.id) {
                    return {
                      ...nave,
                      quantidade: nave.quantidade + 1,
                    };
                  }
                  return nave;
                });
                this.setState({ carrinho: novoCarrinho });
              } else {
                const itemParaAdicionar = this.state.naves.find(
                  (nave) => id === nave.id
                );
                const carrinhoAtual = [
                  ...this.state.carrinho,
                  { ...itemParaAdicionar, quantidade: 1 },
                ];
                this.setState({ carrinho: carrinhoAtual });
              }
            };

            removerProduto = (id) => {
              const retirarItem = [...this.state.carrinho];
              const item = retirarItem.filter((nave) => {
                return nave.id !== id;
              });
              this.setState({ carrinho: item });
            };


            adicionarQuantidade = (item) => {
              const carrinhoAtual = this.state.carrinho.map((nave) => {
                if (item.id === nave.id) {
                  return {
                    ...item,
                    quantidade: nave.quantidade + 1,
                  };
                }
                return nave;
              });
              this.setState({ carrinho: carrinhoAtual });
            };

            diminuirQuantidade = (item) => {
              const carrinhoAtual = this.state.carrinho.map((nave) => {
                if (item.id === nave.id && nave.quantidade > 1) {
                  return {
                    ...item,
                    quantidade: nave.quantidade - 1,
                  };
                }
                return nave;
              });
              this.setState({ carrinho: carrinhoAtual });
            };

            totalItens = () => {
              return this.state.carrinho.reduce(
                (total, item) => total + item.quantidade,
                0
              );
            };

            limparCarrinho = () => {
              this.setState({ carrinho: [] });
            };

// Funções para ordenação crescente/decrescente

        updateOrder= (ev) => {
          this.setState({ order:ev.target.value });
        };

      

        updateQuery = (ev) => {
          this.setState({
            query: ev.target.value
          })
        }
        componentDidUpdate() {
          localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
        }
      
        componentDidMount() {
          const modificarCarrinho = localStorage.getItem("carrinho");
          if (modificarCarrinho) {
            this.setState({ carrinho: JSON.parse(modificarCarrinho) });
          }
        }

render(){
  if(this.state.paginaPrincipal){
	
    return (
      <Corpo>
        <Tela>
         
          <Header 
          paginaProdutos={this.state.paginaPrincipal}
          paginaCarrinho={this.paginaCarrinho}
          query={this.state.query} 
          buscaNome={this.buscaNome}
          totalItens={this.totalItens}/> 


          <Ordenacao 
                 
          updateOrder={this.updateOrder}
          order={this.state.order}      
          updateSortingParameter={this.updateSortingParameter}

          />
         
          <Principal>
            <MnuVertical>    
         
            <Filter>
					<ImgTela src="https://pt.seaicons.com/wp-content/uploads/2015/11/filter-icon.png" />
					<BotoesMnuVertical>Filtro</BotoesMnuVertical>
				</Filter>
        
            <Filtro
            updateMinPrice={this.updateMinPrice}
            updateMaxPrice={this.updateMaxPrice}
            minPrice={this.state.minPrice}
            maxPrice={this.state.maxPrice}
            limparFiltro={this.limparFiltro}
                        />
            

            </MnuVertical>

            <PainelProdutos>
              {naves.filter(nave=>{
              return nave.name.toLowerCase().includes(this.state.query.toLowerCase())
              }).filter(nave => {
                return this.state.minPrice === "" || nave.value >= this.state.minPrice
             })
             .filter(nave => {
                return this.state.maxPrice === "" || nave.value <= this.state.maxPrice

                
             }).sort((currentShip, nextShip) => {
              switch (this.state.sortingParameter) {  
              
                 default:
                    return this.state.order * (currentShip.value - nextShip.value)
              }
              })
              .map((nave) =>
                <Card name={nave.name}
                    alt={nave.name}
                  imageUrl={nave.imageUrl}
                  value={"R$"+nave.value} 
                  key={nave.id}
                  adicionarProduto={() => this.adicionarProduto(nave.id)}/>
              )}

            </PainelProdutos>

          </Principal>
          <Footer></Footer>
        </Tela>
      </Corpo>
    )
  } else{
    return(
      <div>
        <Header
         paginaProdutos={this.state.paginaPrincipal}
         paginaCarrinho={this.paginaCarrinho}/>
      <Carrinho
       carrinho={this.state.carrinho}
       removerProduto={this.removerProduto}
       adicionarQuantidade={this.adicionarQuantidade}
       diminuirQuantidade={this.diminuirQuantidade}
       limparCarrinho={this.limparCarrinho}
       paginaCarrinho={this.paginaCarrinho}
       totalItens={this.totalItens}/>
       <Footer/>
      </div>
    )
  }
}
 

}


