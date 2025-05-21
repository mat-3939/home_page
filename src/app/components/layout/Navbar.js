'use client';

/*遷移用のLinkコンポーネントを読み込む*/
import Link from 'next/link';
/*Navbar.module.cssを読み込む*/
import styles from '../styles/common/Navbar.module.css';
/*ホームアイコンを読み込む*/
import dliHome from '../styles/icon/dli-home.module.css';
import { useTheme } from 'next-themes';
import { useThemeSwitch } from '@/app/lib/hooks/useThemeSwitch';

/*Navbarコンポーネントを定義する*/
const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { toggleTheme } = useThemeSwitch();

    /*ナビゲーションバーのレンダリングを開始*/
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-sm py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link href="/">Toy Box</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        Contact
                    </Link>
                    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;