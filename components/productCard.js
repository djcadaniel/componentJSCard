class productCard extends HTMLElement{
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["img", "title", "price", "description", "collection"];
  }
  attributeChangedCallback(attr, oldVal, newVal){
    if(oldVal !== newVal){
      this[attr] = newVal;
      if(attr === 'img'){
        this.img = newVal;
      };
      if(attr === 'title'){
        this.title = newVal;
      }
      if(attr === 'collection'){
        this.price = newVal;
      }
      if(attr === 'description'){
        this.description = newVal;
      }
      if(attr === 'price'){
        this.price = newVal;
      }
    }
  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
      <main class='container'>
        <section class='container__img'>
          <img src=${this.img} alt='Zapatillas NIKE deportivas' />
        </section>
        <section class='container__details'>
          <div class='container__description'>
            <div class='container__title'>
              <h2>${this.title} <span>${this.collection}</span></h2>
            </div>
            <div class='container__text'>
              <p>${this.description}</p>
            </div>
            <div class='container__footer'>
              <h3>${this.price}</h3>
              <div>
                <button>Buy</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles(){
    return `
      <style>
        :host{
          display: flex;
          justify-content: center;
          align-items:center;
          width: 100%;
          height: 80vh;
        }

        .container{
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: row wrap;

        }
        .container__img{
          position: relative;
          width:50%;
          height: 100%;
          background: #5A67B0;
        }
        .container__img:before{
          content:'NIKE';
          position: absolute;
          left: 8%;
          top: 5%;
          font-size: 8rem;
          letter-spacing: 5px;
          opacity: .4;
        }
        .container__img img{
          position: absolute;
          bottom:-10%;
          left:-40%;
          width:110vh;
          transform: rotate(330deg);
        }
        .container__details{
          display:flex;
          justify-content:center;
          align-items: center;
          width:50%;
          height: 100%;
          padding: 3rem;
          font-size: 1.6rem;
          box-sizing:border-box;
        }
        .container__description{
          display:flex;
          flex-direction: column;
          height:100%;
        }
        .container__title{
          
        }
        .container__title h2{
          font-size:4rem;
        }
        .container__title span{
          font-size:3rem;
          letter-spacing:2.5px;
        }
        .container__text{
          text-align: justify;
          margin-left:15%;
        }
        .container__footer{
          display: flex;
          justify-content: space-between;
          align-items:center;
          
        }
        .container__footer h3{
          font-size:3.5rem;
          letter-spacing:1px;
        }
        .container__footer button{
          padding:10px 20px;
          border-radius:5px;
          border:none;
          color:white;
          background: purple;
        }
        @media only screen and (max-width:1024px){
          
        }
        @media only screen and (max-width:920px){
          
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("product-card", productCard);