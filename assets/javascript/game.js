
        var computerScore = "";
        var userScore = 0
        var wins = 0;
        var losses = 0;
        var stillPlaying = true;
        var imgArr = ["assets/images/crystal1.jpg",
            "assets/images/crystal2.jpg",
            "assets/images/crystal3.jpg",
            "assets/images/crystal4.jpg"
        ]


        function randomScore() {
            computerScore = Math.floor(Math.random() * (102) + 19);

        }





        function valueAssign() {
            for (var i = 0; i < imgArr.length; i++) {
                var crystals = $("<img>");
                crystals.addClass("crystal imgfluid");
                crystals.attr("src", imgArr[i]);
                crystals.attr("value", (Math.floor(Math.random() * 12) + 1));
                $(".display").append(crystals);

            }

        }


        function startGame() {
            userScore = 0
            computerScore = "";

            $(".currentscore").text(userScore)
            $(".display").empty();

            valueAssign()

            randomScore()
            $(".comscore").text(computerScore)


            $(".crystal").on("click", function () {

                if (userScore < computerScore) {
                    stillPlaying = true
                    var crysValue = ($(this).attr("value"));
                    crysValue = parseInt(crysValue);
                    userScore = userScore + crysValue
                    $(".currentscore").text(userScore)
                }

                if (stillPlaying = true) {
                    if (userScore === computerScore) {
                        wins++
                        $(".win").text(wins)
                        $(".results").text("You win!!!")
                        startGame()
                    }

                    else if (userScore > computerScore) {
                        losses++
                        $(".loss").text(losses)
                        $(".results").text("You lose!!!")
                        startGame()
                    }

                }

            })


        }

        startGame()

