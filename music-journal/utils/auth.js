
import { fetcher } from './fetcher';

function deserialize(serializedJavascript) {
    return eval('(' + serializedJavascript + ')');
}
export default async function auth(cookie) {
    const firebaseToken = deserialize(cookie.replace('__session=','')).firebaseToken;
    const response = await fetcher(`${process.env.SITE_ADDRESS}/api/me?token=${firebaseToken}`);

    if(response.status !== 200) {
        return false;
    }
    const user = await response.json();
    return [firebaseToken, user.user];
}