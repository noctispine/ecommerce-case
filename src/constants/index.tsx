interface ITheme {
  fontFamily: string
  primary: string
  secondary: string
  gray: string
  lightGray: string
  lightGrayText: string
  blackFilterContainerText: string
  productListTitleBlack: string
  outlineGray: string
  smokeyGray: string
  htmlBackground: string
  scrollBarGray: string
  line: string
}

export const theme: ITheme = {
  fontFamily: 'Open Sans',
  primary: '#1EA4CE',
  secondary: '#147594',
  gray: '#c4c4c4',
  lightGray: '#F3F0FE ',
  lightGrayText: '#A8A8A8',
  blackFilterContainerText: '#525252',
  productListTitleBlack: '#6F6F6F',
  outlineGray: '#E5E5E5',
  smokeyGray: '#697488',
  htmlBackground: '#FAFAFA',
  scrollBarGray: '#E0E0E0',
  line: '#f4f4f4',
}

export const baseURL: string = 'http://localhost:3004'
export const defaultItemTypes: string[] = ['mug', 'shirt']

export const PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH'
export const PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW'
export const NEW_TO_OLD = 'NEW_TO_OLD'
export const OLD_TO_NEW = 'OLD_TO_NEW'

export const defaultSortTypes = [
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  NEW_TO_OLD,
  OLD_TO_NEW,
]
