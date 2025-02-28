import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const currentTheme = ref(localStorage.getItem("theme") ?? "light");
  const currentMode = ref(localStorage.getItem("theme-mode") ?? "system");

  if (currentMode.value == "system") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      currentTheme.value = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      currentTheme.value = "light";
      document.documentElement.setAttribute("data-theme", "light");
    }
  } else {
    document.documentElement.setAttribute("data-theme", currentTheme.value);
  }

  function setThemeMode(mode: string) {
    currentMode.value = mode;
  }

  return { currentTheme, currentMode, setThemeMode };
});
