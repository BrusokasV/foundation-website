import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import Navbar from './Navbar';

function Collection() {
    return (
        <main className="mt-5">

        <section className="py-2 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Paintings of Marcus Messerschmidt</h1>
                <p className="lead text-body-secondary">Although Marcus Messerschmidt's life was brief, his artistic legacy is vast. We continue to uncover hidden masterpieces he created before his untimely passing in 2001. By purchasing one of his paintings, you help us support artists in need, honoring Marcus's vision and legacy.</p>
                <p>
                <a href="#" className="btn btn-outline-blood-red my-2">Make a donation</a>
                </p>
            </div>
            </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
            <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="container">
        <footer class="py-3 my-4">
            <div class="nav justify-content-center text-center border-bottom pb-3 mb-3 px-2 text-body-secondary">
                Contact The Messerschmidt Foundation:<br/>
                1 Rue Revanche, 1969 Kirchberg Luxemburg, Luxembourg<br/>
                tomas.messerschmidt@gmail.com
            </div>
            <p class="text-center text-body-secondary">&copy; 2024 The Messerschmidt Foundation</p>
        </footer>
        </div>

        </main>
    )
}

export default Collection;