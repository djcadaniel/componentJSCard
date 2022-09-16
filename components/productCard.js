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
          flex-flow: row wrap;
          width: 100%;
          height: 100%;
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
          color: #646464;
        }
        .container__title span{
          font-size:3rem;
          letter-spacing:2.5px;
          color: #8E8E8F;
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
          color: #646464;
        }
        .container__footer button{
          padding:10px 20px;
          border-radius:5px;
          border:none;
          color:white;
          background: rgb(90,103,176);
        }
        .container__footer button:hover{
          border: 1px solid rgb(90,103,176);
          background: white;
          color: rgb(90,103,176);
          cursor: pointer;
        }
        @media only screen and (max-width:1200px){
          .container__img img{
            width:105vh;
          }
        }
        @media only screen and (max-width:1120px){
          .container__img img{
            width:100vh;
          }
        }
        @media only screen and (max-width:1024px){
          .container__title h2{
            font-size:3rem;
            color: #646464;
          }
          .container__img img{
            width:105vh;
            left:-25%;
            width:110vh;
          }
        }
        @media only screen and (max-width:950px){
          .container__img img{
            width:100vh;
          }
        }
        @media only screen and (max-width:900px){
          .container__img img{
            width:100vh;
          }
        }
        @media only screen and (max-width:850px){
          .container__img img{
            width:105vh;
            left:-40%;
          }
        }
        @media only screen and (max-width:800px){
          .container__img img{
            width:95vh;
            left:-40%;
          }
          .container__footer h3 {
            font-size: 2.8rem;
          }
        }
        @media only screen and (max-width:750px){
          .container__img img{
            width:95vh;
            left:-40%;
          }
          .container__details{
            padding:2rem;
          }
        }
        @media only screen and (max-width:690px){
          .container__img img{
            width:87vh;
            left:-35%;
          }
          .container__text{
            margin-left:5%;
          }
        }
        @media only screen and (max-width:650px){
          .container__img img{
            width:80vh;
            left:-40%;
          }
        }
        @media only screen and (max-width:610px){
          :host{
            height: 90vh;
          }
          .container__img img{
            width:70vh;
            left:-30%;
            bottom:10%;
          }
        }
        @media only screen and (max-width:578px){
          .container__img img{
            width:60vh;
            left:-25%;
            bottom:10%;
          }
        }
        @media only screen and (max-width:530px){
          .container__img img{
            width:65vh;
            left:-40%;
          }
        }
        @media only screen and (max-width:490px){
          :host{
            height: 100vh;
          }
          .container{
            display:flex;
            flex-flow: column wrap;
            min-width:320px;
          }
          .container__img{
            width: 100%;
            height:40%;
            min-width:290px;
          }
          .container__img:before{
            top:10%;
          }
          .container__img img{
            width:60vw;
            min-width:200px;
            left: 35%;
            bottom:-10%;
          }
          .container__details{
            width: 100%;
            height:60%;
          }
          .container__title{
            height:auto;
          }
          .container__title h2{
            margin:0;
          }
          .container__text{
            height:auto;
          }
          .container__footer{
            height: 20%;
          }
        }
        @media only screen and (max-width:380px){
          .container__img:before{
            top:5%;
            font-size:7rem;
          }
          .container__img img{
            left:30%;
          }
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