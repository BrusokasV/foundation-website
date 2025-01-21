import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/custom.scss';

function Artworks() {
    return (
        <main>
            <div className="my-4">.</div>
            <div id="myCarousel" className="carousel slide mb-6 bg-body-tertiary" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Jake Hamilton</h1>
                        <p className="opacity-75">A Glasgow-based grantee, using his unique talent and unfaltering patience to create especially unique artworks - Light Paintings.</p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Jake Hamilton</h1>
                        <p className="opacity-75">A Glasgow-based grantee, using his unique talent and unfaltering patience to create especially unique artworks - Light Paintings.</p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Jake Hamilton</h1>
                        <p className="opacity-75">A Glasgow-based grantee, using his unique talent and unfaltering patience to create especially unique artworks - Light Paintings.</p>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container marketing">

                <h2 className='my-3'>Featured Artists:</h2>

                <div class="row">
                <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <h2 class="fw-normal">Artist #1</h2>
                    <p>Description of the artist/artstyle.</p>
                    <p><a class="btn btn-outline-blood-red" onClick={(e) => e.preventDefault()}>Visit website &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <h2 class="fw-normal">Artist #2</h2>
                    <p>Description of the artist/artstyle.</p>
                    <p><a class="btn btn-outline-blood-red" onClick={(e) => e.preventDefault()}>Visit website &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
                    <h2 class="fw-normal">Artist #3</h2>
                    <p>Description of the artist/artstyle.</p>
                    <p><a class="btn btn-outline-blood-red" onClick={(e) => e.preventDefault()}>Visit website &raquo;</a></p>
                </div>
                </div>

                <hr class="featurette-divider" />

                <h2 className='my-3'>Featured Artworks:</h2>

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">Artwork #1. <span class="text-body-secondary">Artist name.</span></h2>
                    <p class="lead">Description, materials, other data.</p>
                </div>
                <div class="col-md-5">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/></svg>
                </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1">Artwork #2. <span class="text-body-secondary">Artist name.</span></h2>
                    <p class="lead">Description, materials, other data.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/></svg>
                </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">Artwork #3. <span class="text-body-secondary">Artist name.</span></h2>
                    <p class="lead">Description, materials, other data.</p>
                </div>
                <div class="col-md-5">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/></svg>
                </div>
                </div>

                <hr class="featurette-divider" />

            </div>
        </main>
    )
}

export default Artworks;