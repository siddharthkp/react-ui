import React from 'react'
import merge from 'deepmerge'
import Draggable from 'react-draggable'
import cssProps from 'css-properties-values'
import camelCase from 'lodash.camelcase'

import { Element } from '@ds-tools/primitives'
import { scales } from '@ds-tools/primitives/interpolate'

// remove themeprovider this coz cyclic dependency
import { ThemeProvider } from './index'
import { Input, Stack, Select, Menu, Text, Button } from '../../../index'
import dark from '../../../themes/dark'
import { styles as selectStyles } from '../select/select.styles'

export const Designer = props => {
  const [docked, setDocked] = React.useState(true)

  const { designer } = props.theme

  // add known css properties to scales and theme
  const cssDataTypes = ['number', 'string', 'color']

  cssProps.forEach(({ property: propertyString, values }) => {
    const property = camelCase(propertyString)
    if (!values) return

    if (scales[property]) {
      // dont't override if it exists in scale already
      // but add "initial" if valid
      return
    }

    scales[property] = property

    props.theme[property] = {}

    values.forEach(value => {
      if (cssDataTypes.includes(value)) {
        props.theme[property]['custom'] = 'custom'
      } else {
        props.theme[property][value] = value
      }
    })
  })

  scales.variant = 'variants'

  props.theme.colors.inherit = 'inherit'
  props.theme.fontSizes.inherit = 'inherit'

  const instanceName = designer.selectedElement

  const styles = merge(
    designer.getFromStylesCache(instanceName) || {},
    designer.getChanges(instanceName) || {}
  )

  // if there is nothing to show
  if (!instanceName || !styles) return null

  const onChange = (key, value) => {
    designer.setChanges(instanceName, {
      [key]: value
    })
  }

  return (
    <ThemeProvider theme={dark}>
      <Draggable
        handle=".handle"
        onDrag={event => {
          if (docked) setDocked(false)
        }}
        bounds="body"
      >
        <Element
          css={{
            position: 'absolute',
            minWidth: '380px',
            width: docked ? '380px' : 'auto',
            height: docked ? '100vh' : 'auto',
            maxHeight: docked ? '100vh' : '500px',
            overflow: 'auto',
            top: '0px',
            right: '0px',
            backgroundColor: 'grays.800',
            color: 'white',
            border: '2px solid',
            borderColor: 'grays.900',
            borderRadius: docked ? 0 : 2,
            paddingBottom: 5
          }}
        >
          <Stack
            justify="space-between"
            css={{
              backgroundColor: 'grays.900',
              padding: 2,
              cursor: 'move'
            }}
            marginBottom={2}
            className="handle"
          >
            <Text>{instanceName.split('_')[0]}</Text>
            <Text color="text.subtle" css={{ opacity: 0.5 }}>
              # {instanceName.split('_')[1]}
            </Text>
          </Stack>
          <Stack direction="vertical" gap={2}>
            {Object.keys(styles).map(key => (
              <Property
                name={key}
                key={key}
                value={styles[key]}
                onChange={onChange}
                theme={props.theme}
                instanceName={instanceName}
              ></Property>
            ))}
            {Object.keys(styles).length ? <Separator marginY={4} /> : null}
            <NewProperty
              key={designer.changeCount}
              name="new"
              value=""
              onChange={onChange}
              theme={props.theme}
              instanceName={instanceName}
              width="200px"
            />
          </Stack>
        </Element>
      </Draggable>
    </ThemeProvider>
  )
}

const unhelpFulProperties = ['background', 'border']
const commonProperties = []

const NewProperty = ({ onChange, width }) => {
  const onSelect = property => onChange(property, '')
  const propertyList = cssProps
    .filter(({ property }) => !unhelpFulProperties.includes(property))
    .map(({ property }) => camelCase(property))
    .sort()

  const noop = () => null

  return (
    <Stack justify="space-between" align="center" css={{ paddingX: 4 }}>
      <Text size={3}>Add property</Text>
      <Menu>
        <Menu.Button
          baseStyles={selectStyles}
          css={{ textAlign: 'left', width: width, color: 'white' }}
        >
          Start typing here
        </Menu.Button>
        <Menu.List css={{ minWidth: width }}>
          {propertyList.map(property => (
            <Menu.Item key={property} onSelect={_ => onSelect(property)}>
              {property}
            </Menu.Item>
          ))}
        </Menu.List>
      </Menu>
    </Stack>
  )
}

const Property = ({ name, value, onChange, theme, instanceName }) => {
  if (name === 'label') return null

  // is this a scale property
  let scaleName = scales[name] || null

  let Field

  if (scaleName && theme[scaleName]) {
    if (scaleName === 'colors') Field = ColorField
    else Field = ListField
  } else {
    Field = RawField
  }

  const onPropertyChange = value => onChange(name, value)

  return (
    <Stack justify="space-between" align="center" css={{ paddingX: 4 }}>
      <Text size={3}>{name}</Text>
      <Field
        name={name}
        value={value}
        onChange={onPropertyChange}
        theme={theme}
        instanceName={instanceName}
        width="200px"
      />
    </Stack>
  )
}

const ListField = ({ name, value, onChange, theme, instanceName, width }) => {
  const scaleName = scales[name]

  let flatScale = []
  let tokens = null

  if (name === 'variant') {
    const variantElement = value.split('.')[0]
    tokens = Object.keys(theme.variants[variantElement]).map(
      key => variantElement + '.' + key
    )
  } else {
    flatScale = flattenScale(theme[scaleName])
    tokens = Object.keys(flatScale)
  }

  // loose equality
  const isCustomValue =
    value && (value === 'custom' || !tokens.includes('' + value))

  const elementName = instanceName.split('_')[0]
  const prefferedTokens = tokens.filter(token =>
    token.toLowerCase().startsWith(elementName.toLowerCase())
  )
  const otherTokens = tokens.filter(
    token => !token.toLowerCase().startsWith(elementName.toLowerCase())
  )

  return (
    <Stack>
      <Menu>
        <Menu.Button
          baseStyles={selectStyles}
          css={{
            textAlign: 'left',
            width: isCustomValue ? `calc(${width} / 2 - 6px)` : width,
            color: 'white'
          }}
        >
          {isCustomValue ? 'custom' : value}
        </Menu.Button>
        <Menu.List css={{ minWidth: width }}>
          {prefferedTokens.map(token => (
            <Menu.Item
              key={'preffered' + token}
              onSelect={_ => onChange(token)}
            >
              <Stack justify="space-between">
                <span>{token}</span>
                {flatScale[token] == token ? null : (
                  <Text color="text.subtle">{flatScale[token]}</Text>
                )}
              </Stack>
            </Menu.Item>
          ))}
          {prefferedTokens.length && otherTokens.length ? <Separator /> : null}
          {otherTokens.map(token => (
            <Menu.Item key={'other' + token} onSelect={_ => onChange(token)}>
              <Stack justify="space-between">
                <span>{token}</span>
                {flatScale[token] == token ? null : (
                  <Text color="text.subtle">{flatScale[token]}</Text>
                )}
              </Stack>
            </Menu.Item>
          ))}
        </Menu.List>
      </Menu>
      {isCustomValue ? (
        <RawField
          value={value}
          onChange={onChange}
          width={`calc(${width} / 2 - 6px)`}
        />
      ) : null}
    </Stack>
  )
}

const ColorField = ({ name, value, onChange, theme, instanceName, width }) => {
  const scaleName = 'colors'

  const flatScale = flattenScale(theme[scaleName])
  const tokens = Object.keys(flatScale)

  const elementName = instanceName.split('_')[0]
  const prefferedTokens = tokens.filter(token =>
    token.toLowerCase().startsWith(elementName.toLowerCase())
  )
  const otherTokens = tokens.filter(
    token => !token.toLowerCase().startsWith(elementName.toLowerCase())
  )

  return (
    <Menu>
      <Menu.Button
        baseStyles={selectStyles}
        css={{ textAlign: 'left', width: width, color: 'white' }}
      >
        {value}
      </Menu.Button>
      <Menu.List css={{ minWidth: width }}>
        {prefferedTokens.map(token => (
          <Menu.Item key={token} onSelect={_ => onChange(token)}>
            <Stack justify="space-between">
              <Stack direction="horizontal" gap={2}>
                <Swatch color={flatScale[token]} theme={theme} />
                <span>{token}</span>
              </Stack>
              <Text color="text.subtle">{flatScale[token]}</Text>
            </Stack>
          </Menu.Item>
        ))}
        <Separator />
        {otherTokens.map(token => (
          <Menu.Item key={token} onSelect={_ => onChange(token)}>
            <Stack justify="space-between">
              <Stack direction="horizontal" gap={2}>
                <Swatch color={flatScale[token]} />
                <span>{token}</span>
              </Stack>
              <Text color="text.subtle">{flatScale[token]}</Text>
            </Stack>
          </Menu.Item>
        ))}
      </Menu.List>
    </Menu>
  )
}

const Swatch = ({ color, theme }) => (
  <ThemeProvider theme={theme}>
    <Element
      css={{
        size: 5,
        backgroundColor: color,
        border: '1px solid',
        borderColor: 'grays.600',
        borderRadius: 1
      }}
    ></Element>
  </ThemeProvider>
)

const Separator = props => (
  <Element
    {...props}
    css={{ borderBottom: '1px solid', borderColor: 'grays.700' }}
  ></Element>
)

const RawField = ({ id, value, onChange, width }) => {
  return (
    <Input
      type="text"
      defaultValue={value}
      onChange={event => onChange(event.target.value)}
      id={id}
      disabled={typeof value === 'object'}
      css={{ width: width, opacity: typeof value === 'object' ? 0.5 : 1 }}
    />
  )
}

function flattenScale(scale, prefix) {
  let flatScale = {}
  for (let key in scale) {
    const value = scale[key]
    if (typeof value === 'object') {
      const flatNested = flattenScale(value, key)
      flatScale = merge(flatScale, flattenScale(value, key))
    } else {
      const flatKey = prefix ? prefix + '.' + key : key
      flatScale[flatKey] = value
    }
  }
  return flatScale
}
