export const openEyes = () => {
    return {
        style: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: '#fff',
            border: '1px solid #000',
        },
        timer: Math.random() * 3000 + 2000,
        duration: 0.1,
    }
}

export const closeEyes = () => {
    return {
        style: {
            width: 200,
            height: Math.random() * 1,
            borderRadius: 50,
            border: '1px solid #000',
        },
        timer: 50,
        duration: 0.05,
    }
}

export default {
    animation: [openEyes, closeEyes]
}

