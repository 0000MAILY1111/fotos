import { } from "react-router-dom";


export const LoginPage = () => {

    const onLogin = () => {
        navigate('/', {

            replace: true
        });


    }


    return (
        <div>
            <h1>Login</h1>
            <hr />


            <form>


                <div className="form-group">
                    <label for="inputName">Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Apellidos y Nombres" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Correo Electronico</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Contraseña</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Direccion </label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Direccion 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Ciudad</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Pais</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div class="col-auto">
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
                        <label class="form-check-label" for="autoSizingCheck">
                            Recordar Usuario
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <button className="btn btn-primary"
                onClick={onLogin}

            >Login</button>
        </div>

    );
};
