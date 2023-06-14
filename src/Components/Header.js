import { Component } from "react";
export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href>
                        Start Bootstrap
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
