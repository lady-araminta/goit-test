import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardGallery } from "./CardGallery/CardGallery";
import { Container } from "./Container/Container";
import { GlobalStyle } from "./GlobalStyle";
import { fetchUsers } from "redux/users/usersOperations";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);

  return (
    <>
      <Container>
        <CardGallery/>
      </Container>
      <GlobalStyle/>
    </>
  );
};
