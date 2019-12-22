/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  // code below here
  
  var hasil = []
  for (i = 0; i < numbers.length; i++) {
    nomor = numbers[i]
    reversed = 0
    
    while (nomor > 0) {
      let kanan = Math.floor(nomor % 10)
      reversed = reversed * 10 + kanan
      nomor = Math.floor(nomor / 10)
    }
    if (reversed !== numbers[i]) {
      do {
        numbers[i]++
        nomor = numbers[i]
        reversed = 0
        while (nomor > 0) {
          let kanan = Math.floor(nomor % 10)
          reversed = reversed * 10 + kanan
          nomor = Math.floor(nomor / 10)
        }

      } while (reversed !== numbers[i])
      hasil.push(reversed)

    } else {
      hasil.push(numbers[i])
    }
  } return hasil 
}
console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]

