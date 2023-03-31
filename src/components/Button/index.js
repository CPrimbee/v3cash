import styled from 'styled-components';
import border from '../../assets/button-border.png';

const Button = styled.button`
  background-color: var(--color-sand);
  border: none;
  font-family: inherit;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--color-purple);
  text-shadow: 0.1rem 0.1rem 0 var(--color-sand-dark), 
              -0.1rem 0.1rem 0 var(--color-sand-dark), 
              0.1rem -0.1rem 0 var(--color-sand-dark),
              -0.1rem -0.1rem 0 var(--color-sand-dark);
  padding-bottom: 0.6rem;
  border-image: url(${border}) 8 fill / 2.4rem / 2.4rem;
  image-rendering: pixelated;
`

export default Button