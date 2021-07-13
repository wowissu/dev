/**
 * Get type from Promise<T>
 *
 * @example
 * ```typescript
 * type Result = Await<Promise<string>> === string
 * ```
 */
export type Await<T> = T extends { then(onfulfilled?: (value: infer U) => unknown): unknown; } ? U : T;

/**
 * Get type from call who return the Promise
 *
 * @example
 * ```typescript
 * type Resoult = AwaitReturnType<() => Promise<string>> === string
 * ```
 */
export type AwaitReturnType<T extends (...args: any) => any> = Await<ReturnType<T>>;