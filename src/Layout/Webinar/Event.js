import React from 'react'

const Event = () => {
  return (
    <>
    <div class=" bannervertn  " >
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-8 order-lg-12 align-self-center">
                <div class="thumb b-animate-thumb" >
                    {/* <!-- <img src="assets/img/veteran2.jpg" alt="img"> --> */}
                    
                    
                </div>
            </div>
            <div class="col-lg-7 order-lg-1 align-self-center">
                <div class="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                    
                    <h1 class="b-animate-2 title" style={{color: "white"}}>Proud to Support our Veterans!

                        Free IT training.
                        </h1>
                        
                        {/* <!-- For more details sign up for our upcoming webinar on 3/17/2023</h1> --> */}
                   
                    <a class="btn btn-base b-animate-3 mr-sm-3 mr-2" href="/contact">More Details </a>
                    {/* <!-- <a class="btn btn-border-black b-animate-3" href="#">Read More</a> --> */}
                </div>
            </div>
        </div>
    </div>
</div>

 <div class="blog-area pd-top-120 pd-bottom-120 bg-gray" >
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    

                    <h5>Cloud Computing</h5>
                    <table class="table" style={{border:"1px solid"}}>
                        <thead class="thead-light">
                        <tr>
                            <th>Webinar</th>
                            <th>Duration</th>
                            
                            <th>Start Date</th>
                            {/* <!-- <th>Register</th> --> */}
                        </tr>
                        </thead>
                      <tbody>
                      <tr>
                          <td>Mastering the Cloud: Best Practices for Cloud Computing and Management</td>
                          <td> <i class="fa fa-calendar" aria-hidden="true" style={{color: "#DB3166"}}></i>&nbsp; 8 Hours</td>
                          <td><i class="fa fa-calendar-check-o" aria-hidden="true" style={{color: "#DB3166"}}></i>&nbsp;&nbsp;5-Oct-2023</td>
                          {/* <!-- <td><a href="" data-toggle="modal" data-target="#exampleModalLong">Register</a></td> --> */}
                        </tr>
                      </tbody>
                     
                      </table>
                    
                    
  
  
  
                      <h5 style={{marginTop: "50px"}}>Cyber Security</h5>
  
                      <table class="table" style={{border:"1px solid"}}>
                        <thead class="thead-light">
                        <tr>
                            <th>Webinar</th>
                            <th>Duration</th>
                            
                            <th>Start Date</th>
                            {/* <!-- <th>Register</th> --> */}
                        </tr>
                        </thead>
                       <tbody>
                       <tr>
                          <td>Securing Your Digital World: Essential Cyber Security Tips and Strategies</td>
                          <td> <i class="fa fa-calendar" aria-hidden="true" style={{color: "#DB3166"}}></i>&nbsp; 10 Hours</td>
                          <td><i class="fa fa-calendar-check-o" aria-hidden="true" style={{color: "#DB3166"}}></i>&nbsp;&nbsp;25-Sep-2023</td>
                          {/* <!-- <td><a href="" data-toggle="modal" data-target="#exampleModalLong" >Register</a></td> --> */}
                        </tr>
                       </tbody>
                     
                      </table>
  
  
                   
                  
                </div>





                <div class="col-lg-4 col-12" style={{paddingTop: "35px"}}>
                    <div class="td-sidebar">
                     
                                     
                        <div class="widget widget-recent-post">                            
                            {/* <!-- <h4 class="widget-title">Recent News</h4> --> */}
                            <ul>
                                <li>
                                    <div class="media">
                                        <div class="media-left">
                                            {/* <!-- <img src="/assets/img/course/2.png" alt="blog"> --> */}
                                        </div>
                                        <div class="media-body align-self-center " >

                                            <form id="myForm">
                                         
                                         
                                                <label  >I'm intrested in :</label>
                                            <select name="Learning" id="Learning" class="form-control" value="" required>
                                                <option value="">--Select--</option>
                                                <option value="ComplianceTraining">Mastering the Cloud: Best Practices for Cloud Computing and Management</option>
                                                <option value="LeadershipBusinessTraining">Securing Your Digital World: Essential Cyber Security Tips and Strategies</option>
                                               
                                              </select>
                                            
                                                <label style={{paddingTop: "10px"}}>Learning Role :</label>
                                                <select name="Learningrole" id="Learning" class="form-control" value="" required>
                                                    <option value="">--Select--</option>
                                                    <option value="I'm responsible for my own training">I'm responsible for my own training</option>
                                                    <option value="I'm responsible for my department's training">I'm responsible for my department's training</option>
                                                    <option value="I'm responsible for my organization's training">I'm responsible for my organization's training</option>
                                                    <option value="I'm responsible for the learning administrative function of my organization" >I'm responsible for the learning administrative function of my organization</option>
                                                  </select>
                                          
                                         
                                       


                                            <label style={{paddingTop: "10px"}}>Name :</label>
                                            <input type="text" class="form-control" name="Name" placeholder="Full name" value="" required=""/>
            
                                            <label style={{paddingTop: "10px"}}>Email :</label>
                                            <input type="email" name="Email" class="form-control" placeholder="example@gmail.com" value="" required=""/>
                                      
                                            
                                            <label style={{paddingTop: "10px"}}>Message:</label>
                                            <textarea type="text" name="Message" class="form-control" placeholder="Message" value="" required=""></textarea>
            
                                           
            
                                      
            
            
                                                   
                                            </form>
                                            <button  name="submit" onclick="SubForm()" style={{cursor: "pointer" ,width: "120px",height: "50px", border: "none", marginTop: "10px",fontSize: "20px",color: "white",backgroundColor: "#3062a0",borderRadius: "5px"}}>Submit</button>
                                        </div>
                                    </div>
                                  
                                </li>
                              
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Event