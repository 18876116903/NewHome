module.exports = {

    prd: {
        port: 80
    },
    dev: {
        port: 5000
    },

    get(key){
        if (process.env.NODE_ENV !== 'production') {
            return this.dev[key]
        } else {
            return this.prd[key]
        }
    }
    
}