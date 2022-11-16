var dataIphone = [
    {
        imgThongBao: './img/top-mungkhaitruong.svg',
        imgIphone: './img/ip14/iPhone14-ShopDunk-do.png',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 10000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip14/iPhone14-ShopDunk-purple.png',
        tenIphone: 'iPhone 14 ',
        dungLuong: '128GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 11000
    }, {
        imgThongBao: './img/top-hangsan.svg',
        imgIphone: './img/ip14/iPhone14-ShopDunk-Midnight.png',
        tenIphone: 'iPhone 14 ',
        dungLuong: '256GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 12000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip14/iPhone14-ShopDunk-blue.png',
        tenIphone: 'iPhone 14 ',
        dungLuong: '512GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 13000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip13/iphone-13-pro-max-blue-650x650-1.png',
        tenIphone: 'iPhone 13 Blue ',
        dungLuong: '512GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 9000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip13/iphone-13-pro-max-gold-650x650-2.png',
        tenIphone: 'iPhone 13 Gold ',
        dungLuong: '512GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 8000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip13/iphone-13-pro-max-gold-650x650-2.png',
        tenIphone: 'iPhone 13 Gold ',
        dungLuong: '512GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 8000
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ip13/iphone-13-pro-max-gold-650x650-2.png',
        tenIphone: 'iPhone 13 Gold ',
        dungLuong: '512GB',
        valueIP: 0,
        giamGiaIphone: '??????',
        giaIphone: 8000
    }

]
var dataWatch = [
    {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/watch-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/watch-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/watch-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/watch-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    },
]
var dataIpad = [
    {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ipad-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ipad-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ipad-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    }, {
        imgThongBao: './img/top-moi.svg',
        imgIphone: './img/ipad-1.webp',
        tenIphone: 'iPhone 14 ',
        dungLuong: '64GB',
        giamGiaIphone: '??????',
        giaIphone: '??????'
    },
]

var tongGia = 0
function resetSoLuong() {
    var soLuong = 0
    for (const key in dataIphone) {
        soLuong += dataIphone[key].valueIP
    }
    document.querySelectorAll('.sll')[0].innerHTML = soLuong
    document.querySelectorAll('.sll')[1].innerHTML = soLuong
}
// resetSoLuong()
function resetGia() {
    var e = document.getElementById("selecttt");
    var giaTri = e.options[e.selectedIndex].value
    var tongGia = 0
    for (const key in dataIphone) {
        tongGia += (dataIphone[key].valueIP) * (dataIphone[key].giaIphone)
    }
    document.querySelectorAll('.showGiaIphone')[0].innerHTML = `${tongGia.toLocaleString()}₫`
    document.querySelectorAll('.showGiaIphone')[1].innerHTML = (tongGia == 0) ? `${tongGia}₫` : `${(tongGia + giaTri * 1).toLocaleString()}₫`;
}
// resetTongGia()
//  
var fullData = dataIphone.concat(dataIpad, dataWatch)
function showItems(name, data, soLuong) {
    var htmlWebs = ''
    for (const key in data) {
        var showItem = `<div class="col-xl-3 col-md-4 col-6">
    <div class="shop-iphone--item">
        <div class="shop-iphone--item---thongbao">
            <img src="${data[key].imgThongBao}" alt="">
        </div>
        <div class="shop-iphone--item---iphone ">
            <img src="${data[key].imgIphone}" alt="">
        </div>
        <h5>${data[key].tenIphone} <span>${data[key].dungLuong}</span></h5>
        <h6>Giá từ: ${data[key].giaIphone.toLocaleString()}₫</h6>
        <p>Hot Sale giá chỉ: ${data[key].giamGiaIphone.toLocaleString()}₫</p>
        <div class="row btn--iphone ">
                  <div class="col-6"><button type="button" class="btn btn-outline-danger w-100" onclick="indexAddCart(${key})">Thêm vào giỏ</button></div>
                  <div class="col-6"><button type="button" class="btn btn-outline-danger w-100">Xem chi tiết</button></div>
                </div>
    </div>
    </div>`
        htmlWebs += showItem
        if (key == soLuong - 1) {
            break
        }
    }

    document.getElementById(name).innerHTML = htmlWebs
}
showItems('iphone', dataIphone, 4)
showItems('thongTinIphone', dataIphone)
showItems('watch', dataWatch)
showItems('ipad', dataIpad)
// chuyển trang HTML 
// chuyển trang HTML 
function clicknav(value) {
    var nonepoly = document.getElementById('nonepolyshop')
    var noneiphone = document.getElementById('noneiphone')
    var nonecart = document.getElementById('nonecart')
    if (value == 1) {
        nonepoly.style.display = 'block'
        noneiphone.style.display = 'none'
        nonecart.style.display = 'none'


    } else if (value == 2) {

        nonepoly.style.display = 'none'
        noneiphone.style.display = 'block'
        nonecart.style.display = 'none'
    } else {
        nonepoly.style.display = 'none'
        noneiphone.style.display = 'none'
        nonecart.style.display = 'block'
    }
}
function itemShopping(name, data, soLuong) {
    var sttHien = 0
    var htmlWebs = ''
    for (const key in data) {
        var showItem = `<div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img
        src="${data[key].imgIphone}"
        class="img-fluid rounded-3" alt="Cotton T-shirt">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h5 class="text-muted">${data[key].tenIphone}</h5>
      <h6 class="text-black mb-0">${data[key].dungLuong}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

      <button type="button" class="btn btn-primary" onclick="giamSoLuong(${key})">-</button>

      <input style="width:40px ;" class="text-center mx-3 valueSL" type="number"value="${data[key].valueIP}">
      <button type="button" class="btn btn-primary btnGiam" onclick="tangSoLuong(${key})">+</button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0"> ${(data[key].giaIphone * data[key].valueIP).toLocaleString()}₫</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <button type="button" class="btn btn-danger" onclick="xoaSP(${key})">X</button>
    </div>
  </div>

  <hr class="my-4">`
        if (data[key].valueIP >= 1) {
            ++sttHien
            htmlWebs += showItem
        }
        if (key == soLuong - 1) {
            break
        }
    }

    document.getElementById(name).innerHTML = htmlWebs
    if (sttHien == 0) {
        document.getElementById(name).innerHTML = `<h4 class="text-danger text-center">Giỏ hàng trống</h4>
        <img class="w-25 d-flex mx-auto" src="./img/add-to-cart.png" alt="">`
    }
}
function indexAddCart(index) {
    dataIphone[index].valueIP += 1
    itemShopping('IDitemCart', dataIphone)
    itemShopping('IDitemCart-mini', dataIphone)
    if(dataIphone[index].valueIP==1){
        alert('Sản phẩm đã được thêm vào giỏ hàng')
    }
    resetSoLuong()
    resetGia()
}
function tangSoLuong(index) {
    document.querySelector('.valueSL').value = +document.querySelector('.valueSL').value + 1
    indexAddCart(index)
    resetGia()

}
function giamSoLuong(index) {
    if (document.querySelector('.valueSL').value > 0) {
        document.querySelector('.valueSL').value = +document.querySelector('.valueSL').value - 1

        dataIphone[index].valueIP -= 1
        itemShopping('IDitemCart', dataIphone)
        itemShopping('IDitemCart-mini', dataIphone)

        // alert('Sản phẩm đã được thêm vào giỏ hàng')
        resetSoLuong()
        resetGia()
    }

}
function xoaSP(index) {

    dataIphone[index].valueIP = 0
    itemShopping('IDitemCart', dataIphone)
    itemShopping('IDitemCart-mini', dataIphone)
    // alert('Sản phẩm đã được thêm vào giỏ hàng')
    resetSoLuong()
    resetGia()
}
function dlBlockShow() {
    document.querySelector('.khongChoBam').classList.remove('d-flex')
    document.querySelector('.choBam').classList.add('d-flex')

}
function dlNoneShow() {
    document.querySelector('.khongChoBam').classList.add('d-flex')
    document.querySelector('.choBam').classList.remove('d-flex')
}
