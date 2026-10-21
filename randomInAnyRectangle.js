const r = require("raylib");

function setup(windowWidth, windowHeight, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(fps);

    const x = 200;
    const y = 150;
    const width = 300;
    const height = 200;

    const start = { x, y };
    const end = { x: x + width, y: y + height };

    const rec = { x, y, width, height };

    const points = getPoints(start, end);

    return { windowWidth, windowHeight, points, rec };
}

function getPoints(start, end) {
    const points = [];
    for (let i = 0; i < 100; i++) {
        const point = {
            x: Math.random() * (end.x - start.x) + start.x,
            y: Math.random() * (end.y - start.y) + start.y,
        };

        points.push(point);
    }
    return points;
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    for (const point of world.points) {
        r.DrawCircleV(point, 5, { r: 255, g: 255, b: 255, a: 100 });
    }

    r.DrawRectangleLinesEx(world.rec, 2, r.WHITE);

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
