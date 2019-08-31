import { GpsListener} from './gps-listener';
export class Opts{

    iotData(ip?: string, data?: Object) { //optional params

    }

    myData(ip: number = 40) { //default parameters

    }
}

let opts = new Opts()
opts.iotData(`56`, 89)
opts.myData()

let gps: GpsListener = {} as GpsListener
gps.locate(56, 89)

let obj = {
    locate: (lat: number) => {

    }
}
let gps1: GpsListener = obj