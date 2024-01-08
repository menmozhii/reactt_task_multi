import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Icons from './components/Icons'
import Showcase from './components/Showcase'
import Test from './components/Test'
import Footer from './components/Footer'
import image1 from './components/image/testimonials-1.jpg'
import image2 from './components/image/testimonials-2.jpg'
import image3 from './components/image/testimonials-3.jpg'
import showimage1 from './components/image/bg-showcase-1.jpg'
import showimage2 from './components/image/bg-showcase-2.jpg'
import showimage3 from './components/image/bg-showcase-3.jpg'
// const 

function App() {
  const data = [{
    title:"Fully Responsive",
    des:"This theme will look great on any device, no matter the size!",
    icon: "fa-regular fa-window-maximize"
  },
{
  title:"Bootstrap 5 Ready",
  des:"Featuring the latest build of the new Bootstrap 5 framework! ",
  icon:"fa-solid fa-layer-group"

},
{
  title:"Easy to Use",
  des:"Ready to use with your own content, or customize the source files! ",
  icon:"fa-solid fa-terminal"

}]

const data1 =[
{
title:"Fully Responsive Design",
des:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!" ,
showimage : showimage1
    },
{
  title:"Updated For Bootstrap 5 ",

  des:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  showimage : showimage2  
},
  {
    title:"Easy to Use & Customize",
    des:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    showimage : showimage3
  }]

  const data2 =[
    {
      title:"Margaret E.",
      image :image1,
 des:"This is fantastic! Thanks so much guys! "

},
 {
  title:"Fred S",
  image :image2,
  des:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages. "
},
{
  title:"Sarah W.",
  image :image3,
  des:"Thanks so much for making these free resources available to us! "
  
}]
  return <>
  <Nav />
  <Header />
  <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
  {
    data.map((e,i)=>{
      return <Icons  data = {e} key ={i} />
    })
  }
 
</div>
</div>
</section>
<section className="showcase">
            <div className="container-fluid p-0">
            {
    data1.map((e,i)=>{
      return <Showcase  data1 = {e} key ={i} />
    })
  }
              </div>
              </section>


<section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                  {
                    data2.map((e,i)=>{
                      return <Test data2 = {e} key= {i} />
                    })
                  }
                  </div>
                  </div>
                  </section>
                  <Footer />
  </>
  
}

export default App



