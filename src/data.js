export const sellers = {
    alice: {
        id: 'alice',
        storeName: "Alice's Fruit Store",
        description: "Fruits n' stuff",
        avatarSrc: '/assets/alice.jpg',
    },
    bob: {
        id: 'bob',
        storeName: 'Fruit Bazaar, by Bob',
        description: 'Imported fruit from across the world!',
        avatarSrc: '/assets/bob.jpg',
    },
};

export const items = {
    a: {
        id: 'a',
        name: 'Avocado',
        latinName: 'Persea americana',
        description:
            "An oddly creamy fruit. Surprisingly high in protein. Has a big pit in the middle.  You're not supposed to eat the rind. Millenials like to put it on toast, for reasons not entirely understood.",
        imageSrc: '/assets/avocado.jpg',
        countryOfOrigin: 'Mexico',
        sellerId: 'alice',
        price: 8,
        quantity: 2,
    },
    b: {
        id: 'b',
        name: 'Banana',
        latinName: 'Musa acuminata',
        description: "The most convenient of all fruit. Take it on the go; it's super easy to peel. No utencils needed. No need to clean your hands before, nor after eating. All hail banana.",
        imageSrc: '/assets/banana.jpg',
        countryOfOrigin: 'Ecuador',
        sellerId: 'bob',
        price: 5,
        quantity: 500,
    },
    c: {
        id: 'c',
        name: 'Cherry',
        latinName: 'Prunus avium',
        description: "You're a big winner if you get 3 of these on a slot machine!",
        imageSrc: '/assets/cherry.jpg',
        countryOfOrigin: 'Turkey',
        sellerId: 'bob',
        price: 3.49,
        quantity: 0,
    },
    d: {
        id: 'd',
        name: 'Lime',
        latinName: 'Citrus aurantiifolia',
        description: 'A citrus most foul.',
        imageSrc: '/assets/lime.jpg',
        countryOfOrigin: 'Spain',
        sellerId: 'alice',
        price: 0.99,
        quantity: 5,
    },
    e: {
        id: 'e',
        name: 'Orange',
        latinName: 'Citrus × sinensis',
        description: 'Frequently turned into juice.',
        imageSrc: '/assets/orange.jpg',
        countryOfOrigin: 'United States',
        sellerId: 'alice',
        price: 1.49,
        quantity: 28,
    },
    f: {
        id: 'f',
        name: 'Blue Lemon',
        latinName: 'Citrus limon caeruleum',
        description:
            'Fantastical, mythological item. Exists only in other universes.  Bob has his secrets, but he recently ran out of paint.',
        imageSrc: '/assets/blue-lemon.jpg',
        countryOfOrigin: 'Valhalla',
        sellerId: 'bob',
        price: 400,
        quantity: 0,
    },
};
