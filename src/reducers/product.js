var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: "./../img/iphone-7plus.png",
        description: 'Điện thoại',
        price: 500,
        inventory: 50,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 12 Pro',
        image: "./../img/iphone12pro.jpg",
        description: 'Điện thoại',
        price: 1170,
        inventory: 20,
        rating: 5
    },
    {
        id: 3,
        name: 'Airpod Max',
        image: './../../img/airpodmax.jpg',
        description: 'Phụ kiện',
        price: 560,
        inventory: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'Samsung Galaxy',
        image: '',
        description: 'Điện thoại',
        price: 1000,
        inventory: 5,
        rating: 3
    },
    {
        id: 5,
        name: 'Samsung Galaxy',
        image: '',
        description: 'Điện thoại',
        price: 1000,
        inventory: 5,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}


export default products;