import dateformat from 'dateformat';

export const DateFormatter = {
    mediumDate: (date: Date | string | number) => dateformat(date, 'mmm d, yyyy'),
    shortTime: (date: Date | string | number) => dateformat(date, 'h:MM TT')
}