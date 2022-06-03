// import slugify from 'slugify';

// ____
// ____ GLOBAL CONSTANTS
// ___
// export const BASE_URL = 'https://blackswan.support';
export const BASE_URL = 'https://blackswan-support.netlify.app';
export const DEFAULT_DESCRIPTION = 'Black Swan is a Berlin-based collective pursuing horizontal and decentralized approaches to the traditional art world templates for art making.';
export const DEFAULT_IMAGE = BASE_URL + '/blackswan.png';


// ____
// ____ Date
// ___
// import { format, parseISO, formatDistanceToNow, isFuture } from "date-fns"

// export const dotFormatDate = date => {
//     try {
//         if (date) {
//             return format(parseISO(date), "dd.MM.yyyy")
//         }
//     } catch (err) {
//         console.dir(err)
//     }
// }

// export const longFormatDate = date => {
//     try {
//         if (date) {
//             return format(parseISO(date), "MMMM d, yyyy")
//         }
//     } catch (err) {
//         console.dir(err)
//     }
// }

// export const dateTimeFormat = date => {
//     try {
//         if (date) {
//             return format(parseISO(date), "MMMM d, yyyy, HH:mm")
//         }
//     } catch (err) {
//         console.dir(err)
//     }
// }

// export const shortFormatDate = date => {
//     try {
//         if (date) {
//             return format(parseISO(date), "MMMM yyyy")
//         }
//     } catch (err) {
//         console.dir(err)
//     }
// }

// export const distanceToDate = date => {
//     try {
//         if (date) {
//             const parsedDate = parseISO(date)
//             if (isFuture(parsedDate)) {
//                 return 'On ' + format(parsedDate, "MMMM d")
//             }
//             return formatDistanceToNow(parsedDate) + ' ago'
//         }
//         return ''
//     } catch (err) {
//         console.dir(err)
//     }
// }

// export const getCurrentYear = () => {
//     return Number(format(new Date(), "yyyy"))
// }
