import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { semuaTemplate } from '../data/index';
import FaqComponent from '../components/FaqComponent';

const TemplatePages = () => {
  let navigate = useNavigate();
  return (
    <div className="template-page">
      <div className='template min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Semua Template</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaTemplate.map((template) => {
              return (
                <Col key={template.id} className='shadow rounded' data-aos='fade-up' data-aos-delay={template.delay} data-aos-duration='1000'>
                  <img src={template.image} alt='Enplash.com' className='w-100 mb-5 rounded-top' />
                  <div className='star mb-2 px-3'>
                    <i className={template.star1}></i>
                    <i className={template.star2}></i>
                    <i className={template.star3}></i>
                    <i className={template.star4}></i>
                    <i className={template.star5}></i>
                  </div>
                  <h5 className='mb-5 px-3'>{template.title}</h5>
                  <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                    <p className='m-0 text-primary fw-bold'>{template.price}</p>
                    <button className='btn rounded-1' onClick={() => window.open(template.url, '_blank')}>{template.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>

  )
}

export default TemplatePages