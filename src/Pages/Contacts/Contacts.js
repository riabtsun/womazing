import styles from './Contacts.module.sass';

const Contacts = () => {
  return (
    <section>
      <div className="container">
        <h2 className={styles.pageTitle}>О бренде</h2>
        <span className={styles}>Главная - </span>
        <span className={styles}>О бренде</span>
        <div className={styles.mainContent}>
          <div className={styles.googleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1674387462172!5m2!1sru!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <ul className={styles.contactsList}>
              <li className={styles.contactsListItem}>
                <span>Телефон</span>
                <a href="tel:+74958235412">+7 (495) 823-54-12</a>
              </li>
              <li className={styles.contactsListItem}>
                <span>E-mail</span>
                <a href="mailto:info@sitename.com">info@sitename.com</a>
              </li>
              <li className={styles.contactsListItem}>
                <span>Адрес</span>
                <a href="#">г. Москва, 3-я улица Строителей, 25</a>
              </li>
            </ul>

            <div>
              <h2 className={styles.formTitle}>Напишите нам</h2>
              <form>
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Телефон" />
                <input type="text" placeholder="Сообщение" />
                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
