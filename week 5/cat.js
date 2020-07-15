let cat = {
    name: "Kitty",
    tiredness: '70%',
    hunger: '60%',
    lonliness: '30%',
    happiness: false,
    feed(needToEat) {
        if(needToEat > this.hunger){
            return this.name + ' needs to feed.';
        }else{
            return this.name + ' is not hungry.';
        }
    },
    sleep(notTired) {
        if(notTired < this.tiredness){
            return this.name + ' is bursting with energy.';
        }else{
            return this.name + ' needs to sleep.';
        }
    },
    pet() {
        this.lonliness++ && this.happiness === false;
            return this.name + ' is so lonely and unhappy, please pet her.';
    },
    feelings() {
        console.log(cat.feed(), cat.sleep(), cat.pet());
    }
}

cat.feelings();