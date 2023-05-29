import {Text} from "../Text"

type TextAreaType="TextArea1"

interface TextAreaProps{
    type?:TextAreaType
    setTexto:(text:string)=>void
}

export const TextArea =({type="TextArea1",setTexto}:TextAreaProps)=>{
    return(<>
    <textarea 
    className={`TextArea1 ${type} ` }
    placeholder ="Enter choices here..."
    
    onChange={(e) => setTexto(e.target.value)}
    ></textarea>
        
        
    
    
    </>)
}