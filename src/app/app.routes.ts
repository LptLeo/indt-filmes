import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './core/guards/auth-guard';
import { Hero } from './pages/hero/hero';
import { publicGuard } from './core/guards/public-guard';

export const routes: Routes = [

    // descomente as linhas abaixo para usar os guards

    { path: '', component: Hero, canActivate: [publicGuard] },
    { path: 'login', component: Login, canActivate: [publicGuard] },

    // Seguindo os exemplos acima, crie a rota para a página home protegida pelo authGuard
    { path: 'home', component: Home, canActivate: [authGuard] },
];
