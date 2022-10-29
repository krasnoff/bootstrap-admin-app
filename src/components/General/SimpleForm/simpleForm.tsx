import { useState } from 'react';
import { MandatoryTypes } from '../../../Enums/MandatoryTypes';
import { useFormUtilities } from '../../../hooks/useFormUtilities';
import { FormFieldInteface } from '../../../Types/General/Formfield';
import { MandatoryObj } from '../../../Types/General/ManDatoryObj';
import { SimpleFormInteface } from '../../../Types/General/SimpleFormInterface';
// import styles from './InputFile.module.scss';

function SimpleForm() {
    const {isValidIsraeliID, validateElement} = useFormUtilities();
    
    const [complexInputs, setComplexInputs] = useState<SimpleFormInteface>({
        email: {fieldName: 'email',  mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}, {mandatoryType: MandatoryTypes.Regex, mandatoryArg: new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)}]},
        comments: {fieldName: 'comments', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}]},
        chooseRadio: {fieldName: 'chooseRadio', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}]},
        IDNumber: {fieldName: 'IDNumber', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}, {mandatoryType: MandatoryTypes.userDefined, mandatoryArg: isValidIsraeliID}]},
        chooseColor: {fieldName: 'chooseColor'},
        exampleDataList: {fieldName: 'datalistOptions', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}]},
        checkThisbox: {fieldName: 'checkThisbox', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}]},
        chooseNumber: {fieldName: 'chooseNumber', mandatoryObjArr: [{mandatoryType: MandatoryTypes.required}]},
        exampleRange: {fieldName: 'exampleRange'}
    });

    const [inputs, setInputs] = useState<any>({});
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setIsSubmit(true);
        
        Object.keys(complexInputs).forEach(key => {
            const element = (complexInputs as any)[key] as FormFieldInteface;
            if (element && element.mandatoryObjArr) {
                if (element.mandatoryObjArr) {
                    element.mandatoryObjArr.forEach(el => {
                        el.isNotValid = validateElement(el, inputs[element.fieldName]);
                    });
                }
            }
        });
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let value = event.target.value;
        if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') {
            setInputs((values: any) => ({...values, [event.target.name]: (event.target as any).checked}));
            value = (event.target as any).checked;
        } else {
            setInputs((values: any) => ({...values, [event.target.name]: event.target.value}));
        }
        

        const simpleFormInteface = (complexInputs as any)[event.target.name];
        if (simpleFormInteface && simpleFormInteface.mandatoryObjArr) {
            simpleFormInteface.mandatoryObjArr.forEach((el: MandatoryObj) => {
                el.isNotValid = validateElement(el, value);
            })
            
        }        
        setComplexInputs(complexInputs);
    }

    const NumbersOnly = (evt: any) => {
        if (isNaN(evt.key) && (evt.key !== "Enter" && evt.key !== "Delete" && evt.key !== "Backspace" && evt.key !== "Tab" && evt.key !== "ArrowLeft" && evt.key !== "ArrowRight")) {
            evt.preventDefault();
        }
    }

    const divStyleBlock = {
        display: 'block'
    };

    const divStyleNone = {
        display: 'none'
    };
    
    return (
        <form className="row" onSubmit={(event) => handleSubmit(event)}>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={inputs.email || ""} onChange={changeHandler} />
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.email.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.email.mandatoryObjArr as Array<MandatoryObj>)[1].isNotValid ? divStyleBlock : divStyleNone}>
                        Email is not valid
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Example textarea</label>
                    <textarea className="form-control" name="comments" id="comments" rows={3} value={inputs.comments || ""} onChange={changeHandler}></textarea>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.comments.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="chooseRadio" id="chooseRadio1" onChange={changeHandler} value={1} />
                        <label className="form-check-label" htmlFor="chooseRadio1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="chooseRadio" id="chooseRadio2" onChange={changeHandler} value={2} />
                        <label className="form-check-label" htmlFor="chooseRadio2">
                            Default checked radio
                        </label>
                    </div>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.chooseRadio.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleRange" className="form-label">Example range</label>
                    <input type="range" className="form-range" id="exampleRange" name="exampleRange" value={inputs.exampleRange || ""} onChange={changeHandler} />
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="IDNumber" className="form-label">IDNumber</label>
                    <input type="text" className="form-control" name="IDNumber" id="IDNumber" placeholder="IDNumber" aria-label="IDNumber" value={inputs.IDNumber || ""} onChange={changeHandler} maxLength={9} onKeyDown={NumbersOnly} />
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.IDNumber.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.IDNumber.mandatoryObjArr as Array<MandatoryObj>)[1].isNotValid ? divStyleBlock : divStyleNone}>
                        ID is not valid
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="chooseColor" className="form-label">Choose color</label>
                    <input type="color" className="form-control form-control-color" name="chooseColor" id="chooseColor" title="Choose your color" value={inputs.chooseColor || "#000000"} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
                    <input className="form-control" list="datalistOptions" name="exampleDataList" id="exampleDataList" placeholder="Type to search..." value={inputs.exampleDataList || ""} onChange={changeHandler} />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago"/>
                    </datalist>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.exampleDataList.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="chooseNumber" className="form-label">Choose number</label>
                    <select className="form-select" aria-label="Default select example" name="chooseNumber" id="chooseNumber" value={inputs.chooseNumber || ""} onChange={changeHandler}>
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.chooseNumber.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="checkThisbox" id="checkThisbox" checked={inputs.checkThisbox || ""} onChange={changeHandler} />
                        <label className="form-check-label" htmlFor="checkThisbox">
                            Default checkbox
                        </label>
                    </div>
                    <div className="invalid-feedback" style={isSubmit && (complexInputs.checkThisbox.mandatoryObjArr as Array<MandatoryObj>)[0].isNotValid ? divStyleBlock : divStyleNone}>
                        Mandatory field
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
  }
  
export default SimpleForm;
  