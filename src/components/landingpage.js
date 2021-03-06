import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
  render() {
    return (
      <div style ={{width: '100%', margin:'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src="/portfolio/images/profilepic4.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              {/* <h1>Software Engineer</h1>
              <hr/> */}
              <h2>Hello World.</h2>
              <p> My name is Karen and coding is my passion. Thank you for stumbling upon my personal portfolio. Based in Sacramento, I strive to find new ways 
                to refine my skills through personal projects and opportunities in my professional work.  </p>
               <p> Java | C | C++ | Python | SQL | Javascript | HTML | CSS | React | Node </p> 

              <div className="social-links">
                {/* target:"_blank" ensures that your website stays open on a tab when they click your link */}
                
                {/* LinkedIn */}
                <a href= "https://www.linkedin.com/in/karen-cariaga-2a8241123/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href="https://github.com/kccariaga" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

        </Grid>
  
      </div>
    )
  }
}

export default LandingPage;