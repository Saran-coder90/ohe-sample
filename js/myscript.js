let overall_count = 0;
let lists = document.querySelectorAll('.static-section ul li h2')
count = 0
let stop_count = 0

function make_count(){
    let pixels = window.scrollY;
    let customer_limit = Number.parseInt(lists[0].innerHTML);
    let project_limit = Number.parseInt(lists[1].innerHTML);
    let working_limit = Number.parseInt(lists[2].innerHTML);
    let employee_limit = Number.parseInt(lists[3].innerHTML);

    let max_limit = Math.max(customer_limit, project_limit, working_limit, employee_limit)
    console.log(pixels)
    

    if (pixels > 1500 && stop_count == 0){
        

        let interval = setInterval(start_count, 100)
        stop_count ++
        function start_count(){
  
            if (count <= max_limit){
                if (count <= customer_limit){
                    lists[0].innerHTML = count;
                }
                if (count <= project_limit){
                    lists[1].innerHTML = count;
                }
                if (count <= working_limit){
                    lists[2].innerHTML = count;
                }
                if (count <= employee_limit){
                    lists[3].innerHTML = count;
                }
                
           }
           else{
              clearInterval(interval)
           }
           count++
        
        }
    }

    
}



function makeEffect(){

    pixels_crossed = window.scrollY
    if (pixels_crossed > 733  && pixels_crossed < 2066){
         deactivate()
         let selectTag = document.querySelector('#services');

         selectTag.classList.add('active')
    }
    else if(pixels_crossed < 733){
        deactivate()
        let selectTag = document.querySelector('#home');

        selectTag.classList.add('active');

    }

    else if (pixels_crossed > 2066 && pixels_crossed < 3997){
        deactivate()
        let selectTag = document.querySelector('#products');

        selectTag.classList.add('active')
    }

    else{
        deactivate()
        let selectTag = document.querySelector('#about');

        selectTag.classList.add('active')
    }
    console.log(pixels_crossed);
}

function deactivate(){
    let selectTag = document.querySelectorAll(".dropdown a")

    for(let i = 0; i < 4; i++){
        let indexTag = selectTag[i]
        
        if (indexTag.className == 'active' ){
            indexTag.classList.remove('active')
            break
        }
    }
}

function deactivate_active_green(value){
    let selectTag = document.querySelectorAll(".blog-category-cl li a");
    let make_hide = document.querySelectorAll(".pull-right .make-common");
    let head_tag = document.querySelector('.make-style')
    let lists = ['ALL PAPER BAGS', 'BROWN BAGS', 'WHITE BAGS', 'GREEN BAGS', 'CARTOON BOX', 'THERMAL PAPERS', 'TISSUE PAPERS', 'TISSUE PAPERS']



    choose_index = 0
    for(let i = 0; i < 7; i++){
        let indexTag = selectTag[i]

        if (indexTag.className == 'active-green' ){
            make_hide[i].classList.add('make-hide')
            indexTag.classList.remove('active-green')
            choose_index = i
            break
        }
    }

    value.classList.add('active-green')

    for(let i = 0; i < 7; i++){
        let indexTag = selectTag[i]

        if (indexTag.className == 'active-green' ){
            choose_index = i
            break
        }
    }
    head_tag.innerHTML = lists[choose_index]
    make_hide[choose_index].classList.remove('make-hide')
}

function  make_changes_head(value){
    let selectValue = value.querySelector('.shop-column-head h5').innerHTML;
    let change_head = document.querySelector('.make-style')

    let selectbar = document.querySelector('.bar');
    let thenextdiv = selectbar.nextElementSibling;

    // console.log(thenextdiv)
    
    selectbar.classList.remove('make-hide')
    thenextdiv.classList.remove('col-md-12')
    thenextdiv.classList.add('col-md-8')
    console.log(thenextdiv)
    thenextdiv.setAttribute('style', 'padding-left : 15px; padding-right:15px')
    let arr_list = selectValue.split(" ")
    if (arr_list.length > 1 ){
           change_head.innerHTML = `${arr_list[0]} <span>${arr_list[1]}</span>`
    }
    else{
        change_head.innerHTML = selectValue
    }
      
}

function make_as_all(){
   
    let change_head = document.querySelector('.make-style')
    let detect_parent_element = change_head.parentElement;
    let detect_parent_element_prev_sibling = detect_parent_element.previousElementSibling;


    detect_parent_element.classList.remove('col-md-8')
    detect_parent_element.classList.add('col-md-12')
    detect_parent_element.setAttribute('style', 'padding-left : 25px;padding-right:25px')
    detect_parent_element_prev_sibling.classList.add('make-hide')

   
    change_head.innerHTML = 'ALL PRODUCTS'

    

}

function get_product(order){
    let id = `#product-${order}`
    let un_hide = document.querySelector(id)

    for (let i = 1; i <= 14; i++){
        let index_id = document.querySelector(`#product-${i}`)
        index_id.classList.add('make-hide') 
    }

    un_hide.classList.remove('make-hide')

    
}

function make_changes_head_another_2(value){
    let change_head = document.querySelector('.make-style')
    change_head.innerHTML =  value.innerHTML
}


