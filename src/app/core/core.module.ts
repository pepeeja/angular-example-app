import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env';
import { AppRoutingModule } from '../app-routing.module';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { InMemoryCache } from '@apollo/client/core';
import { HeaderComponent } from './components';

@NgModule({
  imports: [ApolloModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.bffUrl,
        }),
      }),
      deps: [HttpLink],
    },
  ],
  declarations: [HeaderComponent],
  exports: [AppRoutingModule, BrowserAnimationsModule, HeaderComponent],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
