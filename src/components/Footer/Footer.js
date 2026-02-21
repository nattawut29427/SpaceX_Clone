import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.footer__text}>
                    &copy; {new Date().getFullYear()} Modern Application. Made with ✨
                </p>
            </div>
        </footer>
    );
}
