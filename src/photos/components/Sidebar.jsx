import React from 'react';

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
            <div className="position-sticky vh-100">
                <div className="list-group list-group-flush mx-3 mt-4">

                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white" aria-current="true">
                        <i className="fas fa-user fa-fw me-3"></i><span>User</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white active">
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Categorias</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-line fa-fw me-3"></i><span>Informacion 3</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-line fa-fw me-3"></i><span>Informacion 4</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>Informacion 5</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>Informacion 6</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-calendar fa-fw me-3"></i><span>Informacion 7</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-users fa-fw me-3"></i><span>informacion 8</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-money-bill fa-fw me-3"></i><span>Informacion 9</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;