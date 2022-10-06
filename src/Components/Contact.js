import React, { useState } from 'react';


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""        
    });

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/join", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email       
           
          }),
        });
      }
  return (
    <section id="contact-footer">

            <div className="container">

            <div class="row">

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3>EMAIL US</h3>
                        <p>info@digiartske.co.ke</p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3>CALL US</h3>
                        <p>(+254) 11-377-1641</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3>FIND US</h3>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div> 

                <div className="reg-form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" value={formData.name} onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll not display your Name</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
                <div class="text-center p-3 border-top border-white">
                    © 2022 Copyright: 
                    <p class="text-white">Jose Muhlanga Kupeka</p>
                </div>  

            </div>  

        </section>
  );
}

export default Contact;