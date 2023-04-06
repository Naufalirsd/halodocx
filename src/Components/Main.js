// Navbar
import Navigation from "./Navbar";

import Logo from "./../Assets/halodoc-logo.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Card
import Kartu from "./Card";

// Background Image
import Banner from "./../Assets/banner.svg"


import Card1 from "./../Assets/Card1.png"
import Card2 from "./../Assets/Card2.png"
import Card3 from "./../Assets/Card3.png"
import Card4 from "./../Assets/Card4.png"
import Card5 from "./../Assets/Card5.png"

// Asuransi
import Asuransi from "./Asuransi";

import Hero from "./../Assets/asuransi.png"

// Layanan
import Layanan from "./Layanan";
import Layanan1 from "./../Assets/layanan1.png"
import Layanan2 from "./../Assets/layanan2.png"
import Layanan3 from "./../Assets/layanan3.png"
import Layanan4 from "./../Assets/layanan4.png"
import Layanan5 from "./../Assets/layanan5.png"
import Layanan6 from "./../Assets/layanan6.png"
import Layanan7 from "./../Assets/layanan7.png"
import Layanan8 from "./../Assets/layanan8.png"
import Layanan9 from "./../Assets/layanan9.png"
import Layanan10 from "./../Assets/layanan10.png"

// Penunjang
import Penunjang1 from "./../Assets/penunjang1.png"
import Penunjang2 from "./../Assets/penunjang2.png"
import Penunjang3 from "./../Assets/penunjang3.png"
import Penunjang4 from "./../Assets/penunjang4.png"
import Penunjang5 from "./../Assets/penunjang5.png"
import Penunjang6 from "./../Assets/penunjang6.png"
import Penunjang7 from "./../Assets/penunjang7.png"
import Penunjang8 from "./../Assets/penunjang8.png"
import Penunjang9 from "./../Assets/penunjang9.png"
import Penunjang10 from "./../Assets/penunjang10.png"

// Penawaran
import Penawaran from "./Penawaran";
import Penawaran1 from "./../Assets/penawaran1.webp"
import Penawaran2 from "./../Assets/penawaran2.webp"
import Penawaran3 from "./../Assets/penawaran3.webp"

// Artikel
import Artikel from "./Artikel";
import Artikel2 from "./Artikel2";
import Artikel3 from "./Artikel3";

// Artikel png
import Artikelpng1 from "./../Assets/artikel1.webp"
import Artikelpng2 from "./../Assets/artikel2.webp"
import Artikelpng3 from "./../Assets/artikel3.webp"
import Artikelpng4 from "./../Assets/artikel4.webp"

// Obat & Vitamin
import Obat from "./Obat";

// Obat png
import Obat1 from "./../Assets/obat1.png"
import Obat2 from "./../Assets/obat2.png"
import Obat3 from "./../Assets/obat3.png"
import Obat4 from "./../Assets/obat4.png"
import Obat5 from "./../Assets/obat5.png"


const Main = () => {
    return (
        <div>
            <Navigation image={Logo}/>
            <div style={{backgroundImage: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5" >
                            <h1 style={{fontSize: "32px"}}>Solusi Kesehatan Terlengkap</h1>
                            <p className="col-7" style={{color: "gray"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                            <div className="container">
                                <div className="row col-12">
                                    <Kartu image={Card1} title="Chat Dengan Dokter"/>
                                    <Kartu image={Card2} title="Toko Kesehatan"/>
                                    <Kartu image={Card3} title="Buat Janji RS"/>
                                    <Kartu image={Card4} title="Janji Medis"/>
                                    <Kartu image={Card5} title="Layanan Home Lab"/>                                
                                </div>
                                <div className="row" style={{width: "32%", marginTop: "20px", marginBottom: "40px"}}>
                                    <Asuransi image={Hero} title="Sambungkan Asuransimu" text="Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row col-12 justify-content-center">
                    <h1 className="mt-5" style={{fontSize: "25px"}}>Layanan Khusus</h1>
                    <div className="row gap-3 mt-4 justify-content-center">
                        <div className="col-1">
                            <Layanan image={Layanan1} title="Layanan Bidan"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan2} title="Tes COVID-19"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan3} title="Perawatan Diabetes"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan4} title="Kesehatan Jantung"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan5} title="Vaksinasi COVID-19"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan6} title="Kesehatan Kulit"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan7} title="Kesehatan Seksual"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan8} title="Kesehatan Mental"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan9} title="Kesehatan Hewan"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Layanan10} title="Parenting"/>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="container">
                <div className="row col-12 justify-content-center">
                    <h1 style={{fontSize: "25px"}}>Penunjang Kesehatan</h1>
                    <div className="row gap-3 mt-4 justify-content-center">
                        <div className="col-1 " >
                            <Layanan image={Penunjang1} title="Cek Stress"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang2} title="Kalender Menstruasi"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang3} title="Kakulator BMI"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang4} title="Kalender Kehamilan"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang5} title="Risiko Jantung"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang6} title="Risiko Diabetes"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang7} title="Pengingat Obat"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang8} title="Donasi"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang9} title="Tes Depresi"/>
                        </div>
                        <div className="col-1">
                            <Layanan image={Penunjang10} title="Tes Gangguan Kecemasan"/>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="container">
                <div className="row">
                    <h1 className="mb-4 mt-4" style={{fontSize: "25px"}}>Penawaran Menarik</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Penawaran image={Penawaran1}/>
                    </div>
                    <div className="col-4">
                        <Penawaran image={Penawaran2}/>
                    </div>
                    <div className="col-4">
                        <Penawaran image={Penawaran3}/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <Artikel />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <Artikel2 title="Terbaru"/>
                    </div>
                    <div className="col-1" style={{marginLeft: "-10px"}}>
                        <Artikel2 title="Popular"/>
                    </div>
                    <div className="col-1" style={{marginLeft: "-9.5px"}}>
                        <Artikel2 title="Kanker"/>
                    </div>
                    <div className="col-1" style={{marginLeft: "-15.4px"}}>
                        <Artikel2 title="Cacar Monyet"/>
                    </div>
                    <div className="col-1" style={{marginLeft: "34px"}}>
                        <Artikel2 title="Hepatitis"/>
                    </div>
                    <div className="col-2">
                        <Artikel2 title="Kehamilan"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Artikel3 image={Artikelpng1} title="6 Menu Sehat dan Praktis untuk Makan Sahur" title2="Makanan Sehat" text="“Agar puasa tetap lancar, kamu harus memperhatikan asupan makanan saat sah..."/>
                    </div>

                    <div className="col-3">
                        <Artikel3 image={Artikelpng2} title="Apakah Makan Banyak saat Sahur Bisa Menahan Lapar" title2="Puasa" text="“Beberapa orang yang percaya bahwa makan banyak saat sahur Mereka beranggapan bahwa..."/>
                    </div>

                    <div className="col-3">
                        <Artikel3 image={Artikelpng3} title="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen" title2="Coronavirus" text="“Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah..."/>
                    </div>

                    <div className="col-3"> 
                        <Artikel3 image={Artikelpng4} title="Ini Penyebab dan Gejala Sirosis yang Perlu Diketahui" title2="Sirosis" text="“Jaringan parut yang terbentuk pada hati dapat menyebabkan sirosis. Ada berbagai..."/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <h3>Obat & Vitamin</h3>
                    <p>Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini</p>
                </div>
                <div className="row" style={{marginTop: "20px", marginBottom: "20px", justifyContent: "center"}}>
                    <div className="col-4">
                        <Obat image={Obat1} title="Obat Perawatan"/>
                    </div>
                    <div className="col-4">
                        <Obat image={Obat2} title="Vitamin & Suplemen"/>
                    </div>
                    <div className="col-4">
                        <Obat image={Obat3} title="Ibu & Anak"/>
                    </div>
                    <div className="col-4">
                        <Obat image={Obat4} title="Susu"/>
                    </div>
                    <div className="col-4">
                        <Obat image={Obat5} title="Ramadhan"/>
                    </div>
                    <div className="col-4" style={{textAlign: "center", color: "#e0004d"}}>
                        <Obat title="Lihat Semua"/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main;