export type Structure<R, N> = () => [string , Structure<R, N>] | null

export function structure<T>(): Structure<T, T> {
    return () => null;
}

export const walk: <R, N, K extends keyof N & string>(key: K, structure: Structure<R, N>) => Structure<R, N[K]> = (key, structure) =>
    () => [key, structure];

export function getIn<R, N>(structure: Structure<R, N>, root: R): N {
    let realized = structure();
    if (realized === null) {
        return root as unknown as N;
    }
    let [k, parent] = realized;
    return getIn(parent, root)[k];
}

export function assocIn<R, N>(structure: Structure<R, N>, root: R, value: N): R {
    let realized = structure();
    if (realized === null) {
        return value as unknown as R;
    }
    let [k, parent] = realized;
    return assocIn(parent, root, {...getIn(parent, root), [k]: value});
}

export function components<R, N>(structure: Structure<R, N>): string[] {
    let realized = structure();
    if (realized === null) {
        return [];
    }
    let [k, parent] = realized;
    return components(parent).concat(k);
}