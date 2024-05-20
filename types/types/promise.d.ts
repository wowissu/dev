/**
 * **@deprecated** Instead by Awaited<Type> after [Typescript@4.5](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)
 *
 * Get type from Promise<T>
 *
 * @example
 * ```typescript
 * type Result = Await<Promise<string>> === string
 * ```
 */
export type Await<T> = T extends { then(onfulfilled?: (value: infer U) => unknown): unknown, } ? U : T;

/**
 * Get type from call who return the Promise
 * @deprecated
 * @example
 * ```typescript
 * type Result = AwaitReturnType<() => Promise<string>> === string
 * ```
 */
export type AwaitReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;