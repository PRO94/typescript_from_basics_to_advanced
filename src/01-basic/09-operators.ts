// --------- Operators

interface IPerson {
    name: string
    age: number
}

type PersonKeys = keyof IPerson;    // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// key = 'job';    // error

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

// get all the keys from Users except _id and createdAt
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>     // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>                 // we pick 'name' and 'email' keys from the User

const user1: UserKeysNoMeta1 = 'name';
// user1 = '_id';      // error