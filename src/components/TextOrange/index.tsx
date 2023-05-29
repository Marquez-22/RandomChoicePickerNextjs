import { text } from "stream/consumers"
import { Text } from "../Text"

type TextOrangeType="TextOrange1"
interface TextOrangeProps{
    type?:TextOrangeType
    text?:string
}

export const TextOrange=({text="",type="TextOrange1"}:TextOrangeProps)=>{
    return(<>
    <div className={`TextOrange ${type}`}>
        <Text type="text2">{text}</Text>
    </div>
    
    

    </>)
}    
