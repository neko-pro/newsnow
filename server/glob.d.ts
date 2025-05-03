/* eslint-disable */

declare module 'glob:./sources/{*.ts,**/index.ts}' {
  export const fastbull: typeof import('./sources/fastbull')
  export const github: typeof import('./sources/github')
  export const hackernews: typeof import('./sources/hackernews')
  export const producthunt: typeof import('./sources/producthunt')
}
