const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class FoodRating {
    constructor(foodname, rating, comment, price, location) {
        this.food = foodname;
        this.rate = rating;
        this.review = comment;
        this.value = price;
        this.area = location;
    }

    displayReview() {
        return `
Food: ${this.food}
Rating: ${this.rate}/10
Comment: ${this.review}
Price: $${this.value.toFixed(2)}
Location: ${this.area}
        `;
    }
}

class RaterProfile {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    displayProfile() {
        return `
RATERS PROFILE
Name: ${this.name}
Age: ${this.age}
Gender: ${this.gender}
        `;
    }
}

function askQuestions() {
rl.question('Enter the rater\'s name: ', (userName) => {
rl.question('Enter the rater\'s age: ', (userAge) => {
rl.question('Enter the rater\'s gender: ', (userGender) => {
                const profile = new RaterProfile(userName, userAge, userGender);
                console.log(profile.displayProfile());

rl.question('Enter the food name: ', (foodName) => {
rl.question('Enter the rating (1-10): ', (rating) => {
rl.question('Enter the comment: ', (comment) => {
rl.question('Enter the price: ', (price) => {
rl.question('Enter the location: ', (location) => {
                                    const foodRating = new FoodRating(foodName, parseInt(rating), comment, parseFloat(price), location);
                                    console.log('\nFood Review:');
                                    console.log(foodRating.displayReview());

                                    rl.close();
});
});
 });
});
 });
});
});
});
}

askQuestions();