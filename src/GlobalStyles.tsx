import React from 'react'
import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import { forEach, isFunction, isObject, kebabCase, mapKeys, merge } from 'lodash-es'

const flattenObject = (obj: Object, name?: string, key?: string) => {
    let res: Record<string, string> = {}
    key = key ? key + '-' + name : name

    if (!isObject(obj) && !isFunction(obj)) {
        res[kebabCase(key)] = obj
        return res
    }

    forEach(obj, (v, k) => {
        if (!isFunction(v)) {
            const p = flattenObject(v, k, key)
            res = merge(res, p)
        }
    })

    return res
}

const useGlobalStyles = makeStyles(
    ({ palette, shape, zIndex, typography, spacing, shadows, transitions, breakpoints }: Theme) => {
        const styles = mapKeys(
            flattenObject({
                palette,
                zIndex,
                shadows,
                transitions,
                typography,
            }),
            (v, k) => `--${k}`
        )
        return createStyles({
            '@global': {
                ':root': {
                    ...styles,
                    '--spacing': `${spacing(1)}px`,
                    '--shape-border-radius': `${shape.borderRadius}px`,
                },
                html: {
                    fontSize: 13,
                    [breakpoints.up('sm')]: {
                        fontSize: 14,
                    },
                    [breakpoints.up('md')]: {
                        fontSize: 15,
                    },
                    [breakpoints.up('lg')]: {
                        fontSize: 16,
                    },
                },
            },
        })
    }
)

const GlobalStyles: React.FC = () => {
    useGlobalStyles()
    return null
}

export default GlobalStyles
