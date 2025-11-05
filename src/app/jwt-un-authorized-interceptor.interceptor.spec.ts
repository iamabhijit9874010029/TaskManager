import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorizedInterceptorInterceptor } from './jwt-un-authorized-interceptor.interceptor';

describe('JwtUnAuthorizedInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtUnAuthorizedInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtUnAuthorizedInterceptorInterceptor = TestBed.inject(JwtUnAuthorizedInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
