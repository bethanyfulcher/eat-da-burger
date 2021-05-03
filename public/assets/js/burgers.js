let eatenOnce = [];
let eatenTwice = [];
let madeOnce = [];
let madeTwice = [];

$(function() {
    $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        console.log($(this).data('newdevoured'))
        console.log(eatenOnce)
        // if the burger has not been devoured
        if($(this).data('newdevoured')) {
            console.log($(this))
            // if the burger has not been clicked on
            if (!eatenOnce.includes(id) && !eatenTwice.includes(id)) {
                $(this).find('div').removeClass('full-burger').addClass('eaten-once')
                eatenOnce.push(id);
            }
            // else if burger has been clicked on only once
            else if (eatenOnce.includes(id) && !eatenTwice.includes(id)) {
                $(this).find('div').removeClass('eaten-once').addClass('eaten-twice')
                eatenTwice.push(id)
            }
            else {
                let newDevoured = $(this).data("newdevoured")
                let newDevouredState = {
                    devoured: newDevoured
                }
        
                $.ajax("/api/burgers/" + id, {
                    type: "PUT",
                    data: newDevouredState
                }).then(
                    function() {
                        console.log("changed sleep to ", newDevoured)
                        location.reload()
                    }
                )

            }

        }
        else {
            
            if (!madeOnce.includes(id) && !madeTwice.includes(id)) {
                $(this).find('div').removeClass('unmade-burger').addClass('made-once')
                madeOnce.push(id);
            }
            // else if burger has been clicked on only once
            else if (madeOnce.includes(id) && !madeTwice.includes(id)) {
                $(this).find('div').removeClass('made-once').addClass('full-burger')
                madeTwice.push(id)
            }
            else {
                let newDevoured = $(this).data("newdevoured")
                let newDevouredState = {
                    devoured: newDevoured
                }
        
                $.ajax("/api/burgers/" + id, {
                    type: "PUT",
                    data: newDevouredState
                }).then(
                    function() {
                        console.log("changed sleep to ", newDevoured)
                        location.reload()
                    }
                )

            }
        }
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault()

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload()
            }
        )
    })
})

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('header').addClass('transparent')
        }
        if($(this).scrollTop() < 50) {
            $('header').removeClass('transparent')
        }
    })
})