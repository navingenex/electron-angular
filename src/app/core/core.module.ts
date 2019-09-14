import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,MatMenuModule,MatButtonModule,MatIconModule
  ],
  exports:[MatToolbarModule,MatMenuModule,MatButtonModule,MatIconModule],
  declarations: [CoreComponent]
})
export class CoreModule { }
