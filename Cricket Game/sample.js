const imageArray = ['out.png', 'dotball.png', 'single.png', 'double.png', 'four.png', 'six.png'];
        const textArray = ['OUT', '*', '1', '2', '4', '6'];
        const jinx = {
            score: 0,
            ballPlayed: 0
        }
        let canPlay = 1;
        function getRandom() {
            const num = Math.random();
            if(num < 0.07) return 0;
            else if(num < 0.27) return 1;
            else if(num < 0.52) return 2;
            else if(num < 0.72) return 3;
            else if(num < 0.87) return 4;
            else  return 5;
        }
        function change() {
            const imageElement = document.querySelector('.action-image-div');
            const textElement = document.querySelector('.action-text-div');
            const randomIndex = getRandom();
            const imgSrc = imageArray[randomIndex];
            const text = textArray[randomIndex];
            
            imageElement.innerHTML = `<img src='${imgSrc}' class='action-image'>`;
            textElement.innerHTML = `<p class='action-text'>${text}</p>`;
            
            if (randomIndex === 0) canPlay = 0;
            else if (randomIndex >= 2)
                jinx.score += Number(textArray[randomIndex]);

            jinx.ballPlayed++;
            const run  = document.querySelector('.runs');
            const balls  = document.querySelector('.ball-faced');
            run.innerHTML = `Runs : ${jinx.score}`;
            balls.innerHTML = `Ball Played : ${jinx.ballPlayed}`;
        }
        function resetGame() {
            const imageElement = document.querySelector('.action-image-div');
            const textElement = document.querySelector('.action-text-div');
            const run  = document.querySelector('.runs');
            const balls  = document.querySelector('.ball-faced');
            imageElement.innerHTML = `<img src="logo.png" class="action-image ">`;
            textElement.innerHTML = `<p class="action-text" style="font-size: 50px ;">Cricket</p>`;
            run.innerHTML = 'Runs : 0';
            balls.innerHTML = 'Ball Played : 0';
            canPlay = 1;
            jinx.score = 0;
            jinx.ballPlayed = 0;
        }