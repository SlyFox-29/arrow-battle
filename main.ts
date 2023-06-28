mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`2`)
    if (arrow.image.equals(assets.image`2`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`3`)
    if (arrow.image.equals(assets.image`3`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`1`)
    if (arrow.image.equals(assets.image`1`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setImage(assets.image`0`)
    if (arrow.image.equals(assets.image`0`)) {
        mp.changePlayerStateBy(player2, MultiplayerState.score, 1)
    }
})
let arrow: Sprite = null
let arrow_list: Image[] = []
scene.setBackgroundImage(assets.image`2pbg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(40, 90)
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(120, 90)
})
bundles.wrap3(function () {
    arrow_list = [
    assets.image`0`,
    assets.image`1`,
    assets.image`2`,
    assets.image`3`
    ]
    arrow = sprites.create(img`
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
        `, SpriteKind.Player)
    arrow.setPosition(80, 30)
})
bundles.wrap4(function () {
    game.splash("Be the quickest to match", "arrow directions to win!")
    carnival.startCountdownGame(30, carnival.WinTypes.Multi)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Noise,
    171,
    1,
    255,
    0,
    1000,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.UntilDone)
    music.play(music.createSong(hex`0078000408020700001c00010a006400f401640000040000000000000000000000000005000004400000000400030c0f1208000c00030c0f1210001400030c0f1218001c00030c0f1220002400030c0f1228002c00030c0f1230003400030c0f1238003c00030c0f1202001c000c960064006d019001000478002c010000640032000000000a0600050c0000000400012520002400012504001c00100500640000041e000004000000000000000000000000000a040004240004000800012914001800012a18001c0001222400280001222c003000012934003800012205001c000f0a006400f4010a0000040000000000000000000000000000000002180008000c0001290c001000012418001c00012420002400012906001c00010a006400f401640000040000000000000000000000000000000002110038003c000322292c3c004000042225292c07001c00020a006400f4016400000400000000000000000000000000000000030c0014001800012938003c00012508001c000e050046006603320000040a002d0000006400140001320002010002420000000400012208000c0001250c001000012a10001400012214001800011e1c002000012920002400012224002800012a28002c000122300034000125340038000129`), music.PlaybackMode.LoopingInBackground)
})
game.onUpdateInterval(500, function () {
    arrow.setImage(arrow_list._pickRandom())
})
