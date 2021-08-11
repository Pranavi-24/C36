class Form{
    constructor(){}
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(100,10)
        var input = createInput("Name")
        input.position(200,150)
        var button = createButton("Play")
        button.position(200,200)
        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playercount += 1
            player.update(name)
            player.updateCount(playercount)
            greeting.html("Hello!" + name)
            greeting.position(200,200)
        })
    }
}