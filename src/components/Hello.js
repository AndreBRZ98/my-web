
import React from "react";
import profile from '../assets/img/profile.jpg'
import './Hello.css'
import { useRef } from "react";

const Hello=()=>{

    const ref = useRef(null);

    const handleKnowMe=()=>{
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <>
   
  <header>


    <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{zIndex: "2000"}}>
      <div className="container-fluid">
   
        <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
          <strong>MDB</strong>
        </a>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#intro">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                target="_blank">Learn Bootstrap 5</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a>
            </li>
          </ul>

          <ul className="navbar-nav d-flex flex-row">
    
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

 

    <div id="intro" className="bg-image shadow-2-strong">
      <div className="mask">


     

        <div className="container d-flex flex-column align-items-center justify-content-center text-center h-100">
        <div className="p-2">
            <img src={profile} className="profile"/>
        </div>
          
          <div className="text-white p-2">
            <h1 className="mb-3">Hello!</h1>
            <h2 className="mb-4">I am <b> <span style={{color:"red"}}>{'<'}</span>André Barraza<span style={{color:"red"}}>{'/>'}</span></b></h2>
            <h5 className="mb-5">Software Developer</h5>
            <a className="btn btn-outline-light btn-lg m-2" onClick={handleKnowMe}>Know me!</a>
          </div>
        </div>


      </div>
    </div>

  </header>



  <main className="mt-5" >
    <div className="container" ref={ref}>
  
      <section>
        <div className="row">
          <div className="col-md-6 gx-5 mb-4">
            <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
              </a>
            </div>
          </div>

          <div className="col-md-6 gx-5 mb-4">
            <h4><strong>About me</strong></h4>
            <p className="text-muted">
              Lorem ipsum dolorconsectetur adipisicing elit. Facilis consequatur
              eligendi quisquam doloremqex debitis veritatis placeat unde animi laborum
              siente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
            </p>
            <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
              nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
              alias, unde optio accusantium soluta, iusto molestiae adipisci et?
            </p>
          </div>
        </div>
      </section>


      <hr className="my-5" />

  
      <section className="text-center">
        <h4 className="mb-5"><strong>Facilis consequatur eligendi</strong></h4>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr className="my-5" />


      <section className="mb-5">
        <h4 className="mb-5 text-center"><strong>Facilis consequatur eligendi</strong></h4>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form>
         
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

  
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

        
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" checked />
                <label className="form-check-label" for="form2Example3">
                  Subscribe to our newsletter
                </label>
              </div>

    
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
     
    </div>
  </main>


  
  <footer className="bg-light text-lg-start">
    <div className="py-4 text-center">
      <a role="button" className="btn btn-primary btn-lg m-2"
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
        Learn Bootstrap 5
      </a>
      <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">
        Download MDB UI KIT
      </a>
    </div>

    <hr className="m-0" />

    <div className="text-center py-4 align-items-center">
      <p>Follow MDB on social media</p>
      <a href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" className="btn btn-primary m-1" role="button"
        rel="nofollow" target="_blank">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://www.facebook.com/mdbootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
        target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/MDBootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
        target="_blank">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/mdbootstrap/mdb-ui-kit" className="btn btn-primary m-1" role="button" rel="nofollow"
        target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </div>


    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
   
  </footer>

        </>
    );
}

export default Hello;