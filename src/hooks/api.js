// hooks/api.js
const API_URL = process.env.REACT_APP_API_URL;

// Função para obter um novo token da API
async function fetchAuthToken() {
  const response = await fetch(`${API_URL}jwt-auth/v1/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch token');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.token;
}

// Função para obter o token armazenado ou buscar um novo se necessário
async function getToken() {
  let token = localStorage.getItem('token');

  if (!token) {
    // Se o token não estiver no localStorage, obtenha um novo
    token = await fetchAuthToken();
  }

  return token;
}

// Função para realizar chamadas autenticadas à API
export async function fetchWithAuth(endpoint) {
  let token = await getToken();

  let response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Se o token estiver expirado, tente obter um novo
  if (response.status === 403) {
    token = await fetchAuthToken();
    response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return response.json();
}

export { API_URL, getToken, fetchAuthToken };
