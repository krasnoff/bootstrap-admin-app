import stylesLogin from './login.module.scss';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useSessionContext } from '../../contexts/SessionContext';

export interface Props {
    onSuccessfullLogin: () => void
}

export function Login(props: Props) {
    const [inputs, setInputs] = useState<any>({});
    const navigate = useNavigate();
    const [session, setSession] = useSessionContext();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((values: any) => ({...values, [event.target.name]: event.target.value}));
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // TODO check login validation here
        props.onSuccessfullLogin();
        // navigate('/SubMenu2');
        setSession({...session, isAuthenticated: true});
        navigate(session.redirectPath);
    }
    
    return (
      <div className={stylesLogin.bgGradientPrimary}>

          <div className="container">

              

                  <div className={['col-xl-10 col-lg-12 col-md-9', stylesLogin.bgLoginBox].join(' ')}>
                    <div className={['col-lg-6 h-100', stylesLogin.pic].join(' ')}></div>
                    <div className={['col-lg-6 h-100', stylesLogin.form].join(' ')}>
                        <div className={stylesLogin.p5}>
                            <div className={stylesLogin.textCenter}>
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user" onSubmit={(event) => handleSubmit(event)}>
                                <div  className={stylesLogin.formGroup}>
                                    <input type="email" className={['form-control form-control-user', stylesLogin.formControlLoginUser].join(' ')}
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..." onChange={changeHandler} value={inputs.email || ""} name="email" />
                                </div>
                                <div  className={stylesLogin.formGroup}>
                                    <input type="password" className={['form-control form-control-user', stylesLogin.formControlLoginUser].join(' ')}
                                        id="exampleInputPassword" aria-describedby="emailHelp"
                                        placeholder="Password" onChange={changeHandler} value={inputs.password || ""} name="password" />
                                </div>
                                <div  className={stylesLogin.formGroup}>
                                    <div className={stylesLogin.checkboxWrapper}>
                                        <input type="checkbox" className={['form-check-input', stylesLogin.customControl].join(' ')} id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <div  className={stylesLogin.formGroup}>
                                    <button className={["btn btn-primary btn-user btn-block", stylesLogin.customButton].join(' ')}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                      

                  
              </div>

          </div>

      </div>
    );
}
  

  