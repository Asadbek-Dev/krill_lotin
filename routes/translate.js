const { Router } = require('express')
const router = Router()

async function translateCL(word){
  try {
    let result=''
  } catch (er) {
    console.log(err);
  }
}

router.get('/',(req,res)=>{
  res.render('index')
})

module.exports=router