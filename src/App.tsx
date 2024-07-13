import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeName, getTheme } from "./style/theme";
import { GlobalStyle } from "./style/global";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
	return (
		<BookStoreThemeProvider>
			<ThemeSwitcher />
			<Layout>
				<Home />
			</Layout>
		</BookStoreThemeProvider>
	);
}

export default App;
