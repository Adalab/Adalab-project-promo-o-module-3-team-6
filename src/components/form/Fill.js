import '../../styles/layout/Fill.scss';

const Fill = (props) => {

  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    props.handleInput(inputChanged, inputValue);
  }

  return (
    <div className="form js_collapsible">
      <label className="form__label" htmlFor="name">
        Nombre completo
      </label>
      <input
        onChange={handleInput}
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
        onChange={handleInput}
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
        onChange={handleInput}
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
        onChange={handleInput}
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
        onChange={handleInput}
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
        onChange={handleInput}
        className="input form__label--input js-form__input--github"
        placeholder="Ej:@lamari"
        type="text"
        id="github"
        name="github"
        value={props.data.github}
      />
    </div>
  )
}

export default Fill;