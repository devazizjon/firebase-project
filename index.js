const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path =require('path')

// public ulash jarayoni 
app.use(express.static(path.join(__dirname,'public')))

//====================Router Post registiratsiya
app.use(express.urlencoded({extended: true}))
//===============================Router
const indexRouter=require('./Routes/index') 
const addRouter=require('./Routes/add')
const coursesRouter=require('./Routes/courses') 
const cardRouter=require('./Routes/card') 
app.use("/",indexRouter)
app.use("/add",addRouter)
app.use("/courses",coursesRouter)
app.use("/card",cardRouter)


///===============================================>
// hbs ulash jarayoni 
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine) // ro'yxatdan o'tqizdik
app.set('view engine', 'hbs') // texnoligiyasini aytdik
app.set('views', 'views') // ikkinchi parametr bu papka nomi
///=================================<





//==================PORT Eshityabti
app.listen(3000, () => {
    console.log("Port working on 3000");
})