function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}

// API simulation
Person.prototype.fetchFavFoods = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(this.foods)
        }, 200
        )
    })
}

describe('mocking learning ', () => {
    test('mocks a reg function ', () => {
        const fetchDogs = jest.fn();
        fetchDogs('argument');
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('argument');
        expect(fetchDogs).toHaveBeenCalledTimes(1);
        fetchDogs();
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });

    test('Can create a person ', () => {
        const me = new Person('Wilber', ['Hod Dogs', 'Hamburgers', 'Sushi']);
        expect(me.name).toBe('Wilber');
    });

    test('Can fetch foods ', async () => {
        const me = new Person('Wilber', ['Hod Dogs', 'Hamburgers', 'Sushi']);
        const favFoods = await me.fetchFavFoods();
        expect(favFoods).toContain('Sushi')
    })
})
