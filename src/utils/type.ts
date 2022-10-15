type emptyString = "";

type Nullable<T> = T | null;

type Undefined<T> = T | undefined;

type Empty<T> = T | emptyString;

export type { emptyString, Nullable, Undefined, Empty };
