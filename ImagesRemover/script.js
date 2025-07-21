
    document.querySelector('#images').addEventListener('click',function(e){

        console.log(e.target.parentNode);

        if(e.target.tagName === 'IMG')
    {   
        console.log(e.target.id);
        
        let removeIt = e.target.parentNode // parent with list select krke variable mein rakh kr remove kr diya
        removeIt.remove();
        
    }

    },false)