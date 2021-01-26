import * as usersService from '../../utilities/users-service';

export default function PuppyIndexPage() {
    
    async function handleCheckToken() {
        // Promise will resolve to a Date object
        const expDate = await usersService.checkToken();
        console.log(new Date(expDate));
    }

    return (
        <main>
            <h1>PuppyIndexPage</h1>
            <button onClick={handleCheckToken} variant="contained" color="primary">Check When My Login Expires</button>
        </main>
    );
}