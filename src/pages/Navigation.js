import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import config from '../config'

function Navigation() {
    return (
        <nav className='app__nav-section row p-0 mb-5'>
            <section className='app__nav-link col p-2'>
                Isaac Guillory Online Guitar School
            </section>
            { config.pages.map((p, i) => (
                <section className='app__nav-link col p-0 text-center' key={i}>
                    <Link to={p.url} className="p-2 d-block">{p.title}</Link>
                </section>
            ))}
        </nav>
    );
}

export default Navigation;