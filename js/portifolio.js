$(document).ready(function() {

    //hide all these divs when the page loads
    $('#reposHeader').hide();
    $('#theRepos').hide();
    $('#updates').hide();
    $('#github-stats').hide();


        //variable declared to be used after ajax call
        var $theRepos = $('#theRepos');
        var $updates = $('#updates');
        var $numOfRepos = $('#numOfRepos');
        var $follow = $('#follow');
        var $avatar = $('#avatar');
        var $myName = $('#myName');
        var $myLocation = $('#myLocation');

                //firstApi-call
                $.get("https://api.github.com/users/emmanuelmugogo", function(data, status){

                    var  item= data.repos_url;    
                    $.get(item,function(data,status){

                        for(var i=0; i<data.length; i++){
                            var repo = data[i];
                            var link = repo.html_url;
                            var name = repo.name;
                            var repoUpdate = new Date(repo.updated_at);
                            var repoUpdateLocale = repoUpdate.toString("MM/dd | hh:mm - tt");

                            $theRepos.append('<p><a href="' + link + '">' + name +'</p li>');
                            $updates.append('<p>' + repoUpdateLocale + '</p>');
                        
                        }
                    });      
                });

                //second Api-call
                $.getJSON("https://api.github.com/users/emmanuelmugogo", function(repo) {
                    
                    $numOfRepos.append(repo.public_repos + " Public GITHUB Repos");
                    $follow.append(repo.following + " Following");
                    $myName.append(repo.name);
                    $myLocation.append(repo.location);
                    $avatar.append('<img src="'+repo.avatar_url+'" class="img-circle" alt="Emmanuel-Pic" width="150" height="150">');

                });

//repos button
$('#repos').click(function() {

    var clicks = $(this).data('clicks');

                //this controls even number of clicks
              if (clicks) {
                    
                  document.getElementById("repos").innerHTML = "GitHub Stats";
                  $('#github-stats').hide();

                
                
                //clicks = false;
              } else {
                
                //this controls odd number of clicks

                
                document.getElementById("repos").innerHTML = "Hide GitHub Stats";
                $('#github-stats').show();
                
               // clicks = true;
              }
              $(this).data("clicks", !clicks);

}); //end of repos click button




//all repos button
$('#allRepos').click(function() {

                var clicks = $(this).data('clicks');

                //this controls even number of clicks
              if (clicks) {
                $('#reposHeader').hide();
                 $('#theRepos').hide();
                  $('#updates').hide();
                  document.getElementById("allRepos").innerHTML = "GitHub Repos";    
                
                //clicks = false;
              } else {
                
                //this controls odd number of clicks

                $('#reposHeader').show();
                $('#theRepos').show();
                $('#updates').show();
                document.getElementById("allRepos").innerHTML = "Hide GitHub Repos";
                
               // clicks = true;
              }
              $(this).data("clicks", !clicks);
            }); //end of allRepos button

}); //end of Document.ready




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
    