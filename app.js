const express=require('express');
const app=express();
const port=3001;

app.use(express.json());
app.post('/nodemcudata/:machineid',(req,res)=>{

      var machine_id=req.params.machineid;
      const ir1=req.body.ir1;
      const ir2=req.body.ir2;
      const ir3=req.body.ir3;
      const ir4=req.body.ir4;
      const temperature=req.body.temperature;
      console.log(req.body,{machine_id});
      
})


app.listen(port,()=>{
      console.log(`Nodemcu server running on ${port}`);
})


