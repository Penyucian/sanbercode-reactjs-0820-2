import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <div class="border">
            <h1 class="text-center">Form Pembelian Buah</h1>
            <div class="mt-4">
                <div class="">
                    <label class="font-bold mr-4 width-125px" for="nama">Nama Pelanggan</label>
                    <input type="text" id="name" name="nama"/>
                </div>
                <div class="d-flex flex-align-bottom mt-3">
                    <p class="font-bold mr-4 width-125px">Daftar Item</p>
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-row">
                            <input type="radio" name="buah" id="semangka" value="semangka"/>
                            <label class="ml-2" for="semangka">Semangka</label>
                        </div>
                        <div class="d-flex flex-row">
                            <input type="radio" name="buah" id="jeruk" value="jeruk"/>
                            <label class="ml-2" for="jeruk">Jeruk</label>
                        </div>
                        <div class="d-flex flex-row">
                            <input type="radio" name="buah" id="nanas" value="nanas"/>
                            <label class="ml-2" for="nanas">Nanas</label>
                        </div>
                        <div class="d-flex flex-row">
                            <input type="radio" name="buah" id="salak" value="salak"/>
                            <label class="ml-2" for="salak">Salak</label>
                        </div>
                        <div class="d-flex flex-row">
                            <input type="radio" name="buah" id="anggur" value="anggur"/>
                            <label class="ml-2" for="anggur">Anggur</label>
                        </div>
                    </div>
                </div>
                <button class="mt-4" type="submit">kirim</button>
            </div>
        </div>
    </div>
  );
}

export default App;
