# 1. Newton Second Law

STORE Mass with value of 600  
STORE Acceleration with value of 2  
STORE Force with empty value  
CALCULATE Force equal Mass times Acceleration  
DISPLAY Force

# 2. Tahun Kabisat

## Algoritma

1. Input Year
2. If Year devided by 4 has no remainder and Year devided by 100 has a remainder
3. Output: Leap Year
4. If Year devided by 4 and 100 and 400 has no remainder
5. Output: Leap Year
6. If none of the conditions met
7. Output: Common Year

## Pseudocode

STORE Year  
IF Year modulo 4 equal to 0 AND Year modulo 100 not equal to 0  
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY “Leap Year”  
ELSE IF Year modulo 4 equal to 0 AND Year modulo 100 equal to 0 AND Year modulo 400 equal to 0  
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY “Leap Year”  
ELSE  
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY “Common Year”

# 3. Laundry Day

## Algoritma

1.  Siapkan Laundry
2.  Siapkan Counter, awali dengan nilai nol
3.  Masukkan satu per satu baju ke dalam mesin cuci
4.  Tambahkan Counter dengan 1 nilai tiap kali memasukkan 1 baju
5.  Jika Laundry sudah habis, hidupkan mesin cuci
6.  Tampilkan Counter

## Pseudocode

STORE Laundry value of 20
STORE Counter = 0  
WHILE Laundry is not equal to zero  
&nbsp;&nbsp;&nbsp;&nbsp;PUT 1 Clothes into Washing machine  
&nbsp;&nbsp;&nbsp;&nbsp;ADD 1 into Counter  
TURN ON Washing machine  
DISPLAY Counter

# 4. Periksa Kuku

## Algoritma

1. Siapkan Pelajar
2. Siapkan Counter
3. Siapkan parameter panjang kuku yang ideal
4. Cek Panjang kuku pelajar, tambahkan Counter tiap kali mengecek pelajar
5. Jika Panjang kuku lebih dari panjang kuku ideal
6. Hukum
7. Jika Panjang kuku kurang dari atau sama dengan panjang kuku ideal
8. Puji
9. Jika Counter sudah mencapai 40, selesai.

## Pseudocode

STORE Student equal to 40  
STORE Counter equal to zero  
STORE FingernailLength  
STORE IdealFingernail = 5  
WHILE Counter less than Student  
&nbsp;&nbsp;&nbsp;&nbsp;IF FingernailLength > IdealFIngernail  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PUNISH!  
&nbsp;&nbsp;&nbsp;&nbsp;ELSE  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLESS!  
&nbsp;&nbsp;&nbsp;&nbsp;ADD 1 into Counter
