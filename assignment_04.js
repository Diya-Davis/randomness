const r = require("raylib");

function setup(windowWidth, windowHeight, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(fps);
    const points = [];
    const x = 200;
    const y = 150;
    const width = 300;
    const height = 200;
    const x1 = x + width;
    const y1 = height + y;

    const rec = { x, y, width, height };
    for (let i = 0; i < 100; i++) {
        point = {
            x: Math.random() * (x1 - x) + x,
            y: Math.random() * (y1 - y) + y,
        };

        points.push(point);
    }
    return { windowWidth, windowHeight, points, rec };
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
