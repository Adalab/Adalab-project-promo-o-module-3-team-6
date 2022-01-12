import '../styles/App.scss';
import imgTarjetasMolonas from '../images/tarjetas-molonas.png';
import { useState } from 'react';
//Recordar styles que sacamos de html

function App() {
  const [data, setData] = useState({
    palette: 1,
    name: 'Nombre Completo',
    job: '',

  });
const handleInput = (ev) =>{
  const inputChanged = ev.currentTarget.name;
  
  if (inputChanged === 'name'){
    setData({
      ...data,
      name:ev.currentTarget.value,
    });
  } else if (inputChanged === 'job'){
      setData({
        ...data,
        job:ev.currentTarget.value,
      });
    
  }
}

  return (
    <div>
         <header className="header">
      <a
        href="./index.html"
        title="Ir a la página de inicio"
        alt="Ir a la página de inicio"
      >
        <img
          className="header__logo"
          src={imgTarjetasMolonas}
          alt="Logo de Awesome Profile Cards"
          title="Logo de Awesome Profile Cards"
        />
      </a>
    </header>

    <main className="main">
      <section className="preview">
        <button className="preview__btn js-resetBtn" type="reset">
        	<i className="far fa-trash-alt"></i>
        	Reset
        </button>

        <article className="preview__article palette-1">
        	<div className="preview__article--container">
        		<div className="preview__article--rectangle js-rectangle"></div>
        		<h2 className="preview__article--name js-preview__name">{data.name || 'Nombre Completo'}</h2>
        		<h3 className="preview__article--job js-preview__job">{data.job ||'Front-end developer'}</h3>
        	</div>
        	<div className="preview__article--img js__profile-image"></div>
        	<div className="container">
        		<a className="js-preview__phone" href="tel:" alt="Ir a móvil" target="_blank">
        			<div className="container-icon">
        				<i className="fas fa-mobile-alt contact-icon"></i>
        			</div>
        		</a>
        		<a
        			className="js-preview__mail"
        			href="#"
        			alt="Ir a correo electronico"
        			target="_blank"
        		>
        			<div className="container-icon">
        				<i className="far fa-envelope contact-icon"></i>
        			</div>
        		</a>
        		<a
        			className="js-preview__linkedin"
        			href="#"
        			alt="Ir a la página de Linkedin"
        			target="_blank"
        		>
        			<div className="container-icon">
        				<i className="fab fa-linkedin-in contact-icon"></i>
        			</div>
        		</a>
        		<a
        			className="js-preview__github"
        			href="#"
        			alt="Ir a la página de GitHub"
        			target="_blank"
        		>
        			<div className="container-icon">
        				<i className="fab fa-github-alt contact-icon"></i>
        			</div>
        		</a>
        	</div>
        </article>

      </section>
      <form className="dashboard js-reset">
        <fieldset className="fieldset rotateArrow">
          <legend className="legend js_legendDesign" title="Pulsa para desplegar"> {/*style="cursor: pointer"*/}
            <div className="legend__iconTitle">
              <div><i className="far fa-object-ungroup item--icon"></i></div>
              <h2 className="legend__iconTitle--mainTitle">Diseña</h2>
            </div>
            <div><i className="fas fa-chevron-down"></i></div> {/*style="color: #54585a"*/}
          </legend>

          <div className="design js_collapsible">
            <label className="design__label">Colores</label>
            <ul>
              <li className="color_blue">
                <input
                  className="radio js-radio js-palette-1 input"
                  type="radio"
                  value="1"
                  id="color_blue"
                  name="palette"
                />
                <div className="color_blue--dark"></div>
                <div className="color_blue--medium"></div>
                <div className="color_blue--light"></div>
              </li>
              <li className="color_red">
                <input
                  className="radio js-radio js-palette-2 input"
                  type="radio"
                  value="2"
                  id="color_red"
                  name="palette"
                />
                <div className="color_red--dark"></div>
                <div className="color_red--medium"></div>
                <div className="color_red--light"></div>
              </li>
              <li className="color_grey">
                <input
                  className="radio js-radio js-palette-3 input"
                  type="radio"
                  value="3"
                  id="color_grey"
                  name="palette"
                />
                <div className="color_grey--dark"></div>
                <div className="color_grey--medium"></div>
                <div className="color_grey--light"></div>
              </li>
            </ul>
          </div>
        </fieldset>


        <fieldset className="fieldset collapse">
          <legend className="legend js_legendFill" title="Pulsa para desplegar"> {/* style="cursor: pointer" */} 
            <div className="legend__iconTitle">
              <div><i className="far fa-keyboard item--icon"></i></div>
              <h2 className="legend__iconTitle--mainTitle">Rellena</h2>
            </div>
            <div><i className="fas fa-chevron-down"></i></div> 
          </legend> 
          {/* style="color: #54585a" */}

          <div className="form ">
            <label className="form__label" htmlFor="name">Nombre completo</label>
            <input
            onChange={handleInput}
              className="input form__label--input js-form__input--name"
              placeholder="Ej:Mari Puri López"
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="form__label" htmlFor="job">Puesto</label>
            <input
            onChange={handleInput}
              className="input form__label--input js-form__input--job"
              placeholder="Ej:Master and Commander"
              type="text"
              id="job"
              name="job"
              required
            />
            <p className="form__label">Imagen de perfil</p>
            <div className="form__label--wrapper">
              <label htmlFor="photo" className="button">Añadir imagen</label>
              <div className="imgPreview js__profile-preview"></div>
            </div>
            <input
              type="file"
              className="hidden js__profile-upload-btn input"
              name="photo"
              id="photo"
            />

            <label className="form__label" htmlFor="emailAdress">Email</label>
            <input
              className="input form__label--input js-form__input--mail"
              placeholder="Ej:maripuri@lamaster.com"
              type="email"
              id="email"
              name="email"
              required
            />
            <label className="form__label" htmlFor="phone">Teléfono</label>
            <input
              className="input form__label--input js-form__input--phone"
              placeholder="Ej:+34 611661234"
              type="text"
              id="phone"
              name="phone"
              required
            />
            <label className="form__label" htmlFor="linkedIn">LinkedIn</label>
            <input
              className="input form__label--input js-form__input--linkedin"
              placeholder="Ej:linkedin.com/es/lamari.master"
              type="text"
              id="linkedin"
              name="linkedin"
            />
            <label className="form__label" htmlFor="gitHub">Github</label>
            <input
              className="input form__label--input js-form__input--github"
              placeholder="Ej:@lamari"
              type="text"
              id="github"
              name="github"
            />
          </div>
        </fieldset>


        <fieldset className="share fieldset collapse">
          <legend className="legend js_legendShare" title="Pulsa para desplegar"> {/*style="cursor: pointer"*/}
            <div className="legend__iconTitle">
              <div><i className="fas fa-share-alt item--icon"></i></div> 
              <h2 className="legend__iconTitle--mainTitle">Comparte</h2>
            </div>
            <div><i className="fas fa-chevron-down"></i></div> 
          </legend>
          {/* style="color: #54585a" */}
          <div className="share__container js_collapsible">

          <button className="share__create_btn--off js_shareBtn">
            <i className="far fa-address-card"></i> 
            Crear tarjeta
          </button>



          <section className="share__result collapseShare">
            <p className="share__result--title">La tarjeta ha sido creada:</p>
            <a href="" className="share__result--link js_share_link" target="_blank"></a>
            {/* <!--Este texto habrá que eliminarlo, es el link generado. Lo pongo para comprobar los estilos--> */}
            <a href="https://twitter.com/intent/tweet?text=" className="share__result--btn js-twitter" target="_blank ">
              <i className="fab fa-twitter"></i>
              <p>Compartir en twitter</p>
            </a>
           
      
          </section>
          </div>
        </fieldset>
          
      </form>
    </main>

    <footer className="footer ">
        <p className="footer__text">Awesome profile-cards @2021</p>
        <a className="footer__link"  title="logo de adalab" target="_blank"><img className="footer__link-image"src="./assets/images/logo-adalab.png" alt="logo adalab"/></a>
    </footer> 
  </div>
  );
}

export default App;
