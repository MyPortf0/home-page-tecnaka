import { useState } from 'react';
import { Container, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { semuaTemplate } from '../data/index'


function GridComplexExample() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        whatsapp: '',
        template: '',
        domain: '',
        agree: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.nama &&
            formData.email &&
            formData.whatsapp &&
            formData.template &&
            formData.domain &&
            formData.agree
        ) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxoOzKkBw-ti4vPP50ZJrdnsufKdJg72YFYv6UM8pZlR2gFTLxZGYiB71IjozTDF-nNaA/exec';
            const fd = new FormData();

            // Tambahkan field ke FormData
            fd.append('nama', formData.nama);
            fd.append('email', formData.email);
            fd.append('whatsapp', formData.whatsapp);
            fd.append('template', formData.template);
            fd.append('domain', formData.domain);
            fd.append('harga', getTotalHarga());

            try {
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: fd,
                });

                if (response.ok) {
                    console.log('Success!', await response.text());
                    setSubmitted(true);
                    alert('Form berhasil dikirim!');
                    setFormData({
                        nama: '',
                        email: '',
                        whatsapp: '',
                        template: '',
                        domain: '',
                        agree: false,
                    });
                } else {
                    alert('Gagal mengirim data.');
                }
            } catch (error) {
                console.error('Error!', error);
                alert('Terjadi kesalahan saat mengirim data.');
            }
        } else {
            setValidated(true);
            alert('Mohon lengkapi semua kolom dan centang S&K.');
        }
    };

    // Format ke bentuk Rp. 35.000
    // const formatRupiah = (angka) => {
    //     return 'Rp. ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // };

    // Ambil harga template dari semuaTemplate
    const getTemplatePrice = () => {
        const selectedTemplate = semuaTemplate.find((item) => item.title === formData.template);
        return selectedTemplate ? selectedTemplate.price : 0;
    };

    // Misal harga domain tetap (Rp. 35.000)
    const domainPrice = 5000;

    // Hitung total harga
    const getTotalHarga = () => {
        return getTemplatePrice() + (formData.domain ? domainPrice : 0);
    };



    return (
        <div className="pesanan-page">
            <div className='pesanan min-vh-100'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s mt-10'>Pemesanan</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form noValidate onSubmit={handleSubmit} name='submit-to-google-sheet'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        isInvalid={validated && !formData.nama}
                                    />
                                    <Form.Control.Feedback type="invalid">Wajib diisi</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={validated && !formData.email}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>WhatsApp</Form.Label>
                                    <Form.Control
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        isInvalid={validated && !formData.whatsapp}
                                    />
                                    <Form.Control.Feedback type="invalid">Wajib diisi</Form.Control.Feedback>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Pilih Template</Form.Label>
                                        <Form.Select
                                            name="template"
                                            value={formData.template}
                                            onChange={handleChange}
                                            isInvalid={validated && !formData.template}
                                        >
                                            <option value="">Pilih</option>
                                            {semuaTemplate.map((template, index) => (
                                                <option key={index} value={template.title}>{template.title}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">Wajib pilih template</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Domain</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control className='input-domain' name="domain"
                                                value={formData.domain}
                                                onChange={handleChange}
                                                isInvalid={validated && !formData.domain}
                                            />
                                            <InputGroup.Text id="basic-addon2" className='domain'>@tecnaka.biz.id</InputGroup.Text>
                                            <Form.Control.Feedback type="invalid">Wajib diisi</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="*Terima Syarat & Ketentuan" name="agree"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        isInvalid={validated && !formData.agree} />
                                    <Form.Control.Feedback type="invalid">Harus disetujui</Form.Control.Feedback>
                                </Form.Group>

                                <div className="total d-flex justify-content-end">
                                    <p className='fw-bold'>Total Harga : <span className='text-success'> Rp. {getTotalHarga().toLocaleString('id-ID')}</span></p>
                                </div>

                                <Button variant="" type="submit" className='mt-3'>
                                    Kirim
                                </Button>

                                <Row className='justify-content-md-center align-items-center'>
                                    <Col className='submit col-md-5 '>
                                        {submitted ? (
                                            <div className="after-submit alert alert-success text-center">
                                                Terimakasih telah memesan, mohon cek WhatsApp anda!
                                            </div>
                                        ) : validated ? (
                                            <div className="after-submit alert alert-danger text-center">
                                                Form gagal terkirim!
                                            </div>
                                        ) : null}

                                    </Col>
                                </Row>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>




    );
}


export default GridComplexExample;