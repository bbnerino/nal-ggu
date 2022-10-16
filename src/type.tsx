export class Weather{
  baseDate?:string
  baseTime?:string
  category:string
  fcstDate?:string
  fcstTime?:string
  fcstValue?:string
  nx?:number 
  ny?:number
  constructor(){
    this.category = ''
  }
}

export class UserWeather{
  category: string
  tilte: string
  size: number
  color:string
  constructor(){
    this.category='비'
    this.tilte='강수량'
    this.size = 1
    this.color='#64B2E3'
  }
}