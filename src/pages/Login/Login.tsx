import styles from '../pages.module.scss';
import stylesText from '../../css/texts.module.scss';
import stylesMargins from '../../css/margins.module.scss';
import stylesLogin from './login.module.scss';

function Login() {
    return (
      <div className={[styles.containerFluid, stylesLogin.loginWrapper].join(' ')}>
        <h1 className={[stylesText.h3, stylesMargins.mb0, stylesText.textGray800].join(' ')}>Login page</h1>
      </div>
    );
  }
  
export default Login;
  