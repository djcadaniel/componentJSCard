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
          padding: 2rem;
          font-size: 1.6rem;
          box-sizing:border-box;
        }
        .container__description{
          display:flex;
          flex-direction: column;
          justify-content: center;
          height:100%;
        }
        .container__title h2{
          font-size:4rem;
          color: #646464;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
        }
        .container__title span{
          font-size:3rem;
          letter-spacing:2.5px;
          color: #8E8E8F;
        }
        .container__text{
          text-align: justify;
          margin-left:15%;
          font-family: 'Cairo', sans-serif;
          font-weight: 400;
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
        @media only screen and (max-width:1400px){
          .container__img img{
            width:55vw;
          }
        }
        @media only screen and (max-width:1024px){
          .container__title h2{
            font-size:3rem;
            color: #646464;
          }
          .container__img img{
            width:70vw;
          }
        }
        @media only screen and (max-width:800px){
          .container__footer h3 {
            font-size: 2.8rem;
          }
        }
        @media only screen and (max-width:750px){
          .container__details{
            padding:2rem;
          }
        }
        @media only screen and (max-width:720px){
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
            min-width:320px;
          }
          .container__img:before{
            top:15%;
            font-size:10rem;
          }
          .container__img img{
            width:60vw;
            min-width:300px;
            left: calc(100% - 580px);
            bottom:-20%;
            transform: rotate(0deg);
          }
          .container__details{
            width: 100%;
            height:60%;
            padding: 2rem 3rem;
            min-width:320px;
          }
          .container__description{
            justify-content: space-around;
            height: 100%;
          }
          .container__title{
            height:auto;
          }
          .container__title h2{
            margin:0;
          }
          .container__text{
            height:auto;
            font-size: 1.8rem;
            margin:0;
          }
          .container__footer{
            height: 20%;
          }
        }
        @media only screen and (max-width:640px){
          .container__img img{
            left: calc(100% - 500px);
          }
        }
        @media only screen and (max-width:580px){
          .container__img img{
            left: calc(100% - 450px);
          }
        }
        @media only screen and (max-width:500px){
          .container__img img{
            left: calc(100% - 400px);
          }
        }
        @media only screen and (max-width:420px){
          .container__details{
            width: 100%;
            height:60%;
            padding: 0rem 3rem;
          }
          .container__title{
            height:15%;
            min-width:320px;
          }
          .container__title h2{
            line-height:3rem;
            height:10%;
            margin-top:35px;
          }
          .container__footer{
            height:10%;
            min-width:320px;
          }
          .container__img img{
            left: calc(100% - 350px);
          }
        }
        @media only screen and (max-width:380px){
          .container__img:before{
            top:5%;
            font-size:8rem;
          }
          .container__img img{
            left: calc(100% - 320px);
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