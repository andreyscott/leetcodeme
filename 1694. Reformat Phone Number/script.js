function reformatNumber(number) {
    // Remove all spaces and dashes
    number = number.split(' ').join('').split('-').join('');

    // Initialize an empty array to hold the blocks
    let blocks = [];

    // While there are more than 4 digits left, take blocks of 3
    while (number.length > 4) {
        blocks.push(number.substring(0, 3));
        number = number.substring(3);
    }

    // For the last 4 or fewer digits, follow the rules
    if (number.length === 4) {
        blocks.push(number.substring(0, 2));
        blocks.push(number.substring(2));
    } else {
        blocks.push(number);
    }

    // Join the blocks with dashes and return
    return blocks.join('-');
}