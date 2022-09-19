export function getColorStatus (status) {
    switch (status) {
        case 'Open':
            return 'open';
            break;
        case 'Done':
            return 'done';
            break;
        case 'In progress':
            return 'in-progress';
            break;
        default:
            return 'open'
    }
}

const date = new Date()
export const fullDate = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`