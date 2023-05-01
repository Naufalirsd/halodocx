import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = (props) => {
    return (
        <MDBFooter className='text-center text-lg-center text-muted' style={{backgroundColor: "#369", width: "100%"}}>
            <section className='container pt-5' style={{alignItems: "flex-start", display: "flex"}}>
                <div style={{color: "#fff"}}>
                    <img src={props.image}></img>
                </div>
            </section>

            <section className='container' style={{color: "#fff"}}>
                <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='fw-bold mb-4 text-center text-lg-start'>
                        <MDBIcon className="" />
                        Site Map
                    </h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        FAQ
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Blog
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Syarat & Ketentuan
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Kebijakan Privasi
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Promo
                        </a>
                    </p>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className=' mx-auto mb-4'>
                    <h6 className='fw-bold mb-4'></h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        Karir
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Security
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Media
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Corporate Partnership
                        </a>
                    </p>
                    </MDBCol>

                    <MDBCol className='mx-auto mb-4'>
                    <h6 className='text-capitalize fw-bold mb-4'>Layanan Pengaduan Konsumen</h6>
                    <p>
                        <p>
                            PT Media Dokter Investama
                            Jl. H.R Rasuna Said Kav B32-33, Jakarta Selatan help@halodoc.com / 021-5095-9900 
                        </p>
                    </p>
                    
                    <p>
                        <p>
                            Direktor Jendral Perlindungan Konsumen dan Tertib Niaga Kementrian Perdagangan Republik Indonesia 0853 1111 1010 (WhatsApp)
                        </p>
                    </p>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Download App di</h6>
                    <div className='row' style={{marginBottom: "20px"}}>
                        <img style={{width: "40%"}} src={props.image2}></img>
                        <img style={{width: "40%"}} src={props.image3}></img>
                    </div>
                    <h6 className='text-uppercase fw-bold mb-4'>Apakah Kamu Dokter</h6>
                    <div>
                        <button style={{border: "none", backgroundColor: "#e0004d", padding: "8px 20px", color: "white", fontWeight: "700", fontSize: "15px", borderRadius: "5px"}}><img style={{paddingRight: "5px"}} src={props.image4}></img>DAFTAR</button>
                    </div>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "#fff"}}>
                <MDBRow className='container'>
                    <MDBCol className='col-lg-8' style={{textAlign: "left"}}>
                        <p>©HALODOC,2023.ALL RIGHTS RESERVED</p>
                    </MDBCol>
                    <MDBCol className='' style={{textAlign: "right"}}>
                        <p>Folow Kami Di: </p>
                    </MDBCol>
                    <MDBCol className=''>
                        <a className='text-reset fw-bold ' href='https://halodoc.com'>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="google" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="instagram" />
                            </a>
                        </a>
                    </MDBCol>
                </MDBRow>
                
            </div>
        </MDBFooter>
    )
}

export default Footer;