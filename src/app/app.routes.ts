import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // home
    {
        path: '',
        component: HomePageComponent
    },
    // products
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },
    // handling 404
    {
        path: '**',
        component: Error404PageComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
