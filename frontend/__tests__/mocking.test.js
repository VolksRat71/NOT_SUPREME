function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}

// API simulation
Person.prototype.fetchFavFoods = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.foods)
        }, 2000
        )
    })
}

describe('mocking learning ', () => {
    it('mocks a reg function ', () => {
        const fetchDogs = jest.fn();
        fetchDogs('argument');
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('argument');
        expect(fetchDogs).toHaveBeenCalledTimes(1);
        fetchDogs();
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });

    it('Can create a person ', () => {
        const me = new Person('Wilber', ['Hod Dogs', 'Hamburgers', 'Sushi']);
        expect(me.name).toBe('Wilber');
    });

    it('Can fetch foods ', async () => {
        const me = new Person('Wilber', ['Hod Dogs', 'Hamburgers', 'Sushi']);
        const favFoods = await me.fetchFavFoods();
        console.log(favFoods);
        expect(favFoods).toContain('Sushi')
    })


})
