function resetFlexbox() {

document.querySelector('.flex-container').style.flexDirection = "row";
document.querySelector('.flex-container').style.justifyContent = "flex-start";
document.querySelector('.flex-container').style.alignItems = "stretch";
document.querySelector('.flex-container').style.gap = "Opx";
document.getElementId('gap').value=0;
document.getElementId('growB1').value=0;
document.getElementId('growB2').value=0;
document.getElementId('growB3').value=0;
updateGrow(1);
updateGrow(2);
updateGrow(3);
}

function setFlexDirection (direction)
{
document.querySelector('.flex-container').style.flexDirection = direction;
}

function justifyContent (value) {
document.querySelector('.flex-container').style.justifyContent = value;
}

function alignItems (value) {
document.querySelector('.flex-container').style.alignItems = value;
}

function updateGap() {
    let gapValue= document.getElementById('gap').value;
    document.querySelector('.flex-container').style.gap = gapValue + 'px';
}

function growAll() {
document.querySelectorAll('.flex-item').forEach(item => {item.style.flexGrow = 1;});
}

function updateGrow(itemNumber) {
    let growValue = document.getElementById('growB'+ itemNumber).value;
    document.getElementById('item' + itemNumber).style.flexGrow = growValue;
}



