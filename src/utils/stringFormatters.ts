export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const replaceAllAndToLowerCase = (
  str: string,
  searchVal: string,
  repVal: string
) => {
  return str.replaceAll(searchVal, repVal).toLowerCase()
}
