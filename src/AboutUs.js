import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';

function AboutUs() {
    return (
        <main>
            <div className="my-4">.</div>

            <div class="my-5">
            <div class="p-5 text-center">
                <div class="container py-5">
                <h1 class="text-body-emphasis">Our Mission</h1>
                <p class="col-lg-8 mx-auto lead">
                To put it simply, we believe that self expression is the highest virtue, and must be cultivated.
                </p>
                </div>
            </div>
            </div>

            <div className="bg-body-tertiary">
                <div class="container py-4">
                    <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-bg-dark rounded-3">
                        <h2>Change the background</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Add borders</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                    </div>
                    <div class="row align-items-md-stretch mt-4">
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>Who are we?</h2>
                        <p>Hello! I'm Tomas Messerschmidt, Marcus's third cousin once removed on his father's side, and his only living relative. After his untimely passing, I inherited his collection of paintings. To honor his legacy and fulfill his wishes, I established this foundation. We continue to search for his lost paintings, ensuring that his artistic vision lives on.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-bg-blood-red rounded-3">
                        <h2>Change the background</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs;