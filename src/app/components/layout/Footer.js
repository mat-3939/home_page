/*クライアント側でのみレンダリング*/
'use client';
/*Reactを読み込む*/
import React from "react";
/*フッターのスタイルを読み込む*/
import styles from "../styles/common/Footer.module.css"
/*ボタンコンポーネントを読み込む*/
import { Button } from '@/components/ui/button';
/*スイッチコンポーネントを読み込む*/
import { Switch } from '@/components/ui/switch';
/*月と太陽のアイコンを読み込む*/
import { Moon, Sun } from 'lucide-react';
/*テーマプロバイダーを読み込む*/
import { useThemeSwitch } from '@/app/hooks/useThemeSwitch';
import Link from 'next/link';

const Footer = () => {
    /*テーマプロバイダーを読み込む*/
    const { isDark, handleSwitch } = useThemeSwitch();
    /*フッターのレンダリングを開始*/
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Toy Box</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            個人的なプロジェクトとWeb開発の実験場所です。
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">リンク</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    ホーム
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Toy Box. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
