class Model {
    key: any;
    value: any;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
export class CacheUtis {
    private cache: Array<Model>;
    constructor() {
        if (this.cache === null || this.cache === undefined) {
            this.cache = [];
        }
    }
    getValueCache(key: any): any {
        return this.cache.find((v) => v.key = key);
    }

    setValueCache(key: any, value: any): void {
        this.cache.push(new Model(key, value));
    }

    clearCacheByKey(key: any): void {
        this.cache.filter((c) => c.key = key).map((c) => c = null );
    }
    clearCache(): void {
        this.cache = [];
    }
}
