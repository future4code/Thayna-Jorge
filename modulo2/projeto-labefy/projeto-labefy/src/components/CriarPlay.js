import React from "react"
import axios from "axios"

export default class CriarPlay extends React.Component{
  state = {
      nomePlaylist :"",
      
  }
  
  handleNomePlaylist = (event) => {
    this.setState({nomePlaylist: event.target.value})
  }


  
  criarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        name: this.state.nomePlaylist 
    }
    axios.post(url, body, {
        headers:{
            Authorization: "thayna-saad-carver"
        }
       
    })
    .then((res) => {
        alert("Playlist Cadastrada com Sucesso !")
        this.setState({nomePlaylist: ""})
    })
    .catch((erro) => {
        alert(erro.response.data.message)

    })

  }

    render () {
        return(
            <div>
                <button onClick={this.props.irParaPlaylistsCriadas}>Ir para Playlists Criadas </button>
                <h2>Criar Playlist</h2>
                <input 
                    placeholder= {"Nome Playlist"}
                    value={this.state.nomePlaylist}
                    onChange={this.handleNomePlaylist}
                />
                
                <button onClick={this.criarPlaylist}>Criar</button>
            </div>
        )
    }
}