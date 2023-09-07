import React from 'react';
import abc from "../../assets/img/black-logo.png"

const Contactus = () => {
  return (
    <>
     {/* <!-- breadcrumb start --> */}
    <div class=" bg-overlay">
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="section-title mb-0 text-center">
                    <h2 class="page-title text-white">Contact Us</h2>
                   
                </div>
            </div>
        </div>
    </div>
    {/* <!-- breadcrumb end --> */}
{/* 
    <!-- contact list start --> */}
    <br/>
    <br/>
    {/* <!-- <div class="contact-list pd-top-120 pd-bottom-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="contact-list-inner">
                        <div class="media">
                            <div class="media-left">
                                <img src="assets/img/icon/phone.png" alt="img" >
                            </div>
                            <div class="media-body align-self-center">
                                <h5>Our Phone</h5>
                                <p>+1 904-639-5758</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-list-inner">
                        <div class="media">
                            <div class="media-left">
                                <img src="assets/img/icon/mail.png" alt="img">
                            </div>
                            <div class="media-body align-self-center">
                                <h5>Our Email</h5>
                                <p>info@learnlytica.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-list-inner">
                        <div class="media">
                            <div class="media-left">
                                <img src="assets/img/icon/Address.png" alt="img">
                            </div>
                            <div class="media-body align-self-center">
                                <h5>Our Address</h5>
                                <p>8750 Perimeter Park Blvd
                                    Jacksonville, FL 32216</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> --> */}
    {/* <!-- contact list end --> */}

    {/* <!-- counter area start --> */}
    <div class="counter-area pd-bottom-120 ">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="section-title mb-0">
                        <h6 class="sub-title title right-line">Get in touch</h6>
                        {/* <!-- <h3 class="title">Drop us a Query 
                        
                             We are Available 24 * 7</h3> --> */}
                             <div class="logo">
                                <img src={abc} alt="img"/>
                             </div>
                           <div class="mt-1 mb-5">
                           
<p class="sub-title"><i class="fa fa-map-marker"></i> 8750 Perimeter Park Blvd
    Jacksonville, FL, 32216
   </p>
                             
                             <hr/>
                            
                             <p class="sub-title">
                                <i class="fa fa-map-marker"></i>
                                1807 old London way
                                Cary, NC, 27513
                                  </p>
                             <hr/>
                            
                             <p class="sub-title">
                                <i class="fa fa-map-marker"></i>
                                #17/1, SVR Kalpavruksh 2nd Floor, Bellandur Gate
                                Near Vaishnavi Tech Park Sarjapur Road,
                                Bengaluru-560102
                               

                             </p>
                           
                             <p class="sub-title mt-2"> <i class="fa fa-envelope"></i> info@learnlytica.com</p>
                           </div>
                           
                     
                       
                    </div>
                </div>


                <div class="col-lg-7 mt-5 mt-lg-0">
                    <form class="contact-form-inner  mt-5 mt-md-0"  id="myForm">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="single-input-inner style-bg-border">
                                    <input type="text" class="form-control" name="FirstName" placeholder="First name" value="" required="true"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="single-input-inner style-bg-border">
                                    <input  type="text" class="form-control" name="LastName" placeholder="Last name" value="" required=""/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="single-input-inner style-bg-border">
                                    <input type="email" name="Email" class="form-control" placeholder="example@gmail.com" value="" required=""/>
                                </div>
                            </div>
                          

                            <div class="col-12">
                                <div class="single-input-inner style-bg-border">
                                    <textarea type="text" name="Message" class="form-control" placeholder="Message" value="" required=""></textarea>
                                </div>
                            </div>
                          
                           
                        </div>
                    </form>
                    <div class="col-12">
                        <button class="p-3" onclick="SubForm()" name="submit" style={{cursor: "pointer",border:"none", marginTop: "10px",fontSize: "20px",color: "white",backgroundColor: "#3062a0",borderRadius: "5px"}}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Contactus