export interface GenericGetAllRepository<R>{
    getAll(): Promise<R[] | undefined>;
}