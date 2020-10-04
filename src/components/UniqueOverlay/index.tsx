import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapper';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {

  const { scrollProgress } = useWrapperScroll();

  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo></Logo>
        <Burger></Burger>
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Ui Clone</a>
          </li>
          <li>
            <a href="#">Ui Clone</a>
          </li>
          <li>
            <a href="#">Ui Clone</a>
          </li>
          <li>
            <a href="#">Ui Clone</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
