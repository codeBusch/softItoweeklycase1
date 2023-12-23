/*
            BENİ OKU
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Soruları bulmak için "Soru-" diye aratabilirsiniz.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

/*
 // Soru-1
//Klavyeden girilecek X değerinden N değerine kadar tüm doğal sayıları listeleyen algoritmayı ve js kodunu yazınız.
*/
// const q1 = (x,n)=>{
    
//     let arr=[];
//     let count =0;
//     let max,min;
//     n > x ? (max = n, min = x) : (max = x, min = n);
//     for(min; min <= max;min++){
//         arr[count] = min;
//         count++;
//     }
//     return arr;
// }
// // const result = q1(3, 8);
// // console.log(result);
// var start =parseInt(prompt("Başlangıç değerini giriniz:"));
// var end =parseInt(prompt("Bitiş değerini giriniz:"));

// if(isNaN(start) && isNaN(end)){
//     alert("Lütfen sayı giriniz");
// }else{
//    const  numbers= q1(start,end);
//    const resultDiv = document.getElementById('result');
//    resultDiv.innerText= 'Doğal Sayılar:' + numbers.join(',');
// }

/* Soru-2
 2-Klavyeden girilecek bir N değerine kadar fibonecci dizisini bulan algoritmayı ve js kodunu yazınız. 
Fibonecci dizisi 1 1 değerleri ile başlar ve yeni değer kendinden öndeki iki değerin toplamı olarak bulunur. (1 1 2 3 5 8 13 21...) */
// const fibonacciFunc= (n)=>{
//     let fibArr =[0,1];
//     for(var i=2;i<n;i++){
//         fibArr[i]=fibArr[i-1]+fibArr[i-2];
//     }
//     fibArr.shift(); //remove first item on Array
//     return fibArr;
    
// }
// let number =parseInt(prompt("İstediğiniz kadar fibonacci sayi değerini giriniz:"));
// let result = fibonacciFunc(number);
// console.log(result);
// // Soru-3
// //Klavyeden girilen bir sayının tüm tam bölenlerini bulup listeleyen (Ekrana yazan) algoritmayı ve js kodlarını yazınız.
// let numberInput =parseInt(prompt("Sayi giriniz"));
// let divNumbers =[];
// if(numberInput==0){
//     alert("0 bölen sayisi olamaz");
// }else{

//     for(let i = 1; i <= Math.abs(numberInput); i++){
//        if( numberInput%i ===0){
//         divNumbers.push(i);
//         divNumbers.push(-i);
//        }
//     }
// }
// console.log(divNumbers);        
// //Soru-4
////4-Klavyeden girilen üç sayıdan büyüklük sıralamasına göre ortadakini bulup ekrana yazan program için algoritmayı ve js kodunu yazınız. 
// let inputLength=3
// function inputToarray(n){
//     var numbers=[];
//     for(let i=1;i<=inputLength;i++){
//         let input =parseInt(prompt("Sayi1"+ i+"değerini giriniz:"));
//         numbers.push(input);
//     }
//     numbers.sort(function(a, b) {return a - b;}); 
//     return numbers[1] //3 eleman olduğu için elemanlar sıralandığından  0,1,2  indislerine bakıldığıda 1.index ortanca elemandır
// }
// let result = inputToarray(inputLength);
// console.log(result);
////Soru-5
// //5-Klavyeden girilen A ve B gibi iki sayının bölme işlemi kullanmadan sadece toplama ve çıkarma kullanarak kalanlı bölme yapan algoritmayı ve js kodunu yazınız.
//  let a =parseInt(prompt("sayi giriniz:"));
//  let b =parseInt(prompt("bölen giriniz:"));
// const result = (a,b)=>{
//     if(b===0){
//         alert( 'Bölen sıfır olamaz');
//         return -1;
//     }
//     let isMinus=false;
//     if((a<0 && b>0)|| (a>0 && b<0)){
//         isMinus=true;
//     }
//     a=Math.abs(a);
//     b=Math.abs(b);
//     let kalan =a;
//     while(kalan>=b){
//         kalan-=b;
//     }
//     if(isMinus){
//         kalan = -kalan;
//     }
//     return "Kalan:"+ kalan;

//  }
//  console.log(result(a,b));

////Soru-6
////6-Klavyeden girilen A ve B gibi iki sayıyı, çarpma işlemi kullanmadan sadece toplama ve çıkarma kullanarak çarpıp sonucu ekrana yazan algoritmayı ve js kodunu yazınız.
// let a =parseInt(prompt("sayi giriniz:"));
// let b =parseInt(prompt("carpan giriniz:"));
// function timesFunc(a,b){
//     if(a===0||b===0){
//         return 0;
//     }
//     let isMinus=false;
//     if((a<0 && b>0)|| (a>0 && b<0)){
//         isMinus=true;
//     }
//     a=Math.abs(a);
//     b=Math.abs(b);
//     let total=0;
//     for(let i=1;i<=b;i++){
//         total +=a;
//     }
//     if(isMinus){
//         total = -total;
//     }
//     return total
// }
// let result = timesFunc(a,b);
// console.log(result);
//Soru-7
//7- Sıfır –0 girilinceye kadar klavyeden okutulan değerlerin ortalamasını hesaplayıp ekrana yazan algoritmayı ve js kodunu yazınız.
// function Q7(){
//  let arr=[]
//  let toplam ,ortalama;
//     while(true){
//        let input= prompt("Bir sayı girin (Çıkış için -0 YAZIN):");
//        if(input === "-0"){
//         break;
//        }
//         input = parseFloat(input)
//         arr.push(input);
//         toplam= arr.reduce((acc, curr) => acc + curr, 0);
//         ortalama = toplam / arr.length;
       
//     }
//     console.log(arr);
//     console.log("Toplam: " + toplam);
//     console.log("Ortalama: " + ortalama);
// }
// Q7()
//Soru-8
//8-Klavyeden girilecek 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp sonuçları ekrana yazan algoritmayı ve js kodunu yazınız.
// function evenorOddCalculator(){
//     let arrEven=[];
//     let arrOdd=[];
//     let ciftToplam,tekToplam;
//     for(let i=0;i<20;i++){
//         let input= parseFloat(prompt("Bir sayı girin"));
//         input % 2 === 0 ? arrEven.push(input) : arrOdd.push(input);
//     }
//     ciftToplam= arrEven.reduce((acc, curr) => acc + curr, 0);
//     tekToplam= arrOdd.reduce((acc, curr) => acc + curr, 0);
//     console.log("Tek toplam: "+tekToplam+ "\nÇift toplam: "+ciftToplam +"\narrEven: "+arrEven + "\narrOdd: "+arrOdd );
// }
// evenorOddCalculator();
//Soru-9
//9-Klavyeden girilecek iki pozitif tam sayının OBEB (Ortak Bölenlerin En Büyüğü)’ini bulacak algoritmayı ve js kodunu yazınız.
// Örneğin elimizde 3654 ve 1365 değerleri olsun. Bu değerlerin OBEB’i şu şekilde bulunmaktadır.
// Kullanıcıdan iki pozitif tam sayıyı al
// function ebob(){
//     let sayi1 = parseInt(prompt("Pozitif birinci sayıyı girin: "));
//     let sayi2 = parseInt(prompt("Pozitif ikinci sayıyı girin: "));
    
//     if (isNaN(sayi1) || isNaN(sayi2) || sayi1 <= 0 || sayi2 <= 0) {
//         alert("Lütfen pozitif tam sayılar girin. Tekrar denemek için f5 atın");
//     } else {
//         let obeb = euclidAlghorithm(sayi1, sayi2);
//         console.log(`ebob(${sayi1}, ${sayi2}) = ${obeb}`);
//     }
//     function euclidAlghorithm(sayi1, sayi2) {
//         while (sayi2 !== 0) {
//             let gecici = sayi2;
//             sayi2 = sayi1 % sayi2;
//             sayi1 = gecici;
//         }
    
//         return sayi1;
//     }
// }
// ebob();
//Soru-10
//Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulabilecek bir algoritmayı ve js kodunu yazınız. Bu algoritmayı geliştirirken başvurduğunuz varsayımları da yazınız.
// varsayımım kalanı kontrol etmek için mod kullanırım
// kullanıcı hatalarını düşündüğümde input girerken
//kullanıcı doğru şekilde sayı girmiş mi onu kontrol ederim
// virgüllü sayı girdiyse  onu tam sayıya çevirrim  3.14 ise 3 e yuvarlarım aşağı yuvarlama fonksiyonu jsde math.floor kütüphanesini kullanırım
// const isEvenorOdd = ()=>{
//     let numb =parseInt(Math.floor(prompt(" tam sayi giriniz:")))
//     isNaN(numb)?alert("geçersiz sayı girdiniz f5 atınız") : ( numb%2 ==0 ? console.log("girdiğiniz sayi çift sayidir") : console.log("girdiğiniz sayi tektir"))
// }
// isEvenorOdd()