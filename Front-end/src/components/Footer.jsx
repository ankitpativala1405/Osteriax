import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id="mu-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-footer-area">
                <div className="mu-footer-social">
                  <a href="#">
                    <span className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <span className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <span className="fa fa-google-plus" />
                  </a>
                  <a href="#">
                    <span className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <span className="fa fa-youtube" />
                  </a>
                </div>
                <div className="mu-footer-copyright">
                  <p>
                    © Copyright{" "}
                    <a rel="nofollow" href="http://markups.io">
                      markups.io
                    </a>
                    . All right reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
