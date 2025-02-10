import { Switch } from "@heroui/switch";
import { useThemeContext } from "../context/theme/ThemeContext";
import { MoonIcon } from "./button/IconButton";

export const SwitchDarkMode = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center gap-2 justify-between">
      <MoonIcon />
      <p>Modo oscuro</p>
      <Switch
        size="sm"
        color="primary"
        isSelected={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </div>
  );
};
