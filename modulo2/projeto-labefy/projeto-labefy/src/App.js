import React from "react";
import axios from "axios";
import styled from "styled-components";
import Playlists from "./components/Playlists";
import CriarPlay from "./components/CriarPlay";

export default class App extends React.Component {
  state = {
    telaAtual : "criar"
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case "criar":
        return <CriarPlay irParaPlaylistsCriadas={this.irParaPlaylistsCriadas}/>
      case "visualizar":
        return <Playlists irParaCriarPlaylist={this.irParaCriarPlaylist}/>
      default:
        return <div>Erro ! Pagina não encontrada</div>
    }
  }  

  irParaCriarPlaylist = () => {
    this.setState({telaAtual: "criar"})
  }
  
  irParaPlaylistsCriadas = () => {
    this.setState({telaAtual: "visualizar"})
  }

  render() {
      return (
      <div>
        <h2>Labefy</h2>
        {this.escolheTela()}
    </div>
    )
  }
}