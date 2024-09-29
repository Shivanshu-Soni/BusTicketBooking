import React from 'react'
import './About.css';

export default function AboutUs() {
  
  return (
    <> 
    <div>
      <section id="team" class="team">

<h4 class="heading"><br/> Our Team</h4>

<div class="row">

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")}/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/163/163801.png"}/>
  </div>
  <div class="info">
    <h4>Shivanshu Soni (TL)

</h4>
    <h4>Developer</h4>
   
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img  src={require("../images/1.png")}/> */}
    <img  src={"https://cdn-icons-png.flaticon.com/512/145/145867.png"}/>
  </div>
  <div class="info">
    <h4>Nitesh Dilip Awati
</h4>
    <h4>Developer</h4>
    
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")} alt=""/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/1320/1320737.png"} alt=""/>
  </div>
  <div class="info">
    <h4>Rugved  Nagare (TL)</h4>
    <h4>Developer</h4>
    
  </div>
</div>
</div>
</section>

    </div>
    
    </>
  )
}

