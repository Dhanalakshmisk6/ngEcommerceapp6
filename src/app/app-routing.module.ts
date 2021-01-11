import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageNotfoundComponent } from "./components/page-notfound/page-notfound.component";
import { RegisterComponent } from "./components/register/register.component";
import { ShoppingcartComponent } from "./components/shoppingcart/shoppingcart.component";


const routes :Routes =[
  {path :'' ,redirectTo:'/shopping' ,pathMatch : 'full'},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  { path : 'shopping' , component : ShoppingcartComponent},
  {path : '**' , component : PageNotfoundComponent}
];


@NgModule(
  {
    imports:[
      RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
  }
)
export class ApproutingModule
{

}