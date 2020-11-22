import { fetcher } from './fetcher';

function deserialize(serializedJavascript) {
    return eval('(' + serializedJavascript + ')');
}
export default async function auth(cookie) {
    const firebaseToken = deserialize(cookie.replace('__session=','')).firebaseToken;
    const { data: { user }, status } = await fetcher(`/api/me?token=${firebaseToken}`);

    if(status !== 200) {
        return false;
    }

    return [firebaseToken, user];
}
