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
                To put it simply, he believed that self expression is the highest virtue, and must be cultivated. Now, The Messerschmidt Foundation works to see through this belief, to support artists all around the world, by providing grants to them and sharing their artworks with the world.
                </p>
                </div>
            </div>
            </div>

            <div className="bg-body-tertiary">
                <div class="container py-4">
                    <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-bg-dark rounded-3">
                        <h2>Some information</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>More information</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                        <h2>The Case of Marcus Messerschmidt</h2>
                        <p>On the 22nd of July 2001, Marcus and his wife, Helen, have been found dead in their flat. Helen had all her blood drained to the floor, while Marcus's body shown no visible wounds. There was no sign of a break-in. Their deaths were tragic, horrifying and inexplicable.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs;