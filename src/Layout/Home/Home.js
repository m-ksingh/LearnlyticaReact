import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import lap from "../../assets/img/banner/Updated laptop.gif";
import tailored from "../../assets/img/intro/tailored.png";
import handson from "../../assets/img/intro/Integrated-SkillLabs.png";
import liveinst from "../../assets/img/intro/live-instructured.png";
import Measurable from "../../assets/img/intro/progresss.png";
import Feature from "../../assets/img/Feature.png";
import c1 from "../../assets/img/institute/1.png";
import c2 from "../../assets/img/institute/2.png";
import c3 from "../../assets/img/institute/3.png";
import c4 from "../../assets/img/institute/4.png";
import c5 from "../../assets/img/institute/5.png";
import c6 from "../../assets/img/institute/6.png";

export const Home = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 20,
        // nav: true, // Enable navigation arrows
        // navText: ['<', '>'], // Customize the arrow icons
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      };
  return (
    <>
<div class="banner-area banner-area-1 " style={{backgroundColor:  "#49167E"}}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8 order-lg-12 align-self-center">
                    <div class="thumb b-animate-thumb">
                        <img src={lap} alt="img"/>
                    </div>
                </div>
                <div class="col-lg-7 order-lg-1 align-self-center">
                    <div class="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                        
                        <h1 class="b-animate-2 title" style={{color: "#fff"}}>
                            YOUR LEARNING AND ASSESSMENT Headquarters!</h1>
                        <a class="btn btn-base b-animate-3 mr-sm-3 mr-2" href="/contact" style={{color: "#f0f4f9"}}>Request a Demo</a>
                        {/* <!-- <a class="btn btn-border-black b-animate-3" href="#">Read More</a> --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="intro-area intro-area--top">
     <div class="container">
         <div class="intro-area-inner bg-black">
             <div class="row no-gutters">
                 
                 <div class="col-lg-12 align-self-center">
                     <ul class="row no-gutters">


                         <li class="col-md-3">
                             <div class="single-intro-inner style-white text-center">
                                 <div class="thumb">
                                     <img src={tailored} alt="img"/>
                                 </div>
                                 <div class="details">
                                     <h5> 
                                         <b>Tailor made </b>
                                         </h5>
                                  
                                 </div>
                             </div>
                         </li>




                         <li class="col-md-3">
                             <div class="single-intro-inner style-white text-center">
                                 <div class="thumb">
                                     <img src={handson} alt="img"/>
                                 </div>
                                 <div class="details">
                                     <h5> 
                                         <b>Hands-on</b>
                                         </h5>
                              
                                 </div>
                             </div>
                         </li>
                         <li class="col-md-3">
                             <div class="single-intro-inner style-white text-center">
                                 <div class="thumb">
                                     <img src={liveinst} alt="img"/>
                                 </div>
                                 <div class="details">
                                     <h5><b>Live Instructor Led</b>
                                     </h5>
                       
                                 </div>
                             </div>
                         </li>
                         <li class="col-md-3">
                             <div class="single-intro-inner style-white text-center">
                                 <div class="thumb">
                                     <img src={Measurable} alt="img"/>
                                 </div>
                                 <div class="details">
                                     <h5><b>Measurable progress</b></h5>
                                 
                                 </div>
                             </div>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <div class="faq-area pd-top-80 bg-gray" id="solutions">
        <h3 class="title mt-5 text-center">Solutions</h3>
        <div class="container">
            <div class="row">
                
                <div class="col-lg-5">
                    <div class="about-area-inner">
                        <div class="section-title mb-0">
                     
                          
                           
                               
                                    <div class="about-thumb-wrap style-two" style={{backgroundColor: "#f4d3d3",backgroundImage: "url('https://learnlyticabackup.s3.ap-south-1.amazonaws.com/GnosisLabsImg/Gnosis/ourprocess.png')"}}>
                                    </div>
                               
                           
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 mt-5 mt-lg-0">
                    <div id="accordion" class="accordion-area">
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-one">
                                <h5 class="mb-0">
                                    <button class="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
                                        01.Skillup Programs (IMReady)
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-one" class="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
                                <div class="card-body">
                                    Our Skillup Programs, known as IMReady, are designed to upskill and reskill the workforce, ensuring they stay ahead in a rapidly evolving business landscape. We offer comprehensive training initiatives tailored to meet the specific needs of businesses and employees, targeting skill gaps and fostering growth. By focusing on the latest industry trends and technologies, IMReady equips employees with valuable expertise, making them indispensable assets to your organization. With a more skilled and versatile team, your business can improve productivity and overall performance, successfully tackling complex challenges and driving growth.
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-two">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
                                        02.Assessment Services
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-two" class="collapse" aria-labelledby="ff-two" data-parent="#accordion">
                                <div class="card-body">
                                    Our Assessment Services provide in-depth evaluations and performance assessments for both existing employees and potential candidates. We conduct skills assessments, psychometric evaluations, cognitive tests, and other objective measurements to make informed hiring decisions and identify development needs. For businesses, these assessments play a critical role in selecting the right talent for your teams, ensuring you build a workforce that excels in their roles. Regular assessments for existing employees identify areas for improvement, enabling personalized development plans that result in a more competent and motivated workforce. With optimized recruitment processes and improved talent development, you'll experience reduced turnover and higher productivity.
                                
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-three">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
                                        03. Content Development
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-three" class="collapse" aria-labelledby="ff-three" data-parent="#accordion">
                                <div class="card-body">
                                    At the heart of our Content Development services lies the creation of educational and training materials that deliver knowledge and skills effectively. We develop engaging e-learning modules, interactive courses, manuals, and multimedia content to cater to your specific training needs. These customized learning solutions elevate the learning experience for your employees, making the process more enjoyable and effective. As a result, your team benefits from improved knowledge retention and reduced training time. Equipped with these high-quality materials, your workforce will be well-prepared to meet the unique challenges of your business, resulting in increased productivity and enhanced performance
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-four">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
                                        04.LD Services (Learning & Development Services)
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-four" class="collapse" aria-labelledby="ff-four" data-parent="#accordion">
                                <div class="card-body">
                                    Our Learning & Development Services encompass a range of solutions dedicated to nurture talent within your organization. We offer leadership development programs, coaching, mentoring, team-building activities, and workshops focused on enhancing soft skills and fostering professional growth. By investing in your employees' development, you foster a culture of continuous learning and growth, which in turn boosts talent retention and employee satisfaction. With these services, you empower employees to embrace their leadership potential and groom future leaders from within your organization. The result is a more engaged and motivated workforce, increased employee loyalty, and a stronger leadership pipeline that ultimately drives your business towards success.
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- client --> */}
<h3 style={{marginTop: "60px", paddingBottom: "30px", textAlign: "center"}}>Our Clients</h3>
<div className="client-area bg-base pd-top-100 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <OwlCarousel options={options}>
              <div className="item">
                <img src={c1} alt="img" />
              </div>
              <div className="item">
                <img src={c2} alt="img" />
              </div>
              <div className="item">
                <img src={c3} alt="img" />
              </div>
              <div className="item">
                <img src={c4} alt="img" />
              </div>
              <div className="item">
                <img src={c5} alt="img" />
              </div>
              <div className="item">
                <img src={c6} alt="img" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
{/* <!-- client --> end */}

{/* Feature */}
<div class="counter-area" >
    <h3 style={{marginTop: "60px",  textAlign: "center"}}>Features</h3>
    <div class="container">
        
        <div class="counter-area-inner pd-top-80 pd-bottom-120" >
            <div class="row">
                <img src={Feature}   class="card-img-top img-fluid" alt="..." style={{mixBlendMode: "multiply"}}/>
                           
                
            
            </div>
        </div>
    </div>
</div>

 </>
  )
}
