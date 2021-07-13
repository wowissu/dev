/**
 * Return the first parameter
 *
 * @example
 * ```typescript
 * type Result = FirstArgument<(fst: number, sed: string, thr: object) => any>;
 * type Result = number
 * ```
 */
export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;

/**
 * Return the rest after first parameter
 *
 * @example
 * ```typescript
 * type Result = OmitFirstParamters<(fst: number, sed: string, thr: object) => any>;
 * type Result = [sed: string, thr: object]
 * ```
 */
export type OmitFirstParamters<T> = T extends (x: any, ...args: infer P) => any ? P : never;