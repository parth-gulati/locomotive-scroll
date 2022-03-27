import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

function App() {

  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const h = gsap.utils.selector(contentRef)
  const q = gsap.utils.selector(headerRef)

  useEffect(()=>{
    gsap.from(q('h2'), {y: -200, ease: 'power4', duration: 1.2})
    gsap.fromTo(h('h1:first-child'), {rotateX: '-90deg', y: 200, opacity: 0, duration: 1}, {rotateX: '0deg', y: 0, opacity: 1, duration: 1})
    gsap.fromTo(h('h1:nth-child(2)'), {rotateX: '-90deg', y: 200, opacity: 0, duration: 1, delay: 0.2}, {rotateX: '0deg', y: 0, opacity: 1, duration: 1, delay: 0.2})
    gsap.fromTo(h('h1:last-child'), {rotateX: '-90deg', y: 200, opacity: 0, duration: 1, delay: 0.4}, {rotateX: '0deg', y: 0, opacity: 1, duration: 1, delay: 0.4})
  }, [])

  return (
    <AppContainer>
      <Header ref={headerRef} className="App-header">
        <div>
          <StyledLink href="#">
            <h2>LOCOMOTIVE.CA</h2>
          </StyledLink>
        </div>
        <StyledLink>
          <h2>V4.X-EDITION</h2>
        </StyledLink>
      </Header>
      <ContentContainer ref={contentRef}>
        <MainHeader>
          LOCOMOTIVE SCROLL
        </MainHeader>
        <MainHeader color="white">
          V4.X
        </MainHeader>
      </ContentContainer>
    </AppContainer>
  );
}

const MainHeader = styled.h1`
  color: ${props=>props.color === 'white' ? 'white': 'black'};
  font-size: 11vw;
  font-weight: 500;
  line-height: .9;
  letter-spacing: 0cm;
  margin: 20px 5px;
`

const ContentContainer = styled.div`
  margin: 20px 60px;
`

const StyledLink = styled.a`
  transition-duration: 0.3s;
  line-height: 1.5;
  letter-spacing: 0px;
  text-decoration: none;
  color: #222;
  :hover { 
    color: white;
  }

`

const Header = styled.header`
  display: flex;
  padding-top: 20px;
  margin: 0 60px;
  justify-content: space-between;
  font-family: "Neue Montreal", sans-serif;
`;

const AppContainer = styled.div`
  margin: 0px 0px;
  min-height: 200vh;
  background-color: #d4c9c9;
`;

export default App;
