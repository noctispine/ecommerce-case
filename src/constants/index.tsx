interface ITheme {
  fontFamily: string
  primary: string
  secondary: string
  gray: string
  lightGray: string
  smokeyGray: string
  htmlBackground: string
}

export const theme: ITheme = {
  fontFamily: 'Open Sans',
  primary: '#1EA4CE',
  secondary: '#147594',
  gray: '#c4c4c4',
  lightGray: '#F3F0FE ',
  smokeyGray: '#697488',
  htmlBackground: '#FAFAFA',
}

export const baseURL: string = 'http://localhost:3004'
export const defaultItemTypes: string[] = ["mug", "shirt"] 