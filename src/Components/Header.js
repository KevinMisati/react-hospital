import React from 'react'

const Header = () => {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light   ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img  src="../img/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/">Services</a>
                            <a className="nav-link" href="/">Projects</a>
                            <a className="nav-link" href="/">Visitations</a>

                        </div>
                    </div>
                </div>
            </nav>
        </header>


       

    )
}

export default Header
