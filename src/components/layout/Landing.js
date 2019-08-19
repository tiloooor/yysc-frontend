import React from 'react';
import { Link } from 'react-router-dom';
// import LandingImage from '../../img/landing/service3.png';

const Landing = () => {
  const landingDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nunc tempus, condimentum nunc laoreet, consequat urna. Praesent lobortis neque ligula, sit amet euismod felis lacinia vitae.';

  return (
    <div>
      <div className="landing-container" />
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="x-large">Stress Reducer</h1>
                <p className="lead landing-lead">{landingDesc}</p>
                <div className="buttons">
                  <Link to="/login" className="btn btn-lg btn-general">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                {/* <img className="landing-img" alt="landing"></img> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
