exports.getFormattedTimestamp = () => {
    const date = new Date();
    const isoString = date.toISOString();
    
    // Extract date and time components
    const datePart = isoString.split('T')[0];
    const timePart = isoString.split('T')[1].slice(0, -1);

    // Get the timezone offset in hours and minutes
    const offset = date.getTimezoneOffset();
    const absoluteOffset = Math.abs(offset);
    const hoursOffset = String(Math.floor(absoluteOffset / 60)).padStart(2, '0');
    const minutesOffset = String(absoluteOffset % 60).padStart(2, '0');
    const sign = offset <= 0 ? '+' : '-';

    // Construct the final timestamp
    return `${datePart}T${timePart}${sign}${hoursOffset}:${minutesOffset}`;
}