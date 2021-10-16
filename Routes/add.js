const {Router}=require('express')
const router=Router()
const Course=require('../Models/Course')

//=========== get /add
router.get('/', (req, res) => {
    res.render('add', {
        title: 'add',
        isadd: true
    })
})

//================post /add Добавит Курса  undan Курси betiga otadi
router.post('/',async(req,res)=>{

  const course=new Course(req.body.title,req.body.price,req.body.img)
  await course.save()
    res.redirect('/courses')
})
module.exports=router