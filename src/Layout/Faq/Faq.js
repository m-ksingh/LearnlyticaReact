import React from 'react'

const Faq = () => {
  return (
    <>
     {/* <!-- breadcrumb start --> */}
      <div class=" bg-overlay">
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="section-title mb-0 text-center">
                    <h2 class="page-title text-white">Frequently Asked Question</h2>
                   
                </div>
            </div>
        </div>
    </div>
    {/* <!-- breadcrumb end --> */}
  
    <div class="container mt-5 mb-5">
        <div class="row">
             
            <div class="col-lg-12 col-md-12">
                <div class="widget widget_nav_menu">
                   
                    <div id="accordion" class="accordion-area">
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-one">
                                <h5 class="mb-0">
                                    <button class="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
                                        01.   Can we customize deliver plan
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-one" class="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
                                <div class="card-body">
                                    Whether it's self study ,mentor-driven instructor-led training (ILT),a hybrid approach,or lab-only sessions,our product allows you to tailor the learning journey to best suit your requirements.This means that you can choose the delivery mode that aligns with your organization's goals and the learning preferences of your employees.
                                
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-two">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
                                        02.   How do the Hands-on labs on exercises work ?
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-two" class="collapse" aria-labelledby="ff-two" data-parent="#accordion">
                                <div class="card-body">
                                    Our learning product includes a wide range of hands-on lab exercises that allow learners to apply their theoretical knowledge in practical scenarios.These exercises are designed to bridge the gap between theory and real-world applications ,ensuring a comprehensive learning experience.
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-three">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
                                        03.   How are the lab exercises and other  assessments proctored ?
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-three" class="collapse" aria-labelledby="ff-three" data-parent="#accordion">
                                <div class="card-body">
                                    We have implemented a proctoring system within our learning platform to ensure the integrity and fairness of the evaluation process .This system monitors and verifies learner's activities during the lab exercises,maintaining high standards of learning excellence.
                                
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-four">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
                                        04.   What parameters do mentors evaluate in learners submision ?
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-four" class="collapse" aria-labelledby="ff-four" data-parent="#accordion">
                                <div class="card-body">
                                    Mentors evaluate learners's submission based on various parameters such as quality,efficiency,and correctness.They provide detailed feedback on these aspects,helping learners understand their strength and areas for improvement.
                                </div>
                            </div>
                        </div>
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-five">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-five" aria-expanded="true" aria-controls="f-five">
                                        05. Can learners interact directly with mentors for additional support ?
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-five" class="collapse" aria-labelledby="ff-five" data-parent="#accordion">
                                <div class="card-body">
                                    Yes,learners have the opportunity to interact directly with mentors for additional support.Our learning platform facilitates communication channels between mentors and learners ,enabling learners to seek clarification ,ask questions,and receive guidance throughout their learning journey .
                                </div>
                            </div>
                        </div>
    
    
                        <div class="card single-faq-inner">
                            <div class="card-header" id="ff-six">
                                <h5 class="mb-0">
                                    <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-six" aria-expanded="true" aria-controls="f-six">
                                        06.  What types of learning materials are provided ?     
                                        <i class="fa fa-eye"></i>
                                    </button>
                                </h5>
                            </div>
                            <div id="f-six" class="collapse" aria-labelledby="ff-six" data-parent="#accordion">
                                <div class="card-body">
                                    Our learning product offers a comprehensive range of learning materials,including interactive modules,video tutorials,documentation,and reference materials.These resources are designed to support learners throughout theri learning journey and enhance their understanding of the subject matter.
                                </div>
                            </div>
                        </div>
                       </div>
                </div>
            </div>
            </div>
            </div>
    
    </>
  )
}

export default Faq