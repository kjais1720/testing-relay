import { LocalizationProvider } from '@material-ui/pickers'
import MomentUtils from '@material-ui/pickers/adapter/moment'
import { HashRouter } from '@saastack/router'
import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { getThemeOptions } from '@saastack/utils/localization/theme'
import GlobalStyles from './GlobalStyles'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

i18n.load({
    'en-US': {
        messages: { Save: 'Save' },
    },
})

const Wrapper: React.FC = ({ children }) => (
    <I18nProvider i18n={i18n} language="en-US">
        <LocalizationProvider dateAdapter={MomentUtils}>
            <HashRouter>
                <ThemeProvider theme={createMuiTheme(getThemeOptions())}>
                    <GlobalStyles />
                    {children}
                </ThemeProvider>
            </HashRouter>
        </LocalizationProvider>
    </I18nProvider>
)

export default Wrapper
