import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">WebSite</Link></li>
                <li><Link href="/">TOP</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}