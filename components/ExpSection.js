export default function ExpSection() {
  return (
    <section id='expSection'>
      <div className='container-lg pt-5 min-vh-100'>
        <div className='row'>
          <div className='col'>
            <h1 className='display-4 mb-5'>My Experiences.</h1>
          </div>
        </div>

        <div className='jumbotron custom-jumbotron'>
          <div className='row'>
            <div className='col'>
              <div className='custom-p-box bg-blue-gray py-4 px-4'>
                <p className='lead custom-font-weight-503 m-0'>
                  Assistant Executive (Software Developer) at Computer Center Office,
                </p>

                <p className='m-0 custom-text-gray custom-font-size-1-15-rem custom-font-weight-499 custom-height-23px'>
                  Southern University College.
                </p>

                <p className='m-0 custom-text-gray custom-font-size-1-15-rem custom-font-weight-499'>
                  06/2020 ~ Now
                </p>
              </div>
            </div>
          </div>

          <hr className='w-100 custom-hr' />
          <div className='row'>
            <div className='col'>
              <ul>
                <li>
                  <p className='lead custom-font-size-1-15-rem m-0'>
                    Develop the entire Campus Management System with MVP, SRP, and SCRUM software development approach.
                  </p>
                </li>

                <li>
                  <p className='lead custom-font-size-1-15-rem m-0'>
                    Utilized frameworks and technologies such as Ruby on Rails, Laravel, and MySQL Database.
                  </p>
                </li>

                <li>
                  <p className='lead custom-font-size-1-15-rem m-0'>
                    MVP stands for Minimum Viable Product. It is a software development concept that focuses on developing only the core features to release a usable product in a short amount of time.
                  </p>
                </li>

                <li>
                  <p className='lead custom-font-size-1-15-rem m-0'>
                    SRP stands for Single-responsibility Principle. It is a software development principle states that every module, class, or function should have only responsible for one single part of the system's functionalities.
                  </p>
                </li>

                <li>
                  <p className='lead custom-font-size-1-15-rem m-0'>
                    SCRUM is an agile software development practice that aims to produce an MVP within a short amount of time. The lifecycle of SCRUM normally will not more than 2 weeks. The lifecycle will repeat and repeat by adding new changes until the project is ended. SCRUM is normally used in small development teams with not more than 10 members.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='jumbotron custom-jumbotron'>
          <div className='row'>
            <div className='col'>
              <div className='custom-p-box bg-blue-gray py-4 px-4'>
                <p className='lead custom-font-weight-503 m-0'>
                  Assistant Researcher Intern at Computer Center Office,
                </p>

                <p className='m-0 custom-text-gray custom-font-size-1-15-rem custom-font-weight-499 custom-height-23px'>
                  Southern University College.
                </p>

                <p className='m-0 custom-text-gray custom-font-size-1-15-rem custom-font-weight-499'>
                  01/2020 ~ 03/2020
                </p>
              </div>
            </div>
          </div>

          <hr className='w-100' />

          <div className='row'>
            <div className='col'>
              <ul>
                <li>
                  <p className='lead m-0 custom-font-size-1-15-rem'>
                    Developed a Online Admission System with DCI software development approach.
                  </p>
                </li>

                <li>
                  <p className='lead m-0 custom-font-size-1-15-rem'>
                    Utilized framework such as Ruby on Rails and PostgreSQL for the Back-end and Database.
                  </p>
                </li>

                <li>
                  <p className='lead m-0 custom-font-size-1-15-rem'>
                    DCI software development approach is currently one of the latest software development approaches.
                  </p>
                </li>

                <li>
                  <p className='lead m-0 custom-font-size-1-15-rem'>
                    DCI focus on the Use-Cases of every Actors. For example, MVC handle business logic mainly in Controllers. In contrast, DCI handle business logic in Use-Cases Classes.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}