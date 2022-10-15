export class Weather{
  type:string
  size:number
  color:string
  percentage?:number
  temperature? :number
  low_temperature? : number
  high_low_temperature? : number
  constructor(){
    this.type='날씨'
    this.size=1
    this.color = '#333'
  }
}