import StyledComponentsRegistry from '@/lib/AntdRegistry'
import theme from '@/lib/theme'
import { ConfigProvider } from 'antd'
import React from 'react'

export default function Providers({ children }) {
  return (
    <div>
      <ConfigProvider theme={theme}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </ConfigProvider>
    </div>
  )
}
