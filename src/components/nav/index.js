import React from 'react';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <ul>
                        <li><a class="navbar-nav" href="#">Score: </a></li>
                        <li><a class="navbar-nav" href="#">Top Score: </a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;