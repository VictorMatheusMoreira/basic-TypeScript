
type Address = {
    street: string
    number: number
}

type User = {
    name? : string
    age : number
    address: Address
}

type UserProperties = keyof User     // retorna todas as chaves que um objeto contem

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

