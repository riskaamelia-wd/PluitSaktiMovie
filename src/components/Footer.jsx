import appStore from '../assets/App Store - Filled.svg'
import googlePlay from '../assets/Google Play.svg'
import logo from '../assets/logo-white.svg'

const Footer = ({}) => {
    return(
        <>
            <div className='row'>
                <div className='col-3 d-flex flex-column'>
                    <a href="#">FAQ</a>
                    <a href="#">Relasi Investor</a>
                    <a href="#">Cara Menonton</a>
                    <a href="#">Informasi Perusahaan</a>
                    <a href="#">Hanya di Pluit Sakti</a>
                </div>
                <div className='col-3 d-flex flex-column'>
                    <a href="#">Pusat Bantuan</a>
                    <a href="#">Pekerjaan</a>
                    <a href="#">Aturan Penggunaan</a>
                    <a href="#">Kontak Kami</a>
                </div>
                <div className='col-3 d-flex flex-column'>
                    <a href="#">Akun</a>
                    <a href="#">Privasi</a>
                    <a href="#">Tes Kecepatan</a>
                    <a href="#">Pusat Media</a>
                    <a href="#">Pengaturan Kuki</a>
                </div>
                <div className='col-3'>
                    <p className="fw-bold">Dapatkan Aplikasi</p>
                    <div className=' d-flex flex-column align-items-start'>
                        <button className='btn p-0'>
                            <img src={appStore} alt="" />
                        </button>
                        <button className='btn p-0 mt-3 mb-4'>
                            <img src={googlePlay} alt="" />
                        </button>
                    </div>
                    <p className='m-0'>Ikuti Kami</p>
                    <div>
                        <a href="#"><i style={{fontSize:'20px'}} className="bi bi-youtube me-2"></i></a>
                        <a href="#"><i style={{fontSize:'20px'}} className="bi bi-facebook me-2"></i></a>
                        <a href="#"><i style={{fontSize:'20px'}} className="bi bi-twitter me-2"></i></a>
                        <a href="#"><i style={{fontSize:'20px'}} className="bi bi-instagram me-2"></i></a>
                        <a href="#"><i style={{fontSize:'20px'}} className="bi bi-linkedin me-2"></i></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex flex-row justify-content-between'>
                <div className='d-flex flex-row'>
                    <img src={logo} alt="" />
                    <p>@ 2023. All rights reserved</p>
                </div>
                <div>
                    <a href="#">Aturan</a>
                    <a href="#" className='me-2 ms-2'>Privasi</a>
                    <a href="#">Kontak</a>
                </div>
            </div>
        </>
    )
}

export default Footer