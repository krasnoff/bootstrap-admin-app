import { useState } from 'react';


function SimpleForm() {
    const [inputs, setInputs] = useState<any>({});
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setIsSubmit(true);
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let value = event.target.value;
        if (event.target instanceof HTMLInputElement && event.target.type === 'checkbox') {
            setInputs((values: any) => ({...values, [event.target.name]: (event.target as any).checked}));
            value = (event.target as any).checked;
        } else {
            setInputs((values: any) => ({...values, [event.target.name]: event.target.value}));
        }
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
                    <div className="invalid-feedback">
                        Mandatory field
                    </div>
                    <div className="invalid-feedback">
                        Email is not valid
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Example textarea</label>
                    <textarea className="form-control" name="comments" id="comments" rows={3} value={inputs.comments || ""} onChange={changeHandler}></textarea>
                    <div className="invalid-feedback">
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
                    <div className="invalid-feedback">
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
                    <div className="invalid-feedback">
                        Mandatory field
                    </div>
                    <div className="invalid-feedback">
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
                    <div className="invalid-feedback">
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
                    <div className="invalid-feedback">
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
                    <div className="invalid-feedback">
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
  