import { useContext} from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { Container, ContainerEntryValue, ContainerOutputValue, EntryValue, Main, OutputValue } from "./style";

export default function Home() {

    const {
        isFinal,

        setIsMdr,
        setIsIstallments,
        setIsValue,
    } = useContext(AuthContext)

    return (
        <Main>
            <Container>

            <EntryValue>

                <h1>Simule sua Antecipação</h1>

                <ContainerEntryValue>
                    <label htmlFor="saleValue">Inorme o valor da venda *</label>
                    <input 
                        id="saleValue" 
                        type="number"
                        
                        onChange={(e) => setIsValue(parseInt(e.target.value))}
                    />
                </ContainerEntryValue>

                <ContainerEntryValue>
                    <label htmlFor="installments">Em quantas parcelas *</label>
                    <input 
                        id="installments" 
                        type="number"
                        onChange={(e) => setIsIstallments(parseInt(e.target.value))}
                    />
                    <span>Máximo de 12 parcelas</span>
                </ContainerEntryValue>

                <ContainerEntryValue>
                    <label htmlFor="percentage">Informe o percentual de MDR *</label>
                    <input 
                        id="percentage" 
                        type="number"
                        onChange={(e) => setIsMdr(parseInt(e.target.value))}
                    />
                </ContainerEntryValue>

            </EntryValue>

            <OutputValue>

                <ContainerOutputValue>

                    <h2>Você receberá:</h2>
                
                    <label className="line"></label>

                    <p>
                        Amanhã: <span id="tomorrow">{
                        isFinal[1]}</span>
                    </p>

                    <p>
                        Em 15 dias: <span id="fifteenDays">{
                        isFinal[15]}</span>
                    </p>

                    <p>
                        Em 30 dias: <span id="thirtyDays">{
                        isFinal[30]}</span>
                    </p>

                    <p>
                        Em 90 dias: <span id="ninetyDays">{
                        isFinal[90]}</span>
                    </p>

                </ContainerOutputValue>

            </OutputValue>
            
            </Container>
        </Main>
    )
}