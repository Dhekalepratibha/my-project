export class Car{
 /*speed : number
 col : string

 constructor( spd : number , col : string){
     this.speed =spd 
     this.col =col
 }*/

 constructor(
     private speed :number ,
     private col : string
 ){
     
 }
 speedUp(){
     console.log(this.speed)
 }
}
 let car =new Car( 60 ,'black')
 

 car.speedUp()
