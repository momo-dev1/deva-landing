export const heroTextContainer = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

export const heroTextItem = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0
    },
};

export const heroImageContainer = {
    hidden: {
        x: 200,
    },
    show: {
        x: 0,
        transition: {
            staggerChildren: 1
        }
    }
}

export const heroImageItem = {
    hidden: {
        x:1000
    },
    show: {
        x:0
    }
}