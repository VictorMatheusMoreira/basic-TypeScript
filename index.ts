
type Address = {
    street: string
    number: number
}

type User = {
    name? : string
    age : number
    address: Address
}

type UserProperties = keyof User    

function pickProperty(user: User, property: UserProperties) {
    return user[property]
}

const usuario: User ={
    name: 'victor',
    age: 26,
    address: {
        street: "rua sla",
        number: 245
    }
}

const video = {
    title: 'using ts',
    duration: 180
}

type Video = keyof typeof video


console.log(pickProperty(usuario, 'age'))

//Utility Types

type pickPropertyReturnType = ReturnType<typeof pickProperty>

type UserWithoutAddress = Omit<User, 'address' | 'age'>

type UserNameAndAge = Pick<User, 'name' | 'age'>

type UserPartial = Partial<User>

// ------------------------------------------------------------------

type DbConfig = {
    name: string
    url: string
    timeout?: number
}

// forca uma tipagem
const conn1 = { name: 'postgres', url: 'postgres://user:password'} as DbConfig


const conn2 : DbConfig = { name: 'postgres', url: 'postgres://user:password'}


const conn3 = { name: 'postgres', url: 'postgres://user:password', timeout: 5000} satisfies DbConfig

const timeout = conn3.timeout


// function pickProperty<objType>(obj: objType, property: keyof objType) {
//     return obj[property]
// }
