/* app.js - Funcionality of site.
Oscar Quispe
301182317
10/19/2021*/

// IIFE -- Inmediately Invoked Funtion Expression
(function(){

    function Start()
    {
        console.log("App Started...");
        
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load",Start);

})();