<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Message for &#9825;Priyanshi&#9825;</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="page1" class="page">
            <h1 id="q1">Are you &#9825;Priyanshi&#9825;?</h1>
            <button onclick="goToPage(2)">Yes</button>
            <button onclick="goToPage(3)">No</button>
        </div>

        <div id="page2" class="page">
             <h1 id="q2">Are you *really* &#9825;Priyanshi&#9825;?</h1>
            <button onclick="goToPage(4)">Yes</button>
            <button onclick="goToPage(3)">No</button>
        </div>

        <div id="page3" class="page">
            <h1>If you're not &#9825;Priyanshi&#9825;, this special message isn't for you.</h1>
            <h1 id="q3">Do you really want to think again if you are &#9825;Priyanshi&#9825;?</h1>
            <button onclick="goToPage(1)">Yes</button>
            <button onclick="goToPage(5)">No</button>
        </div>

        <div id="page4" class="page">
            <h1 id="q4">Are you *sure* you are &#9825;Priyanshi&#9825;?</h1>
            <button onclick="goToPage(6)">Yes</button>
            <button onclick="goToPage(3)">No</button>
        </div>

        <div id="page5" class="page">
            <h1>GET LOST!!!! THIS IS ONLY FOR MY BABY &#9825;Priyanshi&#9825; 😠</h1>
            <button onclick="goToPage(1)"><- Restart</button>
        </div>

        <div id="page6" class="page">
            <h1 id="q6">So you *think* you're &#9825;Priyanshi&#9825;?</h1>
            <button onclick="goToPage(7)">Yes</button>
            <button onclick="goToPage(5)">No</button>
        </div>

        <div id="page7" class="page">
            <h1 id="q7">So if you are *really* &#9825;Priyanshi&#9825; then answer this question:</h1>
            <h1>What is your favourite flower ?</h1>
            <input type="text" id="secretWord">
            <button onclick="checkAnswer()">Submit</button>
        </div>

        <div id="page8" class="page">
            <h1>Congratulations, you successfully verified that you really are my baby &#9825;Priyanshi&#9825;!</h1>
            <h1 id="q8">Are you ready for your special message?</h1>
            <button onclick="goToPage(9)">Yes -></button>
        </div>

        <div id="page9" class="page">
            <h1>You're just one click away from your message!</h1>
            <button onclick="goToPage(10)">Let's Go!</button>
        </div>

        <div id="page10" class="page">
            <h1 id="q10">&#9825;Priyanshi&#9825;, will you be my VALENTINE&#9825;?</h1>
            <button onclick="goToPage(12)">Yes</button>
            <button onclick="goToPage(11)">No</button>
        </div>

        <div id="page11" class="page">
            <h1 id="q11">You must have chosen the wrong option. You want to think again?</h1>
            <button onclick="goToPage(10)">Yes</button>
            <button onclick="goToPage(13)">No</button>
        </div>


        <div id="page12" class="page">
            <h1>Yayy you made the best decision. Congratulations to me for being this lucky to have you as my VALENTINE. 😁🎉🥳✨</h1>
            <h1>I LOVEEEEE YOUUUUU SOOOOOO MUCHHHH</h1>
            <h1>Play video to know how am I feeling now....</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WYjVa10bP1c?si=LkuZy1afnlSruUc4&amp;start=9&end=50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br>
            <button onclick="goToPage(14)">Move forward -></button>
        </div>

        <div id="page13" class="page">
            <p>I guess you're not in mood to make decisions. Let me help you.... Just choose one option and take the option written in "Hint" on the next page ;) .</p>
            <button onclick="goToPage(15)">Okay</button>
            
        </div>

        <div id="page14" class="page">
            <h1>This is for you baby </h1>
                <p>I love you baby, you mean most to me. I am so blessed to have you in my life. I will always be with you. Will always love you more and more day by day. You are soooo special to me and I will never take you for granted. I'm soo happy that now you're my Valentine yayyyy&#9825;&#9825;&#9825;&#9825;&#9825; mwah I LOVE YOU always my BABY PRIYANSHI&#9825;</p>
        </div>
        <div id="page15" class="page">
            <h1 id="q15">&#9825;Priyanshi&#9825;, will you be my VALENTINE&#9825;?</h1>
            <p>[Hint: click on yes!!!!]</p>            
            <button onclick="goToPage(12)">Yes</button>
            <button onclick="goToPage(12)">Yes</button>

    </div>



    <script src="script.js"></script>
</body>
</html>
