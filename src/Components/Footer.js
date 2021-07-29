import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-light mb-0 pb-0">
            <section class="container-fluid">
                <div class="call-us">
                    <p class="text-center" ><i class="fas fa-phone"></i>
                        <a href="tel:+254712345678" >+254712345678</a>
                    </p>
                </div>
                <div class="social-icons">
                    <ul class="d-flex justify-content-center">
                        <li><a href="/"><i class="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="/"><i class="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="/"><i class="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="/"><i class="fab fa-whatsapp fa-2x"></i></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
