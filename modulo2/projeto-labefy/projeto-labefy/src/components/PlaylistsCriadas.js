import React from "react"

export default class PlaylistsCriadas extends React.Component{
    render () {
        return(
            <div>
                <button onClick={this.irParaCriarPlaylist}>Ir para Criar Playlist </button>
                <h2>Play Listst Criadas</h2>
            </div>
            
        )
    }
}