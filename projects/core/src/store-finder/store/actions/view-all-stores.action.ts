import { StateUtils } from '../../../state/utils/index';
import { STORE_FINDER_DATA } from '../store-finder-state';

export const VIEW_ALL_STORES = '[StoreFinder] View All Stores';
export const VIEW_ALL_STORES_FAIL = '[StoreFinder] View All Stores Fail';
export const VIEW_ALL_STORES_SUCCESS = '[StoreFinder] View All Stores Success';

export class ViewAllStores extends StateUtils.LoaderLoadAction {
  readonly type = VIEW_ALL_STORES;
  constructor() {
    super(STORE_FINDER_DATA);
  }
}

export class ViewAllStoresFail extends StateUtils.LoaderFailAction {
  readonly type = VIEW_ALL_STORES_FAIL;
  constructor(public payload: any) {
    super(STORE_FINDER_DATA, payload);
  }
}

export class ViewAllStoresSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = VIEW_ALL_STORES_SUCCESS;
  constructor(public payload: any) {
    super(STORE_FINDER_DATA);
  }
}

export type ViewAllStoresAction =
  | ViewAllStores
  | ViewAllStoresFail
  | ViewAllStoresSuccess;
