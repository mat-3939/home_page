/*クライアント側でのみレンダリング*/
'use client';
/*テーマプロバイダーを読み込む*/
import { ThemeProvider as NextThemeProvider } from 'next-themes';
/*useEffectを読み込む*/
import { useEffect, useState } from 'react';
/*テーマプロバイダーを定義する*/
export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) => {
    /*マウントされたかどうかを管理する*/
    const [mounted, setMounted] = useState(false);
    /*マウントされたらtrueにする*/
    useEffect(() => {
        setMounted(true);
    }, []);
    /*マウントされていない場合はnullを返す*/
    if (!mounted) return null;
    /*テーマプロバイダーを返す*/
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};