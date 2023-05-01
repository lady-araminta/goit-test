import { CardGallery } from 'components/CardGallery/CardGallery';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { LinkStyled, Wrapper } from './Tweets.styled';
import { BtnFollow } from 'components/Buttons/BtnFollow/BtnFollow';
import { useLocation } from 'react-router-dom';

export const Tweets = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  return (
    <Container>
      <Wrapper>
        <LinkStyled to={backLink}>
          <BtnFollow>back to start</BtnFollow>
        </LinkStyled>
        <Filter />
      </Wrapper>
      <CardGallery />
    </Container>
  );
};
