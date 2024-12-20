const simpleGit = require('simple-git');
const path = require('path');

async function checkChangelog() {
    const git = simpleGit();
    const changelogPath = path.resolve('CHANGELOG.rst');

    try {
        // Find the first commit hash
        const firstCommit = (await git.raw(['rev-list', '--max-parents=0', 'HEAD'])).trim();

        // Check if CHANGELOG.rst has changed
        const diff = await git.diff([`${firstCommit}`, '--', changelogPath]);

        if (diff) {
            console.log('CHANGELOG.rst has been modified.');
            process.exit(0); // Successful exit
        } else {
            console.error('ERROR: CHANGELOG.rst has not been modified!');
            process.exit(1); // Fail exit
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
        process.exit(1);
    }
}

checkChangelog();
