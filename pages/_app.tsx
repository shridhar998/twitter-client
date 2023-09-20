import '@/styles/globals.css'
import { useState } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import ToggleButton from './ToggleButton';
import { lightTheme, darkTheme, GlobalStyles } from "./themeConfig" 


export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark") 

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }
 
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      {/* <button className="cursor-pointer" onClick={toggleTheme}>
        Toggle Theme
      </button> */}
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}
