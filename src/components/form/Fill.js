import "../../styles/layout/Fill.scss";
import Input from "./Input";

const Fill = (props) => {
  /*const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    props.handleInput(inputChanged, inputValue);
  }*/

  return (
    <div className="form js_collapsible">
      <Input
        labelText="Nombre completo"
        inputId="name"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:Mari Puri López"
        required={true}
        data={props.data.name}
      />

      <Input
        labelText="Puesto"
        inputId="job"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:Master and Commander"
        required={true}
        data={props.data.job}
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

      <Input
        labelText="Email"
        inputId="email"
        inputType="email"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:maripuri@lamaster.com"
        required={true}
        data={props.data.email}
      />
      <Input
        labelText="Teléfono"
        inputId="phone"
        inputType="tel"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:+34 611661234"
        required={false}
        data={props.data.phone}
      />

      <Input
        labelText="LinkedIn"
        inputId="linkedin"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:lamari.master"
        required={false}
        data={props.data.linkedin}
      />

      <Input
        labelText="Github"
        inputId="github"
        inputType="text"
        handleInput={props.handleInput}
        inputPlaceholder="Ej:@lamari"
        required={false}
        data={props.data.github}
      />
    </div>
  );
};

export default Fill;
