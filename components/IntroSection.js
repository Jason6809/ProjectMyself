export default function IntroSection() {
  return (
    <section id='introSection'>
      <div className='container-fluid pt-5 min-vh-100 d-flex flex-column justify-content-center'>
        <div className='row'>
          <div className='col'>
            <div>
              <h1 className='display-4 mb-5'>Hi, Welcome.</h1>
            </div>
          </div>
        </div>

        <div className='jumbotron custom-jumbotron'>
          <div className='row'>
            <div className='col'>
              <div className='custom-p-box bg-blue-gray py-4 px-4'>
                <p className='lead custom-font-weight-503 m-0'>
                  My name is Tam Zen Fong (aka. Jason Tam).
                </p>
              </div>
            </div>
          </div>

          <hr className='w-100 custom-hr' />

          <div className='row'>
            <div className='col-12 col-md-6 col-lg-8 text-justify'>
              <p className='lead custom-font-size-1-15-rem'>
                I am a Fullstack Software Engineer currently working as a full-time Software Developer at Southern University College and a part-time Freelancer as well.
              </p>

              <p className='lead custom-font-size-1-15-rem'>
                I am graduated from Southern University College with a Bachelor's Degree in Software Engineer in 2020.
              </p>

              <p className='lead custom-font-size-1-15-rem'>
                My skills are focused on Web and Mobile Application Development and my favorite language is JavaScript.
              </p>

              <p className='lead custom-font-size-1-15-rem'>
                If you happen to speak Chinese, my Chinese name is 谭振丰 (Tán zhèn fēng).
              </p>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>

              <ul className='custom-list-style-none'>
                <li>
                  <p className='lead custom-font-weight-499 custom-font-size-1-15-rem m-0 w-100 mb-3'>
                    My Resume:
                  </p>
                </li>

                <li>
                  <a
                    target='_blank'
                    className='lead btn btn-sm bg-dark-blue custom-font-weight-300 custom-font-size-1-15-rem mb-2 px-3 w-100'
                    href='https://firebasestorage.googleapis.com/v0/b/jason-tam.appspot.com/o/My%20New%20Resume.pdf?alt=media&token=36f6bcd9-8293-41ab-9eab-2c3576393531'>
                    Download PDF
                  </a>
                </li>
              </ul>


              <ul className='custom-list-style-none'>
                <li>
                  <p className='lead custom-font-weight-499 custom-font-size-1-15-rem m-0 w-100 mb-3'>
                    Contact Me:
                  </p>
                </li>

                <li>
                  <a
                    target='_blank'
                    href='https://www.facebook.com/jason.tam.007'
                    className='lead btn btn-sm bg-dark-blue custom-font-weight-300 custom-font-size-1-15-rem mb-2 px-3 w-100'>
                    Facebook
                  </a>
                </li>

                <li>
                  <a href='https://github.com/Jason6809' target='_blank' className='lead custom-font-weight-300 custom-font-size-1-15-rem m-0 px-3 btn btn-sm btn-dark w-100'>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}