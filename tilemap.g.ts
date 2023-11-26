// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000090a0c0d0b0e0f111012090a0c0d0b0e060303020303030303030303030303040503030203030303030303030303040505030302030303030303030303040505050603020303030303030303040505050505010101010101010101010505050505050101010101010101010105050505050501010101010101010101050505050505010101010101010101010505050505050101010101010101010105050505050501010101010101010101050505050505010101010101010101010505050505050101010101010101010105050505050803030303030303030303070707050803030303030303030303030303030701010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd4,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd8,sprites.builtin.crowd7,sprites.builtin.crowd9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "RaceLine":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
