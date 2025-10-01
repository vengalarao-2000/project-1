import logo from '../assets/images/logo_pap.png';

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <a class="navbar-brand d-flex align-items-center fw-bold" href="home.html">
                    <img src={logo} alt="Paws & Pixels logo" height="50" width="50"
                        class="d-inline-block align-text-top" />
                    <span>Paws & Pixels</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                    aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/home.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact.html">Contact Us</a></li>
                        <li className="nav-item"><a className="btn btn-primary ms-lg-2" href="/signin/">Sign in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
