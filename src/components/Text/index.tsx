import { ReactNode } from "react"


type TextType="text1"|"text2"|"text3"

interface TextProps{
    type?:TextType
    children?:ReactNode
}

export const Text =({children="",type="text1"}:TextProps)=>{
    return(<>
    <div className={`text ${type} ` } >
        
        {children}
    </div>
    
    
    </>)
}