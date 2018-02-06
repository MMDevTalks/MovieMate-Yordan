import { AuthService } from './services/auth.service';

export function accountLoader(authService: AuthService) {
    return () => (authService.getAccountAsync()).toPromise().catch((error) => {
        return true;
    });
}
