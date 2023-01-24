import styled from "styled-components"

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
`
// Container pincipal
export const Container = styled.div`
    width: 38rem;
    height: 24.313rem;
    background: #FFFFFF;
    border: 0.063rem solid #D1DCE3;
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: nowrap;
`
// Container referente aos dados de entrada
export const EntryValue = styled.section`
    width: 23.563rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3.5rem;

    h1 {
        margin-bottom: 0.813rem;
        font-family: 'SourceSansPro';
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: #656565;
    }
`
// Container dos dados
export const ContainerEntryValue = styled.div`
    margin: 0.813rem 0rem 0.813rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
        margin: 0px;
        font-family: 'SourceSansPro';
        font-size: 14px;
        line-height: 16px;
        color: #656565;
    }

    input {
        width: 15.688rem;
        height: 2.313rem;
        background: #FFFFFF;
        border: 1px solid #66AFE9;
        border-radius: 4px;
        font-family: 'SourceSansPro';
        font-size: 14px;
        line-height: 1rem;
        color: #000000;
    }

    span {
        font-family: 'SourceSansPro';
        font-size: 0.688rem;
        line-height: 0.813rem;
        color: #CECECE;
    }
`
// Container referente aos dados de saida
export const OutputValue = styled.aside`
    width: 14.438rem;
    height: 100%;
    background-color: rgba(209, 220, 227, 0.18);
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;
        text-transform: uppercase;
        color: #3D75BB;
        margin-bottom: 0px;
    }
`
// Container dados de saida
export const ContainerOutputValue = styled.div`
    width: 10.063rem;
    height: 13.938rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p, span {
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 400;
        font-size: 1rem;
        line-height: 2.875rem;
        color: #5D9CEC;
        margin: 0px;
    }

    span {
        font-weight: 700;
    }

    .line {
        border: 1px solid #5D9CEC;
        opacity: 0.3;
    }
`