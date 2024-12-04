function navigate(page) {
    if (page === 'resume-builder') {
        window.location.href = 'resume_builder.html';
    } else if (page === 'login') {
        window.location.href = 'login.html';
    } else if (page === 'signup') {
        window.location.href = 'signup.html';
    }
}


// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

