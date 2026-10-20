import { RequestFunction } from './oasa-requests';

// Uses the global fetch (available in browsers and Node.js >= 18)
const defaultRequest: RequestFunction = async <T>(url: string, query: string) => {
    const res = await fetch(url + query);
    if (!res.ok) {
        throw new Error(`OASA API request "${query}" failed with status ${res.status}`);
    }

    return (await res.json()) as T;
};

export default defaultRequest;
