import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='5'>
            <h3 className='fw-bold'>MyPortfo.</h3>
            <p className='desc'>Kami membantu Anda memiliki website portofolio profesional tanpa ribet dan tanpa perlu jago ngoding. Cukup pesan, kami yang kerjakan.</p>
            <div className='no mb-1 mt-4'>
              <a href="https://api.whatsapp.com/send/?phone=6282229668531&text&type=phone_number&app_absent=0" className='text-decoration-none' >
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+6282229668531</p>
              </a>
            </div>
            <div className='mail'>
              <a href=' https://mail.google.com/mail/?view=cm&to=admin@tecnaka.biz.id' className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>admin@tecnaka.biz.id</p>
              </a>
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold'>Menu</h5>
            <Link to=''>Home</Link>
            <Link to='template'>Template</Link>
            <Link to='testimonial'>Testimonial</Link>
            <Link to='faq'>FAQ</Link>
            <Link to='syaratketen'>Syarat & Ketentuan</Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
            <h5 className='fw-bold mb-3'>Subscribe Untuk Info Menarik</h5>
            <div className='subscribe'>
              <input type="text"
                placeholder='subscribe...' name="" id="" />
              <button className='btn rounded-end rounded-0'>Subscribe</button>
            </div>
            <div className='social mt-3'>
              <a className='fa-brands fa-facebook' href=''></a>
              <a className='fa-brands fa-twitter' href=''></a>
              <a className='fa-brands fa-linkedin' href=''></a>
              <a className='fa-brands fa-youtube' href=''></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>TecNaka</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent