import React,{Component} from 'react'
import '../App.css'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ];

console.log(dataHargaBuah);

class Data extends Component{
    render(){
        return (
            <tr>
                <td style={{backgroundColor:"#e98484", width:"200px"}}>{this.props.nama}</td>
                <td style={{backgroundColor:"#e98484", width:"120px"}}>{this.props.harga}</td>
                <td style={{backgroundColor:"#e98484", width:"120px"}}>{this.props.berat/1000} kg</td>
            </tr>
        )
    }
}

class Tugas10 extends Component{
    render(){
        return(
            <div>
                <h1 className="text-center">Tabel Harga Buah</h1>
                <table>
                    <thead>
                    <tr>
                        <th style={{backgroundColor:"#eaeaea", width:"200px"}}>Nama</th>
                        <th style={{backgroundColor:"#eaeaea", width:"120px"}}>Harga</th>
                        <th style={{backgroundColor:"#eaeaea", width:"120px"}}>Berat</th>
                    </tr>

                    </thead>

                    <tbody>
                        {dataHargaBuah.map(el=>{
                            return(
                                <Data key={el.nama} nama={el.nama} harga={el.harga} berat={el.berat} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tugas10