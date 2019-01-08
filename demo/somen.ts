const a: string = 'hey there'
const b: number = 123
const c: boolean = true

interface ISomen {
  a: string
  b: number
  c: boolean
}

function doesSomen(somen: ISomen): string {
  let base = somen.a
  base += String(somen.b)
  const {c} = somen
  if (c) {
    base += 'true'
  } else {
    base += false
  }
  return base
}

console.log(doesSomen({a: 'asdfasdf', b: 8357, c: true}))
