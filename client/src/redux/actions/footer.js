export const onFooter = () => {
    return {
        type: 'ON_FOOTER',
        payload: false
    };
};

export const offFooter = () => {
    return {
        type: 'OFF_FOOTER',
        payload: true
    };
};
