import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router'

import { ProductListComponent } from './product-list.component'
import { ProductDetailComponent } from './product-detail.component'
import { ProductFilterPipe } from './product-filter.pipes'
import { ProductDetailGuard } from './product-guard.service'
import { ProductService } from './product.service'
import { SharedModule } from '../shared/shared.module'
import { ProductRoutingModule } from './product-routing.module'

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe        
    ],
    imports: [        
        SharedModule,
        ProductRoutingModule
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule{

}
