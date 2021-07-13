# @wowissu/types

## **general**

### `IfEquals<X, Y, A=X, B=never>`

Compare fst. and snd. generic type and return thr. or fth.

```typescript
type R = IfEquals<number, number, number, string>; // number
type R = IfEquals<string, string>; // string
type R = IfEquals<number, string, number, string>; // string
type R = IfEquals<number, string, number>; // never
```

### `WritableKeys<T>`

Pick the keys of writable member.

```typescript
type R = WritableKeys<{ readonly foo: 'foo', bar: 'bar', foobar: 'foobar' }>;
type R = "bar" | "foobar"
```

### `ReadonlyKeys<T>`

Pick the keys of readonly member.

```typescript
type R = ReadonlyKeys<{ readonly foo: 'foo', bar: 'bar', foobar: 'foobar' }>;
type R = "foo"
```

## **function**

### `FirstArgument<T>`

Return the first parameter

```typescript
type Result = FirstArgument<(fst: number, sed: string, thr: object) => any>; // number
type Result = number
```

### `OmitFirstParamters<T>`

Return the rest after first parameter

```typescript
type Result = OmitFirstParamters<(fst: number, sed: string, thr: object) => any>;
type Result = [sed: string, thr: object]
```

## **object**

### `ValueOf<T>`

Get values type.

```typescript
type Result = Valueof<{ foo: string, bar: number }>; // string | number
```

### `KeysOfType<T, TProp>`

Get type matched keys.

```typescript
type Result = KeysOfType<{ foo: string, bar: number }, string>; // 'foo'
```

### `FilterOfType<T, TProp>`

Get filter members by type.

```typescript
type Result = FilterOfType<{ foo: string, bar: number }, string>; // { foo: string }
```

### `RequireAtLeastOne<T, K extends keyof T>`

Require at least one member from <T>

```typescript
type Target = { foo?: string, bar?: number, other: string }
type TargetLeastOne = RequireAtLeastOne<Target, 'foo' | 'bar'>

// passed
const objA: TargetLeastOne = { foo: 'foo', other: 'other' };
const objB: TargetLeastOne = { bar: 0, other: 'other' };
```

### `ArrayElement<T>`

Get type of element from array

```typescript
type Result = ArrayElement<[ number, string ]> => number | string
```

### `ArrayElementMemberType<T, M>`

Get type from member in element of array

```typescript
type TodoList = Array<{ foo: number, bar: string }>
type Result = ArrayElementMemberType<TodoList, 'foo'> // number
```

## **promise**

### `Await<T>`

Get type from `Promise<T>`

```typescript
type Result = Await<Promise<string>> === string
```

### `AwaitReturnType<T>`

Get type from call who return the Promise

```typescript
type Resoult = AwaitReturnType<() => Promise<string>> === string
```
