
// savollar
/*
1.ozgaruvchilarning turlari. const, var, let. Const bu ozgarmas ozgaruvchi va  "let var" bu faqat ozgaruvchan chunki let var har hil qilib ozgartrsa boladi.
2. string, number, boolen, begint, object, underfined, bull, symbol
3.malimot turlari. ozgarchi ochldi va qiymat berildi keyin tagidan shu ozgaruvchanga ++ qoysa 1 qoshiladi -- qoysa 1 berilgan ozgaruvchandan 1 olinadi;
4. string  + number = string. masalan: "1" + 1 == 11
5.&& va vazifasida, || yoki vazifasida keladi;
6. if else bular javascriptni bir qulayliklari. if false bolsa else trueni chiqaradi 
7. if(*****){   
}
else{
  ******


  else if(****){
  }
}
shunday davom qiladi if va else ishlamay qolsa else if yoziladi
8. massiv malumotlarni [] bunday usulda taxlaydi. uni ichidagi oxrgi elementni lenght - 1 yoziladi
9. objeck: key bn veliusi bolishi kerak
10. obiyeklarga berilgan uslub deyiladi 

*/



// {1}
// const hello = (a,b) =>{
// return(a + b);

// }
// hello(12, 12)





//{2}
  
 
// let aa=2022
// function world(a){
// return aa - a

// }
// console.log(world(15));


// {3}
const hello=(a,b) =>{
  if (typeof(a) === "number " &&  typeof(b) === "number"){
 console.log(a+b);
  }else{
    console.log("son emas");
}}  
hello()


