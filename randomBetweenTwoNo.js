const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);

    let x1 = 300;
    let x2 = 500;
    const point = getPoint(x2, x1);

    return { width, height, point };
}

function getPoint(x2, x1) {
    const point = [];
    for (let i = 0; i < 100; i++) {
        point.push(Math.random() * (x2 - x1) + x1);
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
    world = setup(600, 400, 60, "number from x1 to x2");
    loop(world);
    teardown();
}

main();
