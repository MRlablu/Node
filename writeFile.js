const fs = require('fs')

const testobj = {
    name: 'Hridoy',
    email:'hridoyhasan@gmail.com',
    Address:{
        city:'Dhaka',
        country:'BD'
    }
}

const data = JSON.stringify(testobj)
fs.writeFile('test.json',data,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file write succesful');
    }
})

// ............File system modiule........ // 