import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const firstLink = useRef(null);
  const secondLink = useRef(null);
  const h = gsap.utils.selector(contentRef);
  const q = gsap.utils.selector(headerRef);

  useEffect(() => {
    gsap.from(q("h2"), { y: -200, ease: "power4", duration: 1.2 });
    gsap.fromTo(
      h("h1:first-child"),
      { rotateX: "-90deg", y: 200, opacity: 0, duration: 1 },
      { rotateX: "0deg", y: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      h("h1:nth-child(2)"),
      { rotateX: "-90deg", y: 200, opacity: 0, duration: 1, delay: 0.2 },
      { rotateX: "0deg", y: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(
      h("h1:last-child"),
      { rotateX: "-90deg", y: 200, opacity: 0, duration: 1, delay: 0.4 },
      { rotateX: "0deg", y: 0, opacity: 1, duration: 1, delay: 0.4 }
    );
    gsap.fromTo(
      firstLink.current,
      { x: 0, y: 0 },
      {
        scrollTrigger: {
          pin: true,
          trigger: "#app",
          start: "top top",
          toggleActions: "restart pause reverse pause",
          scrub: true,
          end: "bottom +=500",
        },
        x: 50,
        transitionDuration: '0.2s',
        y: -40,
      }
    );
    gsap.fromTo(
      secondLink.current,
      { x: 0, y: 0 },
      {
        scrollTrigger: {
          pin: true,
          trigger: "#app",
          start: "top top",
          toggleActions: "restart pause reverse pause",
          scrub: true,
          end: "bottom +=500",
        },
        x: -50,
        transitionDuration: '0.2s',
        y: -40,
      }
    );

    gsap.fromTo(h("h1:first-child"),
    
    {x:0,y:0},
    {
      scrollTrigger: {
        trigger: h("h1:first-child"),
        toggleActions: "restart pause reverse pause",
        start: "top 100",
        end: "bottom 500",
        markers: true,
      },
      x: 10000
    })

  }, []);

  return (
    <AppContainer id="app">
      <div ref={scrollRef}>
        <Header ref={headerRef} className="App-header">
          <div>
            <StyledLink href="#">
              <h2 ref={firstLink}>LOCOMOTIVE.CA</h2>
            </StyledLink>
          </div>
          <div>
            <StyledLink>
              <h2 ref={secondLink}>V4.X-EDITION</h2>
            </StyledLink>
          </div>
        </Header>
        <ContentContainer ref={contentRef}>
          <MainHeader>LOCOMOTIVE</MainHeader>
          <MainHeader>SCROLL</MainHeader>
          <MainHeader color="white">V4.X</MainHeader>
        </ContentContainer>
        <div style={{ height: "100vh" }}></div>
      </div>
    </AppContainer>
  );
}

const MainHeader = styled.h1`
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  font-size: 11vw;
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: 0cm;
  margin: 20px 5px;
`;

const ContentContainer = styled.div`
  margin: 20px 60px;
`;

const StyledLink = styled.a`
  transition-duration: 0.3s;
  line-height: 1.5;
  letter-spacing: 0px;
  text-decoration: none;
  color: #222;
  :hover {
    color: white;
  }
`;

const Header = styled.header`
  display: flex;
  padding-top: 20px;
  margin: 0 60px;
  justify-content: space-between;
  font-family: "Neue Montreal", sans-serif;
`;

const AppContainer = styled.div`
  margin: 0px 0px;
  min-height: 100vh;
  background-color: #d4c9c9;
`;

export default App;
