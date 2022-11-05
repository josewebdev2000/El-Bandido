// Wait for the page to be loaded to execute all code present here.

$(function() {
    // Warn the user this is a fake website
    
    warningAlert('Warning', 
    '<p>"El Bandido" is a fake brand I came up with to showcase my web development skills.</p>');
    

    // Automatically add the class "light" to all children of the <body> tag
    // Get all HTML elements children from body tag
    var allBodyChildren = $("body").find("*");

    allBodyChildren.addClass("light");

    // Get the image header
    var imageHeader = $("#header-img-bg.light");

    // Add default image to main page headers.
    imageHeader.prop("src", "media/img/jalapeno.jpg");

    // Grab the Dark/Light Mode Button Switcher
    var buttonModeSwitcher = $("button#mode-switcher");

    // Grab all bootstrap cards
    var cards = $(".card");

    // Grab all card images
    var mexicoCardImg = $("#mexican-flag");
    var smileyCardImg = $("#smiley-face");
    var veganCardImg = $("#vegan-friendly");

    // Grab the footer
    var footer = $("footer");

    // Dinamically add Dark Mode
    buttonModeSwitcher.prop("title", "Dark Mode");
    
    // Event listener to change dark/light modes
    buttonModeSwitcher.on("click", function(e) {

        // Prevent default things happening when this button is clicked
        e.preventDefault();

        // Get the mode from the title attribute
        var mode = buttonModeSwitcher.attr("title");

        // Get the icon HTML element child of the button
        var icon = buttonModeSwitcher.children("i");

        // Get the navbar
        var navbar = $("nav");

        // Make a short fade Animation
        function fadeAnimation()
        {
            allBodyChildren.animate(
                {
                    opacity: '0'
                }
            );
    
            allBodyChildren.animate(
                {
                    opacity: '1'
                }
            );
        }

        // Make a choice about what is going to happen
        function decisionMaking()
        {
            // If "btn-dark" is a class present in the attribute, then change all to dark mode and the button to light mode
            // with "btn-light"
            if (mode == "Dark Mode")
            {
                // Remove the "btn-dark" class and change it to btn-light class
                buttonModeSwitcher.removeClass("btn-dark");
                buttonModeSwitcher.addClass("btn-light");

                // Change the icon from the moon to the sun
                icon.removeClass("bi-moon");
                icon.addClass("bi-sun-fill");

                // Change the title attribute to "Light Mode"
                buttonModeSwitcher.prop("title", "Light Mode");

                // Remove the "light" class from all elements and replace it by the "dark" class
                allBodyChildren.removeClass("light");
                allBodyChildren.addClass("dark");

                // Change the navbar classes "navbar-light bg-light" to "navbar-dark bg-dark"
                navbar.removeClass("navbar-light bg-light");
                navbar.addClass("navbar-dark bg-dark");

                // Change image from jalapeno to dark tacos
                imageHeader.prop("src", "media/img/dark-tacos.jpg");

                // remove the light class and text-dark classes from body
                cards.removeClass("bg-light text-dark");

                // add classes bg-dark and text-white
                cards.addClass("bg-dark text-white");

                // Change mexico flag image to mariachi hat
                mexicoCardImg.prop("src", "media/img/mariachi.png");

                // Change smiley light to smiley dark image
                smileyCardImg.prop("src", "media/img/smiley-dark.png");

                // Change vegan light to vegan dark image
                veganCardImg.prop("src", "media/img/vegan-dark.png");

                // Remove footer's bg-light and text-dark classes and add bg-dark and text-white classes
                footer.removeClass("bg-light text-dark");
                footer.addClass("bg-dark text-white");

            }

            else
            {
                // Remove the "btn-light" class and change it to "btn-dark"
                buttonModeSwitcher.removeClass("btn-light");
                buttonModeSwitcher.addClass("btn-dark");

                // CHange the icon from the sun to the moon
                icon.removeClass("bi-sun-fill");
                icon.addClass("bi-moon");

                // Change the title attribute to "Dark Mode" again
                buttonModeSwitcher.prop("title", "Dark Mode");

                // Remove the "dark" class from all elements and replace it by the "light" class
                allBodyChildren.removeClass("dark");
                allBodyChildren.addClass("light");

                // Change the navbar classes "navbar-dark bg-dark" to "navbar-light bg-light"
                navbar.removeClass("navbar-dark bg-dark");
                navbar.removeClass("navbar-light bg-light");

                // Change image from dark tacos to jalapeno
                imageHeader.prop("src", "media/img/jalapeno.jpg");

                // remove the dark class and text-white classes from body
                cards.removeClass("bg-dark text-white");

                // add classes bg-light and text-cark
                cards.addClass("bg-light text-dark");

                // Change mexico flag image to mariachi hat
                mexicoCardImg.prop("src", "media/img/mexico.png");

                // Change smiley light to smiley dark
                smileyCardImg.prop("src", "media/img/smiley-light.png");

                // Change vegan dark to vegan light image
                veganCardImg.prop("src", "media/img/vegan-light.png");

                // Remove footer's bg-dark and text-white classes and add bg-light and text-dark classes
                footer.removeClass("bg-dark text-white");
                footer.addClass("bg-light text-dark");
            }
        }

        // Perfom the animation first, then make changes
        fadeAnimation();
        setTimeout(decisionMaking, 300);

    });

});