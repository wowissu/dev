import { NoRepeats } from 'types';

export const arrayContains = <T>() => <U extends NoRepeats<U> & readonly T[]>(
  u: (U | [never]) & ([T] extends [U[number]] ? unknown : never)
) => u;