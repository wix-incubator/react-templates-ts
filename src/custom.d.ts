// declare module "*.rt" {
//     const content: any;
//     export default content;
//     export
// }

declare module "*.rt" {
    const content:Function;
    export default content;
}