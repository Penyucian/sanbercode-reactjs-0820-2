import React,{Component} from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ];

class Tugas12 extends Component {
    constructor(props){
        super(props)
        this.state = {
            nama:"",
            harga:'',
            berat:'',
            data : [...dataHargaBuah],
            editable: false,
            updateIndex: null
        }
        this.nama = this.nama.bind(this)
        this.harga = this.harga.bind(this)
        this.berat = this.berat.bind(this)
        this.add = this.add.bind(this)
        this.hapus = this.hapus.bind(this)
        this.edit = this.edit.bind(this)
        this.update = this.update.bind(this)
    }

    nama(event,x){
        this.setState({
            nama:event.target.value
        })
        
        x = this.state.nama
        console.log(event.target.value, x);
        
        return x
    }
    harga(event,y){
        this.setState({
            harga:event.target.value
        })
        y = this.state.harga
        console.log(event.target.value,y);
        return y
    }
    berat(event,z){
        this.setState({
            berat:event.target.value
        })
        z = this.state.berat
        console.log(event.target.value,z);
        
        return z
    }

    add(){
        let datas = [...this.state.data]
        console.log(datas);
        datas.push({nama:this.state.nama, harga: this.state.harga, berat: this.state.berat})
                
        this.setState({
            data: datas,
            nama:'',
            harga:'',
            berat:'',

        })
    }

    edit(index){

        const datas = this.state.data[index]

        this.setState({
            editable: true,
            nama:datas.nama,
            harga:datas.harga,
            berat:datas.berat,
            updateIndex: index
        })
    }

    update() {

        let datas = this.state.data[this.state.updateIndex]

        datas.nama = this.state.nama
        datas.harga = this.state.harga
        datas.berat = this.state.berat

        let a = {nama:datas.nama, harga:datas.harga, berat:datas.berat}

        const x = this.state.data

        x[this.state.updateIndex] = a

        this.setState({
            x, 
            editable: false, 
            updateIndex: null,
        })

    }

    hapus(index){
        console.log(index);

        const datas = this.state.data
        delete datas[index]

        this.setState({datas})
    }

    render() {
        return(
            <>
                <div style={{backgroundColor:"#212121", width:"100%", padding:".5rem 0"}}>
                    <h1 style={{textAlign:"center", color:"#fff"}}>Tabel Harga Buah</h1>
                </div>
                <div >
                        <input 
                            placeholder="buah"
                            name=""
                            type="text"
                            onChange={this.nama}
                            value={this.state.nama}
                        />
                        <input 
                            placeholder="harga"
                            name=""
                            type="number"
                            onChange={this.harga}
                            value={this.state.harga}
                        />
                        <input 
                            placeholder="berat(g)"
                            name=""
                            type="number"
                            onChange={this.berat}
                            value={this.state.berat} 
                        />
                        <button
                            onClick={this.state.editable ? this.update : this.add}>
                            {this.state.editable ? 'perbarui' : 'tambah'}
                        </button>
                </div>
                <div>
                    { !this.state.editable &&
                        <table>
                        <thead>
                            <tr>
                                <th style={{backgroundColor:"#eaeaea", width:"200px"}}>Nama</th>
                                <th style={{backgroundColor:"#eaeaea", width:"120px"}}>Harga</th>
                                <th style={{backgroundColor:"#eaeaea", width:"120px"}}>Berat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((el, index)=>{
                                return(
                                    <tr key={el.nama}>
                                        <td style={{backgroundColor:"#e98484", width:"200px"}}>{el.nama}</td>
                                        <td style={{backgroundColor:"#e98484", width:"120px"}}>{el.harga}</td>
                                        <td style={{backgroundColor:"#e98484", width:"120px"}}>{el.berat/1000} kg</td>
                                        <td>
                                            <button
                                                style={{marginLeft:"1rem"}}
                                                onClick={()=>{this.edit(index)}}
                                            >U</button>
                                        </td>
                                        <td>
                                            <button
                                                style={{marginLeft:"1rem"}}
                                                onClick={()=>{this.hapus(index)}}
                                            >X</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </>
        )
    }
}

export default Tugas12