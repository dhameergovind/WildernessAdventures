import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule, MatListModule } from '@angular/material';

@NgModule({

    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatListModule
    ]
  })
  export class AppMaterialModule { }