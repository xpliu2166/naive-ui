import create from '../../_styles/utils/create-component-base'

export default create({
  theme: 'light',
  name: 'Divider',
  getDerivedVariables ({ base, derived }) {
    const {
      textColorPrimary,
      dividerColorOverlay
    } = derived
    return {
      textColor: textColorPrimary,
      color: dividerColorOverlay,
      fontWeight: base.fontWeightStrong
    }
  }
})
