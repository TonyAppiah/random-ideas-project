import "./style.css";
import Modal from "./components/Modal";

document.querySelector("#app").innerHTML = `
  <header>
  <h1>Random Ideas</h1>
  <button id="modal-btn">
    <i class= "fa-solid fa-plus fa-2x"></i>
  </button>
</header>

<div class="container">
  <div id="idea-list" class="ideas">
    <div class="card">
      <button class="delete">
        <i class="fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas        
      </h3>
      <p class="tag tag-technology">Techology</p>
      <p>
        Posted on<span class="date"> January 1, 2024</span> by
        <span class="author">Tony Appiah</span>
      </p>
    </div>

    <div class="card">
      <button class="delete">
        <i class= "fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas       
      </h3>
      <p class="tag tag-media">Media</p>
      <p>
        Posted on<span class="date"> January 2, 2024</span> by
        <span class="author">Eunice Appiah</span>
      </p>
    </div>

    <div class="card">
      <button class="delete">
        <i class= "fa-solid fa-x"></i>
      </button>
      <h3>
        Idea 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium quae iusto ipsam saepe libero culpa reprehenderit, ab quas        
      </h3>
      <p class="tag tag-health">Health</p>
      <p>
        Posted on<span class="date"> January 3, 2024</span> by
        <span class="author">Zion Appiah</span>
      </p>
    </div>
  </div>
</div>

<div id="modal" class="modal">
   <div id="form-modal" class="modal-box">
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" value="" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
   </div>
</div>

`;

const modal = new Modal();
