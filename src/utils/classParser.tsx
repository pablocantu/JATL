const classParser = (styles: string): string => {
    if (!styles) return '';
    return styles.replace(/\s{2,}|\n/g, ' ').trim();
}

export default classParser;