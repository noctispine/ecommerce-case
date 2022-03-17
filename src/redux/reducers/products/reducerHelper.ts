import { IProduct, ITag, ITagsWithTotal } from './reducer'

export const populateTags = (products: IProduct[]): ITagsWithTotal => {
  let tagsArr = new Array<string>()
  let total = 0
  let tags: ITag[] = []

  // get all tag names

  products.forEach((product) => {
    product.tags.forEach((tag) => {
      tagsArr.push(tag)
    })
  })

  const pairs = tagsArr.reduce(function (acc: any, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc
  }, {})

  for (let name in pairs) {
    let quantity = pairs[name]
    total += quantity
    tags.push({ name, quantity })
  }

  return {tags, total}
}

