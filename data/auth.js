let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$ERrMBARDprS1Ajt9snjS2uXaCuYv/enG3nWFldAQWsnUQ2G.XwKvu',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }
];

export async function createUser(username, password, name, email){
    const user = {
        id: '10',
        username,
        password,
        name,
        email,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    }
    users = [user, ...users]
    return users;
}

export async function login(username){
    const user = users.find((user) => user.username === username)
    return user;
}