export default class Prueba2 {
    public a: number
    public b: number
    public c: number
    constructor() {
        this.a = 0
        this.b = 0
        this.c = 0
    };

    findTriplet = () => {
        for (let index = 0; index <= 1000; index++) {
            
            if (!(this.c%2)){
                
                this.a=Math.floor((Math.pow(this.c/2,2))-1)
                this.b=Math.floor((Math.pow(this.c/2,2))+1)

            }else if ((this.c%2)) {
                this.a=Math.floor((Math.pow(this.c,2)/2)-0.5)
                this.b=Math.floor((Math.pow(this.c,2)/2)+0.5)
        
            }
           
           
            if((this.a+this.b+this.c)==1000){
                 console.log("is the triplet",this.a,this.b,this.c);
                 break
            }
            
            this.c++
            if(this.c>=1000 )
            break
        }
        console.log(this.a,this.b,this.c);
        return this.a*this.b*this.c

    }
}