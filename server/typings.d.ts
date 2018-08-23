// declare module 'process' {
//   interface ProcessEnv {
//     NODE_ENV: string
//   }
// }

declare module '*.config.js' {
  const content: object;
  export default content;
}
