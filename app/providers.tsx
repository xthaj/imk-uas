'use client'

import { ConfigProvider, theme } from 'antd';

export function Providers({ children }: { children: React.ReactNode }) {
    return <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#6B8557',
                borderRadius: 2,
            },
            components: {
                Table: {
                    headerBg: '#203510',
                    headerColor: '#ffffff',
                    headerSortHoverBg: '#3E4F32',
                    headerSortActiveBg: '#3E4F32',
                    headerBorderRadius: 8,
                    cellFontSize: 14,
                    // Gunakan type assertion di sini
                    headerIconColor: '#ffffff' as any,
                    headerIconHoverColor: '#ffffff' as any,
                    filterDropdownBg: '#ffffff',
                    filterDropdownColor: '#000000',
                } as any,
            },
        }}
    >
        {children}
    </ConfigProvider>
}