function FireBall_Direction () {
    if (Wizard.vy > 0) {
        FireBall_Y = 200
        if (Wizard.vy < 0) {
            FireBall_Y = -200
        }
        if (Wizard.x == 0) {
            FireBall_Y = 0
        }
        if (Wizard.x < 0) {
            Fireball_X = -200
        }
        if (Wizard.x > 0) {
            Fireball_X = 200
        }
        if (Wizard.x == 0) {
            Fireball_X = 0
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    FireBall_Direction()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 7 f 1 . . . . . . 
        . . . . . f 1 6 7 f . . . . . . 
        . . . . . f f 1 7 f . . . . . . 
        . . . . 1 . f f f . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Witch, Fireball_X, FireBall_Y)
})
function FireBall_Direction_2 () {
    if (Witch.x > 0) {
        FireBall_Y = 200
        if (Witch.x < 0) {
            FireBall_Y = -200
        }
        if (Witch.x == 0) {
            FireBall_Y = 0
        }
        if (Witch.x < 0) {
            Fireball_X = -200
        }
        if (Witch.x > 0) {
            Fireball_X = 200
        }
        if (Witch.x == 0) {
            Fireball_X = 0
        }
    }
}
function Character_Direction_2 () {
    if (Witch.x > 0) {
        Witch.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Witch.x > 0) {
        Witch.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Witch.x > 0) {
        Witch.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Witch.x > 0) {
        Witch.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    FireBall_Direction()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f b f 1 . . . . . . 
        . . . . . f 1 5 b f . . . . . . 
        . . . . . f f 1 b f . . . . . . 
        . . . . 1 . f f f . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Wizard, Fireball_X, FireBall_Y)
})
function Character_Direction () {
    if (Wizard.vy > 0) {
        Wizard.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 b b . . . . . . . . . 
            . . . b b b b b b . . . . . . . 
            . . b b b c c b 5 b . . . . . . 
            . . 5 c c c b b b b b . . . . . 
            . . c c . c c b b b c . . . . . 
            . . c . . 1 d f d f d 1 . . . . 
            . . . . 1 1 3 d d d 3 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 5 . 1 1 1 1 1 1 1 . . . . 
            . . . f c c c 1 1 1 1 b b . . . 
            . . . f c b b c 1 1 1 5 b . . . 
            . . . . . c b c 1 1 c b . . . . 
            . . . . . c 5 b c 1 b b . . . . 
            . . . . f f c c b b c f f . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Wizard.vy < 0) {
        Wizard.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 b b . . . 
            . . . . . . . b b b b b b b . . 
            . . . . . . b b 5 b c c b 5 b . 
            . . . . . . b b b b b c c c b . 
            . . . . . . c b b b c c . c c . 
            . . . . . 1 1 1 1 1 1 1 . . c . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 . 5 . . 
            . . . . c c 1 1 1 1 1 b b f . . 
            . . . . c 5 1 1 1 1 1 b b f . . 
            . . . . . c b 1 1 1 c b . . . . 
            . . . . . c b b 1 b b 5 . . . . 
            . . . . f c c c b b c c f . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Wizard.vx < 0) {
        Wizard.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 b b . . . 
            . . . . . . . b b b b b b b . . 
            . . . . . . b b 5 b c c b 5 b . 
            . . . . . . b b b b b c c c b . 
            . . . . . . b b b b c c . c c . 
            . . . . . 1 f d 1 1 1 1 . . c . 
            . . . . 1 d 3 d 1 1 1 1 1 . . . 
            . . . . 1 d d 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 c c 1 1 1 . . . 
            . . . . 1 1 1 5 b c 5 b 1 . . . 
            . . . . 1 1 c f b c b b 1 . . . 
            . . . . 1 1 b f c b b c . . . . 
            . . . . . 1 b b b b b c . . . . 
            . . . . . f f c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (Wizard.vx > 0) {
        Wizard.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . b b 5 b . . . . . . . . . 
            . . b b b b b b b . . . . . . . 
            . b 5 b c c b 5 b b . . . . . . 
            . b c c c b b b b b . . . . . . 
            . c c . c c b b b b . . . . . . 
            . c . . 1 1 1 1 d f 1 . . . . . 
            . . . 1 1 1 1 1 d 3 d 1 . . . . 
            . . . 1 1 1 1 1 1 d d 1 . . . . 
            . . . 1 1 1 c c 1 1 1 . . . . . 
            . . . 1 b 5 c b 5 1 1 1 . . . . 
            . . . 1 b b c b f c 1 1 . . . . 
            . . . . c b b c f b 1 1 . . . . 
            . . . . c b b b b b 1 . . . . . 
            . . . . . c c c c f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
let level = 0
let projectile: Sprite = null
let Fireball_X = 0
let FireBall_Y = 0
let Witch: Sprite = null
let Wizard: Sprite = null
Wizard = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 b b . . . . . . . . . 
    . . . b b b b b b . . . . . . . 
    . . b b b c c b 5 b . . . . . . 
    . . 5 c c c b b b b b . . . . . 
    . . c c . c c b b b c . . . . . 
    . . c . . 1 d f d f d 1 . . . . 
    . . . . 1 1 3 d d d 3 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . 5 . 1 1 1 1 1 1 1 . . . . 
    . . . f c c c 1 1 1 1 b b . . . 
    . . . f c b b c 1 1 1 5 b . . . 
    . . . . . c b c 1 1 c b . . . . 
    . . . . . c 5 b c 1 b b . . . . 
    . . . . f f c c b b c f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Witch = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f 7 f 7 7 f 7 . . . . 
    . . . f f f f f f f f f f f . . 
    . . . . . 1 d f d f d 1 . . . . 
    . . . . 1 1 3 d d d 3 1 1 . . . 
    . . . 7 1 1 1 f f f 1 1 1 . . . 
    . . . e f 1 1 f f f 1 1 f 1 . . 
    . . . e f f 1 f f f 1 f f 1 . . 
    . . . . 1 7 f f 7 7 f 7 1 . . . 
    . . . . . f f f f f f f . . . . 
    . . . . e e f f f f f e e . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Wizard.setPosition(51, 19)
Witch.setPosition(77, 18)
controller.player1.moveSprite(Wizard, 100, 100)
scene.setBackgroundImage(img`
    9699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999969999999999999999999999999999999999999999999999999999999999999999999999699999999999996999999999996999999999999999999999969999999999999999999999999
    9999699999999999999999999999999999999999999999996999999999999999999999999996999999999999999999999666999999999999999999999996999999999969999999999969996999999999
    9999999999999999999999999999999999999999999999999999999999999699999999999999999999999999999999999699996999999999999999999999999999999999999999999999999999999996
    9999999696999699999666999999999696999999999699999999999999999999999666999999999666999999999696999999999669999999999999999999999666999999999966999999999666999999
    9999999666999999999999999999999999999999996669999999999669999999999966999999999966999999999669999999999999999999999996999999999999999999999966999999999996999999
    9969999669999999999666999969999669999999999999999999999999999999999999999999999999999999999666999999999666999999999666999999999696999999999996999999999966999999
    9999999999996999969999999999999999999699999999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999994449999999999999999699999999999999999999999999996999999999999999999999999999
    9999999996999999999999999999999999999999999999999999999999999999999999999999999999964999999999999999999999999999999999999999999999999999999999999999999999999999
    6699966999999999969999966999696969666994496999666999999999666999666999669999999999964999669999966999669999996999666999669499699999699999669999669999996999966999
    9999699699699999999996999499999999999999949999999999999999966999669699696999666999699999999999999999999999666999669999966999999999666999996999669999699999696999
    99996669996646499669999999999999996669999499999999999999999969699999996699996669999669996699996ffffffffff9966999666999666999696999999999969999666999666999964999
    999999999999944999999999999999999999996999449999999999999999999999994999999999999999999999999fffaaaaaaaaff999969999949999999999499999999999999999999999999994449
    9999699999999999999999999999999999994999999999996999999999699999999999999996999999999999999fffaaaaaaaaaaaff99999999969999999699999999994999999999999999949969996
    9666999669999999999666999696996666999696999666999996999669996666964696999666999966999666999faaaaaaaaaaaaaaff9966699666999666999996999999999696999999969966999669
    96969996699496669ffffffffffffff96666966696999699999699966999966699949699996699996999999999ffaaaaaaaaaaaaaaaf9999999666999666699996969996996666964996999699999666
    96669996669966669faaaaaaaaaaaaf66699966699969999999699966699969999949999669699996699966699faaaaaaafffffaaaaf99999ffff999999699999999999699996699ffff999966999666
    69696669696669696faaaaaaaaaaaaff9999996966699966999964699966699666696996699699999966669966faaaaaaff966ffffff9999faaaff66999999999999969966699966faafff6996669699
    66996969966669999faaaaaaaaaaaaaf9996699966696999969944449966699966669966996999996969699966faaaaaaafff6696ff66969faaaaf99999966699966699669696999faaaaf6999666996
    69996669996669696faaaaafffffaaaff966696969699999999666999966696966699966699999999966696999faaaaaaaaaffffff666969faaaaf66699966669966699969699969faaaaf6696666999
    66669966469966696faaaaf9666faaaaf699666699666999999999666699669999666999666999966669666669faaaaaaaaaaaaaaffff666faaaaf99666699999999999699966699faaaaf6666996669
    66666994969666699faaaaf69996faaaf969666699699669999966666699696999664449696699669999669699faaaaaaaaaaaaaaaa4f999faaaaf69666999969699666999966669faaaaf6966696696
    66669666669696669faaaaf96696faaaf699999969994699699999669696996699666649996699696996696999ffaaaaaaaaaaaaaaaaff66faaaaffffffffffffff996969ffffffff6aaaf6669696996
    94699996696666499faaaaf696fffaaaf69969999966696666669699666699996699644999fffffff6666666966ffffaaaaaaaaaaaaaaff6faaaaaaaffaaaaaaafff96ffffaaaaaaf6aaaf9696699966
    66666699664696666faaaafffffaaaaff666699999966696ffffffff69699ffffffff699ffffaaaafff66666969999ffffffaaaaaaaaaaf9faaaaaaafaaaaaaaaaaf9faaaaaaaaaafaaaaffffffff666
    96466996666996966faaaaaaaaaaaaaf66ffff994966666faaaaaaaff6669faaaaaafff6faaaaaaaaaff666966999996669ffffaaaaaaafffaaaaaaffaaaaaaaaaaf6faaaaaaaaaafaaaaaaaaaaaff66
    64699696666466666faaaaaaaaaaaaff96faafffffffff6faaaaaaaaaff6ffaaaaaaaaf9faaaaaaaaaaf699469999999669666fffaaaaaaffaaaafffaaaafffaaaaf6faaaaaaaaaafaaaaaaaaaaaff96
    66666966666666666faaaaaaaaaafff666faaffaaaaaaf9faaaaaaaaaaf6faaaaaaaaafffaaaafffaaff66466469999999699999ffaaaaaffaaaaf4faaaafffaaaaf9faaaaaffffffaaaaafffffff666
    66666966666666666faaaffffffff66966faaaaaaaaaaffaaaafffaaaafffaaaafaaaafffaaaaffffff4996696666666669999966faaaaaffaaaaf4faaaafffaaaff9faaaaff6496faaaaaf466666666
    96996969666666666faaaf644666466969faaaaaaaaaaffaaafffffaaaaffaaaaffffff6faaaaaaaaaff666666996666646699946faaaaaffaaaaf6faaaaffaaaaafffaaaaff6649faaaaff669666666
    66666669666466666faaaf644469666994faaaaaaffff6faaaaaaaaaaafffaaaaaaaaafffaaaaaaaaaaf66666666666666666666ffaaaaaffaaaaffffaaaaaaaaaaaffaaaaf69966faaaaf6666966966
    66666666946466966faaaf664666666994faaaafff6966faaaaaaaaaaff6faaaaaaaaaafffaaaaaaaaaf6666669ffffff96966fffaaaaaaffaaaaaf6faaaaaaaaaaaafaaaaf69669faaaaf6966666466
    66666666696466666faaaf666666666666faaaf6666664faaaaaaaafff66fffaaaaaaaaf96ffffffaaaff96666faaaaafffffffaaaaaaaaffaaaaaf9ffaaaaaaaaaaafaaaaf66666faaaaf6666696666
    66666966699666666faaaf666666666666faaaf4666666faaaffffffffff666fffffaaaf9699666faaaaf46666faaaaaaaaaaaaaaaaaaaaffaaaaaf66ffaaaaafaaaaffaaaf66669faaaaf9464666666
    66666966696644446faaaf644666696669faaaf6464666faaaafffffaaafffffffffaaaf6ffffffaaaaff66666faaaaaaaaaaaaaaaaaaafffffaaaf664faaaffffaaaffffff96666faaaaf9966666666
    66666664666664664faaaf444646466666faaaf6466444ffaaaaaaaaaaaffaaafaaaaaaf6ffaaaaaaaaf6666666fffaaaaaaaaaaaaaaaff66fffaaf666ffffff66ffff6646646696ffaaaf6696666666
    64666666666646666faaaf644696466446faaaf64666666ffaaaaaaaaff4faaaaaaaaaaf4faaaaaaaaaf666666464ffaaaaaaaaaaaafff66666ffff66666666666666666443469966ffff66666666666
    66664666666646666fffff644666466664faaaf446666664ffffaaaaaf66ffaaaaaaaaf96faaaaaaaff666646664664fffffffffffff6666666466666666696666666666666666666644666666666666
    6466646466664666666666644666469669faaaf666646666466fffffff694ffffaaafff66fffffffff666966466466466666666664666496666646466666646666949666666666666494669446666666
    6666666446664666466646666646466666ffff46666666664646666466644466fffff6666666664446666666466666466666666664466466666666666666666466666666646466664464444666666666
    66666664666666666666666666694666444666466664466646666666669944646666664466464696646666664446664464466666446669666666446666666966666f6666666666666666644666666664
    66666494666664666664666666666664666666666664466649966666666666666696666466666464946666664466466666466666644466666646644666646666666f6966666696936666664646666964
    66664664666666666666664666664444646646666644446664446666666466666666646666646664466446664666666666666666646646466644446664966666666f6666666646666446666666666664
    666666644466666469464466666444666664666666644644444464666666664666444666666666646666664666666966646646664666666646666446f6666696666f6644666964666666646466646669
    6444ff646466644464446466664444666664644666666666644464466444446466664444999964666466644446664496644466466666666446666696ff44666666ff6644644464466444666446666444
    64944f666466644464444664646446666644644466646666666464646646646466664666646466664666644666464446446646664666644446666666ff46666666ff4446466646696664664666966646
    64446f6664666444644466466444466666444464466446466f6466666666644466644446644446463646644466464666444466666444664666644646ff446666fffff449664644666444666646666444
    66466f4664664346644464646666664664444664666446666f6644466444666666366646644466666666446666664466466666446666446446464666ff466696fffff666644444666664664666466466
    66446ff6f6466646664466446666666666464666666646964f6664666644666646666666666664646666446646666666666666646666466664666666fff666666fffff66666666666666666664646646
    66666ff6f6664464664646446644666666446466444646666f66664646444446664446666666666f6646666666644466443444646463464666666464fff6646f4ffffff646664f664666666666666646
    6666fff6f6666464464666666666664646646666344446664ff6664666666464664664666664444f6466646666466664696664446664466666666664ffff666f6fff6fff66366f666464666646664666
    4666ffffff44666444666666666464664444466644446664fff6444444444666444444444663644f6646466644466644496444464444466344444644fff6f9f66ffffffff3464f444466443666444646
    4646ffffff46466644646644446664466444464644464644ffff464444444666446466464636444f6644464644466664f66644666644444444446646ffff6ff44ffff46ffff64f644964444664446666
    4444ffff4ff4464464466644444646444444444644464444ffff444666446664444646644346444ff444466644466644f4664444664466644466664ffff6fff66fffff64f4ffff444666464666444466
    4464f6ff66ff446644664444466646664444664666464666ffff466666444646466666664666666ff463666446646666f446664444664666666446f4ffffffffffffffff6ffffffff466446646666666
    6446f4ff644fff664466666446644446644646466664666f4fff44646446444444446446666666fff6464466464466fff6666666664444646466ff44fff4fffffffffff6f64ffff64666664664666646
    6444f6f4f366ff444464444464644666644644446634446f4ff4f44444664444646444664444f4fff46664444646446ff444636464664444646f4466ffff66ff4fffffff6f64fffff644663444666444
    6444f6f4f4fffff446f444664444644444666444666464f46ff4ff6434666444664444466444ff6f4f6464444444444ff4446344444664446ff44446ffff4ff44fffffffff64fff4ffff433464664644
    3444ffffff66fff466f444666444666444646444446444f66ffffff444ff6444666644644444ff6ffff444344644443ff44466644446644444644466ffff4f4fffffff6ffff4fff46444366444664466
    4663fffff4f44ff444f66444464444444444444444444f444ff4fff444ff4464444664444666f44ff4f44444444644fff464444664444664444666fffffff66fffffff4fff4ffff44464444664444664
    4644fffff4f44fff44f44444444444464344ff444446f4444ff444ff44fff66444464444466ff6fff4f44444634444fff444346444444444446644f6ffff464fffffff4fff44ffff4444444646644464
    446f4ffffff444f4fff44444446444446444ff64464f6466fff4444464fff64444446444464ff4fff4ff444436464ffff664444664444464634464ffffff644fffffffff4ff6ffff6664446664444664
    444f4ffff44ff44ffff44444444444444444ff344466464ffff4444444fff4444444443443f6f4ffffff44446444f4ffff44464444444644444444fffffffff446fffffffff4ffffff44444444444646
    34f44ffff44ffff44ff4446644444444434fff444444444ffff3444444fff444646444444444f4fffffff3664444ff4ffff44444444444446666666ffffffff664fffffff44fffffff44444444444444
    4444fffff444fff44ff4446443444444446fff434444446fffff44444ffff44444444644444f46ffff4ff644444f3f4fffff444644444446364444ff4fffff464ffffffffff4ffffff64444444446664
    4444ffffff664ff444f4444443444444664fff44464444ffffff44444ffff44444444444444f64ffffffff4444f4f44fff4ff4644446336464446ff44ffffffff4fffff4fff3fffffff4464644444333
    4444f4fff6f444fffff4464444444443344ffff4446634fffffff3444ffff4444444444444ff4ffffffffff444f4f46fff4ff334446444446444fff4ffffffff4f4ffffff4ffffffff4f644444444434
    4444f4fff44f444f4fff444444444444444fff4f444444ffffffff44ffffff443444444444f44fffffffffff44ff444fff44fff444444436444f4ff4f4ffffffff4ff4ff4f4ffffffff4f44444444464
    4444f4fff344ff44fffff4444444444434ff4f4f444444f4ffff4ff4ffff4f444444444444f4fffffffffffffff444f4ff4444ff4344446444fff4ffffffff4fff4fff3ff4f3ffffffff3f4644344444
    4444f4fff44444f44fff4f444344444464ffff43f4444f44ffff4f4f4fff4ff33444444444ff4ffffff6fff44ff644ffff44444f444444444f3f4fffffffffffff4ff444fffffffffff4f4f444446444
    4444f4fff44444334ff3ff43434444444ffffff44ffff444ffff44ffffff4fff434455555ff54ffffffff4f4fff344fffff44434f4444444fff4f4f4ffffffffffffff43ffffffffffff4f4f44444444
    4434ff4fff3464444ffffff4444433444ff4fff444ff44ffffff44f4f4ff44fff5555555f5f5ff5ffffff44ff44ff4f4ffff44443f4444443344fff44ffffffff4ffff444f4ffffff4ff4444f4444444
    4444ff4ffff444444fff3f4f44444444f4ffffff44f4434ffffff4fff4fff5f5ff5555ff5f55ff55fffffffff44ff4fffff4f4444f444444446ffff4ffffffff4f4ff4f644ffffffff4ff44434434444
    444fffffff4f44444ffff3fff4444444fff4ffff433443ff4ffffffff5ff5f1f5f5555f5f55fff5ffffffff5fff4fffffff44f4443f4444444fff4f4ffffffffffffff4f44fff4fffff4ff4444444344
    434fffffff44f4444ffffff4ff444444ff4fffff444444f44ff4ffff55ff11f5ffff5555f55ff555f5ffffffff5f4f44ffff4f444444444443f444ffffffffff4fffffff3fffffffffff4ff434444444
    34ff3f4ffff43ffff4fffff44ff44344f43ffffff344fff33ff4ffff55ff55f5555555ff55ff55ffffff5ffff5fff4f4fffff3f444444434444444fffff4fffffffffffff4fff4ffffffffff34433443
    34f43f3fff3f4344f3ffffff34443644443fffffff44fff4fffffff5f5fff55f511555555fff55ff5fff55ffffff5fffffffff4f4433444444444fffffff4fff4f4fffffffffffffff4ff3f4ff433434
    4444fff4ff44f444ffff4f3ff4444444444ffffffff43ff4fff555fff5ffff51f55555555ff555ffffffff5f1fff5553fffffff4f43444343444ffff3f4ffffff4fffffff4fffffffff4fff344f44444
    33c4f4f4ff344f4fffff44f4ff444444444fffffff4ff4f3fff5555ff5fff1ff5f5555555ff55ff5fffffffff5ffff55fff4f3ff3f443344444ff3f44f4ffffff4ffffff4fffffffffffffff344f4444
    343f44f4ff4434ff3fffc44ff3f4343444f4ffff4ff3fff4fff5ff55fffff555f5f555555f55ffff5ffffffffff1ff5ffff44f4ff4ff44444ff44444fff44fffffffffffffffffffff4f4fffffffff34
    33f44f44fff444f4f4ff34443ff444434f44ffff34ff4ff55ff5fff55fffffffff5f55555f5ffffffffff5fff5ff11fffff343ff3ff44444ff444443fffffffffffffff344ffff4fff34f4fffffff444
    4f33cf4ffff44f4f43ff43f344444444ff3ffffff43fff5fffffffff5ffff55555ffff55ff5ffffffffffffffffff55ffffff443f33444ff3444434ffff44fffff4fff3f4ffffffffffffffffff44c44
    443ffff4fff4434f44ff444f4444444ff44fffffff3ffffffff5fffffffff55f555555ff5ffffff5ffffff55f55fff5fffffff444ff4444443cfffff434f4ffff4fffffffffffffffff43ffffffff344
    c34fff4ffff443f333fff4f4f44444f4f4ffffffffffffffffff5f5fffffffff555555f55ff5fff5fffffffff5fffff5fffffffc444fc3434ff4ff4c4f4ffffff44f4f44ffff4fffffffff33f3fff443
    3cc3433f4ff34f333fff4ff43f44444fff3fffffffff55f5ffff5555f5fffff5f5555555555f5f55fffffffffff55f5fffffffff3434f444444ff44434ffffff4c4ffffffffffffffffffffc4fffff44
    4333333f4ffff3f3f33ff3fff433444443ffffff3ff555f5fff5ff5f5ffffff55f55555555f5f55fffffff5f5f5555fffffffffff3443344c4ff34cfffff4ffff44ffffff3fffffffffffffff34f4cf3
    c3c444f44fffff3f4fffffff4f44444fffffffff44555ffffff5fffffffffffff5f555555fff55fffffffff5ff5fffffffff5fffffff44434ff3443ffffffffffffffffffff4fcffff4cffffffff3333
    fff33ffc4fff3ff3fffff3cffff444444f4fffff31155ff5ffff5ffffffffff5fff555555f555ffff55fffff55ff5f55fffffffcffffc4c4334334fff3f4fffff4ffff44ff3f4ff3fffc33fffffcf444
    ffffff44ffff3ffff3fffff44ff44433f3ffffff515ff55ffffff5f5ffffff5f5f5f5555f55fffff555ffff5f55f55ff5fff5fffcffff333343cffff3fff3ffff3cffffcf3ffff4ffff34444ffff4444
    ffffffc4ffff43fffffff33ffcfff3cf4fcffff4155ff5ffffff5fff5ffffff5fff5f555f5f5ff55555ffff55f5f55f55ffff55c4f3f3ffffffffff3f33cffffffffffffffff43fffff4444444fff444
    ffffffff4fff43fff3fff3fffffff33ff3fffffff555fff5ffff5555ffffff5f55ffff5f5555f555155fffff55ffff555fffff5ccff34333c4fff3333ff3fffff3ffffffffffff3cfffff44444434c43
    ffffffffffff433ffcfffcffffff3ffccffffffff5f5ff55ffff555555fffffff5555555555f555515fffff5f55f55555fff5f55ccf3cc443ff44433ffcf3ffff3ffffffffccccfffffffff43443c4c3
    fffffffffffffccf3cfffc43c4ffffffcffcff5ff5fffff5ffff555555ffff555f55555555f5555115ffffff5ff5f5555fff55f51cc344333c34443f3fff3ffffcffff43c3c3c33cffff444fffffcccc
    fffffffffffffffcccfff3c3cc33ffc4ffccfff5fffff55ffffff55555fffff555f55555555555555ffffff5fffff5555fff555ffffffffcc43cccccffff3ffffcffff44ccccccccffff4443c3cccc3c
    fffffffffffffffff4fffcccccc333fff4ccfffff5f5fffffffff51555ffffff555ff55555555555fffffffff55ff5555fff55551c4cc33cc4c33cccfffc3ffffcffffcc33cc3cccfffff333cccccc3c
    fffffffffffffffffffffc4ccc3333c444ccffff55f5f5fffffff51155ffffffff55511111111155ffffffffff555fffffff55151cc3cc4cc34cccccf3cccffffcffff3cc3cccc3ffffcf333cc4ccccc
    fffffffffffffffffffffcccccc333ccccccffff55ff5ffffffff55fffffffff5fffffffffffffffffffffffff5555555fff55551c3c4c4ccccccc3ccc344ffffcffffcccccccccffffffcccc4cffffc
    ffffffffffffffffffffffffffffc3ccccccffff55f5f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff51ccccccccc3cc3ccccc4ffffffffffccccccccfcffffffffffffffff
    ffffffffffffffffffffffffffffffffffff5fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff51cccccccccccc4c3ccc4fffffffffccfffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffccffc3cc3cc3ccccccffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcccccccfffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
controller.player2.moveSprite(Witch, 100, 100)
forever(function () {
    if (level == 0) {
        if (controller.player1.isPressed(ControllerButton.A)) {
            level = 1
            tiles.setTilemap(tilemap`level2`)
            tiles.placeOnTile(Wizard, tiles.getTileLocation(1, 6))
            tiles.placeOnTile(Witch, tiles.getTileLocation(8, 1))
        }
    }
})
forever(function () {
    Character_Direction()
})
forever(function () {
    Character_Direction_2()
})
