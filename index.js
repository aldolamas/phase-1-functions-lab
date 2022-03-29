function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation < 42) {
        return 42 - pickupLocation
    } else {
        return pickupLocation - 42
    }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

// console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(startBlock, destinationBlock) {
    return Math.abs(startBlock - destinationBlock) * 264
}

function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}