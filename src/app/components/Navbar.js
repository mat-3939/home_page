/*遷移用のLinkコンポーネントを読み込む*/
import Link from 'next/link';
/*Navbar.module.cssを読み込む*/
import styles from '../styles/common/Navbar.module.css';
/*ホームアイコンを読み込む*/
import dliHome from '../styles/icon/dli-home.module.css';

/*Navbarコンポーネントを定義する*/
export default function Navbar() {
    /*ナビゲーションバーのレンダリングを開始*/
    return (
        <>
        {/*ナビゲーションバーのスタイルを適用*/}
        <nav className={styles.nav}>
            {/*リストを作成*/}
            <ul>
                {/*リストの各要素を作成*/}
                <li><Link href="/"><span className={dliHome.dli_home}></span></Link></li>
                <li><Link href="/">TOP</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
            </ul>
        </nav>
        </>
    )
}