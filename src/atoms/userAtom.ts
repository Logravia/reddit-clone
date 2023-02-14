
import { Timestamp } from '@google-cloud/firestore'
import {atom} from 'recoil'

export interface UserData {
        username: string,
        displayName: string,
        email: string,
        uid: string
        pfp: string
        karma: number
        subscribes:string[],
        moderates:string[]
}

const defaultUserData = {
    username: "",
    displayName: "",
    email: "",
    uid: "0",
    pfp: "",
    karma: 1,
    subscribes: [],
    moderates: [],
} as UserData

export const userState = atom<UserData>(
    {
        key: "userState",
        default: defaultUserData
    }
)

