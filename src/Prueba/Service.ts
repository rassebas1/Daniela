export default class Service{
    public response
constructor(){
    this.response={}
}
     fetchData= async ()=>{
         const request=await fetch("https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload?",{mode:"cors",
        method:"GET",
        
        headers: {
            'Content-Type': "text/html;charset=utf-8"
        }      
        
     })
         console.log(request);
         this.response=request.json
         console.log(this.response);
     }
}