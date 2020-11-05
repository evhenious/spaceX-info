import { Store, set, get } from 'idb-keyval';
import { createHash } from 'crypto';

const dbName = 'spacex-info';
const storeName = 'graphql';

class Storage {
  private store: Store;

  constructor() {
    this.store = new Store(dbName, storeName);
  }

  private async calculateKey(request: Request) {
    const { query, variables } = await request.json();
    const serializedReqQuery = createHash('sha256')
      .update(JSON.stringify(query) + JSON.stringify(variables))
      .digest('base64');

    return serializedReqQuery;
  }

  public async saveCache(request: Request, response: Response) {
    const key = await this.calculateKey(request);

    const respBody = await response.json();

    set(key, respBody, this.store);
  }

  public async getCache(request: Request) {
    const key = await this.calculateKey(request);

    const data = await get(key, this.store);
    if (data) {
      return new Response(JSON.stringify(data));
    }

    console.warn('No response in cache');
    return new Response(JSON.stringify({}));
  }
}

export default Storage;
