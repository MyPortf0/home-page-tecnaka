import { } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import FaqComponent from '../components/FaqComponent';

const SyaratKeten = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s'>Syarat Dan Ketentuan</h1>
              <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Dengan memesan layanan kami, berarti Anda setuju pada syarat dan ketentuan yang berlaku.</p>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col>
              <p>Harap baca halaman ini dengan seksama sebelum melakukan pemesanan. Dengan menggunakan layanan kami, Anda dianggap telah menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>1. Ketentuan Layanan</h4>
              <p>Layanan kami ditujukan untuk individu maupun bisnis kecil yang membutuhkan website sederhana dan profesional. Setiap pemesanan hanya bisa dilakukan melalui form yang tersedia, dan proses komunikasi lanjutan dilakukan melalui WhatsApp.</p>
              <p>Kami tidak menerima pembuatan website untuk konten ilegal, pornografi, perjudian, atau segala bentuk yang melanggar hukum. Pelanggaran akan berakibat pembatalan layanan tanpa pengembalian dana.</p>
              <p>Website yang dibuat akan menggunakan subdomain dari kami. Saat ini belum tersedia fitur custom domain. Pengguna wajib memastikan bahwa konten yang dikirim tidak melanggar hak cipta pihak lain.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>2. Pembayaran dan Biaya Layanan</h4>
              <p>Setiap pemesanan dikenakan biaya pembuatan di awal. Setelah website selesai, pengguna akan dikenakan biaya perpanjangan layanan sebesar Rp10.000 setiap 6 bulan.</p>
              <p>Pembayaran dilakukan melalui transfer bank atau e-wallet resmi yang akan diinformasikan saat proses pemesanan. Tidak ada biaya tersembunyi selain yang disebutkan secara eksplisit dalam halaman pemesanan.</p>
              <p>Jika pengguna tidak melakukan perpanjangan dalam 7 hari setelah masa aktif berakhir, maka website akan dinonaktifkan secara otomatis.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>3. Batas Tanggung Jawab</h4>
              <p>Kami akan berusaha memberikan layanan terbaik, termasuk memastikan website Anda dapat diakses dan berjalan normal. Kami tidak menyediakan fitur editor mandiri, semua revisi dilakukan melalui tim kami sesuai ketentuan yang berlaku.</p>
              <p>Jika ada kendala teknis, silakan hubungi kami maksimal 7 hari setelah website selesai dibuat. Di luar itu, support tambahan dapat dikenakan biaya.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>4. Revisi dan Perubahan</h4>
              <p>Kami memberikan maksimal 2x revisi ringan setelah website selesai dibuat (seperti perubahan teks atau gambar). Revisi besar seperti perubahan layout atau fitur akan dikenakan biaya tambahan sesuai kompleksitasnya.</p>
              <p>Semua revisi harus diajukan maksimal 3 hari setelah website dinyatakan selesai. Setelah itu, semua permintaan perubahan dianggap sebagai fitur tambahan berbayar.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>5. Hak Cipta dan Konten</h4>
              <p>Semua konten (teks, gambar, logo) yang dikirim oleh pengguna dianggap telah memiliki izin atau hak pakai. Kami tidak bertanggung jawab atas pelanggaran hak cipta yang disebabkan oleh konten yang dikirim oleh pengguna.</p>
              <p>Desain dasar website tetap menjadi milik penyedia layanan. Namun, pengguna memiliki hak penuh atas konten miliknya yang dimuat di dalam website.</p>
            </Col>
          </Row>
          <Row className='py-3'>
            <Col>
              <h4 className='fw-bold'>6. Penghentian Layanan</h4>
              <p>Kami berhak menolak atau menghentikan layanan kepada siapa pun yang melanggar ketentuan, menyebarkan ujaran kebencian, atau mengganggu kenyamanan tim kami. Jika layanan dihentikan karena pelanggaran, biaya tidak dapat dikembalikan.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default SyaratKeten