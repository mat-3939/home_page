/*テーマプロバイダーを読み込む*/
import { useTheme } from 'next-themes';
/*useStateとuseEffectを読み込む*/
import { useState, useEffect } from 'react';

/*テーマスイッチのフックを定義する*/
export function useThemeSwitch() {
    /*テーマプロバイダーを読み込む*/
    const { theme, setTheme } = useTheme();
    /*テーマスイッチの状態を管理する*/
    const [isDark, setIsDark] = useState(false);
    /*テーマスイッチの状態を更新する*/
    useEffect(() => {
    setIsDark(theme === 'dark');
    }, [theme]);
    /*テーマスイッチの状態を更新する*/
    const handleSwitch = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
    };
    /*テーマスイッチの状態を返す*/
    return { isDark, handleSwitch };
}