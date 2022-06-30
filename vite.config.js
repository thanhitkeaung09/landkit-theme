const { resolve } = require('path')

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'page.html'),
                blog: resolve(__dirname, 'account.html'),
                profile: resolve(__dirname, 'docs.html')
            }
        }
    }
}
