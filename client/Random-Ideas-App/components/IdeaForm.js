class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
  }

  handleSubmit(e) {
    e.preventDefault();

    // idea object to be sent to the database
    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";

    //creating a custom event listener
    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
     <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" />
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
    `;

    this._form = document.querySelector("#idea-form");
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }
}

export default IdeaForm;