import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { take } from 'rxjs/operators';

import * as fromReducers from '../../cart/store/reducers/index';
import { Cart } from '../../model/cart.model';
import { CartActions } from '../store/actions';
import * as DeprecatedCartActions from '../store/actions/cart.action';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';

const testCart: Cart = {
  code: 'xxx',
  guid: 'xxx',
  totalItems: 0,
  entries: [{ entryNumber: 0, product: { code: '1234' } }],
  totalPrice: {
    currencyIso: 'USD',
    value: 0,
  },
  totalPriceWithTax: {
    currencyIso: 'USD',
    value: 0,
  },
  user: { uid: 'test' },
};

describe('MultiCartService', () => {
  let service: MultiCartService;
  let store: Store<StateWithMultiCart>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(
          'multi-cart',
          fromReducers.getMultiCartReducers()
        ),
      ],
      providers: [MultiCartService],
    });

    store = TestBed.get(Store as Type<Store<StateWithMultiCart>>);
    service = TestBed.get(MultiCartService as Type<MultiCartService>);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getCart', () => {
    it('should return cart with given id', () => {
      let result;
      service.getCart('xxx').subscribe(cart => {
        result = cart;
      });

      expect(result).toEqual(undefined);

      store.dispatch(
        new CartActions.LoadMultiCartSuccess({
          userId: 'userId',
          extraData: {
            active: true,
          },
          cart: testCart,
        })
      );

      expect(result).toEqual(testCart);
    });
  });

  describe('getCartEntity', () => {
    it('should return cart entity with given id', () => {
      let result;
      service.getCartEntity('xxx').subscribe(cartEntity => {
        result = cartEntity;
      });

      expect(result).toEqual({
        loading: false,
        success: false,
        error: false,
        value: undefined,
        processesCount: 0,
      });

      store.dispatch(
        new CartActions.LoadMultiCartSuccess({
          userId: 'userId',
          extraData: {
            active: true,
          },
          cart: testCart,
        })
      );

      expect(result).toEqual({
        loading: false,
        success: true,
        error: false,
        value: testCart,
        processesCount: 0,
      });
    });
  });

  describe('isStable', () => {
    it('should return true when cart is stable', done => {
      store.dispatch(
        new CartActions.LoadMultiCartSuccess({
          userId: 'userId',
          extraData: {
            active: true,
          },
          cart: testCart,
        })
      );
      service
        .isStable('xxx')
        .pipe(take(1))
        .subscribe(isStable => {
          expect(isStable).toBe(true);
          done();
        });
    });

    it('should return false when there are pending processes', done => {
      store.dispatch(
        new CartActions.LoadMultiCart({
          userId: 'userId',
          cartId: 'xxx',
        })
      );
      service
        .isStable('cartId')
        .subscribe(isStable => {
          expect(isStable).toBe(false);
          done();
        })
        .unsubscribe();
    });
  });

  describe('createCart', () => {
    it('should create cart and return observable with cart', () => {
      let result;

      service.createCart({ userId: 'userId' }).subscribe(cart => {
        result = cart;
      });

      expect(store.dispatch).toHaveBeenCalledWith(
        new DeprecatedCartActions.CreateCart({
          userId: 'userId',
          extraData: undefined,
          oldCartId: undefined,
          toMergeCartGuid: undefined,
        })
      );

      expect(result).toEqual({
        loading: false,
        error: false,
        success: false,
        value: undefined,
        processesCount: 0,
      });

      store.dispatch(new CartActions.SetFreshCart(testCart));

      expect(result).toEqual({
        processesCount: 0,
        loading: false,
        error: false,
        success: true,
        value: testCart,
      });
    });
  });

  describe('loadCart', () => {
    it('should dispatch load cart action', () => {
      service.loadCart({
        cartId: 'cartId',
        userId: 'userId',
        extraData: {
          active: true,
        },
      });

      expect(store.dispatch).toHaveBeenCalledWith(
        new DeprecatedCartActions.LoadCart({
          cartId: 'cartId',
          userId: 'userId',
          extraData: {
            active: true,
          },
        })
      );
    });
  });

  describe('getEntries', () => {
    it('should return cart entries', () => {
      let result;
      service.getEntries('xxx').subscribe(cart => {
        result = cart;
      });

      expect(result).toEqual([]);

      store.dispatch(
        new CartActions.LoadMultiCartSuccess({
          userId: 'userId',
          extraData: {
            active: true,
          },
          cart: testCart,
        })
      );

      expect(result).toEqual(testCart.entries);
    });
  });

  describe('addEntry', () => {
    it('should dispatch addEntry action', () => {
      service.addEntry('userId', 'cartId', 'productCode', 2);

      expect(store.dispatch).toHaveBeenCalledWith(
        new CartActions.CartAddEntry({
          cartId: 'cartId',
          userId: 'userId',
          productCode: 'productCode',
          quantity: 2,
        })
      );
    });
  });

  describe('addEntries', () => {
    it('should dispatch addEntry action for each product', () => {
      service.addEntries('userId', 'cartId', [
        { productCode: 'productCode', quantity: 2 },
        { productCode: 'productCode2', quantity: 3 },
      ]);
      // @ts-ignore
      expect(store.dispatch.calls.argsFor(0)[0]).toEqual(
        new CartActions.CartAddEntry({
          cartId: 'cartId',
          userId: 'userId',
          productCode: 'productCode',
          quantity: 2,
        })
      );
      // @ts-ignore
      expect(store.dispatch.calls.argsFor(1)[0]).toEqual(
        new CartActions.CartAddEntry({
          cartId: 'cartId',
          userId: 'userId',
          productCode: 'productCode2',
          quantity: 3,
        })
      );
    });
  });

  describe('removeEntry', () => {
    it('should dispatch RemoveEntry action', () => {
      service.removeEntry('userId', 'cartId', 0);
      expect(store.dispatch).toHaveBeenCalledWith(
        new CartActions.CartRemoveEntry({
          cartId: 'cartId',
          userId: 'userId',
          entry: 0,
        })
      );
    });
  });

  describe('updateEntry', () => {
    it('should dispatch UpdateEntry action for quantity > 0', () => {
      service.updateEntry('userId', 'cartId', 0, 2);

      expect(store.dispatch).toHaveBeenCalledWith(
        new CartActions.CartUpdateEntry({
          userId: 'userId',
          cartId: 'cartId',
          entry: 0,
          qty: 2,
        })
      );
    });

    it('should dispatch RemoveEntry action for quantity = 0', () => {
      spyOn(service, 'removeEntry').and.callThrough();

      service.updateEntry('userId', 'cartId', 0, 0);

      expect(service.removeEntry).toHaveBeenCalledWith('userId', 'cartId', 0);
    });
  });

  describe('getEntry', () => {
    it('should return cart entry', () => {
      let result;
      service
        .getEntry('xxx', testCart.entries[0].product.code)
        .subscribe(cart => {
          result = cart;
        });

      expect(result).toEqual(undefined);

      store.dispatch(
        new CartActions.LoadMultiCartSuccess({
          userId: 'userId',
          extraData: {
            active: true,
          },
          cart: testCart,
        })
      );

      expect(result).toEqual(testCart.entries[0]);
    });
  });

  describe('assignEmail', () => {
    it('should dispatch AddEmailToCart action', () => {
      service.assignEmail('cartId', 'userId', 'test@email.com');

      expect(store.dispatch).toHaveBeenCalledWith(
        new DeprecatedCartActions.AddEmailToCart({
          userId: 'userId',
          cartId: 'cartId',
          email: 'test@email.com',
        })
      );
    });
  });

  describe('deleteCart', () => {
    it('should dispatch DeleteCart action', () => {
      service.deleteCart('cartId', 'userId');

      expect(store.dispatch).toHaveBeenCalledWith(
        new DeprecatedCartActions.DeleteCart({
          userId: 'userId',
          cartId: 'cartId',
        })
      );
    });
  });
});