import React from 'react';
import { connect } from 'react-redux';
import { doGoogleLoginAction, logOutAction } from '../../redux/userDuck';
import styles from './login.module.css';

function LoginPage({ loggedIn, fetching, doGoogleLoginAction, logOutAction }) {
    
    function doLogin() {
        doGoogleLoginAction()
    }

    function doLogOut() {
        logOutAction()
    }

    if(fetching){
         return <h1>Cargando...</h1>
    }

    return (
        <div className={styles.container}>
            {loggedIn ?
                <h1>
                    Cierra tu sesión
                </h1> :
                <h1>
                    Inicia Sesión con Google
                </h1>
            }
            {loggedIn ? 
                <button onClick={doLogOut}>
                    Cerrar Sesión
                </button> :
                <button onClick={doLogin}>
                    Iniciar
                </button>
            }
        </div>
    )
}

const mapStateToProps = ({ user: {fetching, loggedIn} }) => {
    return {
        fetching,
        loggedIn,
    }
}

export default connect(mapStateToProps, { doGoogleLoginAction, logOutAction })(LoginPage);
