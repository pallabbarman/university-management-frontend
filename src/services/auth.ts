import { authKey } from '@/constants/storage';
import { decodedToken } from '@/utils/jwt';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey);

    if (authToken) {
        const decodedData = decodedToken(authToken);

        return decodedData;
    } else {
        return null;
    }
};

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);

    return !!authToken;
};

export const logOut = (key: string) => {
    return localStorage.removeItem(key);
};
