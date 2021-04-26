import Head from 'next/head';
import Scrollspy from 'react-scrollspy';
import { NavLink } from 'reactstrap';
import ExpSection from '../components/ExpSection';
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectSection';


export default function Home() {

  const sections = ['introSection', 'expSection', 'projectSection']

  return (
    <>
      <Head>
        <title>Jason Tam</title>
      </Head>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 d-none d-lg-flex flex-column justify-content-center position-fixed bg-light border-right vh-100'>
            <div className='text-center my-3'>
              {/* <img
                src='https://firebasestorage.googleapis.com/v0/b/jason-tam.appspot.com/o/Picture1.png?alt=media&token=a410568e-6113-4954-a257-e8dfcc11c249'
                className='img-thumbnail w-50 shadow' /> */}
            </div>

            <Scrollspy
              componentTag='nav'
              className='nav nav-pills flex-column'
              currentClassName='active shadow'
              items={sections}
            >
              <NavLink className='lead text-dark' href='#introSection'>Intro</NavLink>
              <NavLink className='lead text-dark' href='#expSection'>Experiences</NavLink>
              <NavLink className='lead text-dark' href='#projectSection'>Projects</NavLink>
            </Scrollspy>
          </div>

          <div className='offset-lg-3 col-12 col-lg-9'>
            <IntroSection />

            <ExpSection />

            <ProjectSection />
          </div>
        </div>
      </div>
    </>
  )
}
