import '@/styles/globals.css'
import { useState } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import ToggleButton from './ToggleButton';
import { lightTheme, darkTheme, GlobalStyles } from "./themeConfig" 
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Toaster} from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark") 

  const toggleTheme = () => {
      theme == 'light' ? setTheme('dark') : setTheme('light')
  }
 
  return (
    <GoogleOAuthProvider clientId='113610894317-iv8nk52d6nlgsd2b329nfpkffp0c5u4m.apps.googleusercontent.com'>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        {/* <button className="cursor-pointer" onClick={toggleTheme}>
          Toggle Theme
        </button> */}
        <Component {...pageProps} />
        <Toaster/>
      </ThemeProvider>
    </GoogleOAuthProvider>
  ) 
}
