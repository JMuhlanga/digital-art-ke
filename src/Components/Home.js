import React from 'react';

function Home() {
  return (
    <section id ="hero">

            <div className="jumbotron jumbotron-fluid bg-dark">

            <div className="jumbotron-background">
              <img src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg" alt="background-img" class="blur " />
            </div>

                <div className="container text-white">
                    
                    <h1> </h1>
                    <h1> </h1>
                    <h1 className="display-4">DIGI-ARTS-KE</h1>

                    <h2 className="display-5">Arts and Crafts</h2> 

                    <hr className="my-4"></hr>

                    <p>Welcome to DIGI-ARTS-KE, a platform whose aims are at exposing artists and their creative Work</p>

                    <a class="btn btn-primary btn-lg" href="#reg-forms" role="button">Join-us Today!!</a>
                    
                </div>                

            </div>  

        </section>
  );
}

export default Home;