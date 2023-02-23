let navbar=()=>{
    return `   <div id="nav1">
    <a id="logo" href="">
      <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg" alt="">
    </a>

  <input  type="text" placeholder="Search for intineraries, destination, hotels or activites">
</div>
<div id="nav2">
  <span id="tooltip">
      <p>Inspiration <i id="fa-solid fa-caret-down"></i></p>
      

      <div id="tooltip-popup">
      <a href="../visit_dubai.html"><p>Visit Dubai</p></a>
      <a href="../Beaches/beaches.html"> <p>Beaches</p></a>
      <a href="../packages.html"> <p>Packages</p></a>
      <a href="../MindfulRetreats.html"><p>Mindful Rest</p></a>
      <a href="../tripotoFamily.html"><p>Family</p></a>
      <a href="../explore.html"><p>Explore More</p></a>
      </div>
  </span>

  <span>
      <p>Forum</p>
  </span>

  <span>
  <a id ="Litleanchortag" href="../packages.html"> <p>Packages</p></a>
  </span>

  <span id="tooltip">
      <p>Publish Trip <i id="fa-solid fa-caret-down"></i></p>

      <div id="tooltip-popup">
          <a href="#"><p>Create New</p></a>
        
      </div>
  </span>

  <span>
      <p>Sign in</p>
  </span>
</div>`
}
export { navbar};