import { useForm, SubmitHandler } from "react-hook-form";
import { useCheckIDNum } from "../../../hooks/useCheckIDNum";
import styles from './simpleForm.module.scss'; 

interface IFormInput {
    email: string;
    comments: string;
    chooseRadio: 1 | 2;
    exampleRange: number;
    IDNumber: string;
    chooseColor: string;
    exampleDataList: string;
    chooseNumber: 1 | 2 | 3;
    checkThisbox: boolean;
}

function SimpleForm() {
    const { idValidate } = useCheckIDNum();
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    
    const NumbersOnly = (evt: any) => {
        if (isNaN(evt.key) && (evt.key !== "Enter" && evt.key !== "Delete" && evt.key !== "Backspace" && evt.key !== "Tab" && evt.key !== "ArrowLeft" && evt.key !== "ArrowRight")) {
            evt.preventDefault();
        }
    }

    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" placeholder="name@example.com" {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i })} id="email"/>
                    {errors.email?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                    {errors.email?.type === 'pattern' && <div className={["invalid-feedback", styles.active].join(' ')}>Email is not valid</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Example textarea</label>
                    <textarea className="form-control" rows={3} {...register("comments", { required: true })} id="comments"></textarea>
                    {errors.comments?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="chooseRadio1" {...register("chooseRadio", { required: true })} />
                        <label className="form-check-label" htmlFor="chooseRadio1">
                            Default radio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="chooseRadio2" {...register("chooseRadio", { required: true })}/>
                        <label className="form-check-label" htmlFor="chooseRadio2">
                            Default checked radio
                        </label>
                    </div>
                    {errors.chooseRadio?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleRange" className="form-label">Example range</label>
                    <input type="range" className="form-range" id="exampleRange" {...register("exampleRange")} />
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="IDNumber" className="form-label">IDNumber</label>
                    <input type="text" className="form-control" id="IDNumber" placeholder="IDNumber" {...register("IDNumber", { required: true, validate: idValidate })} onKeyDown={NumbersOnly} maxLength={9} />
                    {errors.IDNumber?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                    {errors.IDNumber?.type === 'validate' && <div className={["invalid-feedback", styles.active].join(' ')}>ID is not valid</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="chooseColor" className="form-label">Choose color</label>
                    <input type="color" className="form-control form-control-color" id="chooseColor" title="Choose your color" {...register("chooseColor")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." {...register("exampleDataList", { required: true })} />
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago"/>
                    </datalist>
                    {errors.exampleDataList?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="chooseNumber" className="form-label">Choose number</label>
                    <select className="form-select" aria-label="Default select example" id="chooseNumber" {...register("chooseNumber", { required: true })}>
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    {errors.chooseNumber?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkThisbox" {...register("checkThisbox", { required: true })} />
                        <label className="form-check-label" htmlFor="checkThisbox">
                            Default checkbox
                        </label>
                    </div>
                    {errors.checkThisbox?.type === 'required' && <div className={["invalid-feedback", styles.active].join(' ')}>Mandatory field</div>}
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
  }
  
export default SimpleForm;
  