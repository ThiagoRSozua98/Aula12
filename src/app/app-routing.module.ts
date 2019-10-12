import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NovoProdutosComponent } from './novo-produtos/novo-produtos.component';
import { ContentComponent} from './content/content.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'novo-produto',
    component: NovoProdutosComponent
  },
  {
    path: '',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
