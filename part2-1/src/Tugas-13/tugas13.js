import React,{Component} from 'react'
import axios from 'axios'

class Tugas13 extends Component {
    constructor(props){
        super(props)
        this.state = {
            url : 'http://backendexample.sanbercloud.com/api/fruits',
            nama:"",
            harga:'',
            berat:'',
            data : [],
            temp:[],
            editable: false,
            updateIndex: null,
            deleteIndex:null
        }
        this.nama = this.nama.bind(this)
        this.harga = this.harga.bind(this)
        this.berat = this.berat.bind(this)
        this.add = this.add.bind(this)
        this.hapus = this.hapus.bind(this)
        this.edit = this.edit.bind(this)
        this.update = this.update.bind(this)
    }

    async componentDidMount(){
        setInterval(() => {
            let resp = axios.get(this.state.url)
            resp.then(res=>{
                const datas = res.data
                this.setState({
                    data: [...datas]
                })
                console.log(this.state.data);
            })
        }, 10000);
    }

    nama(event,x){
        this.setState({
            nama:event.target.value
        })
        
        x = this.state.name
        console.log(event.target.value, x);
        
        return x
    }
    harga(event,y){
        this.setState({
            harga:event.target.value
        })
        y = this.state.price
        console.log(event.target.value,y);
        return y
    }
    berat(event,z){
        this.setState({
            berat:event.target.value
        })
        z = this.state.weight
        console.log(event.target.value,z);
        
        return z
    }
    
    async add(){
        try {
            await axios.post(this.state.url,{
                name:this.state.nama, price: this.state.harga, weight: this.state.berat
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            this.setState({
                data: this.state.data,
                nama:'',
                harga:'',
                berat:'',
            })
        } catch (error) {
            console.log(error);
        }
    }

    edit(index){

        const datas = this.state.data[index]

        this.setState({
            editable: true,
            nama:datas.name,
            harga:datas.price,
            berat:datas.weight,
            updateIndex: index
        })
    }

    async update() {

        let datas = this.state.data[this.state.updateIndex]

        let res = await axios.put(`${this.state.url}/${datas.id}`,{
            name: this.state.nama,
            price: this.state.harga,
            weight: this.state.berat
        })

        console.log(res);

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
            nama:'',
            harga:"",
            berat:''
        })

    }

    async hapus(index){
        const datas = this.state.data
        const data =  datas[index]

        await axios.delete(`${this.state.url}/${data.id}` )
        delete data[index]
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
                            {this.state.data.map((el,index)=>{
                                return(
                                    <tr key={el.id}>
                                        <td style={{backgroundColor:"#e98484", width:"200px"}}>{el.name}</td>
                                        <td style={{backgroundColor:"#e98484", width:"120px"}}>{el.price}</td>
                                        <td style={{backgroundColor:"#e98484", width:"120px"}}>{el.weight/1000} kg</td>
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

export default Tugas13