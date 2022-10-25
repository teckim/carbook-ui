import http from '../../modules/http';

export function login(credencials) {
  return http.post('auth/login', credencials);
}

export function register(user) {
  return http.post('users', { user });
}
