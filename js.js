// slider 
// slider 
// slider 
// slider 
window.addEventListener('load',function(){
    const slider = this.document.querySelector('.slider')
    const sliderMain = this.document.querySelector('.slider-main')
    const nextBtn = this.document.querySelector('.slider-next')
    const prevBtn = this.document.querySelector('.slider-prev')
    const sliderItems =this.document.querySelectorAll('.slider-item')
    const dotItem =this.document.querySelectorAll('.slider-dot-item')
    const sliderLength = sliderItems.length;
    const sliderItemWidth = sliderItems[0].offsetWidth
    // sliderMain.style.width = `${sliderLength * sliderItemWidth}px  `
    let positionX=0;
    let index=0
    nextBtn.addEventListener('click',function(){
        handleChangeSlide(1);
    })

    prevBtn.addEventListener('click',function(){
        handleChangeSlide(-1);
    })

    function handleChangeSlide(direction){
        if(direction == 1){
            console.log(index)
            if(index>= sliderLength-1){
                index=sliderLength-1
                return
            }
            positionX=positionX - sliderItemWidth
            console.log('sliderItemWidth',positionX)
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++
        }else if(direction == -1){
            console.log(index)
            if(index <=0){
                index=0
                return
            }
            positionX=positionX + sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--

        }
    }
})  