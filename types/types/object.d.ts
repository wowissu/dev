/**
 * Get values type.
 *
 * @example
 * ```typescript
 * type Result = Valueof<{ foo: string, bar: number }>; // string | number
 * ```
 */
export type ValueOf<T> = T[keyof T];

/**
 * Get type matched keys.
 *
 * @example
 * ```typescript
 * type Result = KeysOfType<{ foo: string, bar: number }, string>; // 'foo'
 * ```
 */
export type KeysOfType<T, TProp> = Exclude<{ [P in keyof T]: T[P] extends TProp ? P : never }[keyof T], undefined>;

/**
 * Get filter members by type.
 *
 * @example
 * ```typescript
 * type Result = FilterOfType<{ foo: string, bar: number }, string>; // { foo: string }
 * ```
 */
export type FilterOfType<T, TProp> = Omit<{ [P in keyof T]: T[P] extends TProp ? T[P] : never }, KeysOfType<{ [P in keyof T]: T[P] extends TProp ? T[P] : never }, never | undefined>>;

/**
 * Require at least one member from <T>
 *
 * @example
 * ```typescript
 * type Target = { foo?: string, bar?: number, other: string }
 * type TargetLeastOne = RequireAtLeastOne<Target, 'foo' | 'bar'>
 *
 * // passed
 * const objA: TargetLeastOne = { foo: 'foo', other: 'other' };
 * const objB: TargetLeastOne = { bar: 0, other: 'other' };
 * ```
 */
export type RequireAtLeastOne<T, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> & { [key in K]-?: Required<Pick<T, key>> & Partial<Pick<T, Exclude<K, key>>>; }[K];

/**
 * Get type of element from array
 *
 * @example
 * ```typescript
 * type Result = ArrayElement<[ number, string ]> => number | string
 * ```
 */
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

/**
 * Get type from member in element of array
 *
 * @example
 * ```typescript
 * type TodoList = Array<{ foo: number, bar: string }>
 *
 * type Result = ArrayElementMemberType<TodoList, 'foo'> // number
 * ```
 */
export type ArrayElementMemberType< T extends readonly unknown[], M extends keyof ArrayElement<T> > = T extends readonly unknown[] ? ArrayElement<T>[M] : never;
