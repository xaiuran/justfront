import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BearingComponent } from './bearing/bearing.component';
import { from } from 'rxjs';
import { RadbearComponent } from './radbear/radbear.component';
import { BearComponent } from './bear/bear.component';
import { b8882Component } from './b8882/b8882.component';
import { b29241Component } from './b29241/b29241.component';
import { b8995Component } from './b8995/b8995.component';
import { AllbearComponent } from './allbear/allbear.component';
import { SearchPipe } from './search.pipe';
import { b8000nComponent } from './b8000n/b8000n.component';
import { b38000nComponent } from './b38000n/b38000n.component';
import { b160000Component } from './b160000/b160000.component';
import { b28000Component } from './b28000/b28000.component';
import { b180000Component } from './b180000/b180000.component';
import { b116000Component } from './b116000/b116000.component';
import { b126000Component } from './b126000/b126000.component';
import { b176000Component } from './b176000/b176000.component';
import { b210058Component } from './b210058/b210058.component';
import { b110058Component } from './b110058/b110058.component';
import { b410058Component } from './b410058/b410058.component';
import { b831Component } from './b831/b831.component';
import { b36000Component } from './b36000/b36000.component';
import { b36000k6Component } from './b36000k6/b36000k6.component';
import { B46000Component } from './b46000/b46000.component';
import { B66000Component } from './b66000/b66000.component';
import { B76000Component } from './b76000/b76000.component';
import { b36000k7Component } from './b36000k7/b36000k7.component';
import { b36000kComponent } from './b36000k/b36000k.component';
import { B46000kComponent } from './b46000k/b46000k.component';
import { B66000kComponent } from './b66000k/b66000k.component';
import { b310058Component } from './b310058/b310058.component';


const appRoutes: Routes = [
  {path: 'bearing', component: BearingComponent},
  {path: 'radbear', component: RadbearComponent},
  {path: 'bear', component: BearComponent},
  {path: 'b8882', component: b8882Component},
  {path: 'b8995', component: b8995Component},
  {path: 'b8000n', component: b8000nComponent},
  {path: 'b28000', component: b28000Component},
  {path: 'b160000', component: b160000Component},
  {path: 'b180000', component: b180000Component},
  {path: 'b116000', component: b116000Component},
  {path: 'b126000', component: b126000Component},
  {path: 'b176000', component: b176000Component},
  {path: 'b38000n', component: b38000nComponent},
  {path: 'allbear', component: AllbearComponent},
  {path: 'b110058', component: b110058Component},
  {path: 'b210058', component: b210058Component},
  {path: 'b310058', component: b310058Component},
  {path: 'b410058', component: b410058Component},
  {path: 'b36000', component: b36000Component},
  {path: 'b36000k6', component: b36000k6Component},
  {path: 'b36000k', component: b36000kComponent},
  {path: 'b36000k7', component: b36000k7Component},
  {path: 'B76000', component: B76000Component},
  {path: 'B46000', component: B46000Component},
  {path: 'B46000k', component: B46000kComponent},
  {path: 'B66000', component: B66000Component},
  {path: 'B66000k', component: B66000kComponent},
  {path: 'b29241', component: b29241Component}
]
@NgModule({
  declarations: [
    AppComponent,
    BearingComponent,
    RadbearComponent,
    BearComponent,
    b8882Component,
    b29241Component,
    b8995Component,
    b8000nComponent,
    AllbearComponent,
    SearchPipe,
    b38000nComponent,
    b160000Component,
    b28000Component,
    b180000Component,
    b116000Component,
    b126000Component,
    b176000Component,
    b210058Component,
    b110058Component,
    b410058Component,
    b831Component,
    b36000k6Component,
    b36000Component,
    B46000Component,
    B66000Component,
    B76000Component,
    b36000k7Component,
    b36000kComponent,
    B46000kComponent,
    B66000kComponent,
    b310058Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
