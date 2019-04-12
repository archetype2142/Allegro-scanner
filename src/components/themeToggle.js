import { esteticContainer } from "../containers/estetics"
import React from "react";
import ToggleButton from 'react-toggle-button'

export const ThemeToggle = props => {
    var state = {
        value: esteticContainer.getValue()
    }
    return (
        <ToggleButton
            inactiveLabel={'Dark'}
            activeLabel={'Light'}
            colors={{
                active: {
                    base: 'rgb(207,221,245)',
                    hover: 'rgb(177, 191, 215)',
                },
                inactive: {
                    base: 'rgb(40, 44, 52)',
                    hover: 'rgb(30, 34, 42)',
                }
            }}
            thumbStyle={{ borderRadius: 2 }}
            trackStyle={{ borderRadius: 2 }}
            value={state.value}
            onToggle={async (value) => {
                await esteticContainer.setTheme(!value);
                props.refresh()
            }}
            animateThumbStyleHover={(n) => {
                return {
                    boxShadow: `0 0 ${2 + 4 * n}px rgba(0,0,0,.16),0 ${2 + 3 * n}px ${4 + 8 * n}px rgba(0,0,0,.32)`,
                }
            }} />
    );
}