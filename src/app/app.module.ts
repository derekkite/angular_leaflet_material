import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeafletappComponent} from './leafletapp/leafletapp.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {OpenstreetmapModule} from './openstreetmap/openstreetmap.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
    declarations: [
        AppComponent,
        LeafletappComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        OpenstreetmapModule,
        LeafletModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
