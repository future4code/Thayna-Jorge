import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Thayna"}
          fotoUsuario={"https://ca.slack-edge.com/TLAVDH7C2-U02FH2Z8XC5-cf4702f0db3e-48"}
          fotoPost={"http://magicway.com.br/wp-content/uploads/2018/12/Paris.png"}
        />

        <Post
          nomeUsuario={"Brian"}
          fotoUsuario={"https://lh3.googleusercontent.com/ogw/ADea4I5FwK3jP-VwDyeVGLe2QigIkbZzRAzwkXHMT3twRw=s32-c-mo"}
          fotoPost={"http://d279m997dpfwgl.cloudfront.net/wp/2020/03/GettyImages-1213246930-1000x667.jpg"}
        />
      </MainContainer>
    );
  }
}

export default App;
