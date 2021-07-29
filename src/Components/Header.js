import React from 'react'

const Header = () => {
    return (
        <header class="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light   ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img  src="../img/logo.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#">Home</a>
                            <a class="nav-link" href="#">Services</a>
                            <a class="nav-link" href="#">Projects</a>
                            <a class="nav-link" href="visiting.html">Visitations</a>

                        </div>
                    </div>
                </div>
            </nav>
        </header>


       

    )
}

export default Header
