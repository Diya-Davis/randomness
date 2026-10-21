const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);
    const point = getPoint(width);

    return { width, height, point };
}

function getPoint(width) {
    const point = [];

    for (let i = 0; i < 100; i++) {
        point.push(Math.random() * width);
    }
    return point;
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    for (const x of world.point) {
        r.DrawLineEx({ x, y: 0 }, { x, y: world.height }, 2, r.WHITE);
    }
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function main() {
    world = setup(700, 400, 60, "number from 1 to x");
    loop(world);
    teardown();
}

main();
