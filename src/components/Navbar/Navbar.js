import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navbar__container}`}>
                <Link href="/" className={styles.navbar__logo}>
                    <span>Persona 5</span>
                </Link>

                <div className={styles.navbar__links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="#features">Features</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                {/* <div className={styles.navbar__cta}>
                    <button className="btn btn--primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                        Get Started
                    </button>
                </div> */}

                <button className={styles.navbar__toggle}>
                    ☰
                </button>
            </div>
        </nav>
    );
}
