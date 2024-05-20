import { UnionToAllPossibleTuples } from 'types';

type OneTwo = UnionToAllPossibleTuples<'one' | 'two'>;

export const correct: OneTwo = ['one', 'two'];

export const missing: OneTwo = ['one']; // error

export const mismatch: OneTwo = ['one', 'too']; // error

export const excessive: OneTwo = ['one', 'two', 'three']; // error
