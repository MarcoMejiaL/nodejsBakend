const funcionpromesa = ()=> new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(Math.random()<0.5){
            resolve('hello World');
        }else{
            reject(new Error('Hello Error'))
        }
    },2000);

})

async function asyncawait(){
    try{
        const msg = await funcionpromesa();
        console.log('mensaje',msg);
    }catch(err){
        console.log('error',err);
    }
}
asyncawait();