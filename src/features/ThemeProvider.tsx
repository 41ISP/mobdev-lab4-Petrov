import { useThemeStore } from '../shared/store/themeStore'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button onClick={toggleTheme}>
      Сменить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
    </button>
  )
}

export default ThemeToggle