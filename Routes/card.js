const {Router}=require('express')
const router=Router()
const Course=require('../Models/Course')
const Card=require('../Models/Card')
//=========== get /add
router.post('/add', async(req, res) => {
   const course=await Course.getById(req.body.id)
   await Card.add(course)
   res.redirect('/card')
})


///ochirish uchun rourer
router.delete('/remove/:id',async(req,res)=>{
    const card =await Card.remove(req.params.id)
    console.log(card);
    res.status(200).json(card)
})

router.get('/',async (req,res)=>{
    const card =await Card.fetch()
    res.render('card',{
        title:'Корзина',
        iscard:true,
        courses:card.courses,
        price:card.price
    })
})
module.exports=router