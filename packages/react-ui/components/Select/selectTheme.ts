import { ThemeFactory } from '../../lib/theming/ThemeFactory';
import { Theme } from '../../lib/theming/Theme';

const selectOverrideVariables = (theme: Theme) => {
  return {
    btnLineHeightSmall: theme.selectLineHeightSmall,
    btnFontSizeSmall: theme.selectFontSizeSmall,
    btnPaddingXSmall: theme.selectPaddingXSmall,
    btnPaddingYSmall: theme.selectPaddingYSmall,
    btnBorderRadiusSmall: theme.selectBorderRadiusSmall,
    btnPaddingIconSmall: theme.selectPaddingIconSmall,

    btnLineHeightMedium: theme.selectLineHeightMedium,
    btnFontSizeMedium: theme.selectFontSizeMedium,
    btnPaddingXMedium: theme.selectPaddingXMedium,
    btnPaddingYMedium: theme.selectPaddingYMedium,
    btnBorderRadiusMedium: theme.selectBorderRadiusMedium,
    btnPaddingIconMedium: theme.selectPaddingIconMedium,

    btnLineHeightLarge: theme.selectLineHeightLarge,
    btnFontSizeLarge: theme.selectFontSizeLarge,
    btnPaddingXLarge: theme.selectPaddingXLarge,
    btnPaddingYLarge: theme.selectPaddingYLarge,
    btnBorderRadiusLarge: theme.selectBorderRadiusLarge,
    btnPaddingIconLarge: theme.selectPaddingIconLarge,
  };
};

export const getVariablesSelect = (theme: Theme) => {
  return ThemeFactory.create(selectOverrideVariables(theme), theme);
};