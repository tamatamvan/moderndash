export type NoUnion<T, U = T> = T extends U ? [U] extends [T] ? T : never : never;