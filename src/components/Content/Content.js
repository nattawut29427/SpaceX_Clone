import styles from "./content.module.scss";

export default function Content() {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.container__left}>
                    <img src="https://www.gematsu.com/wp-content/uploads/2023/03/P5X-Announce_03-16-23.jpg?w=640" alt="banner" />
                 <div className={styles.infobox}>
                    <h1>
                        Persona 5 Tactica
                    </h1>
                    <br/>
                  <p>
                    The game's protagonist. A second-year student at the private highschool Kokatsu Academy. He awakened his powers as a Persona-user to take back the desires being stolen from the world. With his parents off on a long-term trip abroad, he is living by himself at his home in Zoshigaya, Tokyo. A student by day and a Phantom Thief by night, he is plagued by mysterious visions of a ruinous future. His initial Persona is Jánošík.
                  </p>
                 </div>
                </div>
                <div className={styles.container__right}>
                  
                </div>
            </div>
        </section>
    );
}