import React, { useState, useEffect } from "react";

const useAuth = (jwt) => { /*}¿Qué es JWT y para qué sirve?
    JSON Web Token (JWT) es un estándar para transmitir información de forma segura en internet, por medio de archivos en formato JSON, que es un tipo de archivo de texto plano con el cual se pueden crear parámetros y asignarles un valor.*/

    const [ isAuth, setIsAuth ] = useState(true);

        useEffect(() => {
                if( jwt.length > 25 ){
                    setIsAuth(true);

                }else{
                    setIsAuth(false);
                }
            },
        []
        ); 
    return isAuth;
};

export default useAuth; 