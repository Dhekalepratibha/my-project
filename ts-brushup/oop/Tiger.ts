import { Animal } from "./Animal";
import { Gpslistener } from "./gps-listener";

export class Tiger extends Animal implements Gpslistener {
    size : number
    weight : number

    run (){
     console.log(`Tiger is Running`)
    }

    walk(){
     console.log(`Tiger is Walking`)
    }

    eat(){
        console.log(`Tiger is Eating`)
    }

    locate (lat :number , lng : number){
    console.log(`Lat is ${lat} Lng is ${lng}` )
    } 
}
let tiger =new Tiger()
tiger.run()
tiger.locate(50 ,60)

tiger.isRpt = false
tiger.food = 'carn'
tiger.cont = 'India'
tiger.size = 60
tiger.weight = 200