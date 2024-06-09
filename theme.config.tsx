import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }}>Thích Đọc Truyện Docs</span>,
  project: {
    link: 'https://github.com/SE-Academic-Group/thich-doc-truyen-app',
  },
  docsRepositoryBase: 'https://github.com/SE-Academic-Group/thich-doc-truyen-docs',
  footer: {
    text: 'Thích Đọc Truyện Docs',
  },
}

export default config
