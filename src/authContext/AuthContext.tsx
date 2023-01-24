import { createContext, ReactNode, useState } from "react";
import api from "../server/api";

interface ICalculateContext {
    isFinal: IDays

    setIsValue: React.Dispatch<React.SetStateAction<number>>
    setIsIstallments: React.Dispatch<React.SetStateAction<number>>
    setIsMdr: React.Dispatch<React.SetStateAction<number>>
}

interface IDays {
    1: number
    15: number
    30: number
    90: number
}

interface IChildrenProps {
    children: ReactNode;
}

export const AuthContext = createContext<ICalculateContext>({} as ICalculateContext);

export default function AuthProvider({children}: IChildrenProps) {

    // Resultado da api
    const [isFinal, setIsFinal] = useState<IDays>({} as IDays)

    // Pegando dados enviado pelo usuario
    const [isValue, setIsValue] = useState(Number)
    const [isInstallments, setIsIstallments] = useState(Number)
    const [isMdr, setIsMdr] = useState(Number)
    
    api.post("", {
        amount: isValue,
        installments: isInstallments,
        mdr: isMdr,
    }).then((res) => {
        setIsFinal(res.data)
    })
   
    return (
        <AuthContext.Provider value={{
            isFinal,
           
            setIsValue,
            setIsIstallments,
            setIsMdr,
        }}>
            {children}
        </AuthContext.Provider>
    )
}