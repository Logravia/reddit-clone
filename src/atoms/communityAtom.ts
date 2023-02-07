import { Timestamp } from '@google-cloud/firestore'
import {atom} from 'recoil'

export interface CommunityData {
    name: string,
    creatorName: string,
    creatorId: string,
    subscribers: number,
    privacy: "public" | "restricted" | "private"
    creationDate: Timestamp,
    imgURL: string,
    moderators: Array<string>,
    moderatorIDs: Array<number>
}
