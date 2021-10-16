const {Router}=require('express')
const router=Router()
const Course=require('../Models/Course')

//=========== get /contact
router.get('/', async(req, res) => {
    const courses=await Course.getAll()
    // console.log(courses);
    res.render('courses', {
        title: 'Курси',
        isCar: true ,
        courses

    })
    
})

//REDAKTIREYA ::YANGILASH
router.get('/:id/edit',async(req,res)=>{
    if(!req.query.allow){
        return res.redirect('/')
    }
    const courses=await Course.getById(req.params.id)
    res.render('course-edit',{
        title:`Редактировать${courses.title}`,
        courses
    })
})
//Post zaprost  Редактировать
router.post('/edit',async(req,res)=>{
    await Course.update(req.body)
    res.redirect('/courses')
})

//Откурит курс knopkani get zaprosi
router.get('/:id',async(req,res)=>{
    const course=await Course.getById(req.params.id)
    res.render('course',{
        layout:'empty',
        title:`Курс ${course.title}`,
        course
    })
})

module.exports=router
