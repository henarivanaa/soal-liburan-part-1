/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

 PSEUDOCODE
 * Declare "partialCheck" as function that takes 2 parameters, "str" and "partial". Both string.
 *  Store "strKecil" with "str" toLowerCase function
 *  Store "hasil" with 0
 *  For i 0 to length of "str"
      IF "strKecil[i]" + "strKecil[i+1]" + "strKecil[i+2]" equals "partial" 
        add 1 to "hasil"
 *  IF "hasil" equals 0 
      Display "Not Found"
    Else 
      Display "Found + value of "hasil" times" 
*/
function partialCheck(str, partial) {
  //your code here  
  var strKecil = str.toLowerCase()
  var hasil = 0
  for (i = 0; i < str.length; i++) {
    if (strKecil[i]+strKecil[i+1]+strKecil[i+2] === partial) {
        hasil++
    }
    
  } 
  if (hasil === 0) {
    return 'Not Found'
  } else {
    return `Found ${hasil} times`
  }
  
  
}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found