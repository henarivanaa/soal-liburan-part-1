/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  //code below here
  var waktu = []
  
  for (i = 0; i < cars.length; i++) {
    waktu.push( (totalKM - cars[i][2]) / cars[i][1] ) 
  } 
  
  for ( i = 0; i < waktu.length; i++) {
    for ( j = 0; j < waktu.length; j++) {
      if (waktu[j] > waktu[j+1]) {
        var simpenan = waktu[j]
        waktu[j] = waktu[j+1]
        waktu[j+1] = simpenan
      }
    }
  }
  var hasil = []
  for ( i = 0; i < waktu.length; i++) {
    for ( j = 0; j < cars.length; j++) {
      if (waktu[i] === (totalKM - cars[j][2]) / cars[j][1]) {
      hasil.push(cars[j][0])
      } 
    }
  }
  return hasil

};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/