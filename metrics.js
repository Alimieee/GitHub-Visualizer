// 📊 THE DATA MATH & CALCULATION MODULE
// Dedicated entirely to processing raw arrays and extracting statistical data science insights

export function processRepositoryData(repos) {
    const languageMap = {};

    // Sort all project objects from highest to lowest star counts
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    const repoNames = [];
    const starCounts = [];

    let totalStarsAccumulator = 0;
    let totalForksAccumulator = 0;

    // Advanced behavioral tracking counters
    let originalRepoCount = 0;
    let abandonedRepoCount = 0;
    const currentTimestampSeconds = new Date().getTime();
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

    repos.forEach(repo => {
        // Build the language map distribution values matrix
        if (repo.language) {
            if (languageMap[repo.language]) {
                languageMap[repo.language]++;
            } else {
                languageMap[repo.language] = 1;
            }
        }

        totalStarsAccumulator += repo.stargazers_count;
        totalForksAccumulator += repo.forks_count;

        // Metric Evaluation 1: Evaluate self-created code
        if (repo.fork === false) {
            originalRepoCount++;
        }

        // Metric Evaluation 2: Evaluate last touched timestamp
        const lastPushTimestamp = new Date(repo.pushed_at).getTime();
        const deltaTimeGap = currentTimestampSeconds - lastPushTimestamp;

        if (deltaTimeGap > oneYearInMilliseconds) {
            abandonedRepoCount++;
        }

        repoNames.push(repo.name);
        starCounts.push(repo.stargazers_count);
    });

    const totalRepositoriesCount = repos.length || 1;
    const originalityPercentage = Math.round((originalRepoCount / totalRepositoriesCount) * 100);
    const abandonmentPercentage = Math.round((abandonedRepoCount / totalRepositoriesCount) * 100);

    const languageLabels = Object.keys(languageMap);
    const languageData = Object.values(languageMap);

    // Package all calculated metrics into a neat vector object to send back to the master controller
    return {
        totalStars: totalStarsAccumulator.toLocaleString(),
        totalForks: totalForksAccumulator.toLocaleString(),
        originalityRate: `${originalityPercentage}%`,
        abandonmentRate: `${abandonmentPercentage}%`,
        languageLabels,
        languageData,
        topRepoNames: repoNames.slice(0, 5),
        topStarCounts: starCounts.slice(0, 5)
    };
}