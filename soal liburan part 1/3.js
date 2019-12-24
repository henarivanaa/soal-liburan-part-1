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
  var platA = ['A',0]
  var platB = ['B',0]
  var platC = ['C',0]
  var platD = ['D',0]
   //input plat
  for (i = 0; i < cars.length; i++) {
    if (cars[i] === 'A') {
      platA[1] += 1/7*100
      
    } else if (cars[i] === 'B') {
      platB[1] += 1/7*100
    } else if ( cars[i] === 'C') {
      platC[1] += 1/7*100
    } else {
      platD[1] += 1/7*100
    }
  }
  // sorting presentase
  var plat = [platA,platB,platC,platD]
  for (i = 0; i < plat.length; i++) {
    for (j = 0; j < plat.length-1-i; j++) {
      if (plat[j][1] < plat[j+1][1]) {
        var simpenan = plat[j]
        plat[j] = plat[j+1]
        plat[j+1] = simpenan
      }
    }
  } 
  // array sesuai output
  var hasil = []
  for (i = 0; i < plat.length; i++) {
    for (j = 0; j < plat[i].length; j++) {
      hasil[hasil.length] = plat[i][j]
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

console.log(mostCarsByState(['D','C','D','B','A','D','A',]))