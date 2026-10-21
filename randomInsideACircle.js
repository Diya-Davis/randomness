const r = require("raylib");

function setup(windowWidth, windowHeight, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, title);
    r.SetTargetFPS(fps);
    const points = [];
    const ra = 400;
    for (let i = 0; i < 500; i++) {
        radius = ra * Math.random();
        radian = Math.random() * (Math.PI / 2);

        point = {
            x: Math.cos(radian) * radius,
            y: Math.sin(radian) * radius,
        };

        points.push(point);
    }
    return { windowWidth, windowHeight, points };
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
        r.DrawCircleV(point, 5, { r: 253, g: 249, b: 0, a: 100 });
    }

    r.DrawCircleLines(0, 0, 400, r.WHITE);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function main() {
    world = setup(600, 400, 60, "points inside a circle");
    loop(world);
    teardown();
}

main();
