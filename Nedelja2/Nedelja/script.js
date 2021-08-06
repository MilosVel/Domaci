/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/



let N = 10
let i = 0
let str = ''
for (N; N > 0; N--) {
    str = ' '.repeat(N - 1) + '*'.repeat(i * 2) + '*'
    console.log(str)
    i++
}
for (i; i >= 2; --i) {
    N++
    console.log(' '.repeat(N) + '*'.repeat(i * 2 - 3))
}


