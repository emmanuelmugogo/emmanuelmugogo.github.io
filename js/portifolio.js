$( document ).ready(function() {

//display repos stats
            var $numOfRepos = $('#numOfRepos');
            var $follow = $('#follow');
            var $updates = $('#updates');
            var $myRepos = $('#myRepos');

            $("#repos").click(function(){
                $.getJSON("https://api.github.com/users/emmanuelmugogo", function(repo) {
                    
                    $numOfRepos.append(repo.public_repos + " Public Repos");
                    $follow.append(repo.following + " People i do follow");


                    //I will use this to show the update date and hours for every repo.
                    // var repoUpdate = new Date(repo.updated_at);
                    // var repoUpdateLocale = repoUpdate.toString("MM/dd/yy, hh:mm tt");


                    // $updates.append("Updated " + repoUpdateLocale);
                });
            });

// display all repos and its url to github

// $("#allRepos").click(function(){
//                 $.getJSON("https://api.github.com/users/emmanuelmugogo", function(repo) {
                      
//                         $.getJSON("repo.repos_url", function(data) {

//                         $.each(data, function( index, repoData ) {

//                            console.log(repoData.name, repoData.html_url, repoData.updated_at, repoData.subscriptions_url);

//                     $("#myRepos").append("<li><a href=" + repoData.repos_url + ">" + repoData.html_url + "<p>last update: " + repoData.updated_at +"</p>" + "</a></li>");
                    

//                     });
//             });

//                 });
//             });





$("#allRepos").click(function(){

    var tableCellNonNumeric = "<td class=\"mdl-data-table__cell--non-numeric\">";
    $.getJSON('https://api.github.com/users/emmanuelmugogo/repos', function(response) {
        $.each(response, function(index, repo) {
            var repoNameLink = "<a href=\"" + repo.html_url + "\" target=\"_blank\">" + repo.name + "</a>";
            var repoUpdate = new Date(repo.updated_at);
            var repoUpdateLocale = repoUpdate.toString("MM/dd/yy, HH:mm");
            $('#myRepos').append("<tr>" + tableCellNonNumeric + repoNameLink + "</td><td>" + repoUpdateLocale + " EST</td></tr>");
        });
    });
                

    }); 

    }); 


 // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    // Disable Google Maps scrolling
    // See http://stackoverflow.com/a/25904582/1607849
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function(event) {
        var that = $(this);
        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }
    var onMapClickHandler = function(event) {
            var that = $(this);
            // Disable the click handler until the user leaves the map area
            that.off('click', onMapClickHandler);
            // Enable scrolling zoom
            that.find('iframe').css("pointer-events", "auto");
            // Handle the mouse leave event
            that.on('mouseleave', onMapMouseleaveHandler);
        };
        // Enable map zooming with mouse scroll when the user clicks the map
    // $('.map').on('click', onMapClickHandler);