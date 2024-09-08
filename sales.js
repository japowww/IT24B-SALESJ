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
  Food: ${this.food},
  Rating: ${this.rate}/10,
  Comment: ${this.review},
  Price: $${this.value.toFixed(2)},
  Location: ${this.area}
      `;
    }
  }
  
  console.log("food ratings nga way ayo:");
  const burgerniOscar = new FoodRating("Burger ni Oscar", 6, "Lami kaayooo, unang kagat tinapay lahat! way nada", 37.00, "Venus");
  const spaghettiNiWiggy = new FoodRating("Spaghetti ni Wiggy", 5, "Luspad pas suka, napay sauce nga kuwang og color", 89.00, "Mars");
  const Chickennginamo = new FoodRating(" Chicken ng ina mo", 8, "Lami sha ang lasa murag jollibe pero pariha ka dako sa fishball", 95.00, "KCF");
  const Milkteaniantea = new FoodRating(" Milk tea ni antea", 9, "Sherep ma crema pero ang boba kay bola-bola", 95.00, "Diha ra Unahan");

  


  
  console.log(burgerniOscar.displayReview());
  console.log(spaghettiNiWiggy.displayReview());
  console.log(Chickennginamo.displayReview());
  console.log(Milkteaniantea.displayReview());


  function ratersprofile(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
    this.displayProfile = function() {
      console.log(`RATERS PROFILE`);
      console.log(`
Name: ${this.name}`);
      console.log(`
Age: ${this.age}`);
      console.log(`
Gender: ${this.gender}`);
    };
  }
  

  const profile = new ratersprofile('Jaxparow', 99, 'Alien');
  profile.displayProfile();
