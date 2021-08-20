/**
 * Declare SCSS files as modules so we can import them into TS files and use their content
 */
declare module '*.scss'
{
    const content: any;
    export = content;
}
