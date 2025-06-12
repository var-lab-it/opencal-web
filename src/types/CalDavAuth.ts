export type CalDavAuth = {
    id: number,
    enabled: boolean,
    baseUri: string,
    username: string,
    password: string,
}

export type CalDavAuths = Array<CalDavAuth>
