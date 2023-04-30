// import { Card } from "./Card/Card";
import { CardGallery } from "./CardGallery/CardGallery";
import { Container } from "./Container/Container";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <Container>
        <CardGallery/>
      </Container>
      <GlobalStyle/>
    </>
  );
};
