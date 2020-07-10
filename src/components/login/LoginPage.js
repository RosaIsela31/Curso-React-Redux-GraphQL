import React from 'react';
import { connect } from 'react-redux';
import { doGoogleLoginAction } from '../../redux/userDuck';
import styles from './login.module.css';

function LoginPage({ fetching, doGoogleLoginAction }) {
    
    function doLogin() {
        doGoogleLoginAction()
    }

    if(fetching){
         return <h1>Cargando...</h1>
    }

    return (
        <div className={styles.container}>
            <h1>
                Inicia Sesión con Google
            </h1>
            <h1>
                Cierra tu sesión
            </h1>
            <button onClick={doLogin}>
                Iniciar
            </button>
            <button>
                Cerrar Sesión
            </button>
        </div>
    )
}

const mapStateToProps = ({ user: {fetching} }) => {
    return {fetching}
}

export default connect(mapStateToProps, { doGoogleLoginAction })(LoginPage);
