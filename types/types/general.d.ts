/**
 * Compare fst. and snd. generic type and return thr. or fth.
 *
 * @example
 * ```typescript
 * type Result = IfEquals<number, number, number, string>; // number
 * type Result = IfEquals<number, string, number, string>; // string
 * type Result = IfEquals<number, string, number>; // never
 * ```
 */
export type IfEquals<X, Y, A=X, B=never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;

/**
 * Pick the keys of writable member.
 *
 * @example
 * ```typescript
 * type R = WritableKeys<{ readonly foo: 'foo', bar: 'bar', foobar: 'foobar' }>;
 * type R = "bar" | "foobar"
 * ```
 */
export type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T];

/**
 * Pick the keys of readonly member.
 *
 * @example
 * ```typescript
 * type R = ReadonlyKeys<{ readonly foo: 'foo', bar: 'bar', foobar: 'foobar' }>;
 * type R = "foo"
 * ```
 */
export type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
}[keyof T];

/**
 * Turn Union To Intersection
 *
 * @example
 * ```typescript
 * type R = UnionToIntersection<A | B>
 * type R = A & B
 * ```
 */
type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends ((k: infer U) => void) ? U : never;
