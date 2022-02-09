window.addEventListener('load', function(){

    //draws game canvas
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    //controls
    class InputHandler {
        constructor(){
            this.keys = [];
            window.addEventListener('keydown', e => {
                if (e.key === 'ArrowDown'){
                    this.keys.push(e.key);
                }
                console.log('inputHandler keydown', e.key);
            });
        }
    }

    class Player {

    }

    class Background {

    }

    class Enemy {

    }

    function handleEnemies(){

    }

    function displayStatusText(){

    }

    const input = new InputHandler();

    function animate(){

    }
     
});