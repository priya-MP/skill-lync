import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomerModule } from './customer/customer.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  { path: "home", redirectTo: "/dashboard", pathMatch: "full" }, //Route redirection
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductComponent },
  { path: "inventory", component: InventoryComponent, canDeactivate: [AuthGuard] },
  { path: "sales", component: SalesComponent },
  { path: "sales/:id", component: SalesComponent },


  { path: "customer", loadChildren: () => CustomerModule, canLoad: [AuthGuard]  },   //Module routing
  { path: "users", loadChildren: () => UsersModule, canActivateChild: [AuthGuard] },


  { path: "**", component: NotfoundComponent }  //Error routing


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
