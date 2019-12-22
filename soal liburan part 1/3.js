/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 3/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here
// buat variable berisi plat dan prosentase nya
  var platA = ['A',0]
  var platB = ['B',0]
  var platC = ['C',0]
  var platD = ['D',0]

// looping untuk memasukkan presentasi sesuai plat dari input(cars)
  for ( i = 0; i < cars.length; i++) {
    if ( cars[i] === platA[0]) {
      platA[1] += 1/cars.length * 100
    } else if ( cars[i] === platB[0]) {
      platB[1] += 1/cars.length * 100
    } else if ( cars[i] === platC[0]) {
      platC[1] += 1/cars.length * 100
    } else if ( cars[i] === platD[0]) {
      platD[1] += 1/cars.length * 100
    } 
  } 
// buat variable berisi array gabungan dari variable setiap plat
  var dataPlatDanPersentase = [platA,platB,platC,platD]

// Sorting persentasePlat
  var persentasePlat = [platA[1],platB[1],platC[1],platD[1]]

  for ( i = 0; i < persentasePlat.length; i++) {
    for (j = 0; j < persentasePlat.length-1-i; j++) {
      if (persentasePlat[j] < persentasePlat[j+1]) {
        var simpenan = persentasePlat[j]
        persentasePlat[j] = persentasePlat[j+1]
        persentasePlat[j+1] = simpenan
      }
    }
  }
// buat variable berisi input tanpa pengulangan
  var platTidakBerulang = [cars[0]]
 
  for ( i = 1; i < cars.length; i++) {
    var sama = ''
    for ( j = 0; j < platTidakBerulang.length; j++) {
      if (cars[i] === platTidakBerulang[j]) {
        sama = 'ada'
      }
    } if (sama === '') {
        platTidakBerulang.push(cars[i])
        sama = ''
      } 
  } 
  // cari hasil dimulai dari plat sesuai urutan input dan dimulai dari presentase terbesar 
  // (hasil sudah pasti diurutkan sesuai input dan dimulai dari presentase terbesar) 
  var hasil = []
    for ( i = 0; i < persentasePlat.length; i++) {
      for (j = 0; j < dataPlatDanPersentase.length; j++) {
        if (persentasePlat[i] === dataPlatDanPersentase[j][1] && platTidakBerulang[i] === dataPlatDanPersentase[j][0]) {
          hasil.push(dataPlatDanPersentase[j][0],dataPlatDanPersentase[j][1])
        }
      }
    }
   return hasil
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/

console.log(mostCarsByState(['D', 'B','D','B','A','C']))