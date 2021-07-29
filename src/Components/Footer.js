import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light mb-0 pb-0">
            <section className="container-fluid">
                <div className="call-us">
                    <p className="text-center" ><i className="fas fa-phone"></i>
                        <a href="tel:+254712345678" >+254712345678</a>
                    </p>
                </div>
                <div className="social-icons">
                    <ul className="d-flex justify-content-center">
                        <li><a href="/"><i className="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="/"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="/"><i className="fab fa-whatsapp fa-2x"></i></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
