function findAddress(obj) {
    const info = obj.street + ',' +obj.house + ','+obj.society;
    return info;
}
const address = {
    street: '10',
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(address))