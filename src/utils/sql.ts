export function preventInjection(str: string): string {
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/\'/g, '\\\'');
    
    return str;
};