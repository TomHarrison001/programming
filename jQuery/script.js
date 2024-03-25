$("document").ready(function() {
    $("#content").append("<p>The page just loaded</p>");
    $("h1:not(.selectors").css("border", "3px solid orange");
    $("h1").next().css("border", "3px solid orange");
    // "div p" for any p within a div
    // "div > p" for p direct child of div
    // "p:first" for first p
    // "p:last-of-type" for last p
    // "p:nth-child(3)" for 3rd p
    // "div + ul" for ul with previous sibling div
    // "para ~ p" for p with previous sibling from 'para' id
    // "p[class]" for p tags with any class attributes
    // "p[id=para]" for p tags with id 'para'
    // "p[id^=para][lang*=en-]" for p tags with id starting 'para'
    //      and lang value containing en-
    // "p:contains('para')" for p tags with text content including
    //      'para'
    // "p:parent" for p tags with 1+ child elementss
    // "div:has(p[class=a])" for div tag with p child with class a
    $("#example p").each(function(index, element) {
        $(element).css("border", border+"px solid red")
        .css("margin-left", leftmargin);
        border += 2;
        leftmargin += 10;
    })
    var new_element = $("<p>");
    new_element.append("<em>Hello world.</em>");
    $("#example").html(new_element);
    $("#example").on("mousemove", onMouseOver);
    $("#example").on("click", onMouseClick);
    $("#example").on("mouseLeave", onMouseLeave);
    
    $("#go").click(function() {
        $("#go").animate({width: 200}, 100)
        .animate({height: 200}, 100)
        //.animate({left: 200}, 100)
        //.animate({top: "+=100, borderWidth: 10"}, "fast")
    });
    
    $("#getcontent").click(getContent);
    $("#loadhtml").click(loadHTML);
    
    function onMouseOver(evt) {
        $("#example").text(evt.type + ": " + evt.pageX + ", " + evt.PageY + "\n" +
        "Button: " + evt.which + " Key: " + evt.metaKey);
    }
    
    function onMouseClick(evt) {
        $("#example").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
        $("#example").off("mousemove", onMouseOver)
    }

    function onMouseLeave(evt) {
        $("#example").text("mouseleave");
    }

    function getContent() {
        $.ajax("sample.txt",
            {   
                success: setContent,
                type: "GET",
                dataType: "text", 
            }
        );
    }

    // function getData() {
    //     $.ajax({
    //         url: "sample.txt",
    //         type: "GET",
    //         dataType: "text",
    //         success: successFn,
    //         error: errorFn, complete: function( xhr, status ) {
    //             console.log("The request is complete.");
    //         }
    //     });
    // }

    // function successFn(result) {
    //     console.log("Setting result");
    //     $("#ajaxContent").append(result);
    // }

    // function errorFn(xhr, status, strErr) {
    //     console.log("There was an error.");
    // }

    function setContent(data, status, jqxhr) {
        $("#example").text(data);
    }

    function loadHTML() {
        $("#example").load("sample.html");
    }

    $(document).ajaxStart(function() {
        console.log("AJAX: Starting...");
    })

    $(document).ajaxStop(function() {
        console.log("AJAX: Request ended.");
    })

    $(document).ajaxSend(function(evt, jqxhr, options) {
        console.log("AJAX: Sending requet for data...");
    })

    $(document).ajaxComplete(function(evt, jqxhr, options) {
        console.log("AJAX: Task complete.");
    })

    $(document).ajaxError(function(evt, jqxhr, options, err) {
        console.log("AJAX: Error occured - " + err);
        alert(err);
    })

    $(document).ajaxSuccess(function(evt, jqxhr, options) {
        console.log("AJAX: Request successful.");
    })

    $("#example p").before("---------------");
    $("#example p").after("---------------");
    $("<p class='a'>New para before</p>").insertBefore("#example p:first");
    $("<p class='b'>New para after</p>").insertAfter("#example p:last");
    $("#example p.a").remove();
    // $("#example p.b").detach();
    $("#example p.b").replaceWith("<p>Replaced.</p>");
    $("#example p").addClass("pClass");
    $("#example p").removeClass("pClass");
    
    function replacementFn() {
        if ($(this).text().indexOf("1") != -1) {
            return "<p>This is para 1</p>";
        } else {
            return this.outerHTML;
        }
    }

    $("#show").click(function() {
        $("#anim").show("normal");
    })
    $("#hide").click(function() {
        $("#anim").hide(1000, "swing");
    })
    $("#toggle").click(function() {
        $("#anim").toggle("slow", completion);
    })
    function completion() {
        $(this).text("animation complete");
    }
    // fadeIn, fadeOut, fadeTo
    // slideUp, slideDown, slideToggle

    function getXMLData() {
        $.get("sample.xml", function(result) {
            var username = result.getElementsByTagName("username")[0];
            var char_class = result.getElementsByTagName("class")[0];
            var level = result.getElementsByTagName("level")[0];
        });
    }
    getXMLData();
})