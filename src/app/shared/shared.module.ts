import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLetDirective } from './directives/ng-let.directive';
import { YoutubePlayerComponent } from './components';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [NgLetDirective, SafePipe, YoutubePlayerComponent],
  exports: [CommonModule, NgLetDirective, SafePipe, YoutubePlayerComponent],
})
export class SharedModule {}
