const HEAD = (
    <div key={'Head'} style={{
        width: '50px',
        height: '50px',
        borderRadius: '100px',
        border: '10px solid black',
        position: 'absolute',
        top: '50px',
        right: '-30px'
    }}
    />
)
const BODY = (
    <div key={'Body'} style={{
        width: '10px',
        height: '100px',
        background: 'black',
        position: 'absolute',
        top: '120px',
        right: '0px'
    }}
    />
)
const RIGHT_ARM = (
    <div key={'Right_arm'} style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }}
    />
)
const LEFT_ARM = (
    <div key={'Left_arm'} style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        right: '10px',
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }}
    />
)
const RIGHT_LEG = (
    <div key={'Right_leg'} style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: '-90px',
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }}
    />
)

const LEFT_LEG = (
    <div key={'Left_leg'} style={{
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: '0px',
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}


export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ height: '50px', width: '10px', background: 'black', position: 'absolute', top: '0', right: '0' }} />
            <div style={{ height: '10px', width: '200px', background: 'black', marginLeft: '120px' }} />
            <div style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px' }} />
            <div style={{ height: '10px', width: '250px', background: 'black' }} />
        </div>
    )
}