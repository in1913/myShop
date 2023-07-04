let row = '';

fetch("./data/shoplist.json")
.then((res)=> res.json())
.then((res)=> {
    for(let i = 0 ; i < res.shoplist.length ; i++){
        row += '<div class="col-lg-3 my-5 pdlist">';
        row += '<a href="main.html"><img src="'+res.shoplist[i].img+'" class="img-fluid" alt="2"></a>';
        row += '<div class="card-body">';
        row += '<ul class="pd-list"><li>';
        for(let j = 0 ; j < res.shoplist[i].color.length ; j++){
            row += '<span class="'+ res.shoplist[i].color[j] +'"></span>'
        }
        row += '</li><li class="pd-title">';
        row += '<h1>'+ res.shoplist[i].title +'</h1></li>';
        row += '<li><del>'+ res.shoplist[i].delprice +'</del><br><strong>'+ res.shoplist[i].saleprice +'</strong></li>';
        row += '<li><p>'+ res.shoplist[i].content +'</p></li>';
        row += '<li class="last">';
        for(let n = 0 ; n < res.shoplist[i].news.length ; n++){
            row += '<span>'+ res.shoplist[i].news[n] +'</span>';
        }
        row += '</li></ul></div></div>'
    }
    document.getElementById('row').innerHTML=row;
})


const listbox = document.getElementsByClassName('listbox')[0];
const box4 = document.getElementsByClassName('box4')[0];
const box3 = document.getElementsByClassName('box3')[0];
const pdlist = document.getElementsByClassName('pdlist');

listbox.addEventListener('click', listChange1);
box4.addEventListener('click', listChange4);
box3.addEventListener('click', listChange3);

function listChange1(){
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.remove('col-lg-3');
        pdlist[i].classList.remove('col-lg-4');
        pdlist[i].classList.remove('col-lg-12');
    }
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.add('col-lg-12');
    }
}
function listChange4(){
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.remove('col-lg-3');
        pdlist[i].classList.remove('col-lg-4');
        pdlist[i].classList.remove('col-lg-12');
    }
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.add('col-lg-3');
    }
}
function listChange3(){
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.remove('col-lg-3');
        pdlist[i].classList.remove('col-lg-4');
        pdlist[i].classList.remove('col-lg-12');
    }
    for(i = 0 ; i < pdlist.length ; i++){
        pdlist[i].classList.add('col-lg-4');
    }
}
