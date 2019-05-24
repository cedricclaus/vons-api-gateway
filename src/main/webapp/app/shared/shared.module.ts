import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VonsApiGatewaySharedLibsModule, VonsApiGatewaySharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [VonsApiGatewaySharedLibsModule, VonsApiGatewaySharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [VonsApiGatewaySharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VonsApiGatewaySharedModule {
  static forRoot() {
    return {
      ngModule: VonsApiGatewaySharedModule
    };
  }
}
