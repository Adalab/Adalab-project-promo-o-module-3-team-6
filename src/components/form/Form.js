import Design from "./Design";


const Form = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleCollapsables = (ev) => {
    const fieldsetId = ev.target.id;
    props.handleCollapsables(fieldsetId);
  }
  return (
    <form onSubmit={handleSubmit} className="dashboard js-reset" id="form">
      <fieldset className={`fieldset   ${props.collapsables.designCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables} id="designCollapsable"
          className="legend js_legendDesign"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="far fa-object-ungroup item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Diseña</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/*style="color: #54585a"*/}
        </legend>
        <Design data={props.data} handleInput={props.handleInput} />

      </fieldset>

      <fieldset className={`fieldset ${props.collapsables.fillCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables} id="fillCollapsable"
          className="legend js_legendFill"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="far fa-keyboard item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Rellena</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        {/* style="color: #54585a" */}

        <div className="form js_collapsible">
          <label className="form__label" htmlFor="name">
            Nombre completo
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--name"
            placeholder="Ej:Mari Puri López"
            type="text"
            id="name"
            name="name"
            value={props.data.name}
            required
          />
          <label className="form__label" htmlFor="job">
            Puesto
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--job"
            placeholder="Ej:Master and Commander"
            type="text"
            id="job"
            name="job"
            value={props.data.job}
            required
          />
          <p className="form__label">Imagen de perfil</p>
          <div className="form__label--wrapper">
            <label htmlFor="photo" className="button">
              Añadir imagen
            </label>
            <div className="imgPreview js__profile-preview"></div>
          </div>
          <input
            type="file"
            className="hidden js__profile-upload-btn input"
            name="photo"
            id="photo"
          />

          <label className="form__label" htmlFor="emailAdress">
            Email
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--mail"
            placeholder="Ej:maripuri@lamaster.com"
            type="email"
            id="email"
            name="email"
            value={props.data.email}
            required
          />
          <label className="form__label" htmlFor="phone">
            Teléfono
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--phone"
            placeholder="Ej:+34 611661234"
            type="text"
            id="phone"
            name="phone"
            value={props.data.phone}
            required
          />
          <label className="form__label" htmlFor="linkedIn">
            LinkedIn
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--linkedin"
            placeholder="Ej:linkedin.com/es/lamari.master"
            type="text"
            id="linkedin"
            name="linkedin"
            value={props.data.linkedin}
          />
          <label className="form__label" htmlFor="gitHub">
            Github
          </label>
          <input
            //onChange={handleInput}
            className="input form__label--input js-form__input--github"
            placeholder="Ej:@lamari"
            type="text"
            id="github"
            name="github"
            value={props.data.github}
          />
        </div>
      </fieldset>

      <fieldset className={`share fieldset ${props.collapsables.shareCollapsable ? 'collapse' : 'rotateArrow'}`}>
        <legend
          onClick={handleCollapsables}
          id="shareCollapsable"
          className="legend js_legendShare"
          title="Pulsa para desplegar"
        >
          <div className="legend__iconTitle">
            <div>
              <i className="fas fa-share-alt item--icon"></i>
            </div>
            <h2 className="legend__iconTitle--mainTitle">Comparte</h2>
          </div>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </legend>
        {/* style="color: #54585a" */}
        <div className="share__container js_collapsible">
          <button className="share__create_btn--off js_shareBtn">
            <i className="far fa-address-card"></i>
            Crear tarjeta
          </button>

          <section className="share__result collapseShare">
            <p className="share__result--title">
              La tarjeta ha sido creada:
            </p>
            <a
              href=""
              className="share__result--link js_share_link"
              target="_blank"
            ></a>

            <a
              href="https://twitter.com/intent/tweet?text="
              className="share__result--btn js-twitter"
              target="_blank "
            >
              <i className="fab fa-twitter"></i>
              <p>Compartir en twitter</p>
            </a>
          </section>
        </div>
      </fieldset>
    </form>
  )
}
export default Form;