import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

const ThemeExtras = {
  components: {
    base: "#8bc34a",
    errorText: "#ff0000",
    headerText: "#fff",
    actionBorderBottom: "#f2f2f2",
    bgColor: "#fff",
    activeTab: "#fff",
    headerTintColor: "#fff",
  },
  tabs: {
    pedometer: "#8bc34a",
    tab2: "#673ab7",
    tab3: "#2196f3",
    tab4: "#3f51b5",
  },
};

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#ffffff",
    text: "#333333",
    ...ThemeExtras,
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#333333",
    text: "#ffffff",
    ...ThemeExtras,
  },
};
