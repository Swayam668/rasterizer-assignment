export function ddaLine(x0, y0, x1, y1, setPixel) {
    let dx = x1 - x0;
    let dy = y1 - y0;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xInc = dx / steps;
    let yInc = dy / steps;

    let x = x0;
    let y = y0;

    for (let i = 0; i <= steps; i++) {
        setPixel(Math.round(x), Math.round(y));
        x += xInc;
        y += yInc;
    }
}
