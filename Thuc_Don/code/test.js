document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList1')[0].scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList1')[0].scrollLeft -= widthItem;
}



document.getElementById('next2').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList2')[0].scrollLeft += widthItem;
}
document.getElementById('prev2').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList2')[0].scrollLeft -= widthItem;
}

document.getElementById('next3').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList3')[0].scrollLeft += widthItem;
}
document.getElementById('prev3').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList3')[0].scrollLeft -= widthItem;
}

document.getElementById('next4').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList4')[0].scrollLeft += widthItem;
}
document.getElementById('prev4').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList4')[0].scrollLeft -= widthItem;
}

function foodorder(name, price) {
  alert(`Bạn đã đặt món ${name} thành công!\nVới giá: ${price}`);
}
