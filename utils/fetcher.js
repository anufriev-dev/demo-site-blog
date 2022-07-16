// helper, обязательная обёртка для библиотеки - "swr"
export const fetcher = (...args) => fetch(...args).then(res => res.json()) 