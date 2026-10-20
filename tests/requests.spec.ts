import { expect } from 'chai';
import { APIRequests, RequestFunction } from '../src';

const calls: string[] = [];

const requestFunction: RequestFunction = <T>(url: string, query: string) => {
    calls.push(url + query);
    return Promise.resolve(null as unknown as T);
};

describe('APIRequests', () => {
    const api = new APIRequests(requestFunction);

    beforeEach(() => {
        calls.length = 0;
    });

    it('Uses the HTTPS endpoint', async () => {
        await api.webGetLines();
        expect(calls[0]).to.match(/^https:\/\/telematics\.oasa\.gr\/api\/\?act=/);
    });

    it('getDailySchedule passes the line code as "line_code"', async () => {
        await api.getDailySchedule('1151');
        expect(calls[0]).to.match(/act=getDailySchedule&line_code=1151$/);
    });

    it('getClosestStops passes latitude as p1 and longitude as p2', async () => {
        await api.getClosestStops('37.9838', '23.7275');
        expect(calls[0]).to.match(/act=getClosestStops&p1=37\.9838&p2=23\.7275$/);
    });
});
