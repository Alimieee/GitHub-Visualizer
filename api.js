// 🛡️ THE NETWORK & SECURITY MODULE
// Dedicated entirely to calling the cloud API and handling rate-limit locks

export async function fetchGitHubDataFromAPI(username, handleRateLimitCountdown) {
    const profileUrl = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    // Fire off both API network fetch operations concurrently
    const [profileResponse, reposResponse] = await Promise.all([
        fetch(profileUrl),
        fetch(reposUrl)
    ]);

    // Defensive Rate-Limit Check Interception
    if (profileResponse.status === 403 || reposResponse.status === 403) {
        const resetTimeHeader = profileResponse.headers.get('x-ratelimit-reset') || reposResponse.headers.get('x-ratelimit-reset');
        if (resetTimeHeader) {
            handleRateLimitCountdown(parseInt(resetTimeHeader));
        } else {
            alert("❌ Rate limit reached. Please try again in a few minutes.");
        }
        return null; // Return null to signal the controller to stop execution
    }

    if (profileResponse.status === 404) {
        alert("❌ GitHub user not found! Check the spelling.");
        return null;
    }
    if (!profileResponse.ok || !reposResponse.ok) {
        alert("❌ Something went wrong calling the GitHub API.");
        return null;
    }

    // Return the raw data packets back to the controller
    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return { profileData, reposData };
}