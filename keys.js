// display message on console when loaded
console.log("\nthis is loaded");

var yelpAPIKey = {yelpAPIKey: process.env.YELPAPIKEY};
console.log('3333333333')
console.log(process.env.YELPAPIKEY);
console.log(yelpAPIKey);
// export data so it is available
exports.yelp = {
    yelpAPIKey: process.env.YELPAPIKEY
};

// export data so it is available
exports.database = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};
