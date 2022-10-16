import { useState } from "react";
import { SimpleFormInteface } from "../Types/General/SimpleFormInterface";

export function useFormUtilities() {
    const [res, setRes] = useState<boolean>();

    const convertObjectToArray = (obj: any) => {
        Object.keys(obj).forEach(key => {
            console.log(key, obj[key]);
        })
    }

    const setFormState = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, inputs: SimpleFormInteface) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            const formName = event.target.name;
            if ((inputs as any)[formName]) {
                (inputs as any)[formName].checked = (event.target as HTMLInputElement).checked;
            }
        } else {
            const formName = event.target.name;
            if ((inputs as any)[formName]) {
                (inputs as any)[formName].value = event.target.value;
            }
        }

        return inputs;
    }

    return { convertObjectToArray, setFormState }
}