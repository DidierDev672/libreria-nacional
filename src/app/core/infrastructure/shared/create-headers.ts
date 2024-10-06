import { HttpHeaders } from '@angular/common/http';

export function createHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Body': '',
  });
}

export function createHeaderResponse(
  additionalHeaders: Record<string, string> = {},
): HttpHeaders {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    ...additionalHeaders,
  });

  return headers;
}
