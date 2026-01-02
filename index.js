// node 2
// program konversi tanggal
// dibuatkan jadi sebuah fungsi 
// hasil akhir
// 01-01-2026 //str 01/01/2006 => tanggal/bulan/tahun
// buat validasi
// jika tidak memasukan tanggal sesuai format // format tanggal tidak valid 
// input hanya angka tidak boleh string

import  moment from 'moment';

// let now = moment().format('LLLL');
// console.log(moment(new Date()).format("DD/MM/YYYY"));

// var a = moment('10/12/2016', 'DD/MM/YYYY').format("DD/MM/YYYY")

// console.log(a);


// function dateNow(params) {
//     if (params === "number" || params === "boolean") {
//         return "Format Tanggal tidak valid"
//     }
//     const times = moment(params, 'DD/MM/YYYY', true).format("DD/MM/YYYY")
//     return times
// }

// console.log(dateNow(true))
// // dateNow("10/12/2009")

function dateNow(params) {
  if (typeof params === 'number' || typeof params === 'boolean') {
    return "Format Tanggal tidak valid";
  }
  const times = moment(params, 'DD/MM/YYYY', true);
  if (!times.isValid()) {
      return "Format Tanggal tidak valid";
  }
  return times.format('DD/MM/YYYY');
}

console.log(dateNow("11/04/2006"));
