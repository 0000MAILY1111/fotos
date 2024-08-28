import React from 'react'

export const RegistroPage = () => {
    return (
        <>
            <h1 className="text-center my-4">Registro</h1>
            <form className="container">
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Nombre</label>
                        <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Correo Electrónico</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">Contraseña</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputConfirmPassword">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirmar Password" />
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="col-auto">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="termsCheck" />
                            <label className="form-check-label" htmlFor="termsCheck">
                                Acepto los términos y condiciones
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-row justify-content-center mt-4">
                    <button type="submit" className="btn btn-success">Registrarse</button>
                </div>
            </form>
        </>
    )
}

/*import React from 'react'
<button className="btn btn-primary"
onClick={onLogin}

>Login</button>=*/