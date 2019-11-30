class Github {
    constructor() {
        this.client_id = "8f33a774072358091fff";
        this.client_secret = "11e90a0cc65a47601d2f2614199de753ba7d362c";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}