// 
import Navigation from "./Navbar";
import Logo from "./../Assets/halodoc-logo.png"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Kartu from "./Card";

// Background Image
import Banner from "./../Assets/banner.svg"


import Card1 from "./../Assets/Card1.png"
import Card2 from "./../Assets/Card2.png"
import Card3 from "./../Assets/Card3.png"
import Card4 from "./../Assets/Card4.png"
import Card5 from "./../Assets/Card5.png"

import Asuransi from "./Asuransi";

import Hero from "./../Assets/asuransi.png"



const Main = () => {
    return (
        <div>
            <Navigation image={Logo}/>
            <div style={{backgroundImage: `url(${Banner})`, backgroundRepeat: "no-repeat"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1 style={{fontSize: "32px"}}>Solusi Kesehatan Terlengkap</h1>
                            <p>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                            <div className="row col-12">
                                <Kartu image={Card1} title="Chat Dengan Dokter"/>
                                <Kartu image={Card2} title="Toko Kesehatan"/>
                                <Kartu image={Card3} title="Buat Janji RS"/>
                                <Kartu image={Card4} title="Janji Medis"/>
                                <Kartu image={Card5} title="Layanan Home Lab"/>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <Asuransi image={Hero} title="Sambungkan Asuransimu" text="Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc."/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;