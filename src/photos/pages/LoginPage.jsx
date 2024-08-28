import React from 'react'

export const LoginPage = () => {
    return (
        <>
           <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4">
                <h1 className="text-center mb-4">Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputEmail4">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control mb-3"
                            id="inputEmail4"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword4">Contraseña</label>
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="inputPassword4"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="autoSizingCheck"
                        />
                        <label className="form-check-label" htmlFor="autoSizingCheck">
                            Recordar Usuario
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Sign in</button>
                    <a className="small text-muted" href="#!">¿Olvidaste tu contraseña?</a>
                    <p className="mt-4" style={{ color: '#393f81' }}>
                        ¿No tienes cuenta? <a href="#!" style={{ color: '#393f81' }}>Regístrate aquí</a>
                    </p>
                </form>
            </div>
        </div>
        </>

    )
}



