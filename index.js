let a=2089;
let b=11;
function add(x,y){
  return x+y;
}
function sub(x,y){
  return x-y;
}
function mul(x,y){
  return x*y;
}
function div(x,y){
  return x/y;
}
function mod(x,y){
  return x%y;
}
function pow(x,y){
  return x**y;
}
let add=add(a,b)
let sub=sub(a,b)
let mul=mul(a,b)
let div=div(a,b)
let mod=mod(a,b)
let pow=pow(a,b)
console.log("addition is "+add,"subtraction is "+sub,"multiplication is "+mul,"modulus is "+mod,"power is "+pow,"division is "+div)
//-----------------------------------------------------------------------///compare string
let name1='preethi'
let nam='preethi'
function comp(y,z){
  return (y===z)? true: false
} 
compare=comp(name1,nam)
console.log(compare)
//compare number
one=987654
two='987654'
function compnum(y,z){
  return (y===z)? true: false
} 
comparenumber=compnum(one,two)
console.log(comparenumber)
//compare type
function type(x,y){
  return(typeof(x)===typeof(y))
}
type=type(one,two)
console.log(type)
//-------------------------------------------------------------------
//grade 
function mark(x){
  if(x<40){
    return 'U grade';
  }
  if((x>40)&&(x<55)){
    return 'E grade';
  }
  if((x>55)&&(x<70)){
    return 'E grade';
  }
  if((x>70)&&(x<80)){
    return 'C grade';
  }
  if((x>80)&&(x<90)){
    return 'B grade';
  }
  else{
    return 'A grade';
  }
}
grade=mark(99)
console.log(grade)
//--------------------------------------------------------------------
function vowel(charc)
{
  if(charc=='a'|| charc=='e' || charc=='i' ||  charc=='o'||  charc=='u')
  {
    return "Vowel!";
  }
 else{
   return "Not a vowel";
 }
}
let res11=vowel('p');
console.log(res11);
//return not a Vowel
//finds whether the given num is a prime number
function prime(numb){
  let i;
  for(i=2;i<=numb-1;i++){
  if(numb%i==0)
  {
    return "Not prime";
  }
  else{
    return "prime";
  }
}}
let res12=prime(17);
console.log(res12)
//output is prime (17)