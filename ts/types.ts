type Racket = {
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
} 

type Ball = {
    x: number,
    y: number,
    vX: number,
    vXmod: number,
    vY: number,
    width: number,
    height: number,
    color: string
}

type Config = {
    vYmax: number,
    vYmod: number
}

export { Racket, Ball, Config }