import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    :focus {
        outline: 0;
    }

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
}
.react-modal-overlay{

   z-index: 2;
   background: rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
 } 
 
 .react-modal-content {
  border-radius: 10px;
   width: 100%;
   max-width: 900px;
   background: #fff;
   padding: 3rem;
   position: relative;
   overflow-y: auto;
   max-height: 90%;
 }
 .react-modal-close {
   font-size: 1rem;
   color: #5e5e5e;
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;
   border: 0;
   background: transparent;
   transition: filter 0.2s;
   &:hover {
      filter: brightness(60%);
   }
   }
`;
