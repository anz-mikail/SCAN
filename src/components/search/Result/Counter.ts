export const Counter = (total, risk) => {
    let counterTotal = 0
    let counterRisk = 0
    total?.map((item) => {
        counterTotal += item.value
    });
    risk?.map((item) => {
        counterTotal += item.value
    });
    return(counterTotal + counterRisk);
}