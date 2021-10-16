const {Router}=require('express')
const router=Router()
//=========== get /index
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        isHome: true
    })
})


module.exports=router