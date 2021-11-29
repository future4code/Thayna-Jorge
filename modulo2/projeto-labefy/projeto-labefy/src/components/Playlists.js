import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardPlaylists = styled.div`
    border: 2px solid violet;
    padding: 10px;
    margin: 10px;
    width: 300px ;
    display: flex;
    justify-content: space-between;
`



export default class Playlists extends React.Component{
    state = {
        playlistsCriadas : []
    }



    componentDidMount ()  {
        this.pegarPlaylistCriada()
    }
    
    pegarPlaylistCriada = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        
      axios.get(url, {
          headers: {
            Authorization: "thayna-saad-carver"
          }
      }) 
      .then((resposta) =>{
          this.setState({playlistsCriadas: resposta.data.result.list})
      })
      .catch((erro) => {
          console.log(erro)
      })
    }

    deletarPlayList = (id)  => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`


        axios.delete(url, {
            headers: {
                Authorization: "thayna-saad-carver"
            }
        })
        .then((resposta) => {
            alert("Playlist deletada com Sucesso")
        })
        .catch((erro) => {
            console.log(erro)
        })
    }



    render () {
       const listaPlaylist = this.state.playlistsCriadas.map((play) => {
                return (
                <CardPlaylists key={play.id}>
                    {play.name}
                    <button onClick={() => this.deletarPlayList(play.id)}>Delete</button>
                </CardPlaylists>

                )    
            })
    
        return(
            <div>
                <button onClick={this.props.irParaCriarPlaylist}>Ir para Criar Playlist </button>
                <h2>Playlistst Criadas</h2>
                {listaPlaylist}
            </div>
            
        )
    }
}