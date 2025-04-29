import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  const user = authService.getUser(); // Doit retourner un objet { roles: string[] } ou null
  const isLoggedIn = authService.isLoggedIn();

  console.log('Utilisateur connecté:', user);
  console.log('Route demandée:', state.url);

  // Vérifie si l'utilisateur est connecté
  if (!isLoggedIn || !user || !user.roles) {
    router.navigate(['/login']);
    return false;
  }

  // Vérifie les rôles si la route en exige
  const requiredRoles: string[] = route.data?.['roles'];
  console.log('Rôles requis:', requiredRoles);

  if (requiredRoles && !requiredRoles.some(role => user.roles.includes(role))) {
    router.navigate(['/login']);
    return false;
  }

  // Accès autorisé
  return true;
};
