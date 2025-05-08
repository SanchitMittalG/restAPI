import crypto from 'crypto';//hashing and generating random values.

const SECRET = 'CWA';//used to hash passwords securely

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt:string , password:string) => {
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex');
}