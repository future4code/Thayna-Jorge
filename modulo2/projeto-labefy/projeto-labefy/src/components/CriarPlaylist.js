import React from "react"

export default class CriarPlaylist extends React.Component{
    render () {
        return(
            <div>
                <button onClick={this.irParaPlaylistsCriadas}>Ir para Playlists Criadas </button>
                <h2>CriarPlaylist</h2>
            </div>
        )
    }
}