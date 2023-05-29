import { Text } from "../Text"
import { TextArea } from "../TextArea"
import { TextOrange } from "../TextOrange"
import { useState } from 'react';

type TextTextAreaType = "TextTextArea1"

interface TextTextAreaProps {
    type?: TextTextAreaType

}

export const TextTextArea = ({ type = "TextTextArea1" }: TextTextAreaProps) => {
    const [text, setTexto] = useState("")
    return (<>
        <div className={`TextTextArea ${type}`}>
            <Text type="text1">
                Enter all of the choices divided by a comma (',').
                <br />
                Press enter when you're done
            </Text>
            <TextArea
                setTexto={setTexto}
            />
            {
                text !== ""
                // aqui se esta preguntado si text es diferente de ""
                &&
                // el simbolo && representa un ainterseccioon 
                // una interseccion siver para imprimir un elemento si la primera condicion se cumple
                // en este caso la condicion es 
                // text !== ""
                // y el elemento a imprimir es loq que va despues del simbolo &&
                <TextOrange text={text} />
                // en este caso lo que se imprime es:
                // <TextOrange text={text}/>
            }

        </div>
    </>)
}