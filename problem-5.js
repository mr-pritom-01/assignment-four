function canPay(retailNotes, chipPrice) {
    const totalAmount = retailNotes.reduce((sum, note) => sum + note, 0);
    return totalAmount >= chipPrice;
}

// Example usage
const retailNotes = [1, 2, 5];
const chipPrice1 = 5;
const chipPrice2 = 10;

// const validToBuy = 

// console.log(`Can pay for chips with ${chipPrice1} taka? ${canPay(retailNotes, chipPrice1)}`);
// console.log(`Can pay for chips with ${chipPrice2} taka? ${canPay(retailNotes, chipPrice2)}`);