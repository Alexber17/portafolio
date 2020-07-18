import styled from 'styled-components';
// H Levels

export const HeaderOne = styled.h1`
    width: 100%;
    height: 100vh;
    font-size: 2rem;
    margin:auto;
    padding-top:20%;
    
    
    text-align: center ;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
        text-align: center;
    }
`;
export const title = styled.h2`
    color:#4f8a8b;
    margin:auto;
    font-size: 1rem;

    /* padding-top:25%; */
    
    text-align: center ;
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;


export const HeaderTwo = styled.h2`

    font-size: ${props => props.larger ? '3rem' : '1.6rem'};
    text-align: ${props => props.align ? props.align : 'initial'};
    margin: 3rem 0;
    @media screen and (min-width: 768px) {
        font-size: ${props => props.larger ? '6rem' : '1.6rem'};
    }
`;

export const BannerImage = styled.div`
    margin: 2rem 0;
    img{
        width:100%
    }
    @media screen and (min-width: 768px){
            max-width: 300px;
            height: 300px;

         }
`;

export const BannerImage2 = styled.div`
    margin: 2rem 0;
    img{
        max-width: 100%;
         height: auto;
         @media screen and (min-width: 768px){
            max-width: 200px;
            height: 200px;

         }
    }
`;


export const BodyText= styled.div`

     font-size: 1rem;
     line-height: 1.8rem;
     @media screen and (min-width: 768px){
        font-size: 2.1rem;
        line-height:2.2rem; 
        max-width:800px;
        margin: 0 auto;
        
     }
`;
export const HeaderThree = styled.h3`
    font-size: 1.2rem;
    margin-bottom: .5rem;
    @media screen and (min-width: 768px) {
        font-size: 1.3rem;
    }
`;


export const SmallFlex = styled.small`
   display: flex;
   > div {
       margin:  0  .5rem 0 0 ;
   } 
`