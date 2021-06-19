var allSlides = document.getElementsByClassName('vehicle__item')
var lengthSlides = allSlides.length

// current index
let index = 0

// prev index
let prev = lengthSlides -1

// next index
let next = 1
var currentGroup =  allSlides[index].parentElement.id

$(document).ready(function(){
    $(allSlides[lengthSlides - 1]).css({
        'z-index' : 0,
        'transform': 'translateX(0%)'
    })

    $(allSlides[0]).css({
        'z-index' : 1,
        'transform': 'translateX(0%)'
    })

    $(allSlides[1]).css({
        'z-index' : 1,
        'transform': 'translateX(100%)'
    })
    

    activeButton(currentGroup)
})


$('.tab__item').on('click', (event)=>{
    var id = $(event.target).data('group')
    activeButton(id)
    for(var i = 0; i < allSlides.length; i++){
        if(allSlides[i].parentElement.id == id){
            if(index < i){
                index = i - 1
                nextSlides()
            }else{
                index = i + 1
                prevSlides()
            }
            break
        }
    }
})


function updateIndex(curent, option){
    if(option == '+'){
        index = getIndex(curent + 1)
        prev = getIndex(index - 1)
        next = getIndex(index + 1)
    }else{
        index = getIndex(curent - 1)
        prev = getIndex(index - 1)
        next = getIndex(index + 1)
    }
}

function getIndex(index){
    if(index > lengthSlides -1){
        return 0
    }
    if(index < 0){
        return lengthSlides - 1
    }

    return index
}
function nextSlides(){
    updateIndex(index, "+")
    setSlides('', 'nextSlider .5s')
    activeButton(allSlides[index].parentElement.id)
}
function prevSlides(){
    updateIndex(index, "-")
    setSlides('prevSlider .5s', '')
    activeButton(allSlides[index].parentElement.id)
}
function setSlides(prevAnimation, nextAnimation){
    for(var i = 0; i < lengthSlides; i ++){
        if(i == getIndex(prev)){
            $(allSlides[getIndex(prev)]).css({
                'transform' : 'translateX(0%)',
                'z-index': 0,
                'animation' : '',
            })
        }else
        if(i == getIndex(index)){
            $(allSlides[getIndex(index)]).css({
                'transform' : 'translateX(0%)',
                'z-index': 1,
                'animation' : nextAnimation,
            })
        }else
        if(i == getIndex(next)){
            $(allSlides[getIndex(next)]).css({
                'transform' : 'translateX(100%)',
                'animation' : prevAnimation,
                'z-index': 2
            })
        }else{
            $(allSlides[i]).css({
                'transform' : 'translateX(100%)',
                'z-index': 0,
                'animation' : ''
            })
        }
    }
}

function activeButton(button){
    var list_title = document.getElementsByClassName('tab__item')
    for(var i = 0; i < list_title.length; i++){
        if($(list_title[i]).data('group') === button){
            $(list_title[i]).addClass('active')
        }else{
            $(list_title[i]).removeClass('active')
        }
    }
    currentGroup = button
}