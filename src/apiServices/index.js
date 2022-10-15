const accountsAPI = 'http://localhost:3500/accounts';

export const getAccount = async (info) => {
    const url = `${accountsAPI}?username=${info.username}&password=${info.password}`;
    const response = await fetch(url);

    const account = await response.json();

    return account;
};
