

function Home() {
  return (
    <>
      
     <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Welcome to Yotek Construction</h2>
            <p>Yotek Construction PLC is a forward-thinking construction company committed to delivering high-quality infrastructure and building solutions across Ethiopia. With a focus on innovation, sustainability, and client satisfaction, we bring expertise and excellence to every project we undertake</p>
              <a href="#get-started" className="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
      <div className="carousel-item">
        <img src="assets/img/hero-carousel/ba1.jpg" alt />
      </div>
      <div className="carousel-item active">
        <img src="assets/img/hero-carousel/e.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/hero-carousel/ca1.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/hero-carousel/da1.jpg" alt />
      </div>
      
      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>{/* /Hero Section */}
  {/* Get Started Section */}
  <section id="get-started" className="get-started section">
  <div className="container">
    <div className="row justify-content-between gy-4">
      <div className="col-lg-6 d-flex align-items-center">
        <div className="content">
          <h3>About Us.</h3>
          <p><strong>YOTEK Construction plc.</strong> was established in 1998 by Yohannes Teklay. In the last 21 years, the Company has established itself as one of the leading construction companies in Ethiopia, providing services such as the construction of buildings, roads, factory foundations, bridges, and other civil engineering structures. YOTEK Construction is fully equipped with modern machinery and tools, adhering to the standards set by the FDRE Ministry of Works and Urban Development (MoWUD), and operates across multiple regions of Ethiopia. Our core focus remains on high-quality results, timeliness, and cost-effective management.</p>
          
          <p>Our team of skilled professionals combines modern technology with deep local knowledge to ensure efficient and reliable project execution. From concept to completion, Yotek Construction PLC stands for integrity, durability, and unmatched service quality.</p>
        </div>
      </div>
      
      <div className="col-lg-5 d-flex align-items-center">
        <div className="w-100">
          <img src="assets/img/owner.jpg" className="img-fluid rounded" alt="Yotek Construction" />
        </div>
      </div>
    </div>
  </div>
</section>
  <section id="services" className="services section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>We Mainly Provide 3 Types of Services</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon">
              <i class="bi bi-cone" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Roads Construction</h3>
            <p>Involves the planning, design, and building of roads and highways to improve transportation and connectivity.
It includes earthwork, paving, drainage, and applying safety features to ensure durability and efficiency.
At Yotek Construction PLC, we deliver high-quality road projects that meet national standards and serve communities for years to come.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bricks" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Building Construction</h3>
            <p>It involves architectural planning, structural work, finishing, and the integration of electrical, plumbing, and safety systems.
Yotek Construction PLC specializes in delivering durable, functional, and modern buildings tailored to client needs and industry standards.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-building" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Real Estates</h3>
            <p>focuses on developing residential, commercial, and mixed-use properties for sale, lease, or investment.
It combines land development, architectural design, and quality construction to create valuable, livable spaces.
Yotek Construction PLC delivers real estate projects that blend functionality, modern aesthetics, and long-term investment value.</p>          </div>
        </div>{/* End Service Item */}
        
      </div>
    </div>
  </section> 
  <section id="projects" className="features section">
    <div className="container section-title">
      <h2>Projects</h2>
      <p>Explore our diverse portfolio of completed and ongoing projects that showcase Yotek Construction PLC’s commitment to quality, innovation, and excellence</p>
    </div>
  <div className="container">
    <ul className="nav nav-tabs row  g-2 d-flex" role="tablist">
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
          <h4>All</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Completed</h4>
        </a>{/* End tab nav item */}
      </li>
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Ongoing</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
          <h4>New</h4>
        </a>
      </li>{/* End tab nav item */}
    </ul>
    <div className="tab-content" >
      <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
        <div className="row">
          
          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
  <div className="row">
    {/* Project 1 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/project1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Addis Ababa University Forum</h6>
    </div>

    {/* Project 2 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/project2.jpg" className="img-fluid rounded mb-2" alt="Project 2" />
      <h6>Sendafa Police College</h6>
    </div>

    {/* Project 3 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/construction-1.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>Arbaminch Secondary School</h6>
    </div>

    {/* Project 4 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/construction-2.jpg" className="img-fluid rounded mb-2" alt="Project 4" />
      <h6>Mekelle Regional Office</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/construction-3.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>Arbaminch University LOT II</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed1.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>Meles Zenawi Leadership Academy</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed2.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>Kombolcha Air Field</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed3.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>Gast Mekelle Building Project</h6>
    </div>

  </div>
</div>

          
        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
        <div className="row">
          
          <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/completed7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
        <div className="row">
         
         <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/projects/ongoing8.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>Project Name 1</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <h3>Mekelle Gast</h3>
            <p className="fst-italic">
              Yotek Construction PLC is proud to launch the construction of the Mekelle Gast Amusement Park, a visionary recreational project set to become a landmark destination in the region. Designed to offer world-class entertainment, family-friendly experiences, and modern leisure facilities, the park aims to boost tourism, create local job opportunities, 
              and enrich the cultural and social life of Mekelle city.
            </p>
            <ul>
              <li><i className="bi bi-check2-all" /> <span>A wide variety of amusement rides and attractions for all age groups.</span></li>
              <li><i className="bi bi-check2-all" /> <span>Landscaped green spaces, picnic areas, and walking trails.</span></li>
              <li><i className="bi bi-check2-all" /> <span>Modern infrastructure with safety, accessibility, and sustainability in focus.</span></li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/projects/new.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>{/* End tab content item */}
    </div>
  </div>
</section>
<section id="contact" className="contact section">
  <div className="container section-title">
      <h2>Contact US</h2>
      <p> Contact US with the following Informations</p>
    </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-geo-alt" />
          <h3>Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-telephone" />
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-envelope" />
          <h3>Email Us</h3>
          <p>info@example.com</p>
        </div>
      </div>{/* End Info Item */}
    </div>
    <div className="row gy-4 mt-1">
      <div className="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>{/* End Google Maps */}
      <div className="col-lg-6">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* /Contact Section */}


</main>



    </>
  );
}

export default Home;
