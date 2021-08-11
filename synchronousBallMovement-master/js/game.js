class Game{

    constructor(){ }

    getstate(){
        var gamestateRef = database.ref('gamestate')
        gamestateRef.on("value", function(data){
            gamestate = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            'gamtestate' : state
        })
    }

    start(){
        if (gamestate === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
}