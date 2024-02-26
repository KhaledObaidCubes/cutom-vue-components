/*export function notEmpty(target: Object, propertyKey: string) {
  console.log('CREATED')
  debugger
  let value: string
  const getter = function () {
    console.log('GET ', value)
    return value
  }

  const setter = function (newVal: string) {
    debugger
    if (!newVal?.length) {
      console.log(`new value ${newVal} is empty`)
    } else {
      value = newVal
    }
  }
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  })

   
}*/
function notEmpty(target: Object, member: string) {
  console.log(`Installing ValidRange on ${member}`)
  let value: string
  Object.defineProperty(target, member, {
    enumerable: true,
    get: function () {
      return value
    },
    set: function (v: string) {
      debugger
      console.log(`V ${v}`)
      if (!v?.length) {
        console.log(`!!!!!!!!!Not allowed value ${v}`)
      }
      value = v
    }
  })
}

export class User {
  @notEmpty
  name!: string
  age!: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const u = new User('**', 1)

setInterval(() => {
  console.log('Hello!')

  u.name = Math.ceil(Math.random() * 10) % 2 == 0 ? '' : 'NOT EMPTY VALUE'
}, 2000)

// const validUser = new User('khaleel', 25)
// console.log(validUser)

// try {
//   const invalidUser = new User('', 30)
//   console.log(invalidUser)
// } catch (error) {
//   console.error(error)
// }
