export const versionInfo = (() => {
    try {
        return require('../../git-version.json');
    } catch {
        return { tag: 'v0.0.0', hash: 'dev'}
    }
})