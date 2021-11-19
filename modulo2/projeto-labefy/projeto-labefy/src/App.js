import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylistsCriadas from "./components/PlaylistsCriadas";
import MusicasCriadas from "./components/CriarPlaylist";
import CriarPlaylist from "./components/CriarPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual : "Criar Playlist"
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case "Criar Playlist":
        return <CriarPlaylist irParaPlaylistsCriadas={this.irParaPlaylistsCriadas}/>
      case "Playlists Criadas":
        return <PlaylistsCriadas irParaCriarPlaylist={this.irParaCriarPlaylist}/>
      default:
        return <div>Erro ! Pagina não encontrada</div>
    }
  }  

  irParaCriarPlaylist = () => {
    this.setState({telaAtual: "Ciar Playlist"})
  }
  
  irParaPlaylistsCriadas = () => {
    this.setState({telaAtual: "Playlists Criadas"})
  }

  render() {
      return (
      <div>
        <h2>Labefy</h2>
        {this.escolheTela}
    </div>
    )
  }
}