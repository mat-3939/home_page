/*クライアント側でのみレンダリング*/
'use client';
/*Reactを読み込む*/
import React from "react";
/*フッターのスタイルを読み込む*/
import styles from "../styles/Footer.module.css"
/*ボタンコンポーネントを読み込む*/
import { Button } from '@/components/ui/button';
/*スイッチコンポーネントを読み込む*/
import { Switch } from '@/components/ui/switch';
/*月と太陽のアイコンを読み込む*/
import { Moon, Sun } from 'lucide-react';
/*テーマプロバイダーを読み込む*/
import { useThemeSwitch } from '@/app/hooks/useThemeSwitch';

export default function Footer(){
    /*テーマプロバイダーを読み込む*/
    const { isDark, handleSwitch } = useThemeSwitch();
    /*フッターのレンダリングを開始*/
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                © 2025 bluecode all rights reserved.
            </div>
            <div className={styles.modeSwitch}>
                <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <Switch checked={isDark} onCheckedChange={handleSwitch} /> {/*モード切替用のボタン*/}
                    <Moon className="h-4 w-4" />
                </div>
            </div>
        </footer>
    )
}
