import styles from './Hero.module.scss';

export default function Hero({ title, subtitle, showCta = true }) {
    return (
        <section className={styles.hero}>
            <div className={`${styles.hero__glow} ${styles['hero__glow--primary']}`}></div>
            <div className={`${styles.hero__glow} ${styles['hero__glow--secondary']}`}></div>

            <div className={styles.hero__content}>
                <h1 className="gradient-text">{title}</h1>
                <p>{subtitle}</p>

                {showCta && (
                    <div className={styles.hero__cta}>
                        <a href="#" className="btn btn--primary">Get Started</a>
                        <a href="#" className="btn btn--glass">View Documentation</a>
                    </div>
                )}
            </div>
        </section>
    );
}
