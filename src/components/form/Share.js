
 const Share = () => {
  return (
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
  );
}

export default Share;
