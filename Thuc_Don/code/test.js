document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList1')[0].scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList1')[0].scrollLeft -= widthItem;
}


// document.getElementById('nt').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('form').scrollLeft += widthItem;
// }
// document.getElementById('pr').onclick = function(){
//     const widthItem = document.querySelector('.item').offsetWidth;
//     document.getElementById('form').scrollLeft -= widthItem;
// }

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



const productContainer = document.querySelector('.item');

productContainer.addEventListener('mousedown', function(e) {
  if (e.button === 0) { // Click trái chuột
    const startX = e.clientX;
    let isDragging = false;

    productContainer.addEventListener('mousemove', function(e) {
      if (isDragging) {
        const deltaX = startX - e.clientX;
        productContainer.scrollLeft += deltaX;
        startX = e.clientX;
      }
    });

    productContainer.addEventListener('mouseup', function() {
      isDragging = false;
    });

    isDragging = true;
  }
});