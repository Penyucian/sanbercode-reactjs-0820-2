import React,{Component} from 'react'

class Tugas9 extends Component{
    render(){
        return(
            <div className="border">
            <h1 className="text-center">Form Pembelian Buah</h1>
            <div className="mt-4">
                <div className="">
                    <label className="font-bold mr-4 width-125px" htmlFor="nama">Nama Pelanggan</label>
                    <input type="text" id="name" name="nama"/>
                </div>

                <div className="d-flex flex-align-bottom mt-3">
                    <p className="font-bold mr-4 width-125px">Daftar Item</p>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row">
                            <input type="radio" name="buah" id="semangka" value="semangka"/>
                            <label className="ml-2" htmlFor="semangka">Semangka</label>
                        </div>
                        <div className="d-flex flex-row">
                            <input type="radio" name="buah" id="jeruk" value="jeruk"/>
                            <label className="ml-2" htmlFor="jeruk">Jeruk</label>
                        </div>
                        <div className="d-flex flex-row">
                            <input type="radio" name="buah" id="nanas" value="nanas"/>
                            <label className="ml-2" htmlFor="nanas">Nanas</label>
                        </div>
                        <div className="d-flex flex-row">
                            <input type="radio" name="buah" id="salak" value="salak"/>
                            <label className="ml-2" htmlFor="salak">Salak</label>
                        </div>
                        <div className="d-flex flex-row">
                            <input type="radio" name="buah" id="anggur" value="anggur"/>
                            <label className="ml-2" htmlFor="anggur">Anggur</label>
                        </div>
                    </div>
                </div>
                <button className="mt-4" type="submit">kirim</button>
            </div>
        </div>
        )
    }
}

export default Tugas9