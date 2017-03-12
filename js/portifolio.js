$( document ).ready(function() {
    $('#reposHeader').hide();

//display repos stats
            var $numOfRepos = $('#numOfRepos');
            var $follow = $('#follow');
            var $updates = $('#updates');
            var $myRepos = $('#myRepos');


            // $("#repos").click(function(){
            //     $.getJSON("https://api.github.com/users/emmanuelmugogo", function(repo) {
                    
            //         $numOfRepos.append(repo.public_repos + " Public Repos" + "<hr>");
            //         $follow.append(repo.following + " People i Follow" + "<hr>");
            //     });
            // });



            
            $('#repos').click(function() {

                var clicks = $(this).data('clicks');

                //this controls odd number of clicks
              if (clicks) {
                
                $.getJSON("https://api.github.com/users/emmanuelmugogo", function(repo) {
                    
                    $numOfRepos.append(repo.public_repos + " Public Repos" + "<hr>");
                    $follow.append(repo.following + " People i Follow" + "<hr>");

                    $numOfRepos.show();
                    $follow.show();

                });
                //clicks = false;
              } else {
                
                //this controls even number of clicks
                $numOfRepos.hide();
                $follow.hide();

               // clicks = true;
              }
              $(this).data("clicks", !clicks);
            });





$("#allRepos").click(function(){
    $('#reposHeader').show();

  var $theRepos = $('#theRepos')
  var $updates = $('#updates')
   

                $.get("https://api.github.com/users/emmanuelmugogo", function(data, status){

                    var  item= data.repos_url;

                        
                    $.get(item,function(data,status){

                        for(var i=0; i<data.length; i++){
                            var repo = data[i];
                            var link = repo.html_url;
                            var name = repo.name;
                            var repoUpdate = new Date(repo.updated_at);
                            var repoUpdateLocale = repoUpdate.toString("MM/dd/yy - hh:mm tt");

                            $theRepos.append('<p><a href="' + link + '">' + name +'</p li>');
                            $updates.append('<p>' + repoUpdateLocale + '</p>');
                        
                        }
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
    // // Disable Google Maps scrolling
    // // See http://stackoverflow.com/a/25904582/1607849
    // // Disable scroll zooming and bind back the click event
    // var onMapMouseleaveHandler = function(event) {
    //     var that = $(this);
    //     that.on('click', onMapClickHandler);
    //     that.off('mouseleave', onMapMouseleaveHandler);
    //     that.find('iframe').css("pointer-events", "none");
    // }
    // var onMapClickHandler = function(event) {
    //         var that = $(this);
    //         // Disable the click handler until the user leaves the map area
    //         that.off('click', onMapClickHandler);
    //         // Enable scrolling zoom
    //         that.find('iframe').css("pointer-events", "auto");
    //         // Handle the mouse leave event
    //         that.on('mouseleave', onMapMouseleaveHandler);
    //     };
    //     // Enable map zooming with mouse scroll when the user clicks the map
    // // $('.map').on('click', onMapClickHandler);

    // 