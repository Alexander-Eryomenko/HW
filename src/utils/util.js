export function getColorStatus (status) {
    switch (status) {
        case 'Open':
            return 'open';
        case 'Done':
            return 'done';
        case 'In Progress':
            return 'in-progress';
        default:
            return 'open'
    }
}

const date = new Date()
export const fullDate = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`