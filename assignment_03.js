const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);
    const points = [];
    for (let i = 0; i < 100; i++) {
        point = {
            x: Math.random() * width,
            y: Math.random() * height,
        };

        points.push(point);
    }
    return { width, height, points };
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
        r.DrawCircleV(point, 5, r.WHITE);
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
