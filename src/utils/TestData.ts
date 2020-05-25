import { CardData } from "../types/CardData";
import { v5 } from 'uuid';

export const USER_DATA: CardData[] = [
    {
        id: v5.DNS,
        userTag: 'FakeName',
        userId: '@fakeName',
        date: new Date(),
        message: 'Life is so boring, yes?',
        replyCount: 10,
        favoriteCount: 20,
        shareCount: 30
    },
    {
        id: v5.DNS,
        userTag: 'BoringPersonOne',
        userId: '@boringPersonOne',
        date: new Date(),
        message: 'Life is so boring, no?',
        replyCount: 10,
        favoriteCount: 20,
        shareCount: 30
    },
    {
        id: v5.DNS,
        userTag: 'BoringPersonTwo',
        userId: '@boringPersonTwo',
        date: new Date(),
        message: 'Life is so boring, why?',
        replyCount: 10,
        favoriteCount: 20,
        shareCount: 30
    }
]