import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//paginas agregadas para rutas
import { HomePageComponent } from './home-page/home-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { NotFoundPageComponent} from './not-found-page/not-found-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
//se declaran las variables para enrutar en un navbar o menu
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'price', component: PricePageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', component: NotFoundPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
