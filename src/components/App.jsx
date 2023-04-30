// import { Card } from "./Card/Card";
import { CardGallery } from "./CardGallery/CardGallery";
import { Container } from "./Container/Container";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <Container>
        <Filter/>
        <CardGallery/>
      </Container>
      <GlobalStyle/>
    </>
  );
};
